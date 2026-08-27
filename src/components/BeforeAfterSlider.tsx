import React from "react";

export function BeforeAfterSlider() {
  return (
    <section id="galeria" className="py-12 sm:py-20 bg-gray-950 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            PROVA VISUAL IRREFUTÁVEL
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Veja a Transformação na Lata
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            O mesmo capô sob a luz natural do sol. Resultado imediato na primeira demão.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl aspect-[16/9] w-full overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gray-900 shadow-2xl">
          <img
            src="/images/hero_split.jpg"
            alt="Antes e depois real do capô do carro com Resina Extreme"
            className="w-full h-full object-cover"
          />

          <span className="absolute top-4 left-4 z-20 rounded-full bg-black/85 border border-red-500/50 text-red-300 px-3.5 py-1 text-xs font-black tracking-wide shadow-lg">
            ⚠️ ANTES: PINTURA QUEIMADA
          </span>
          <span className="absolute top-4 right-4 z-20 rounded-full bg-emerald-500 text-gray-950 px-3.5 py-1 text-xs font-black tracking-wide shadow-lg">
            ✨ DEPOIS: BRILHO ESPELHADO
          </span>
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm font-bold text-emerald-400">
          👆 Transformação real em 15 minutos sem máquina politriz
        </p>
      </div>
    </section>
  );
}
