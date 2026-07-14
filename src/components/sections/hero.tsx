import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-36 pb-20">
      <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-[70px]">
        <div className="text-center md:text-left">
          <span className="font-caps mb-4 block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Leituras de tarot ao vivo
          </span>
          <h1 className="font-display mb-6 text-[2.6rem] leading-[1.05] text-parchment-light md:text-[4.2rem]">
            Uma pausa para <em className="text-gold-soft not-italic italic">ouvir</em>
            <br />o que já se sabe.
          </h1>
          <p className="mx-auto mb-9 max-w-[440px] text-[1.05rem] leading-[1.7] text-parchment-light/75 md:mx-0">
            Sessões de tarot para clareza em amor, trabalho e nas encruzilhadas da
            vida — pessoalmente ou por chamada de vídeo, num espaço sem julgamento.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <a href="#contato">Marcar consulta</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicos">Ver leituras</a>
            </Button>
          </div>
        </div>

        <div className="order-first flex justify-center [perspective:1400px] md:order-last">
          <div className="group relative h-[440px] w-[280px] -rotate-4 rounded-[10px] border-[1.5px] border-gold bg-[linear-gradient(160deg,#21213a,#14141f_70%)] shadow-[0_30px_70px_rgba(0,0,0,0.55),0_0_0_6px_rgba(201,162,39,0.06)] transition-transform duration-500 hover:translate-y-[-6px] hover:rotate-0">
            <span className="absolute top-3.5 left-3.5 h-5 w-5 border-t-[1.5px] border-l-[1.5px] border-gold/70" />
            <span className="absolute bottom-3.5 right-3.5 h-5 w-5 border-b-[1.5px] border-r-[1.5px] border-gold/70" />
            <div className="absolute inset-[26px] flex flex-col items-center justify-between border border-gold/40 px-3.5 py-6.5 text-center">
              <span className="font-caps text-[0.75rem] tracking-[0.2em] text-gold-soft">
                Carta&nbsp;I
              </span>
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="#E0C468"
                strokeWidth={1.2}
                className="h-[74px] w-[74px]"
              >
                <circle cx="50" cy="38" r="16" />
                <path d="M50 54 L50 82 M38 66 L62 66 M50 22 L50 6 M32 20 L38 26 M68 20 L62 26" />
              </svg>
              <span className="font-display text-2xl text-parchment-light italic">
                A Guia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
