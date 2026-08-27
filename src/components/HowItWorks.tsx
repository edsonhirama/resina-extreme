import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Limpar a Lataria",
      desc: "Lave e seque bem a superfície onde a resina será aplicada para remover a poeira.",
      icon: "🚗",
    },
    {
      num: "02",
      title: "Aplicar e Espalhar",
      desc: "Aplique algumas gotas da Resina Extreme e espalhe com um pano de microfibra macio.",
      icon: "🧽",
    },
    {
      num: "03",
      title: "Lustrar e Admirar",
      desc: "Dê o acabamento com o outro lado seco do pano. O brilho espelhado surge na hora!",
      icon: "✨",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-900/40 border-t border-gray-800 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            PASSO A PASSO
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Como Aplicar em Menos de 15 Minutos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Você não precisa de habilidades profissionais. O processo é simples e intuitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-6 rounded-3xl border border-gray-800 bg-gray-950 shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-gray-950 font-black text-xl mb-4 shadow-lg shadow-emerald-500/30">
                {s.num}
              </div>
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="text-lg font-black text-white">{s.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
