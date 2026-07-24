"use client";

import { useEffect, useRef } from "react";

export function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const el = glowRef.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      el.style.opacity = "0.14";
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="cursor-glow absolute top-0 left-0 h-[500px] w-[500px] rounded-full"
      />
    </div>
  );
}