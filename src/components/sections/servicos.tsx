import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicos = [
  {
    num: "I",
    titulo: "Panorama Geral",
    descricao:
      "Uma leitura ampla sobre o momento atual: o que está em movimento e para onde as coisas tendem.",
    preco: "45 min · R$ 90",
  },
  {
    num: "II",
    titulo: "Amor & Vínculos",
    descricao:
      "Foco em relações — românticas, familiares ou de amizade — e nos padrões que se repetem nelas.",
    preco: "45 min · R$ 90",
  },
  {
    num: "III",
    titulo: "Carreira & Caminho",
    descricao:
      'Para decisões profissionais, mudanças de direção ou aquele "e agora?" no trabalho.',
    preco: "45 min · R$ 90",
  },
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
            Escolha o tipo de consulta
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.7] text-parchment-light/70">
            Todas as sessões incluem um resumo por escrito enviado após o encontro.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {servicos.map((s) => (
            <Card key={s.num} className="hover:-translate-y-1 hover:border-gold">
              <CardHeader>
                <span className="font-caps mb-2 block text-[0.75rem] tracking-[0.15em] text-gold">
                  {s.num}
                </span>
                <CardTitle>{s.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5 min-h-[70px] text-[0.94rem] leading-[1.6] text-parchment-light/65">
                  {s.descricao}
                </p>
                <span className="font-caps text-[1rem] tracking-[0.05em] text-gold-soft">
                  {s.preco}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
