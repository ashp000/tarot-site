import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.21A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.6c.15-.35.3-.36.5-.37l.4-.01c.14 0 .32-.02.5.4.18.44.6 1.5.65 1.6.05.1.09.23.02.37-.07.14-.11.23-.22.36-.11.13-.23.28-.33.38-.11.11-.22.22-.1.44.13.22.56.94 1.2 1.53.83.76 1.53 1 1.75 1.11.22.11.35.09.48-.06.13-.15.55-.65.7-.87.15-.22.3-.19.5-.11.2.07 1.29.62 1.51.74.22.11.36.17.42.27.06.1.06.6-.14 1.17-.2.58-1.17 1.11-1.6 1.16-.43.05-.85.25-2.86-.6-2.4-1.03-3.93-3.5-4.05-3.66-.12-.16-.98-1.32-.98-2.52 0-1.2.62-1.79.85-2.03Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}