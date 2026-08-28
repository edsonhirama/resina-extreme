"use client";

import React, { useState } from "react";
import { Sparkles, Check, Clock, SprayCan as Spray, Layers, Zap, Play } from "lucide-react";

export function HowToUseSection() {
  const [showVideo, setShowVideo] = useState(false);

  const steps = [
    {
      step: "01",
      title: "Lave e Seque o Veículo",
      desc: "Faça uma lavagem comum para remover a sujeira pesada e seque a lataria na sombra.",
      icon: Clock,
      tip: "Não aplique sob o sol causticante ou com a lataria quente.",
    },
    {
      step: "02",
      title: "Borrife a Resina Extreme",
      desc: "Aplique 2 a 3 borrifadas da Resina Extreme diretamente em uma flanela de microfibra ou na peça.",
      icon: Zap,
      tip: "Aplique peça por peça (porta, capô, teto) para acabamento uniforme.",
    },
    {
      step: "03",
      title: "Lustre e Veja o Espelho",
      desc: "Espalhe suavemente e dê o acabamento final com o lado seco da flanela. O brilho salta aos olhos na hora.",
      icon: Sparkles,
      tip: "Não requer força, máquinas rotativas ou esforço cansativo.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>PRATICIDADE ABSOLUTA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Como Aplicar em Menos de 15 Minutos na Sua Garagem
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Você não precisa de habilidades profissionais ou ferramentas especiais. Veja o passo a
            passo simples e assista ao vídeo prático de aplicação.
          </p>
        </div>

        {/* Grid: 3 Steps + 9:16 Video Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left: 3 Steps */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-surface-card border border-surface-border p-5 flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-black text-lg flex-shrink-0">
                      {item.step}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
                        <Check className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{item.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: 9:16 Vertical Video Embed (Como Aplicar) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[300px] rounded-3xl border-2 border-amber-500/40 bg-surface-card p-2 sm:p-3 shadow-glow-amber overflow-hidden">
              <div className="text-center pb-2">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1">
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                  Vídeo Tutorial Rápido (9:16)
                </span>
              </div>

              <div className="relative aspect-[9/16] w-full rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800 shadow-inner">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/7W-KbEpvcQQ?controls=1&modestbranding=1&rel=0&playsinline=1"
                  title="Como aplicar a Resina Extreme"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="rounded-xl bg-surface-100 border border-surface-border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Pronto! Seu veículo protegido por 1 a 2 meses
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-300">
                1 frasco de 500ml rende de 8 a 10 aplicações completas. Economia máxima.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("oferta-checkout");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors shadow-glow-emerald"
          >
            Garantir Meu Frasco na Entrega
          </button>
        </div>
      </div>
    </section>
  );
}
