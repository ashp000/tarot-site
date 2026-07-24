"use client";

import { useEffect, useState } from "react";

type CardData = {
  roman: string;
  title: string;
  glyph: React.ReactNode;
};

const CARDS: CardData[] = [
  {
    roman: "I",
    title: "O Cavaleiro",
    glyph: (
      <>
        <path d="M30 88 L30 46 A20 20 0 0 1 70 46 L70 88 L58 88 L58 50 A8 8 0 0 0 42 50 L42 88 Z" />
        <path d="M34 84 L34 52 A16 16 0 0 1 66 52 L66 84" strokeWidth={0.6} opacity={0.45} />
        <path d="M50 26 L50 18 M46 20 L50 12 L54 20" strokeWidth={0.8} opacity={0.7} />
        <path d="M30 78 H24 M70 78 H76" strokeWidth={0.6} opacity={0.4} />
        <circle cx="32" cy="52" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="42" cy="30" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="58" cy="30" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="68" cy="52" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="32" cy="72" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="68" cy="72" r="1.8" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "II",
    title: "O Trevo",
    glyph: (
      <>
        <circle cx="38" cy="38" r="14" />
        <circle cx="62" cy="38" r="14" />
        <circle cx="38" cy="62" r="14" />
        <circle cx="62" cy="62" r="14" />
        <path d="M38 28v20M28 38h20M62 28v20M52 38h20M38 52v20M28 62h20M62 52v20M52 62h20" strokeWidth={0.6} opacity={0.5} />
        <path d="M50 68v22" />
        <path d="M50 78 Q44 82 40 88 M50 78 Q56 82 60 88" strokeWidth={0.6} opacity={0.4} />
        <circle cx="50" cy="50" r="2" fill="#E0C468" stroke="none" />
        <path d="M78 20 L79.5 24 L83.5 25.5 L79.5 27 L78 31 L76.5 27 L72.5 25.5 L76.5 24 Z" strokeWidth={0.9} opacity={0.75} />
        <path d="M20 74 Q26 70 32 74" strokeWidth={0.6} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "III",
    title: "O Navio",
    glyph: (
      <>
        <path d="M18 66 L82 66 L72 84 L28 84 Z" />
        <circle cx="34" cy="75" r="2" />
        <circle cx="50" cy="75" r="2" />
        <circle cx="66" cy="75" r="2" />
        <path d="M50 66 V16 M50 20 L74 34 L50 42 Z" />
        <path d="M50 24 L34 34 L50 40 Z" />
        <path d="M74 18 L86 22 L74 26 Z" />
        <path d="M50 42 L28 60 M50 40 L72 58" strokeWidth={0.6} opacity={0.5} />
        <path d="M18 66 Q50 60 82 66" strokeWidth={0.6} opacity={0.45} />
        <path d="M12 72 Q20 68 28 72 Q36 76 44 72 M56 72 Q64 68 72 72 Q80 76 88 72" strokeWidth={0.8} opacity={0.6} />
        <path d="M8 80 Q14 76 20 80 M80 80 Q86 76 92 80" strokeWidth={0.6} opacity={0.35} />
      </>
    ),
  },
  {
    roman: "IV",
    title: "A Casa",
    glyph: (
      <>
        <path d="M20 88 V50 L50 24 L80 50 V88 Z" />
        <path d="M18 52 L50 26 L82 52" strokeWidth={0.6} opacity={0.5} />
        <path d="M42 88 V64 H58 V88" />
        <circle cx="34" cy="70" r="5" strokeWidth={0.7} opacity={0.6} />
        <path d="M30 70 H38 M34 66 V74" strokeWidth={0.5} opacity={0.5} />
        <path d="M64 50 V34 H72 V44" strokeWidth={0.6} opacity={0.5} />
        <path d="M72 34 Q76 30 74 24" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "V",
    title: "A Árvore",
    glyph: (
      <>
        <circle cx="50" cy="42" r="26" />
        <circle cx="50" cy="42" r="18" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 32 Q46 28 50 34 M56 30 Q62 28 64 34 M38 48 Q44 50 48 46" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 90 V64" />
        <path d="M42 66 Q50 74 58 66" strokeWidth={0.6} opacity={0.5} />
        <path d="M50 88 Q42 84 36 88 M50 88 Q58 84 64 88" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "VI",
    title: "As Nuvens",
    glyph: (
      <>
        <path d="M20 60 Q20 46 34 46 Q36 34 52 36 Q66 30 74 42 Q86 42 84 56 Q86 66 72 66 L28 66 Q16 66 20 60 Z" />
        <path d="M30 56 Q34 50 42 52 M50 48 Q56 44 64 48" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 74 Q44 78 40 84 M56 74 Q60 78 56 84" strokeWidth={0.6} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "VII",
    title: "A Cobra",
    glyph: (
      <>
        <path d="M18 28 Q32 18 42 30 Q52 42 42 52 Q32 62 42 72 Q52 82 68 76" />
        <path d="M14 24 L18 28 L16 34" strokeWidth={0.8} opacity={0.7} />
        <path d="M24 32 L28 28 M30 40 L34 36 M28 50 L32 46 M34 58 L38 54 M40 66 L44 62" strokeWidth={0.5} opacity={0.4} />
        <circle cx="19" cy="27" r="1.2" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "VIII",
    title: "O Caixão",
    glyph: (
      <>
        <path d="M40 16 L60 16 L68 32 L68 84 L32 84 L32 32 Z" />
        <path d="M44 16 L44 26 M56 16 L56 26" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 40 V70 M40 55 H60" strokeWidth={0.6} opacity={0.5} />
        <path d="M36 78 H64 M36 24 H64" strokeWidth={0.5} opacity={0.35} />
      </>
    ),
  },
  {
    roman: "IX",
    title: "O Buquê",
    glyph: (
      <>
        <circle cx="38" cy="30" r="8" />
        <circle cx="54" cy="22" r="8" />
        <circle cx="66" cy="36" r="8" />
        <circle cx="38" cy="30" r="2.5" strokeWidth={0.5} opacity={0.5} />
        <circle cx="54" cy="22" r="2.5" strokeWidth={0.5} opacity={0.5} />
        <circle cx="66" cy="36" r="2.5" strokeWidth={0.5} opacity={0.5} />
        <path d="M38 38 L48 78 M54 30 L48 78 M66 44 L48 78" strokeWidth={0.8} />
        <path d="M42 60 Q36 62 34 68 M56 64 Q62 66 64 72" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 78 Q48 84 56 78" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "X",
    title: "A Foice",
    glyph: (
      <>
        <path d="M72 18 A28 28 0 1 1 40 24" />
        <path d="M70 22 A22 22 0 1 1 44 26" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 24 L18 88" />
        <path d="M22 76 L14 72 M28 62 L20 58" strokeWidth={0.6} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XI",
    title: "O Chicote",
    glyph: (
      <>
        <path d="M18 24 L28 22" />
        <path d="M20 20 L20 28 M24 19 L24 27" strokeWidth={0.5} opacity={0.4} />
        <path d="M28 22 Q52 28 46 46 Q40 64 62 68 Q82 72 78 86" />
        <path d="M76 80 L82 88 M80 78 L86 84" strokeWidth={0.6} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XII",
    title: "Os Pássaros",
    glyph: (
      <>
        <path d="M14 46 Q24 32 34 46 Q24 38 14 46" />
        <path d="M54 30 Q64 16 74 30 Q64 22 54 30" />
        <path d="M40 58 Q48 48 56 58 Q48 52 40 58" strokeWidth={0.7} opacity={0.6} />
        <circle cx="16" cy="44" r="1" fill="#E0C468" stroke="none" />
        <circle cx="56" cy="28" r="1" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "XIII",
    title: "A Criança",
    glyph: (
      <>
        <circle cx="50" cy="26" r="10" />
        <path d="M42 18 Q50 12 58 18" strokeWidth={0.6} opacity={0.5} />
        <circle cx="46" cy="26" r="1" fill="#E0C468" stroke="none" />
        <circle cx="54" cy="26" r="1" fill="#E0C468" stroke="none" />
        <path d="M50 36 V64 M36 50 L50 44 L64 50 M40 86 L50 64 L60 86" />
        <circle cx="24" cy="52" r="6" strokeWidth={0.6} opacity={0.5} />
        <path d="M24 46 V40" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XIV",
    title: "A Raposa",
    glyph: (
      <>
        <path d="M30 70 L30 46 L20 24 L38 34 L50 22 L62 34 L80 24 L70 46 L70 70 Z" />
        <path d="M26 32 L32 38 M74 32 L68 38" strokeWidth={0.5} opacity={0.4} />
        <circle cx="42" cy="52" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="58" cy="52" r="1.8" fill="#E0C468" stroke="none" />
        <path d="M46 62 Q50 66 54 62" strokeWidth={0.6} opacity={0.5} />
        <path d="M36 58 L30 60 M64 58 L70 60" strokeWidth={0.4} opacity={0.35} />
      </>
    ),
  },
  {
    roman: "XV",
    title: "O Urso",
    glyph: (
      <>
        <circle cx="50" cy="52" r="24" />
        <circle cx="30" cy="28" r="8" />
        <circle cx="70" cy="28" r="8" />
        <circle cx="30" cy="28" r="3" strokeWidth={0.5} opacity={0.5} />
        <circle cx="70" cy="28" r="3" strokeWidth={0.5} opacity={0.5} />
        <circle cx="50" cy="58" r="8" strokeWidth={0.6} opacity={0.5} />
        <circle cx="42" cy="46" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="58" cy="46" r="1.6" fill="#E0C468" stroke="none" />
        <path d="M36 38 Q40 34 44 38 M56 38 Q60 34 64 38" strokeWidth={0.4} opacity={0.35} />
      </>
    ),
  },
  {
    roman: "XVI",
    title: "As Estrelas",
    glyph: (
      <>
        <path d="M50 12 L58 40 L86 40 L63 57 L71 85 L50 68 L29 85 L37 57 L14 40 L42 40 Z" />
        <circle cx="50" cy="47" r="7" strokeWidth={0.7} opacity={0.6} />
        <path d="M18 18 L20 24 L26 26 L20 28 L18 34 L16 28 L10 26 L16 24 Z" strokeWidth={0.9} />
        <path d="M82 62 L83.5 66 L87.5 67.5 L83.5 69 L82 73 L80.5 69 L76.5 67.5 L80.5 66 Z" strokeWidth={0.9} />
        <path d="M84 22 L85 25 L88 26 L85 27 L84 30 L83 27 L80 26 L83 25 Z" strokeWidth={0.8} opacity={0.7} />
      </>
    ),
  },
  {
    roman: "XVII",
    title: "A Cegonha",
    glyph: (
      <>
        <path d="M50 20 V50" />
        <path d="M42 20 L50 8 L58 20" strokeWidth={0.8} />
        <circle cx="47" cy="22" r="1" fill="#E0C468" stroke="none" />
        <path d="M50 50 Q30 60 30 86 M50 50 Q70 60 70 86" />
        <path d="M50 50 Q30 46 20 54 M50 50 Q70 46 80 54" strokeWidth={0.7} opacity={0.55} />
        <path d="M32 52 Q26 50 22 54 M68 52 Q74 50 78 54" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XVIII",
    title: "O Cachorro",
    glyph: (
      <>
        <circle cx="50" cy="46" r="20" />
        <path d="M32 40 Q20 46 26 62" />
        <path d="M68 40 Q80 46 74 62" />
        <path d="M35 42 Q22 47 27 60" strokeWidth={0.5} opacity={0.4} />
        <circle cx="50" cy="52" r="1.8" fill="#E0C468" stroke="none" />
        <circle cx="42" cy="42" r="1.2" fill="#E0C468" stroke="none" />
        <path d="M38 66 H62" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XIX",
    title: "A Torre",
    glyph: (
      <>
        <path d="M36 86 L36 40 L30 40 L30 30 L40 30 L40 22 L60 22 L60 30 L70 30 L70 40 L64 40 L64 86 Z" />
        <path d="M45 50 V60 M55 50 V60" strokeWidth={0.6} opacity={0.5} />
        <path d="M42 70 H58 M40 78 H60" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 22 V12 M46 16 L50 10 L54 16" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XX",
    title: "O Jardim",
    glyph: (
      <>
        <path d="M14 70 H86" />
        <path d="M14 70 V56 M26 70 V56 M38 70 V56 M50 70 V56 M62 70 V56 M74 70 V56 M86 70 V56" strokeWidth={0.6} opacity={0.5} />
        <path d="M14 62 H86" strokeWidth={0.5} opacity={0.35} />
        <circle cx="30" cy="42" r="6" />
        <circle cx="50" cy="36" r="6" />
        <circle cx="70" cy="42" r="6" />
        <circle cx="30" cy="42" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="50" cy="36" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="70" cy="42" r="1.6" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "XXI",
    title: "A Montanha",
    glyph: (
      <>
        <path d="M10 82 L34 34 L48 56 L62 24 L90 82 Z" />
        <path d="M58 34 L62 24 L66 34" strokeWidth={0.6} opacity={0.5} />
        <path d="M24 60 L34 60 M42 68 L54 68 M64 50 L72 50" strokeWidth={0.5} opacity={0.35} />
      </>
    ),
  },
  {
    roman: "XXII",
    title: "Os Caminhos",
    glyph: (
      <>
        <path d="M50 86 V50 M50 50 L26 18 M50 50 L74 18" />
        <path d="M50 58 H62 M60 54 L66 58 L60 62" strokeWidth={0.6} opacity={0.5} />
        <path d="M28 24 L22 22 M72 24 L78 22" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XXIII",
    title: "Os Ratos",
    glyph: (
      <>
        <circle cx="42" cy="54" r="14" />
        <path d="M56 54 Q76 46 82 58" />
        <path d="M34 44 L28 36 M50 44 L54 36" strokeWidth={0.7} opacity={0.6} />
        <path d="M30 56 L20 54 M32 60 L22 62" strokeWidth={0.5} opacity={0.4} />
        <circle cx="36" cy="52" r="1.4" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "XXIV",
    title: "O Coração",
    glyph: (
      <>
        <path d="M50 84 C20 62 16 40 32 28 C42 20 50 28 50 38 C50 28 58 20 68 28 C84 40 80 62 50 84 Z" />
        <path d="M50 46 L50 68 M42 56 L58 56" strokeWidth={0.8} opacity={0.6} />
        <path d="M22 26 L18 20 M78 26 L82 20 M50 12 L50 6" strokeWidth={0.9} />
        <path d="M32 22 L28 26 M68 22 L72 26" strokeWidth={0.7} opacity={0.6} />
        <path d="M42 78 Q50 74 58 78" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XXV",
    title: "O Anel",
    glyph: (
      <>
        <circle cx="50" cy="58" r="20" />
        <circle cx="50" cy="58" r="15" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 38 L44 26 L56 26 Z" />
        <path d="M47 30 L50 26 L53 30" strokeWidth={0.5} opacity={0.4} />
        <circle cx="50" cy="24" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="44" cy="27" r="1" fill="#E0C468" stroke="none" />
        <circle cx="56" cy="27" r="1" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "XXVI",
    title: "O Livro",
    glyph: (
      <>
        <path d="M50 26 L18 32 V78 L50 72 L82 78 V32 Z" />
        <path d="M50 26 V72" strokeWidth={0.7} opacity={0.5} />
        <path d="M26 42 L42 40 M26 52 L42 50 M26 62 L42 60 M58 40 L74 42 M58 50 L74 52 M58 60 L74 62" strokeWidth={0.5} opacity={0.4} />
        <path d="M20 34 V76" strokeWidth={0.4} opacity={0.3} />
      </>
    ),
  },
  {
    roman: "XXVII",
    title: "A Carta",
    glyph: (
      <>
        <path d="M14 30 H86 V76 H14 Z" />
        <path d="M14 30 L50 58 L86 30" />
        <circle cx="50" cy="66" r="6" strokeWidth={0.6} opacity={0.5} />
        <path d="M47 66 H53 M50 63 V69" strokeWidth={0.5} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XXVIII",
    title: "O Homem",
    glyph: (
      <>
        <circle cx="44" cy="56" r="18" />
        <path d="M56 44 L78 22 M70 22 H78 V30" />
        <path d="M32 44 Q44 36 56 44" strokeWidth={0.5} opacity={0.4} />
        <circle cx="44" cy="56" r="12" strokeWidth={0.4} opacity={0.3} />
      </>
    ),
  },
  {
    roman: "XXIX",
    title: "A Mulher",
    glyph: (
      <>
        <circle cx="50" cy="40" r="18" />
        <path d="M50 58 V86 M38 74 H62" />
        <path d="M34 32 Q50 20 66 32" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 78 L34 86 M60 78 L66 86" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XXX",
    title: "O Lírio",
    glyph: (
      <>
        <path d="M50 86 V50" />
        <path d="M50 50 C36 50 30 30 50 18 C70 30 64 50 50 50 Z" />
        <path d="M50 46 V22" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 40 C36 46 24 36 30 22 C42 24 48 32 50 40 Z" strokeWidth={0.7} opacity={0.6} />
        <path d="M50 40 C64 46 76 36 70 22 C58 24 52 32 50 40 Z" strokeWidth={0.7} opacity={0.6} />
        <path d="M42 70 Q34 66 30 72" strokeWidth={0.5} opacity={0.4} />
      </>
    ),
  },
  {
    roman: "XXXI",
    title: "O Sol",
    glyph: (
      <>
        <circle cx="50" cy="50" r="16" />
        <circle cx="50" cy="50" r="10" strokeWidth={0.5} opacity={0.4} />
        <path d="M50 12v10M50 78v10M12 50h10M78 50h10M22 22l7 7M71 71l7 7M78 22l-7 7M29 71l-7 7" />
        <path d="M50 20v6M50 74v6M20 50h6M74 50h6" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XXXII",
    title: "A Lua",
    glyph: (
      <>
        <path d="M58 20a26 26 0 1 0 0 52 32 32 0 0 1 0-52Z" />
        <path d="M52 30a17 17 0 0 0 0 32" strokeWidth={0.6} opacity={0.5} />
        <path d="M22 24 L23.5 28 L27.5 29.5 L23.5 31 L22 35 L20.5 31 L16.5 29.5 L20.5 28 Z" strokeWidth={0.9} />
        <circle cx="30" cy="70" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="78" cy="60" r="1" fill="#E0C468" stroke="none" />
        <circle cx="14" cy="52" r="1.2" fill="#E0C468" stroke="none" />
        <circle cx="20" cy="78" r="1" fill="#E0C468" stroke="none" />
        <circle cx="10" cy="34" r="0.9" fill="#E0C468" stroke="none" />
        <path d="M58 12a34 34 0 0 1 0 60" strokeWidth={0.4} opacity={0.3} />
      </>
    ),
  },
  {
    roman: "XXXIII",
    title: "A Chave",
    glyph: (
      <>
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="6" strokeWidth={0.7} opacity={0.6} />
        <path d="M42 42 L80 80 M66 66 L74 58 M74 74 L82 66 M70 70 L76 64" />
        <path d="M32 18 L32 12 M25 22 L20 18 M39 22 L44 18" strokeWidth={0.8} opacity={0.6} />
        <path d="M32 26 L32 38 M26 32 L38 32" strokeWidth={0.6} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XXXIV",
    title: "Os Peixes",
    glyph: (
      <>
        <path d="M14 50 Q34 30 54 50 Q34 70 14 50 Z" />
        <path d="M54 50 L70 40 L66 50 L70 60 Z" />
        <path d="M22 46 Q30 42 38 46 M22 54 Q30 58 38 54" strokeWidth={0.5} opacity={0.4} />
        <circle cx="24" cy="48" r="1.4" fill="#E0C468" stroke="none" />
        <path d="M46 62 Q66 82 86 62 Q66 42 46 62 Z" strokeWidth={0.7} opacity={0.5} />
        <path d="M46 62 L30 52 L34 62 L30 72 Z" strokeWidth={0.7} opacity={0.5} />
      </>
    ),
  },
  {
    roman: "XXXV",
    title: "A Âncora",
    glyph: (
      <>
        <circle cx="50" cy="20" r="8" />
        <circle cx="50" cy="20" r="3.2" strokeWidth={0.7} opacity={0.6} />
        <path d="M50 28 V78 M30 50 H70" />
        <path d="M28 62 Q30 82 50 86 Q70 82 72 62" />
        <path d="M42 46 Q50 50 58 46 M42 58 Q50 62 58 58 M42 70 Q50 74 58 70" strokeWidth={0.7} opacity={0.5} />
        <circle cx="24" cy="61" r="1.6" fill="#E0C468" stroke="none" />
        <circle cx="76" cy="61" r="1.6" fill="#E0C468" stroke="none" />
      </>
    ),
  },
  {
    roman: "XXXVI",
    title: "A Cruz",
    glyph: (
      <>
        <path d="M50 16 V84 M26 42 H74" />
        <path d="M42 24 H58 M42 76 H58 M18 34 V50 M82 34 V50" strokeWidth={0.6} opacity={0.5} />
        <circle cx="50" cy="42" r="5" strokeWidth={0.5} opacity={0.4} />
        <path d="M40 10 Q50 4 60 10 M40 90 Q50 96 60 90" strokeWidth={0.4} opacity={0.3} />
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
          Carta {card.roman}
        </span>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#E0C468"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
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