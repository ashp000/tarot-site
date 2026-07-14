import Link from "next/link";
import { Moon } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Leituras" },
  { href: "#processo", label: "Como funciona" },
  { href: "#depoimentos", label: "Relatos" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-ink-deep/95 to-transparent py-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-7">
        <Link
          href="#"
          className="font-caps flex items-center gap-2 text-sm tracking-[0.12em] text-parchment-light"
        >
          <Moon className="size-4 text-gold" strokeWidth={1.4} />
          Arcano&nbsp;da&nbsp;Lua
        </Link>
        <div className="hidden gap-9 text-[0.8rem] tracking-[0.08em] uppercase md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-parchment-light/75 transition-colors hover:text-gold-soft"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="font-caps rounded-sm border border-gold px-4 py-2 text-[0.72rem] tracking-[0.1em] text-gold-soft uppercase transition-colors hover:bg-gold hover:text-ink-deep"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}
