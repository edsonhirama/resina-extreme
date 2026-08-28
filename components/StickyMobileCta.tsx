"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px down
      if (window.scrollY > 400) {
        // Hide if already in the checkout section
        const checkoutEl = document.getElementById("oferta-checkout");
        if (checkoutEl) {
          const rect = checkoutEl.getBoundingClientRect();
          const isInCheckout = rect.top <= window.innerHeight && rect.bottom >= 0;
          setIsVisible(!isInCheckout);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffer = () => {
    const el = document.getElementById("oferta-checkout");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 sm:p-3 bg-zinc-950/95 backdrop-blur-md border-t border-amber-500/40 shadow-2xl md:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
            <ShieldCheck className="w-3 h-3" />
            <span>Pague ao Receber</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-gray-400">Kit a partir de</span>
            <span className="text-sm font-black text-amber-400">R$ 127,90</span>
          </div>
        </div>

        <button
          onClick={scrollToOffer}
          type="button"
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-glow-amber active:scale-95 transition-transform cursor-pointer"
        >
          <span>PEDIR NA ENTREGA</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
