import React from "react";
import {
  Sparkles,
  Droplets,
  ShieldCheck,
  Zap,
  Layers,
  Palette,
  Check,
  Info,
  Car,
} from "lucide-react";

export function FeaturesSection() {
  const technicalFeatures = [
    {
      icon: Sparkles,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
      title: "Efeito Vitrificação Real",
      desc: "Cria uma microcamada de alto brilho que intensifica o reflexo e aprofunda o tom da cor original da lataria desde a primeira passada.",
    },
    {
      icon: Droplets,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
      title: "Super Hidrorrepelência (Efeito Lótus)",
      desc: "A água não se espalha: ela forma gotículas perfeitas que escorrem instantaneamente pela lataria, levando embora a poeira e a fuligem.",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
      title: "Escudo UV & Chuva Ácida",
      desc: "Protege o verniz contra a radiação solar causticante, fezes de pássaros, seiva de árvores e o desgaste químico da poluição urbana.",
    },
    {
      icon: Layers,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30",
      title: "Atenuação de Micro-Riscos",
      desc: "Preenche microscopicamente teias de aranha e marcas circulares leves causadas por panos de lavagem, uniformizando o reflexo.",
    },
    {
      icon: Zap,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10 border-yellow-500/30",
      title: "Rendimento Extremo (8 a 10 Aplicações)",
      desc: "Frasco de 500 mL de alta densidade líquida. Rende de 8 a 10 veículos inteiros, garantindo até 1 ano e meio de proteção contínua.",
    },
    {
      icon: Palette,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10 border-pink-500/30",
      title: "Compatível com Todas as Cores",
      desc: "Não mancha plásticos pretos nem borrachas. Seguro para pinturas escuras, claras, metálicas, perolizadas e foscas.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>ENGENHARIA AUTOMOTIVA DE ALTA PERFORMANCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Por Que a Resina Extreme é Diferente de Tudo o Que Você Já Usou?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Fórmula desenvolvida especificamente para o clima e as estradas brasileiras. Menos tempo
            lavando, mais orgulho ao olhar para o seu veículo.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {technicalFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl bg-surface-card border border-surface-border p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${feat.bgColor}`}
                >
                  <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest Technical Boundary Box */}
        <div className="mt-10 sm:mt-14 rounded-2xl bg-surface-100 border border-surface-border p-5 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Compromisso de Transparência & Honestidade Técnica
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                A <strong>Resina Extreme</strong> atua com excelência como um{" "}
                <span className="text-amber-400 font-semibold">
                  finalizador e protetor líquido de alto desempenho
                </span>
                . Ela não recupera vernizes já queimados até a lata nem remove arranhões profundos
                que atingiram o fundo do primer. Seu propósito é potencializar o brilho espelhado,
                gerar hidrorrepelência máxima e blindar pinturas íntegras contra o desgaste diário.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-surface-border text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-200">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Ideal para Carros, Motos, Caminhões e Vans</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Não engordura nem mancha plásticos ou frisos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
