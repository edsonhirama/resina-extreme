"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Truck,
  Check,
  ArrowRight,
  Sparkles,
  Flame,
  Clock,
  Package,
} from "lucide-react";

interface OfferSectionProps {
  id?: string;
}

export function OfferSection({ id = "oferta-checkout" }: OfferSectionProps) {
  const [selectedKit, setSelectedKit] = useState<number>(2);

  const kits = [
    {
      id: 1,
      title: "1 Frasco (500ml)",
      tag: "Ideal para Testar",
      highlight: false,
      tagBg: "bg-surface-border text-gray-200",
      image: "/images/kit-1.png",
      cars: "Rende 8 a 10 Carros",
      duration: "Até 10 meses de proteção",
      originalPrice: "R$ 197,00",
      price: "127",
      cents: ",90",
      installments: "ou 12x de R$ 12,84",
      freeGift: "1 Bico Borrifador Premium",
      shipping: "Frete Grátis Brasil",
    },
    {
      id: 2,
      title: "2 Frascos (1.000ml)",
      tag: "MAIS VENDIDO — 45% OFF",
      highlight: true,
      tagBg: "bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-black",
      image: "/images/kit-2.png",
      cars: "Rende 16 a 20 Carros",
      duration: "Até 20 meses de proteção",
      originalPrice: "R$ 394,00",
      price: "197",
      cents: ",90",
      installments: "ou 12x de R$ 19,87",
      freeGift: "1 Flanela Microfibra Profissional + 2 Bicos",
      shipping: "Frete Grátis Prioritário",
    },
    {
      id: 3,
      title: "3 Frascos (1.500ml)",
      tag: "Pacote Econômico Familiar",
      highlight: false,
      tagBg: "bg-emerald-950 text-emerald-300 border border-emerald-500/40",
      image: "/images/kit-3.png",
      cars: "Rende 24 a 30 Carros",
      duration: "Proteção total de longo prazo",
      originalPrice: "R$ 591,00",
      price: "247",
      cents: ",90",
      installments: "ou 12x de R$ 24,89",
      freeGift: "2 Flanelas Microfibra + 3 Bicos Borrifadores",
      shipping: "Frete Grátis Expresso",
    },
  ];

  const handleSelectAndOrder = (kitId: number) => {
    setSelectedKit(kitId);
    // WhatsApp Direct Order Action
    const chosen = kits.find((k) => k.id === kitId) || kits[1];
    const message = encodeURIComponent(
      `Olá! Gostaria de pedir o ${chosen.title} da Resina Extreme por R$ ${chosen.price}${chosen.cents} com Pagamento na Entrega e Frete Grátis.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section
      id={id}
      className="py-12 sm:py-20 bg-background relative border-b border-surface-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-300 mb-3 shadow-glow-amber">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>OFERTA EXCLUSIVA COM PAGAMENTO NA ENTREGA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Escolha o Seu Kit da Resina Extreme
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200">
            Você só paga quando o entregador bater na sua porta com o seu pedido. Risco zero.
          </p>
        </div>

        {/* Kits 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 items-stretch mb-12">
          {kits.map((kit) => {
            const isSelected = selectedKit === kit.id;
            return (
              <div
                key={kit.id}
                onClick={() => setSelectedKit(kit.id)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  kit.highlight
                    ? "bg-surface-card border-2 border-amber-500 shadow-glow-amber md:-translate-y-2"
                    : "bg-surface-card border border-surface-border hover:border-amber-500/40"
                }`}
              >
                {/* Tag Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wide shadow-md whitespace-nowrap ${kit.tagBg}`}
                  >
                    {kit.tag}
                  </span>
                </div>

                <div>
                  {/* Kit Image */}
                  <div className="mt-4 mb-4 aspect-[4/3] w-full rounded-2xl bg-zinc-950/80 border border-surface-border flex items-center justify-center p-3 overflow-hidden">
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className="max-h-full w-auto object-contain hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Title & Specs */}
                  <h3 className="text-xl sm:text-2xl font-black text-white text-center mb-1">
                    {kit.title}
                  </h3>
                  <div className="text-center text-xs text-amber-300 font-bold mb-4">
                    {kit.cars} • {kit.duration}
                  </div>

                  {/* Pricing Box */}
                  <div className="text-center py-3 px-4 rounded-2xl bg-surface-100/90 border border-surface-border mb-5">
                    <span className="text-xs text-gray-300 line-through block font-medium">
                      De {kit.originalPrice}
                    </span>
                    <div className="flex items-baseline justify-center text-white font-black">
                      <span className="text-sm mr-1 font-semibold text-gray-200">Por</span>
                      <span className="text-xs mr-0.5 text-amber-400">R$</span>
                      <span className="text-3xl sm:text-4xl text-amber-400 tracking-tight">
                        {kit.price}
                      </span>
                      <span className="text-base text-amber-400 font-bold">{kit.cents}</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold block mt-0.5">
                      {kit.installments}
                    </span>
                  </div>

                  {/* Included Items Checklist */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-100 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">
                        <strong>Brinde:</strong> {kit.freeGift}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-emerald-300 font-bold">
                        {kit.shipping}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Pagamento Somente no Ato da Entrega</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectAndOrder(kit.id);
                  }}
                  className={`w-full py-4 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                    kit.highlight
                      ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black shadow-glow-amber"
                      : "bg-surface-100 hover:bg-amber-500 text-white hover:text-black border border-amber-500/40"
                  }`}
                >
                  <span>PEDIR COM PAGAMENTO NA ENTREGA</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Security & COD Summary Strip */}
        <div className="rounded-2xl bg-surface-card border border-emerald-500/30 p-6 max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-100">
            <span className="flex items-center gap-2 font-bold text-emerald-400">
              <ShieldCheck className="w-5 h-5" /> 1. Você faz o pedido sem pagar nada agora
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="flex items-center gap-2 font-bold text-amber-400">
              <Truck className="w-5 h-5" /> 2. Enviamos até a sua porta com rastreio
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="flex items-center gap-2 font-bold text-white">
              <Package className="w-5 h-5 text-emerald-400" /> 3. Você confere o produto e paga ao entregador
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
