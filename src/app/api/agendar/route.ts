import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, contato, perguntas, data, msg } = body ?? {};

    if (!nome || typeof nome !== "string" || !nome.trim()) {
      return Response.json({ error: "Nome é obrigatório." }, { status: 400 });
    }
    if (!contato || typeof contato !== "string" || !contato.trim()) {
      return Response.json(
        { error: "Informe um e-mail ou WhatsApp para contato." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destino = process.env.CONTACT_EMAIL;

    if (!apiKey || !destino) {
      console.error(
        "RESEND_API_KEY ou CONTACT_EMAIL não configurados nas variáveis de ambiente."
      );
      return Response.json(
        { error: "Envio de e-mail não configurado no servidor." },
        { status: 500 }
      );
    }

    const linhas = [
      `Nome: ${nome}`,
      `Contato: ${contato}`,
      `Perguntas: ${perguntas || "não informado"}`,
      `Data preferida: ${data || "não informada"}`,
      "",
      "Mensagem:",
      msg && String(msg).trim() ? String(msg) : "(nenhuma mensagem adicional)",
    ].join("\n");

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // "onboarding@resend.dev" funciona sem precisar verificar domínio próprio.
        // Quando tiver um domínio verificado no Resend, troque por algo como
        // "Arcano da Lua <agendamentos@seudominio.com>".
        from: "Arcano da Lua <onboarding@resend.dev>",
        to: destino,
        subject: `Novo pedido de leitura — ${nome}`,
        text: linhas,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Erro ao enviar via Resend:", errText);
      return Response.json(
        { error: "Não foi possível enviar o pedido. Tente novamente." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Erro na rota /api/agendar:", err);
    return Response.json({ error: "Erro interno." }, { status: 500 });
  }
}