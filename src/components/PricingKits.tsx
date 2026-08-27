import React from "react";

export function PricingKits() {
  const plans = [
    {
      id: "kit-1",
      name: "Compre 1 e Leve 2",
      tagline: "Ideal para testar sem medo",
      units: "2 Frascos de Resina Extreme",
      originalPrice: "R$ 129,80",
      price: "R$ 109,99",
      savings: "Economize R$ 19,81",
      img: "/images/product_kit.jpg",
      link: "https://entrega.logzz.com.br/pay/memw3d6ox/loure-compre-3-e-leve-4",
      highlight: false,
      badge: "KIT INICIANTE",
    },
    {
      id: "kit-2",
      name: "Compre 2 e Leve 3",
      tagline: "O combo mais escolhido pelos clientes",
      units: "3 Frascos de Resina Extreme",
      originalPrice: "R$ 194,70",
      price: "R$ 147,00",
      savings: "Economize R$ 47,70",
      img: "/images/product_kit.jpg",
      link: "https://entrega.logzz.com.br/pay/memw3d6ox/cidjm-compre-2-e-leve-3",
      highlight: true,
      badge: "⭐ MAIS ESCOLHIDO",
    },
    {
      id: "kit-3",
      name: "Compre 3 e Leve 4",
      tagline: "Para quem quer o melhor custo-benefício",
      units: "4 Frascos de Resina Extreme",
      originalPrice: "R$ 259,60",
      price: "R$ 187,00",
      savings: "Economize R$ 72,60",
      img: "/images/product_kit.jpg",
      link: "https://entrega.logzz.com.br/pay/memw3d6ox/loure-compre-3-e-leve-4",
      highlight: false,
      badge: "🔥 MÁXIMA ECONOMIA",
    },
  ];

  return (
    <section id="oferta" className="py-14 sm:py-24 bg-gradient-to-b from-gray-950 via-emerald-950/20 to-gray-950 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 text-xs sm:text-sm font-black text-emerald-400 uppercase tracking-widest mb-3">
            OFERTA COM PAGAMENTO NA ENTREGA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Escolha Seu Kit com Frete Grátis
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Você recebe o produto em casa e{" "}
            <strong className="text-emerald-400 font-black">só paga quando o carteiro entregar</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={
elative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 }
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span
                  className={
ounded-full px-4 py-1 text-xs font-black uppercase tracking-wider shadow-lg }
                >
                  {plan.badge}
                </span>
              </div>

              <div>
                <div className="text-center mt-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">{plan.name}</h3>
                  <p className="mt-1 text-xs text-gray-400 font-semibold">{plan.tagline}</p>
                </div>

                <div className="my-4 h-36 flex items-center justify-center">
                  <img
                    src={plan.img}
                    alt={plan.units}
                    className="h-full object-contain rounded-2xl border border-gray-800 shadow"
                  />
                </div>

                <div className="mt-2 rounded-xl bg-gray-950/80 border border-gray-800 p-2 text-center text-xs sm:text-sm font-bold text-emerald-400">
                  {plan.units}
                </div>

                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm font-bold text-gray-500 line-through">
                    {plan.originalPrice}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1">
                    {plan.price}
                  </div>
                  <div className="mt-2 inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-xs font-bold text-emerald-300">
                    {plan.savings}
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-gray-300 font-semibold border-t border-gray-800 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">✓</span>
                    <span>Frete Grátis para todo Brasil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">✓</span>
                    <span>Pague somente na entrega (COD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-black">✓</span>
                    <span>Sem cartão e sem PIX adiantado</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={group flex w-full items-center justify-center gap-2 rounded-2xl p-4 text-sm sm:text-base font-black transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] }
                >
                  <span>RECEBER E PAGAR NA ENTREGA</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
