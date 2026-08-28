"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Gift,
  ArrowRight,
  Flame,
  Check,
  Sparkles,
} from "lucide-react";

interface OfferSectionProps {
  id?: string;
}

export function OfferSection({ id = "oferta-checkout" }: OfferSectionProps) {
  const [selectedKit, setSelectedKit] = useState<number>(2); // Kit 2 default (Mais vendido)
  const [kitImgErrors, setKitImgErrors] = useState<{ [key: number]: boolean }>({});

  const handleKitImgError = (kitId: number) => {
    setKitImgErrors((prev) => ({ ...prev, [kitId]: true }));
  };

  const kits = [
    {
      id: 1,
      name: "1 FRASCO (500 mL)",
      subtitle: "Para experimentar e proteger 1 veículo",
      rendimento: "8 a 10 aplicações completas",
      durabilidade: "Até 1 ano de proteção contínua",
      originalPrice: "R$ 179,90",
      price: "127,90",
      image: "/images/kit-1.png",
      bonus: null,
      tag: "Iniciante",
      badgeClass: "bg-surface-border text-gray-300",
      highlight: false,
      checkoutUrl: "#",
    },
    {
      id: 2,
      name: "2 FRASCOS (1.000 mL)",
      subtitle: "Kit Mais Vendido para Família e Manutenção",
      rendimento: "16 a 20 aplicações completas",
      durabilidade: "Até 2 anos de proteção contínua",
      originalPrice: "R$ 359,80",
      price: "197,90",
      image: "/images/kit-2.png",
      bonus: "1x Flanela Microfibra Profissional Grátis",
      tag: "MAIS VENDIDO - 45% OFF",
      badgeClass: "bg-amber-500 text-black font-black",
      highlight: true,
      checkoutUrl: "#",
    },
    {
      id: 3,
      name: "3 FRASCOS (1.500 mL)",
      subtitle: "Máxima Economia para Carros, Motos e Caminhões",
      rendimento: "24 a 30 aplicações completas",
      durabilidade: "Até 3 anos de proteção contínua",
      originalPrice: "R$ 539,70",
      price: "257,90",
      image: "/images/kit-3.png",
      bonus: "2x Flanelas Microfibra de Alta Densidade Grátis",
      tag: "MELHOR CUSTO-BENEFÍCIO",
      badgeClass: "bg-emerald-500 text-black font-black",
      highlight: false,
      checkoutUrl: "#",
    },
  ];

  return (
    <section id={id} className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-300 shadow-glow-amber mb-3">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>OFERTA EXCLUSIVA COM PAGAMENTO NA ENTREGA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Escolha o Seu Kit e Só Pague Quando Receber
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Sem cobrança antecipada no cartão. O entregador leva até você com Frete Grátis e você paga
            em mãos em dinheiro ou cartão.
          </p>
        </div>

        {/* 3 Kit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          {kits.map((kit) => {
            const isSelected = selectedKit === kit.id;
            return (
              <div
                key={kit.id}
                onClick={() => setSelectedKit(kit.id)}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 ${
                  isSelected
                    ? "bg-surface-card border-2 border-amber-500 shadow-glow-amber scale-100 sm:scale-105 z-10"
                    : "bg-surface-100 border border-surface-border hover:border-gray-600 opacity-90"
                }`}
              >
                {/* Tag Header */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`text-[10px] sm:text-xs uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md ${kit.badgeClass}`}
                  >
                    {kit.tag}
                  </span>
                </div>

                <div>
                  {/* Subtitle & Selection Check */}
                  <div className="flex items-center justify-between mt-2 mb-3">
                    <span className="text-xs font-semibold text-gray-400">{kit.subtitle}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-amber-400 bg-amber-500" : "border-gray-500"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                    </div>
                  </div>

                  {/* Kit Image / Mockup Display */}
                  <div className="h-32 w-full rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center p-2 mb-3 overflow-hidden">
                    {!kitImgErrors[kit.id] ? (
                      <img
                        src={kit.image}
                        alt={kit.name}
                        className="max-h-full max-w-full object-contain drop-shadow-md"
                        onError={() => handleKitImgError(kit.id)}
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-amber-400">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-xs font-bold text-white uppercase">{kit.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-1">
                    {kit.name}
                  </h3>
                  <div className="text-xs text-amber-400 font-semibold mb-4">
                    ✓ {kit.rendimento} ({kit.durabilidade})
                  </div>

                  {/* Price */}
                  <div className="my-4 py-4 border-y border-surface-border">
                    <span className="text-xs text-gray-400 line-through block">
                      De {kit.originalPrice}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xs text-gray-300 font-bold">Por apenas</span>
                      <span className="text-2xl sm:text-3xl font-black text-white">
                        R$ {kit.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold block mt-1.5 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      Frete Grátis • Pagamento no ato da entrega
                    </span>
                  </div>

                  {/* Bonus if any */}
                  {kit.bonus && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2.5 mb-4 flex items-center gap-2 text-xs text-amber-300 font-medium">
                      <Gift className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      <span>{kit.bonus}</span>
                    </div>
                  )}

                  {/* Benefit list */}
                  <ul className="space-y-2 text-xs text-gray-300 mb-6">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Efeito vitrificação & hidrorrepelência extrema</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Compatível com qualquer cor de pintura</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Zero risco: Pague somente ao entregador</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Action Button */}
                <a
                  href={kit.checkoutUrl}
                  className={`w-full py-4 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    kit.highlight
                      ? "gloss-effect bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black shadow-glow-amber hover:from-amber-400 hover:to-yellow-300"
                      : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-glow-emerald"
                  }`}
                >
                  <span>PEDIR COM PAGAMENTO NA ENTREGA</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            );
          })}
        </div>

        {/* COD Trust & Security Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-8 text-center shadow-xl">
          <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>MÉTODO 100% BLINDADO CONTRA GOLPES</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-2">
            Como Você Realiza o Seu Pedido?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6">
            Basta clicar no botão do kit desejado acima. Você será direcionado para confirmar seus
            dados de entrega. Nós despachamos imediatamente e você paga em dinheiro ou cartão no
            momento em que o entregador chegar na sua residência.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
            <div className="bg-surface-100 rounded-xl p-3 border border-surface-border">
              <span className="text-amber-400 font-bold block mb-0.5">1. Escolha o Kit</span>
              <span>Clique no botão do kit ideal</span>
            </div>
            <div className="bg-surface-100 rounded-xl p-3 border border-surface-border">
              <span className="text-emerald-400 font-bold block mb-0.5">2. Envio com Rastreio</span>
              <span>Receba o código no WhatsApp</span>
            </div>
            <div className="bg-surface-100 rounded-xl p-3 border border-surface-border">
              <span className="text-amber-400 font-bold block mb-0.5">3. Pague em Mãos</span>
              <span>Cartão ou dinheiro na entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
