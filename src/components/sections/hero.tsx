import { Button } from "@/components/ui/button";
import { TarotCard } from "@/components/sections/tarot-card";

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
          <TarotCard />
        </div>
      </div>
    </section>
  );
}