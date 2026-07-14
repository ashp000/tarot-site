const steps = [
  {
    n: "1",
    titulo: "Escolha o horário",
    texto: "Preencha o formulário com o tipo de leitura e a data que funciona para você.",
  },
  {
    n: "2",
    titulo: "Confirmação",
    texto: "Você recebe a confirmação por WhatsApp junto com o link (se for online).",
  },
  {
    n: "3",
    titulo: "A leitura",
    texto: "Sessão conduzida com calma, com espaço para perguntas e um resumo ao final.",
  },
];

export function Processo() {
  return (
    <section id="processo" className="relative z-10 bg-ink-deep py-28">
      <div className="mx-auto max-w-5xl px-7">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="font-caps mb-3.5 block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Como funciona
          </span>
          <h2 className="font-display text-[2.2rem] text-parchment-light md:text-[2.8rem]">
            Da marcação à leitura
          </h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute inset-x-[8%] top-[26px] hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative px-5 text-center">
              <div className="font-display relative z-10 mx-auto mb-6 flex h-13 w-13 items-center justify-center rounded-full border border-gold bg-ink-deep text-xl text-gold-soft italic">
                {s.n}
              </div>
              <h3 className="mb-2.5 text-xl text-parchment-light">{s.titulo}</h3>
              <p className="text-[0.92rem] leading-[1.6] text-parchment-light/65">
                {s.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
