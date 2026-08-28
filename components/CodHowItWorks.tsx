import React from "react";
import { ShieldCheck, MapPin, Truck, CreditCard, CheckCircle2 } from "lucide-react";

export function CodHowItWorks() {
  const steps = [
    {
      num: "1",
      icon: MapPin,
      title: "1. Escolha o Seu Kit",
      desc: "Você não precisa cadastrar cartão de crédito nem pagar nada antecipado. Basta selecionar o kit desejado.",
      badge: "Sem Cartão Online",
    },
    {
      num: "2",
      icon: Truck,
      title: "2. Enviamos Até Você",
      desc: "Preparamos seu frasco de Resina Extreme e enviamos com código de rastreamento direto para o seu WhatsApp.",
      badge: "Envio Rápido",
    },
    {
      num: "3",
      icon: CreditCard,
      title: "3. Pague Somente ao Receber",
      desc: "O entregador chega na sua porta. Você confere o produto em mãos e faz o pagamento na hora em dinheiro ou cartão.",
      badge: "Risco Zero",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-surface-card border-b border-surface-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-300 shadow-glow-emerald mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>MÉTODO EXCLUSIVO: PAGAMENTO NA ENTREGA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Como Funciona o Pagamento no Ato da Entrega?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Você só paga quando o produto estiver fisicamente na sua mão. Sem surpresas e sem risco de
            golpe na internet.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-surface-100 border border-surface-border p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Transparência total</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
