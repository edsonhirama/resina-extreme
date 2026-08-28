"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (e.g. 450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
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

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 sm:p-3 bg-black/95 backdrop-blur-md border-t border-amber-500/40 md:hidden shadow-2xl transition-all">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Mini Price & COD */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Pague na Entrega
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-gray-300">A partir de</span>
            <span className="text-sm font-black text-amber-400">R$ 127,90</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={scrollToOffer}
          type="button"
          className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs uppercase tracking-wide shadow-glow-amber flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <span>PEDIR MEU FRASCO</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
