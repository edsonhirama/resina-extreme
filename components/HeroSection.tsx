"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Award,
  Star,
  CheckCircle2,
  ArrowRight,
  Truck,
  Car,
} from "lucide-react";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollToOffer = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById("oferta-checkout");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-4 pb-12 sm:pt-8 sm:pb-20 border-b border-surface-border">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[90%] sm:w-[650px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Trust & COD Pill */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 shadow-glow-emerald">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>RISCO ZERO: SÓ PAGUE QUANDO O PRODUTO CHEGAR EM SUAS MÃOS</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.15]">
            O Efeito Espelho e Vitrificação no Seu Veículo em{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Menos de 15 Minutos
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Revestimento líquido finalizador com nanotecnologia de{" "}
            <strong className="text-white font-bold">super hidrorrepelência</strong>. Repele poeira,
            chuva ácida e raios UV, garantindo brilho profundo de showroom por até{" "}
            <strong className="text-amber-400 font-bold">60 dias por aplicação</strong>.
          </p>
        </div>

        {/* Core Quick Bullets (Mobile Friendly Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium leading-tight">
              Efeito Vitrificação Real
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border">
            <Droplets className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium leading-tight">
              Super Hidrorrepelência
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border">
            <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium leading-tight">
              Rende 8 a 10 Carros (500ml)
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border">
            <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium leading-tight">
              Carros, Motos e Caminhões
            </span>
          </div>
        </div>

        {/* Central Visual Showcase (Vertical 9:16 Video Hero) & CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left / 9:16 Vertical Video Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-3xl border-2 border-amber-500/40 bg-surface-card p-2 sm:p-3 shadow-glow-amber overflow-hidden group">
              {/* Badges Over Video */}
              <div className="absolute top-5 left-5 bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg z-20">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                VÍDEO REAL: EFEITO ESPELHO
              </div>

              <div className="absolute top-5 right-5 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg z-20">
                <ShieldCheck className="w-3.5 h-3.5" />
                PAGAMENTO NA ENTREGA
              </div>

              {/* 9:16 Responsive Vertical Embed */}
              <div className="relative aspect-[9/16] w-full rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800 shadow-inner">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/FocMjWewbtk?autoplay=1&mute=1&loop=1&playlist=FocMjWewbtk&controls=1&modestbranding=1&rel=0&playsinline=1"
                  title="Resina Extreme - Demonstração no Hero"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover border-0"
                />
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="bg-surface-100 rounded-lg p-1.5 border border-surface-border">
                  <span className="block text-gray-400 text-[9px]">Rendimento</span>
                  <span className="font-bold text-white text-[11px]">8-10 Carros</span>
                </div>
                <div className="bg-surface-100 rounded-lg p-1.5 border border-surface-border">
                  <span className="block text-gray-400 text-[9px]">Durabilidade</span>
                  <span className="font-bold text-amber-400 text-[11px]">1 a 2 Meses</span>
                </div>
                <div className="bg-surface-100 rounded-lg p-1.5 border border-surface-border">
                  <span className="block text-gray-400 text-[9px]">Aplicação</span>
                  <span className="font-bold text-emerald-400 text-[11px]">Em 15 Minutos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Conversion & Direct Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Social rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-200">
                4.9/5 <span className="text-gray-400 font-normal">(+14.820 clientes no Brasil)</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase leading-snug mb-3">
              Brilho Profundo e Blindagem Contra Sol e Chuva Ácida.
            </h3>

            <p className="text-sm text-gray-300 mb-5 leading-relaxed">
              Desenvolvida para você aplicar na sua própria garagem, com apenas uma flanela de
              microfibra. Sem máquinas rotativas, sem cansaço e sem correr risco de queimar o
              verniz original do seu veículo.
            </p>

            {/* Benefit Checkmarks */}
            <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Efeito Vitrificação:</strong> Intensifica e aprofunda o reflexo da cor original.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Fácil de Limpar:</strong> Sujeira, poeira e lama saem com apenas um jato de água.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Economia Real:</strong> Custo menor que R$ 15 por aplicação no seu veículo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Compatibilidade Universal:</strong> Funciona em qualquer cor de pintura.
                </span>
              </li>
            </ul>

            {/* Primary High-Conversion CTA Button */}
            <div className="space-y-3">
              <button
                onClick={scrollToOffer}
                type="button"
                className="w-full gloss-effect bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-glow-amber transition-all transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <span>QUERO RECEBER E PAGAR NA ENTREGA</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
              </button>

              {/* COD Security Trust Strip below button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Sem cartão agora • Pague ao entregador
                </span>
                <span className="flex items-center gap-1 text-gray-300">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  Frete Grátis incluso hoje
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
