import React from "react";

export function FinalCta() {
  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-gray-950 via-emerald-950/40 to-gray-950 border-t border-emerald-500/20 px-4 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Seu Carro Merece Ter Aquele{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Brilho Espelhado de Novo
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
          Faça o pedido agora, receba com frete grátis e{" "}
          <strong className="text-emerald-400 font-black">só pague quando estiver com o produto em mãos</strong>.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <a
            href="#oferta"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 p-5 text-base sm:text-lg font-black text-gray-950 shadow-2xl shadow-emerald-500/40 transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
          >
            <span>ESCOLHER MEU KIT COM FRETE GRÁTIS</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Pague na Entrega</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Sem Cartão de Crédito</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span>
            <span>Frete Grátis Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
