import React from "react";
import { ShieldCheck, Award, RotateCcw, CheckCircle2 } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 sm:py-16 bg-surface-200 border-b border-surface-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-surface-card border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
            {/* Badge Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 p-1 flex items-center justify-center shadow-glow-amber flex-shrink-0">
              <div className="w-full h-full bg-zinc-950 rounded-xl flex flex-col items-center justify-center p-2 text-center">
                <Award className="w-8 h-8 text-amber-400 mb-0.5" />
                <span className="text-[10px] font-black text-amber-400 tracking-wider">30 DIAS</span>
                <span className="text-[8px] font-bold text-gray-300">GARANTIA</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>COMPROMISSO RISCO ZERO</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-2">
                Garantia Incondicional de Satisfação
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Temos tanta certeza do poder de vitrificação e hidrorrepelência da{" "}
                <strong>Resina Extreme</strong> que o seu risco é absolutamente zero. Você só paga
                quando receber o produto em mãos e ainda conta com suporte completo para garantir o
                resultado no seu veículo.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-gray-200">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Pagamento na sua porta
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Suporte via WhatsApp
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Conforme CDC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
