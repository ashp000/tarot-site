# Arcano da Lua — site de tarot (Next.js + shadcn/ui)

Site de portfólio/agendamento para leituras de tarot, construído com:

- **Next.js 16** (App Router, TypeScript, Tailwind CSS v4)
- **shadcn/ui** (Button, Card, Input, Textarea, Label, Select) montado manualmente
- Fontes: Cormorant Garamond, Cinzel e Jost (Google Fonts)

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `src/app/page.tsx` — monta as seções da página
- `src/components/sections/` — Navbar, Hero, Sobre, Serviços, Processo, Depoimentos, Contato, Footer
- `src/components/ui/` — componentes shadcn/ui
- `src/app/globals.css` — paleta de cores e tokens de tema (ink, gold, parchment, wine)

## O que personalizar

Todos os textos são fictícios — nome da leitora, preços, depoimentos, links de WhatsApp/Instagram/e-mail. Edite diretamente nos arquivos em `src/components/sections/`.

O formulário de contato (`contato.tsx`) hoje só simula o envio (`handleSubmit`). Para receber pedidos de verdade, crie uma rota de API em `src/app/api/agendar/route.ts` (Node.js) que envie e-mail, salve num banco de dados, ou dispare uma mensagem — posso ajudar com isso quando quiser.

## Adicionar mais componentes shadcn/ui

O CLI oficial (`npx shadcn@latest add ...`) depende de acesso a `ui.shadcn.com`. Se seu ambiente tiver acesso normal à internet, ele deve funcionar normalmente aí. Caso contrário, os componentes podem ser copiados manualmente de https://ui.shadcn.com/docs/components seguindo o mesmo padrão usado em `src/components/ui/`.
