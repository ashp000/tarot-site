import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full border-0 border-b border-[color:var(--line)] bg-transparent px-0.5 py-2 text-base text-[var(--parchment-light)] transition-colors outline-none placeholder:text-[color:rgba(247,243,232,0.35)] focus-visible:border-[var(--gold)] disabled:pointer-events-none disabled:opacity-50 md:text-sm resize-y",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
