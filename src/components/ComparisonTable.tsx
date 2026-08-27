import React from "react";

export function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Facilidade de Aplicação",
      resina: "Você mesmo faz em 15 min (sem máquina)",
      polimento: "Exige oficina e equipamento profissional",
      cera: "Demorado e cansativo (várias demãos)",
    },
    {
      feature: "Investimento / Custo",
      resina: "Econômico + Frete Grátis",
      polimento: "Caro (R$ 600 a R$ 1.200)",
      cera: "Custo contínuo sem resultado duradouro",
    },
    {
      feature: "Resultado Visual",
      resina: "Brilho espelhado profundo imediato",
      polimento: "Bom, mas desgasta o verniz original",
      cera: "Brilho superficial e temporário",
    },
    {
      feature: "Pagamento e Confiança",
      resina: "Pague Somente na Entrega (COD)",
      polimento: "Pagamento adiantado obrigatório",
      cera: "Cartão / PIX adiantado na compra",
    },
    {
      feature: "Desgaste da Pintura",
      resina: "Zero desgaste (sem abrasivos agressivos)",
      polimento: "Desgasta e afina a camada do verniz",
      cera: "Não desgasta, mas não protege",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-900/30 border-t border-gray-800 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            COMPARAÇÃO DIRETA
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Resina Extreme vs. Outras Opções
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Entenda por que milhares de motoristas abandonaram as ceras comuns e as oficinas caras.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-3xl border-2 border-emerald-500/30 bg-gray-950 shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm text-gray-300 min-w-[620px]">
            <thead className="bg-gray-900/90 text-gray-200 border-b border-gray-800">
              <tr>
                <th className="p-4 sm:p-5 font-black text-white text-base">Critério</th>
                <th className="p-4 sm:p-5 font-black text-emerald-400 text-base bg-emerald-950/40 border-x border-emerald-500/30">
                  Resina Extreme ⭐
                </th>
                <th className="p-4 sm:p-5 font-bold text-gray-400">Polimento em Estúdio</th>
                <th className="p-4 sm:p-5 font-bold text-gray-400">Cera Comum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-900/30 transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-white">{row.feature}</td>
                  <td className="p-4 sm:p-5 font-black text-emerald-300 bg-emerald-950/30 border-x border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-black">✓</span>
                      <span>{row.resina}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      <span>{row.polimento}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400">▲</span>
                      <span>{row.cera}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
