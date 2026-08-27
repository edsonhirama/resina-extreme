import React from "react";

export function SocialProofStrip() {
  return (
    <section className="border-y border-gray-800 bg-gray-900/60 py-6 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-gray-950/60 border border-gray-800/80 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">14.850+</div>
            <div className="text-xs sm:text-sm font-bold text-gray-300 mt-0.5">Carros e Motos Renovados</div>
          </div>

          <div className="p-3 bg-gray-950/60 border border-gray-800/80 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
              <span>4.9</span>
              <span className="text-lg">★</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-300 mt-0.5">Avaliações Reais dos Clientes</div>
          </div>

          <div className="p-3 bg-gray-950/60 border border-gray-800/80 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-teal-400">100%</div>
            <div className="text-xs sm:text-sm font-bold text-gray-300 mt-0.5">Pagamento na Entrega (COD)</div>
          </div>

          <div className="p-3 bg-gray-950/60 border border-gray-800/80 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">0%</div>
            <div className="text-xs sm:text-sm font-bold text-gray-300 mt-0.5">Risco de Fraude Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}
