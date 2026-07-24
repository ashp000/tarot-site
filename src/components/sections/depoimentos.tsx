const depoimentos = [
  {
    texto:
      '"Saí da sessão com uma clareza que não tinha há meses. Nada de respostas prontas — só as perguntas certas."',
    autor: "Camila R.",
  },
  {
    texto:
      '"Ela realmente conseguiu me ajudar coisas que eu já estava querendo saber. Recomendo muito!"',
    autor: "Pedro C.",
  },
  {
    texto: '"Nunca tinha tirado uma carta na vida. Ela explicou tudo com muita paciência."',
    autor: "Beatriz A.",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative z-10 py-28">
      <div className="mx-auto max-w-5xl px-7">
        <div className="mb-14 max-w-[600px]">
          <span className="font-caps mb-3.5 block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Relatos
          </span>
          <h2 className="font-display text-[2.2rem] text-parchment-light md:text-[2.8rem]">
            Quem já se sentou às cartas
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <div key={d.autor} className="border-t border-line pt-5">
              <p className="font-display mb-4 text-xl leading-[1.6] text-parchment-light italic">
                {d.texto}
              </p>
              <span className="font-sans text-[0.82rem] tracking-[0.06em] text-gold-soft uppercase">
                {d.autor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
