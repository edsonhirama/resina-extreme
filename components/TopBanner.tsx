import React from "react";
import { ShieldCheck, Truck, Clock } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-2 px-3 text-xs sm:text-sm font-bold shadow-md relative z-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-center leading-tight">
        <div className="flex items-center gap-1.5 justify-center">
          <ShieldCheck className="w-4 h-4 text-black flex-shrink-0" />
          <span>COMPRA SEGURA: <strong>PAGUE SOMENTE NA ENTREGA</strong></span>
        </div>
        <span className="hidden sm:inline text-black/50">•</span>
        <div className="flex items-center gap-1.5 justify-center">
          <Truck className="w-4 h-4 text-black flex-shrink-0" />
          <span>FRETE GRÁTIS PARA TODO O BRASIL</span>
        </div>
        <span className="hidden md:inline text-black/50">•</span>
        <div className="hidden md:flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-black flex-shrink-0" />
          <span>ESTOQUE PROMOCIONAL LIMITADO</span>
        </div>
      </div>
    </div>
  );
}
