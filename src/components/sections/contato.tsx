"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Status = "idle" | "enviando" | "sucesso" | "erro";

export function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [erroMsg, setErroMsg] = useState("");
  const [perguntas, setPerguntas] = useState("1");
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    function handleSelecionar(e: Event) {
      const custom = e as CustomEvent<string>;
      if (custom.detail) setPerguntas(custom.detail);
    }
    window.addEventListener("mystic:selecionar-perguntas", handleSelecionar);
    return () =>
      window.removeEventListener("mystic:selecionar-perguntas", handleSelecionar);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = new FormData(form);

    setStatus("enviando");
    setErroMsg("");

    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.get("nome"),
          contato: dados.get("contato"),
          perguntas: dados.get("perguntas"),
          data: dados.get("data"),
          msg: dados.get("msg"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("erro");
        setErroMsg(json.error || "Não foi possível enviar. Tente novamente.");
        return;
      }

      setStatus("sucesso");
      form.reset();
      setPerguntas("1");
    } catch {
      setStatus("erro");
      setErroMsg("Falha de conexão. Tente novamente em instantes.");
    }
  }

  return (
    <section id="contato" className="relative z-10 bg-ink-deep py-28">
      <div className="mx-auto grid max-w-5xl gap-16 px-7 md:grid-cols-2">
        <div>
          <span className="font-caps block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Agendar
          </span>
          <h3 className="font-display mt-3.5 text-[1.6rem] text-parchment-light">
            Vamos marcar sua leitura
          </h3>
          <p className="mt-4 mb-6.5 leading-[1.7] text-parchment-light/70">
            Prefere combinar direto? Chama no WhatsApp ou manda mensagem no
            Instagram — respondo por lá também.
          </p>
          <div className="flex flex-col gap-3.5">
            <a href="https://wa.me/5512982153029" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft">
              <WhatsAppIcon className="size-4.5 text-gold" />
              WhatsApp — +55 12 98215-3029
            </a>
            <a href="#" className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft">
              <InstagramIcon className="size-4.5 text-gold" />
              @mysticspell
            </a>
            <a href="#" className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft">
              <Mail className="size-4.5 text-gold" strokeWidth={1.5} />
              vitoria@mysticspell.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contato">Seu e-mail ou WhatsApp</Label>
            <Input
              id="contato"
              name="contato"
              placeholder="para eu poder te responder"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="perguntas">Quantas perguntas</Label>
            <Select name="perguntas" value={perguntas} onValueChange={setPerguntas}>
              <SelectTrigger id="perguntas">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 pergunta — R$ 10</SelectItem>
                <SelectItem value="2">2 perguntas — R$ 18</SelectItem>
                <SelectItem value="3">3 perguntas — R$ 25</SelectItem>
                <SelectItem value="4">4 perguntas — R$ 32</SelectItem>
                <SelectItem value="5">5 perguntas — R$ 45</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="data">Data preferida</Label>
            <Input id="data" name="data" type="date" min={today} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="msg">Mensagem (opcional)</Label>
            <Textarea
              id="msg"
              name="msg"
              placeholder="Conte um pouco do que busca nessa leitura..."
            />
          </div>
          <Button type="submit" className="mt-2 self-start" disabled={status === "enviando"}>
            {status === "enviando" ? "Enviando..." : "Enviar pedido"}
          </Button>
          {status === "sucesso" && (
            <p className="text-sm text-gold-soft">
              Pedido enviado! Você receberá uma resposta em breve.
            </p>
          )}
          {status === "erro" && (
            <p className="text-sm text-wine">{erroMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}