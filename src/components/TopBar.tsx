import React from "react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-gray-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 text-xs sm:text-sm font-bold text-gray-200">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-extrabold uppercase tracking-wide">Pague Somente na Entrega</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-gray-300">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Sem Cartão de Crédito</span>
        </div>

        <div className="flex items-center gap-1.5 text-amber-400 font-extrabold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Frete Grátis Brasil</span>
        </div>
      </div>
    </header>
  );
}
