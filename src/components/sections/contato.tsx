"use client";

import { useState } from "react";
import { MessageCircle, Mail, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Formulário de demonstração — sem envio real ainda.
    // Ligue isso a uma rota /api (Node.js) ou a um serviço como Resend/Formspree.
    setEnviado(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contato" className="relative z-10 bg-ink-deep py-28">
      <div className="mx-auto grid max-w-5xl gap-16 px-7 md:grid-cols-2">
        <div>
          <span className="font-caps block text-[0.7rem] tracking-[0.28em] text-gold uppercase">
            Agendar
          </span>
          <h3 className="font-display mt-3.5 text-[1.6rem] text-parchment-light">
            Vamos marcar sua leitura
          </h3>
          <p className="mt-4 mb-6.5 leading-[1.7] text-parchment-light/70">
            Prefere combinar direto? Chama no WhatsApp ou manda mensagem no
            Instagram — respondo por lá também.
          </p>
          <div className="flex flex-col gap-3.5">
            <a
              href="#"
              className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft"
            >
              <MessageCircle className="size-4.5 text-gold" strokeWidth={1.5} />
              WhatsApp — (11) 90000-0000
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft"
            >
              <AtSign className="size-4.5 text-gold" strokeWidth={1.5} />
              @arcanodalua
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border-b border-line py-3 text-[0.95rem] text-parchment-light transition-colors hover:text-gold-soft"
            >
              <Mail className="size-4.5 text-gold" strokeWidth={1.5} />
              helena@arcanodalua.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="tipo">Tipo de leitura</Label>
            <Select name="tipo" defaultValue="geral">
              <SelectTrigger id="tipo">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geral">Panorama Geral</SelectItem>
                <SelectItem value="amor">Amor &amp; Vínculos</SelectItem>
                <SelectItem value="carreira">Carreira &amp; Caminho</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="data">Data preferida</Label>
            <Input id="data" name="data" type="date" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="msg">Mensagem (opcional)</Label>
            <Textarea
              id="msg"
              name="msg"
              placeholder="Conte um pouco do que busca nessa leitura..."
            />
          </div>
          <Button type="submit" className="mt-2 self-start">
            Enviar pedido
          </Button>
          {enviado && (
            <p className="text-sm text-gold-soft">
              Pedido enviado! (formulário de demonstração — ainda sem envio real)
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
