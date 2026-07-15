"use client";

import { useEffect, useState } from "react";

type CardData = {
  roman: string;
  title: string;
  glyph: React.ReactNode;
};

const CARDS: CardData[] = [
  {
    roman: "Carta I",
    title: "A Guia",
    glyph: (
      <>
        <circle cx="50" cy="38" r="16" />
        <path d="M50 54 L50 82 M38 66 L62 66 M50 22 L50 6 M32 20 L38 26 M68 20 L62 26" />
      </>
    ),
  },
  {
    roman: "Carta II",
    title: "A Lua",
    glyph: (
      <>
        <path d="M58 20a26 26 0 1 0 0 52 32 32 0 0 1 0-52Z" />
        <circle cx="30" cy="70" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="72" cy="24" r="1.2" fill="#E0C468" stroke="none" />
        <circle cx="78" cy="60" r="1" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "Carta III",
    title: "A Estrela",
    glyph: (
      <path d="M50 12 L58 40 L86 40 L63 57 L71 85 L50 68 L29 85 L37 57 L14 40 L42 40 Z" />
    ),
  },
  {
    roman: "Carta IV",
    title: "O Sol",
    glyph: (
      <>
        <circle cx="50" cy="50" r="16" />
        <path d="M50 12v10M50 78v10M12 50h10M78 50h10M22 22l7 7M71 71l7 7M78 22l-7 7M29 71l-7 7" />
      </>
    ),
  },
  {
    roman: "Carta V",
    title: "A Torre",
    glyph: (
      <>
        <path d="M38 84 L42 20 L58 20 L62 84 Z" />
        <path d="M50 8 L58 24 L50 20 L44 30 Z" />
        <path d="M38 50h24M35 68h30" />
      </>
    ),
  },
  {
    roman: "Carta VI",
    title: "O Eremita",
    glyph: (
      <>
        <path d="M50 10 L82 30 L82 68 L50 90 L18 68 L18 30 Z" />
        <circle cx="50" cy="50" r="8" />
      </>
    ),
  },
  {
    roman: "Carta VII",
    title: "A Roda",
    glyph: (
      <>
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="4" />
        <path d="M50 20v14M50 66v14M20 50h14M66 50h14M29 29l10 10M61 61l10 10M71 29l-10 10M39 61l-10 10" />
      </>
    ),
  },
  {
    roman: "Carta VIII",
    title: "O Espelho",
    glyph: (
      <>
        <path d="M28 50a22 22 0 1 1 44 0 22 22 0 0 1-44 0Z" />
        <path d="M20 50h-8M88 50h-8" />
        <circle cx="50" cy="50" r="4" fill="#E0C468" stroke="none" />
      </>
    ),
  },
];

function randomIndex(exclude?: number) {
  if (CARDS.length <= 1) return 0;
  let i = Math.floor(Math.random() * CARDS.length);
  while (i === exclude) i = Math.floor(Math.random() * CARDS.length);
  return i;
}

export function TarotCard() {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    setIndex(randomIndex());
  }, []);

  function handleClick() {
    setFlipping(true);
    setTimeout(() => {
      setIndex((current) => randomIndex(current));
      setFlipping(false);
    }, 220);
  }

  const card = CARDS[index];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Clique para revelar outra carta"
      className="group relative h-[440px] w-[280px] cursor-pointer -rotate-4 rounded-[10px] border-[1.5px] border-gold bg-[linear-gradient(160deg,#21213a,#14141f_70%)] shadow-[0_30px_70px_rgba(0,0,0,0.55),0_0_0_6px_rgba(201,162,39,0.06)] transition-transform duration-500 hover:translate-y-[-6px] hover:rotate-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <span className="absolute top-3.5 left-3.5 h-5 w-5 border-t-[1.5px] border-l-[1.5px] border-gold/70" />
      <span className="absolute bottom-3.5 right-3.5 h-5 w-5 border-b-[1.5px] border-r-[1.5px] border-gold/70" />
      <div
        className={`absolute inset-[26px] flex flex-col items-center justify-between border border-gold/40 px-3.5 py-6.5 text-center transition-all duration-200 ${
          flipping ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      >
        <span className="font-caps text-[0.75rem] tracking-[0.2em] text-gold-soft">
          {card.roman}
        </span>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#E0C468"
          strokeWidth={1.2}
          className="h-[74px] w-[74px]"
        >
          {card.glyph}
        </svg>
        <span className="font-display text-2xl text-parchment-light italic">
          {card.title}
        </span>
      </div>
      <span className="pointer-events-none absolute -bottom-12 left-1/2 w-full -translate-x-1/2 text-center text-[0.68rem] tracking-[0.1em] text-parchment-light/40 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        clique para revelar outra
      </span>
    </button>
  );
}