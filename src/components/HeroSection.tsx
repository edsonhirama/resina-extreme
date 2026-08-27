import React from "react";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const handleScrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const element = document.getElementById("oferta");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-8 pb-14 sm:pt-14 sm:pb-24 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Anti-Scam / COD Trust Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-black text-emerald-300 shadow-lg shadow-emerald-950/50">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>🚨 RISCO ZERO: RECEBA EM CASA E SÓ PAGUE NA ENTREGA</span>
          </div>
        </div>

        {/* Headline BAB Framework */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white">
            <span className="text-gray-400 font-extrabold line-through block sm:inline text-2xl sm:text-4xl md:text-5xl">
              Pintura Queimada e Fosca?
            </span>{" "}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Brilho Espelhado de Fábrica
            </span>{" "}
            em 15 Minutos na Garagem
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            A nanotecnologia da <strong className="text-white font-black">Resina Extreme</strong> revitaliza e cria uma película de proteção vitrificada.{" "}
            <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Você só paga quando o entregador chegar na sua porta
            </span>
            . Sem cartão e sem PIX adiantado.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-gray-200">
            <div className="flex items-center gap-1.5 bg-gray-900/90 border border-gray-800 px-3.5 py-1.5 rounded-full">
              <span className="text-emerald-400 font-black">✓</span> Sem Máquina / Aplicação Fácil
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900/90 border border-gray-800 px-3.5 py-1.5 rounded-full">
              <span className="text-emerald-400 font-black">✓</span> Proteção UV & Hidrorrepelente
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900/90 border border-gray-800 px-3.5 py-1.5 rounded-full">
              <span className="text-emerald-400 font-black">✓</span> Frete Grátis Todo Brasil
            </div>
          </div>

          <div className="mt-8 max-w-md mx-auto">
            <a
              href="#oferta"
              onClick={handleScrollToOffer}
              className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 p-4 sm:p-5 text-base sm:text-lg font-black text-gray-950 shadow-2xl shadow-emerald-500/40 transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
            >
              <svg className="w-6 h-6 flex-shrink-0 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="uppercase tracking-wide">QUERO RECEBER E PAGAR NA ENTREGA</span>
            </a>

            <p className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-semibold">
              <span>🔒 Zero pagamento antecipado · Teste no capô sem risco</span>
            </p>
          </div>
        </div>

        {/* Hero Visual Mock com Foto Real UGC 9:16 */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl border-2 border-emerald-500/40 bg-gray-900 p-2.5 shadow-2xl shadow-emerald-950/80 overflow-hidden">
            <div className="flex items-center justify-between px-2 py-1 mb-2 text-[11px] font-black text-gray-400 uppercase">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                VÍDEO REAL: APLICAÇÃO EM 60S
              </span>
              <span>100% NA GARAGEM</span>
            </div>

            <div className="relative aspect-[9/15] w-full overflow-hidden rounded-2xl bg-gray-950 border border-gray-800">
              <img
                src="/images/hero_video.jpg"
                alt="Vídeo real de aplicação da Resina Extreme no capô"
                className="w-full h-full object-cover"
                loading="eager"
              />

              <div className="absolute top-3 left-3 z-10 rounded-full bg-black/80 border border-emerald-500/50 px-3 py-1 text-[11px] font-black text-emerald-400 backdrop-blur-md">
                ✨ 50% ANTES / 50% DEPOIS
              </div>

              <a
                href="#galeria"
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/25 hover:bg-black/15 transition-colors group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-gray-950 shadow-2xl shadow-emerald-500/60 transition-transform group-hover:scale-110">
                  <svg className="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="mt-3 rounded-full bg-black/80 px-3.5 py-1 text-xs font-black tracking-wider text-white uppercase backdrop-blur-sm shadow">
                  Ver Antes e Depois ↓
                </span>
              </a>

              <div className="absolute bottom-3 left-3 right-3 z-10 rounded-xl bg-black/85 border border-white/10 p-2.5 backdrop-blur-md text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-white">Resina Extreme Auto</div>
                    <div className="text-[10px] font-semibold text-emerald-400">Brilho Vitrificado Imediato</div>
                  </div>
                  <div className="flex items-center text-amber-400 text-xs font-black">
                    ★★★★★ <span className="text-[10px] text-gray-300 ml-1">4.9 (14.8k)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
