import React, { useState } from "react";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-12 sm:py-20 bg-gray-950 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            PROVA VISUAL REAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Arraste e Veja a Diferença na Lata
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-medium">
            Sem truques de câmera. O mesmo capô, sob a mesma luz natural do sol, tratado em minutos.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="relative mx-auto max-w-3xl aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border-2 border-gray-800 bg-gray-900 shadow-2xl select-none touch-none">
          {/* AFTER LAYER (Full Background) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6 text-center">
            {/* Sun glare effect */}
            <div className="absolute top-4 right-8 h-28 w-28 rounded-full bg-amber-400/30 blur-2xl pointer-events-none" />
            <div className="absolute top-8 right-12 h-14 w-14 rounded-full bg-amber-300 pointer-events-none" />

            {/* Glossy Car Shape Graphic */}
            <div className="relative z-10 w-full max-w-md">
              <div className="h-28 sm:h-36 w-full rounded-2xl bg-gradient-to-r from-blue-700 via-sky-400 to-blue-600 shadow-[0_0_50px_rgba(56,189,248,0.4)] border border-sky-300/40 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.7)_40%,transparent_60%)] animate-pulse" />
                <span className="relative z-10 font-black text-white text-lg sm:text-2xl drop-shadow-md">
                  ✨ BRILHO ESPELHADO PROFUNDO
                </span>
              </div>
            </div>

            <span className="absolute top-4 right-4 z-20 rounded-full bg-emerald-500 text-gray-950 px-3 py-1 text-xs font-black tracking-wide shadow-lg">
              DEPOIS COM RESINA
            </span>
          </div>

          {/* BEFORE LAYER (Clipped by Slider Position) */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-stone-900 to-neutral-950 border-r-4 border-white flex items-center justify-center p-6 text-center overflow-hidden z-10"
            style={{ width: `${sliderPos}%` }}
          >
            {/* Dull, oxidized shape */}
            <div className="relative w-full max-w-md min-w-[300px]">
              <div className="h-28 sm:h-36 w-full rounded-2xl bg-gradient-to-r from-neutral-700 via-stone-600 to-neutral-700 border border-neutral-600/30 relative flex items-center justify-center opacity-75 grayscale contrast-75">
                <span className="font-black text-stone-300 text-lg sm:text-2xl">
                  ⚠️ PINTURA QUEIMADA & OPACA
                </span>
              </div>
            </div>

            <span className="absolute top-4 left-4 z-20 rounded-full bg-black/80 text-gray-200 border border-white/20 px-3 py-1 text-xs font-black tracking-wide">
              ANTES (SEM PROTEÇÃO)
            </span>
          </div>

          {/* HTML5 Range Slider Controller */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Comparar antes e depois da Resina Extreme"
            className="absolute inset-0 z-30 h-full w-full opacity-0 cursor-ew-resize"
          />

          {/* Visible Divider Handle */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 z-20 flex items-center justify-center"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-emerald-400 text-gray-950 shadow-2xl font-black text-xs border-2 border-white">
              ◄►
            </div>
          </div>
        </div>

        {/* Note below slider */}
        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-gray-400">
            👈 Deslize para a esquerda e direita para comparar o resultado na hora 👉
          </p>
        </div>
      </div>
    </section>
  );
}
