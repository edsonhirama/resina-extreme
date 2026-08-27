import React, { useState, useEffect } from "react";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Ação Rápida de Compra"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-gray-950/95 backdrop-blur-md border-t border-emerald-500/30 transition-transform duration-300 sm:hidden"
    >
      <a
        href="#oferta"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 p-3.5 text-sm font-black text-gray-950 shadow-xl shadow-emerald-500/30 active:scale-[0.98]"
      >
        <span>RECEBER EM CASA · PAGAR NA ENTREGA</span>
        <span>→</span>
      </a>
    </aside>
  );
}
