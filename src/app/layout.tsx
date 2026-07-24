import type { Metadata } from "next";
import "./globals.css";
import { AmbientGlow } from "@/components/ambient-glow";

export const metadata: Metadata = {
  title: "Mystic Spell — Cartomancia",
  description:
    "Sessões de tarot para clareza em amor, trabalho e nas encruzilhadas da vida — pessoalmente ou por chamada de vídeo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Cinzel:wght@500;600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-parchment-light">
        <AmbientGlow />
        {children}
      </body>
    </html>
  );
}