import { Card, CardContent, CardHeader } from "@/components/ui/card";

const precos = [
  { num: "I", qtd: "1", label: "pergunta", valor: "R$ 10" },
  { num: "II", qtd: "2", label: "perguntas", valor: "R$ 18" },
  { num: "III", qtd: "3", label: "perguntas", valor: "R$ 25" },
  { num: "IV", qtd: "4", label: "perguntas", valor: "R$ 32" },
  { num: "V", qtd: "5", label: "perguntas", valor: "R$ 45" },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative z-10 py-28">
      <div className="mx-auto max-w-5xl px-7">
        <div className="mb-14 max-w-[600px]">
          <span className="font-caps mb-3.5 block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Leituras
          </span>
          <h2 className="font-display text-[2.2rem] text-parchment-light md:text-[2.8rem]">
            Tabela de valores
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.7] text-parchment-light/70">
            Cada leitura é feita por número de perguntas — escolha quantas
            quiser trazer para a sessão.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {precos.map((p) => (
            <Card
              key={p.num}
              className="flex flex-col items-center text-center hover:-translate-y-1 hover:border-gold"
            >
              <CardHeader className="w-full items-center pb-0">
                <span className="font-caps mb-4 block text-[0.75rem] tracking-[0.15em] text-gold">
                  {p.num}
                </span>
                <span className="font-display text-4xl text-parchment-light">
                  {p.qtd}
                </span>
                <span className="mt-1 text-[0.85rem] tracking-[0.02em] text-parchment-light/60 uppercase">
                  {p.label}
                </span>
              </CardHeader>
              <CardContent className="w-full pt-6">
                <div className="mx-auto mb-4 h-px w-8 bg-gold/40" />
                <span className="font-caps text-[1.15rem] tracking-[0.05em] text-gold-soft">
                  {p.valor}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.85rem] text-parchment-light/50">
          Agende diretamente por WhatsApp ou pelo formulário abaixo.
        </p>
      </div>
    </section>
  );
}