"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      data-back-to-top
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-20 right-4 z-40 flex size-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground shadow-lg backdrop-blur transition-all duration-300 hover:border-violet-500 hover:text-violet-500 cursor-pointer",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
