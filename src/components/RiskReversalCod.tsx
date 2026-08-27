import React from "react";

export function RiskReversalCod() {
  const codFlow = [
    {
      step: "1",
      title: "Faça o Pedido",
      desc: "Preencha seus dados de entrega. Nenhum dado financeiro ou cartão é solicitado.",
      badge: "Zero Cartão",
    },
    {
      step: "2",
      title: "Enviamos com Frete Grátis",
      desc: "Seu pacote é postado com código de rastreio e chega rápido na sua casa.",
      badge: "Frete 100% Grátis",
    },
    {
      step: "3",
      title: "Receba e Pague no Ato",
      desc: "O entregador leva o pacote até você. Você confere e só então realiza o pagamento.",
      badge: "Pague na Entrega",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-emerald-950/20 via-gray-950 to-gray-950 border-t border-emerald-500/20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            GARANTIA TOTAL DE SEGURANÇA
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Por Que Você Não Corre Risco Algum?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-medium">
            "Se o produto não for entregue na sua mão,{" "}
            <span className="text-emerald-400 font-black">você não paga absolutamente nada</span>."
          </p>
        </div>

        {/* 3 Step COD Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codFlow.map((f, i) => (
            <div
              key={i}
              className="relative flex flex-col p-6 rounded-3xl border-2 border-emerald-500/30 bg-gray-900/80 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-gray-950 font-black text-lg shadow-md shadow-emerald-500/30">
                  {f.step}
                </span>
                <span className="text-[11px] font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase">
                  {f.badge}
                </span>
              </div>
              <h3 className="text-lg font-black text-white">{f.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Big Assurance Box */}
        <div className="mt-10 rounded-3xl border border-emerald-500/40 bg-emerald-950/30 p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-lg">🛡️</span>
              <span>Sem cobrança antecipada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-lg">📦</span>
              <span>Entrega rápida pelos Correios/Transportadora</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-lg">🔒</span>
              <span>100% Protegido contra Golpes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
