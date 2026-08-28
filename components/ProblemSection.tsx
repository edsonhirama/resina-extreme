import React from "react";
import { AlertTriangle, DollarSign, Clock, Sparkles, ShieldX } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Polimentos Caros de R$ 800 a R$ 1.500",
      desc: "Estéticas automotivas cobram fortunas por procedimentos agressivos que desgastam o verniz original do seu carro com lixas e politrizes pesadas.",
    },
    {
      icon: Clock,
      title: "Ceras em Pasta que Cançam e Mancham",
      desc: "Você perde a tarde de sábado inteira esfregando a lataria, fica com o braço dolorido e ainda mancha os plásticos e borrachas de branco.",
    },
    {
      icon: ShieldX,
      title: "Chuva Ácida, Sol Forte e Fezes de Pássaro",
      desc: "Sem uma camada protetora nanotecnológica, o sol queima a tinta, o sereno cria manchas irreversíveis e o seu carro desvaloriza rapidamente.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-surface-100 border-b border-surface-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/50 px-3.5 py-1 text-xs sm:text-sm font-bold text-amber-300 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>A VERDADE QUE AS ESTÉTICAS NÃO CONTAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Cansado de Gastar Rios de Dinheiro Para Manter Seu Carro com Brilho?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200">
            A maioria dos produtos tradicionais ou é fraca demais e sai na primeira chuva, ou é tão
            complicada que você precisa pagar um profissional.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-surface-card border border-red-500/20 p-6 flex flex-col justify-between hover:border-red-500/40 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed font-normal">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Bridge Box */}
        <div className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-surface-200 via-surface-card to-surface-200 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-glow-amber">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-3">
            A Solução Definitiva: Tecnologia Líquida Sem Esforço
          </h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            A <strong className="text-white font-bold">Resina Extreme</strong> foi formulada para
            entregar a proteção e o brilho espelhado da vitrificação profissional, diretamente nas
            suas mãos. Uma aplicação rápida com flanela a cada 30 a 60 dias mantém seu veículo impecável.
          </p>
        </div>
      </div>
    </section>
  );
}
