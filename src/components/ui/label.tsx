"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "font-caps text-[0.68rem] tracking-[0.14em] uppercase text-[var(--gold-soft)] select-none",
        className
      )}
      {...props}
    />
  );
}

export { Label };
