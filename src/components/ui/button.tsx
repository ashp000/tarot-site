import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--gold)] text-[var(--ink-deep)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.25)]",
        outline:
          "border border-[color:var(--line-strong)] text-[var(--parchment-light)] hover:border-[var(--gold)] hover:text-[var(--gold-soft)] bg-transparent",
        ghost: "hover:bg-white/5 text-[var(--parchment-light)]",
      },
      size: {
        default: "h-11 px-7 py-2 font-serif-caps text-xs",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-9 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
