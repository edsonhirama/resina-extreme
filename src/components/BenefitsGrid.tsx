import React from "react";

export function BenefitsGrid() {
  const benefits = [
    {
      title: "Brilho Espelhado Intenso",
      desc: "Restaura o reflexo profundo do verniz, trazendo a sensação de carro zero km recém-saído da concessionária.",
      icon: "💎",
    },
    {
      title: "Economia de até R$ 800",
      desc: "Tenha o acabamento de um polimento profissional com cristalização sem pagar a mão de obra cara de oficinas.",
      icon: "💰",
    },
    {
      title: "Aplicação Rápida em 15 Min",
      desc: "Sem segredos, sem politriz e sem esforço cansativo. Aplique com um pano limpo de microfibra em minutos.",
      icon: "⏱️",
    },
    {
      title: "Proteção Contra Sol e Chuva",
      desc: "Cria uma película hidrofóbica que repele água, poeira e protege contra a queima do verniz pelo sol forte.",
      icon: "🛡️",
    },
    {
      title: "Serve em Qualquer Cor e Veículo",
      desc: "Compatível com todas as tonalidades de carros e motos (preto, branco, prata, vermelho e metálicos).",
      icon: "🚗",
    },
    {
      title: "Não Agride a Pintura",
      desc: "Fórmula de nanotecnologia sem abrasivos pesados, preservando a espessura original do verniz.",
      icon: "✅",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-950 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            BENEFÍCIOS EXCLUSIVOS
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Por Que a Resina Extreme é Diferente?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Tudo o que você precisa para revitalizar e proteger a lataria do seu carro em uma única fórmula.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-3xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="text-3xl sm:text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg sm:text-xl font-black text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
