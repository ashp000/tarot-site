import { NextRequest } from "next/server";

// Lista de origens permitidas a chamar as rotas de API do site.
// Ajuste/adicione aqui se usar um domínio próprio no futuro.
const ALLOWED_ORIGIN_SUFFIXES = [".vercel.app", "localhost:3000", "127.0.0.1:3000"];

export function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return ALLOWED_ORIGIN_SUFFIXES.some((suffix) => host.endsWith(suffix));
  } catch {
    return false;
  }
}

// Rate limit simples em memória: no máximo N requisições por IP a cada X ms.
// Não é perfeito em ambiente serverless (pode "zerar" entre execuções frias),
// mas já barra abuso básico e testes repetidos via Postman/curl.
const hits = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 5;

export function isRateLimited(req: NextRequest): boolean {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}