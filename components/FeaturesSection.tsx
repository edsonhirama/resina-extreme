import React from "react";
import {
  Sparkles,
  Droplets,
  Shield,
  Sun,
  Layers,
  Car,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Efeito Vitrificação Espelhado",
      desc: "Revestimento finalizador que reaviva a cor, fecha os microporos do verniz e entrega reflexo límpido de showroom na primeira passada.",
    },
    {
      icon: Droplets,
      title: "Super Hidrorrepelência (Efeito Lótus)",
      desc: "A água bate e escorre em esferas perfeitas. Evita acúmulo de sujeira, barro e marcas d'água secas após a chuva.",
    },
    {
      icon: Sun,
      title: "Escudo Anti-UV e Chuva Ácida",
      desc: "Cria uma barreira química transparente que blinda a pintura contra a radiação solar causticante, maresia e fuligem de estrada.",
    },
    {
      icon: Layers,
      title: "Atenuação de Microrriscos",
      desc: "Preenche visualmente as marcas leves de 'teia de aranha' (swirls) causadas por lavagens antigas, devolvendo a uniformidade à peça.",
    },
    {
      icon: Car,
      title: "Frasco Econômico de 500 mL",
      desc: "Rendimento extremo: uma única garrafa cobre de 8 a 10 veículos de passeio completos. Cada aplicação dura de 1 a 2 meses.",
    },
    {
      icon: Shield,
      title: "100% Seguro para Plásticos e Borrachas",
      desc: "Fórmula líquida avançada que não resseca borrachas e não deixa manchas esbranquiçadas em frisos, retrovisores ou para-choques.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3.5 py-1 text-xs sm:text-sm font-bold text-emerald-300 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>ENGENHARIA E NANOTECNOLOGIA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Por Que a Resina Extreme é Superior às Ceras Comuns?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200">
            Diferenciais técnicos comprovados na prática para quem exige máxima proteção com mínimo esforço.
          </p>
        </div>

        {/* Features 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Honest Box (Transparência Técnica) */}
        <div className="rounded-2xl bg-surface-100 border border-amber-500/30 p-5 sm:p-6 max-w-3xl mx-auto flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            <strong className="text-white block text-sm sm:text-base font-bold mb-1">
              Compromisso e Honestidade Técnica:
            </strong>
            A Resina Extreme é um revestimento selante líquido finalizador de alta performance. Ela
            proporciona brilho profundo, super hidrorrepelência e atenua marcas finas de lavagem.
            Contudo, não substitui funilaria para riscos profundos na lata (primer exposto) ou
            verniz já completamente calcinado/queimado pelo tempo.
          </div>
        </div>
      </div>
    </section>
  );
}
