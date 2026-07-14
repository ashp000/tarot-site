export function Sobre() {
  return (
    <section id="sobre" className="relative z-10 bg-ink-deep py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-14 px-7 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative aspect-3/4 overflow-hidden rounded-md border border-line bg-[linear-gradient(160deg,rgba(201,162,39,0.14),transparent_60%),linear-gradient(200deg,#2a2a45,#161622)]">
          <span className="absolute inset-0 flex items-center justify-center text-5xl text-gold/30">
            ✦
          </span>
        </div>
        <div>
          <span className="font-caps block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Sobre a leitora
          </span>
          <h2 className="font-display my-3.5 text-[2.2rem] text-parchment-light">
            Helena Duarte
          </h2>
          <p className="mb-4.5 text-[1.05rem] leading-[1.85] text-parchment-light/78">
            Leio tarot há mais de dez anos, unindo a simbologia clássica do
            baralho Rider-Waite a uma escuta atenta e sem pressa. Cada sessão é
            conduzida como uma conversa — as cartas abrem o caminho, mas quem
            decide o que fazer com ele é sempre você.
          </p>
          <p className="mb-4.5 text-[1.05rem] leading-[1.85] text-parchment-light/78">
            Atendo tanto quem já conhece o tarot quanto quem nunca tirou uma
            carta na vida. Não há necessidade de saber &ldquo;como
            funciona&rdquo;: eu explico tudo durante a leitura.
          </p>
          <p className="font-display mt-5 text-2xl text-gold-soft italic">
            — até logo, nas cartas.
          </p>
        </div>
      </div>
    </section>
  );
}
