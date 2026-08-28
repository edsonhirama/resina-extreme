"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, ThumbsUp, Car, CheckCircle2, Play } from "lucide-react";

export function TestimonialsSection() {
  const [avatarErrors, setAvatarErrors] = useState<{ [key: number]: boolean }>({});

  const handleAvatarError = (idx: number) => {
    setAvatarErrors((prev) => ({ ...prev, [idx]: true }));
  };

  const reviewImages = [
    "/images/avaliacao-1.png",
    "/images/avaliacao-2.png",
    "/images/avaliacao-3.png",
    "/images/avaliacao-4.png",
  ];

  const ugcVideos = [
    {
      id: "eiCemVgH7ek",
      title: "Cliente com Fiat Siena",
      badge: "Depoimento Real Gravado",
      desc: "Resultado no capô e na lateral após aplicar a Resina Extreme.",
    },
    {
      id: "P0OHaUvYonk",
      title: "Cliente com Carro Preto",
      badge: "Efeito Espelho Impressionante",
      desc: "Veja a profundidade da cor preta e a eliminação do aspecto opaco.",
    },
  ];

  const testimonials = [
    {
      name: "Roberto Silveira, 47 anos",
      location: "Campinas - SP",
      vehicle: "Toyota Corolla Preto",
      image: "/images/cliente-1.jpg",
      stars: 5,
      comment:
        "Quem tem carro preto sabe o desespero que é manter limpo. Passei a Resina Extreme em menos de 20 minutos no final de semana. O carro parece que acabou de sair do espelhamento de R$ 1.500. Não manchou borracha nenhuma. O melhor é que só paguei quando o entregador chegou.",
      date: "Há 4 dias",
    },
    {
      name: "Carlos E. Fontana, 53 anos",
      location: "Cascavel - PR",
      vehicle: "Toyota Hilux Prata (Uso em Estrada de Terra)",
      image: "/images/cliente-2.jpg",
      stars: 5,
      comment:
        "Pego muita poeira e barro de fazenda toda semana. O efeito da água escorrendo é impressionante. Agora chego em casa e só jogo uma mangueira de água que a sujeira desce toda sem precisar esfregar. Produto de extrema qualidade.",
      date: "Há 1 semana",
    },
    {
      name: "Marcelo Andrade, 38 anos",
      location: "Belo Horizonte - MG",
      vehicle: "Honda CB 650R & Honda Civic",
      image: "/images/cliente-3.jpg",
      stars: 5,
      comment:
        "Passei na moto e no carro. Na moto os insetos da estrada saem com um pano úmido sem esforço nenhum. E o rendimento é absurdo, usei pouquíssimo do frasco de 500ml. Vale cada centavo!",
      date: "Há 2 semanas",
    },
    {
      name: "Valdomiro Nascimento, 59 anos",
      location: "Anápolis - GO",
      vehicle: "Caminhão Scania R450",
      image: "/images/cliente-4.jpg",
      stars: 5,
      comment:
        "Eu era desconfiado de comprar produto pela internet, mas a opção de pagar na entrega me deu total segurança. O entregador chegou, abri o pacote, conferi e passei o cartão. Brilho nota 10 na cabine!",
      date: "Há 3 semanas",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-surface-200 border-b border-surface-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>OPINIÃO DE QUEM JÁ TESTOU E APROVOU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Mais de 14.800 Proprietários Satisfeitos em Todo o Brasil
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Veja vídeos gravados na garagem pelos próprios clientes e relatos reais de quem usa no dia a dia.
          </p>
        </div>

        {/* 2 UGC Real Customer 9:16 Videos Grid */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Play className="w-4 h-4 fill-amber-400" />
              Depoimentos Reais Gravados por Clientes (Formato 9:16)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {ugcVideos.map((video, idx) => (
              <div
                key={idx}
                className="rounded-3xl border-2 border-amber-500/30 bg-surface-card p-3 shadow-xl flex flex-col justify-between hover:border-amber-500/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-bold text-white">{video.title}</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold">
                    {video.badge}
                  </span>
                </div>

                {/* 9:16 Vertical Video Container */}
                <div className="relative aspect-[9/16] w-full rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800 shadow-inner">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?controls=1&modestbranding=1&rel=0&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover border-0"
                  />
                </div>

                <p className="text-[11px] text-gray-400 mt-2 px-1 text-center">{video.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Customer Screenshots Grid */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Prints Reais de Mensagens Recebidas
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {reviewImages.map((src, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-surface-border bg-zinc-900 shadow-md hover:border-amber-500/50 transition-all hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Avaliação de cliente ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-amber-500/30 transition-colors"
            >
              <div>
                {/* Header Rating & Verified */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    Pagou na Entrega
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-4">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-surface-border/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar / Vehicle Photo */}
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center flex-shrink-0">
                    {!avatarErrors[idx] ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={() => handleAvatarError(idx)}
                      />
                    ) : (
                      <Car className="w-5 h-5 text-amber-400" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1 text-amber-400 font-medium">
                        {t.vehicle}
                      </span>
                      <span>•</span>
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 flex-shrink-0">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner Badge */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-xl bg-surface-100 border border-surface-border text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" /> 100% dos Pedidos Enviados com Rastreio
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4" /> Pagamento Seguro no Ato da Entrega
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
