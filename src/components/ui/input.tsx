import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      spellCheck={false}
      autoCorrect="off"
      className={cn(
        "flex h-10 w-full min-w-0 border-0 border-b border-[color:var(--line)] bg-transparent px-0.5 py-2 text-base text-[var(--parchment-light)] transition-colors outline-none placeholder:text-[color:rgba(247,243,232,0.35)] focus-visible:border-[var(--gold)] disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
