import React from "react";

export function VideoProofGrid() {
  const proofs = [
    {
      title: "Reflexo Espelhado em 4K",
      desc: "Veja a nitidez das árvores e prédios refletidos na lataria após a aplicação da resina.",
      tag: "Lataria & Capô",
      badge: "Brilho Vitrificado",
      icon: "✨",
    },
    {
      title: "Efeito Hidrorrepelente (Anti-Água)",
      desc: "A água bate e escorre em gotas redondas, sem acumular sujeira ou marcas de chuva ácida.",
      tag: "Teste da Água",
      badge: "Blindagem",
      icon: "💧",
    },
    {
      title: "Aplicação Sem Segredo",
      desc: "Não necessita de politriz elétrica ou oficina. Apenas um pano macio e 15 minutos.",
      tag: "Fácil Aplicação",
      badge: "Faça Você Mesmo",
      icon: "🧽",
    },
    {
      title: "Resistência ao Sol Forte & UV",
      desc: "Protege o verniz original contra o desbotamento causado pelo sol forte do dia a dia.",
      tag: "Proteção Solar",
      badge: "Barreira UV",
      icon: "☀️",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-900/50 border-t border-gray-800 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            TRANSFORMAÇÃO REAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Veja os Resultados em Detalhes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            A mesma tecnologia dos estúdios automotivos mais caros, direto na sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofs.map((p, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col rounded-3xl border border-gray-800 bg-gray-950 p-4 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/40"
            >
              {/* Media Container / Video Loop Slot */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex flex-col items-center justify-center p-4 border border-gray-800/80">
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {p.icon}
                </div>
                <span className="text-[11px] font-black text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {p.badge}
                </span>

                <div className="absolute top-2 left-2 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-bold text-gray-300">
                  {p.tag}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-base font-black text-white leading-snug">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
