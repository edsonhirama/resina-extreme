"use client";

import React, { useState } from "react";
import { Sparkles, Droplets, Car, Shield, Play, CheckCircle2, X } from "lucide-react";

interface BeforeAfterShowcaseProps {
  onCtaClick?: () => void;
}

export function BeforeAfterShowcase({ onCtaClick }: BeforeAfterShowcaseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // States to track image load errors
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  const tabs = [
    {
      id: "brilho",
      label: "Brilho & Reflexo",
      icon: Sparkles,
      title: "Pintura Opaca vs. Brilho Espelhado de Showroom",
      desc: "Observe como a Resina Extreme realça a profundidade da cor, eliminando o aspecto esbranquiçado e sem vida da lataria.",
      beforeImg: "/images/antes-brilho.jpg",
      afterImg: "/images/depois-brilho.jpg",
      beforeLabel: "Sem Resina Extreme (Opaco e Sem Reflexo)",
      afterLabel: "Com Resina Extreme (Efeito Espelho Profundo)",
      badge: "Realce Imediato",
    },
    {
      id: "hidro",
      label: "Hidrorrepelência",
      icon: Droplets,
      title: "A Água e a Lama Não Conseguem Aderir",
      desc: "A camada hidrofóbica faz a água escorrer em gotas esféricas na hora, evitando marcas de chuva e acúmulo de sujeira.",
      beforeImg: "/images/antes-hidro.jpg",
      afterImg: "/images/depois-hidro.jpg",
      beforeLabel: "Água acumulada e empoçada na pintura",
      afterLabel: "Gotas deslizando instantaneamente",
      badge: "Efeito Lótus",
    },
    {
      id: "motos-caminhoes",
      label: "Motos & Pesados",
      icon: Car,
      title: "Proteção Extrema Para Quem Pega Estrada",
      desc: "Tanques de moto reluzentes e frentes de caminhões protegidas contra insetos, piche e intempéries do asfalto.",
      beforeImg: "/images/demo-moto.jpg",
      afterImg: "/images/demo-caminhao.jpg",
      beforeLabel: "Exposto ao desgaste do asfalto",
      afterLabel: "Blindagem de fácil lavagem",
      badge: "Multiveículos",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="py-12 sm:py-20 bg-surface-200 border-b border-surface-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-bold text-cyan-400 mb-3">
            <Droplets className="w-3.5 h-3.5" />
            <span>RESULTADOS VISÍVEIS NA HORA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Veja a Diferença Real no Seu Veículo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            A transformação é instantânea. Basta aplicar com a flanela para ver o verniz ganhar vida
            novamente.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 no-scrollbar">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-black shadow-glow-amber scale-105"
                    : "bg-surface-card text-gray-300 border border-surface-border hover:bg-surface-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Card Display */}
        <div className="rounded-2xl bg-surface-card border border-surface-border p-4 sm:p-7 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-surface-border">
            <div>
              <span className="inline-block bg-amber-500/20 text-amber-300 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full mb-1">
                {current.badge}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-white">
                {current.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md sm:text-right">
              {current.desc}
            </p>
          </div>

          {/* Side-by-Side Visual Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            {/* Before Box */}
            <div className="relative rounded-xl border border-red-500/30 bg-zinc-900/90 aspect-[16/10] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <div className="absolute top-2.5 left-2.5 bg-red-950/90 border border-red-500/50 text-red-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow z-10">
                ANTES / SEM PROTEÇÃO
              </div>
              
              {!imgErrors[`before-${current.id}`] ? (
                <img
                  src={current.beforeImg}
                  alt={current.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => handleImgError(`before-${current.id}`)}
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-2">
                    <Shield className="w-6 h-6 opacity-60" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-300 max-w-xs">
                    {current.beforeLabel}
                  </p>
                  <span className="text-[10px] text-gray-400 mt-1">
                    Pintura desprotegida acumulando sujeira e manchas
                  </span>
                </>
              )}
            </div>

            {/* After Box */}
            <div className="relative rounded-xl border-2 border-emerald-500/50 bg-gradient-to-tr from-zinc-900 to-zinc-800 aspect-[16/10] flex flex-col items-center justify-center p-4 text-center overflow-hidden gloss-effect shadow-glow-emerald">
              <div className="absolute top-2.5 right-2.5 bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded shadow flex items-center gap-1 z-10">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                DEPOIS COM RESINA EXTREME
              </div>

              {!imgErrors[`after-${current.id}`] ? (
                <img
                  src={current.afterImg}
                  alt={current.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => handleImgError(`after-${current.id}`)}
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                    <Sparkles className="w-6 h-6 text-amber-300" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white max-w-xs">
                    {current.afterLabel}
                  </p>
                  <span className="text-[10px] text-amber-300 mt-1 font-semibold">
                    Superfície vitrificada, ultra lisa e espelhada
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Video Demonstration Callout */}
          <div className="mt-4 rounded-xl bg-surface-100 border border-surface-border p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500 group-hover:bg-amber-400 flex items-center justify-center text-black shadow-glow-amber flex-shrink-0 transition-colors">
                <Play className="w-4 h-4 fill-black ml-0.5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  Ver o teste da água e do reflexo em vídeo
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">Assistir</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Mais de 14 mil motoristas comprovaram a facilidade de aplicação no dia a dia.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("oferta-checkout");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              type="button"
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors"
            >
              Testar no Meu Carro →
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-3 bg-zinc-900 border-b border-zinc-800">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-amber-400" /> Demonstração: Resina Extreme em Ação
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster="/images/video-thumbnail.jpg"
              >
                <source src="/videos/demonstracao-hidro.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
