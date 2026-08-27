import React from "react";

export function VideoProofGrid() {
  const cards = [
    {
      img: "/images/paint_application.jpg",
      tag: "APLICAÇÃO RÁPIDA",
      tagColor: "bg-emerald-950/80 border-emerald-500/30 text-emerald-400",
      title: "Você Mesmo Aplica em Casa",
      desc: "Sem sujeira e sem máquinas pesadas. Apenas o frasco e um pano de microfibra macio.",
    },
    {
      img: "/images/water_beading.jpg",
      tag: "BLINDAGEM HIDROFÓBICA",
      tagColor: "bg-teal-950/80 border-teal-500/30 text-teal-400",
      title: "Efeito Anti-Água & Chuva Ácida",
      desc: "A água e o barro escorrem em gotas sem grudar na lataria, facilitando as próximas lavagens.",
    },
    {
      img: "/images/product_kit.jpg",
      tag: "FÓRMULA NANO CERÂMICA",
      tagColor: "bg-amber-950/80 border-amber-500/30 text-amber-400",
      title: "Proteção de Longa Duração",
      desc: "Fórmula concentrada de alto rendimento para múltiplos veículos e reaplicações.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-900/50 border-t border-gray-800 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            RESULTADO EM DETALHES
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Veja a Tecnologia em Ação
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-gray-800 bg-gray-950 overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className={inline-block self-start rounded-md border px-2.5 py-0.5 text-[11px] font-black uppercase mb-2 }>
                  {c.tag}
                </div>
                <h3 className="text-lg font-black text-white">{c.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
