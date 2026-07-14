import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Servicos } from "@/components/sections/servicos";
import { Processo } from "@/components/sections/processo";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Contato } from "@/components/sections/contato";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Processo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
