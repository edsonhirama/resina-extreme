"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o Pagamento na Entrega?",
      a: "Você não passa cartão nem paga nada agora no site. Você escolhe o seu kit, preenche seu endereço de entrega e nós enviamos o pacote. Quando o entregador chegar na sua casa, você confere o pacote e realiza o pagamento diretamente a ele no cartão de débito/crédito, Pix ou dinheiro.",
    },
    {
      q: "A Resina Extreme mancha os plásticos ou borrachas do carro?",
      a: "Não! Diferente das ceras em pasta tradicionais de carnaúba que deixam resíduos esbranquiçados horríveis nos plásticos pretos e borrachas, a fórmula líquida da Resina Extreme é 100% segura para pintura, vidros, faróis, plásticos e borrachas.",
    },
    {
      q: "Preciso de politriz ou máquina para aplicar?",
      a: "Não precisa de nenhuma ferramenta profissional. Basta borrifar a Resina Extreme em uma flanela de microfibra limpa e espalhar na lataria seca e na sombra. Depois, use o outro lado seco da flanela para dar o lustro. Em menos de 15 minutos o carro todo fica espelhado.",
    },
    {
      q: "Quanto tempo dura a proteção na lataria?",
      a: "A durabilidade média é de 30 a 60 dias (1 a 2 meses) por aplicação, mesmo pegando sol forte, sereno e chuva. Como um único frasco de 500ml rende de 8 a 10 carros, você terá proteção garantida por muitos meses.",
    },
    {
      q: "Serve para qualquer cor de veículo?",
      a: "Sim. A fórmula é transparente e universal. Ela realça o reflexo profundo em carros pretos e escuros (onde o efeito espelho é espetacular), e intensifica o brilho cristalino em cores claras como prata, branco e cinza.",
    },
    {
      q: "Posso aplicar em motos e caminhões?",
      a: "Com certeza! A Resina Extreme pode ser aplicada em latarias, tanques de moto, carenagens, baús e cabines de caminhão, facilitando a remoção de insetos e fuligem de estrada.",
    },
    {
      q: "E se eu não gostar do resultado?",
      a: "Você conta com a nossa Garantia Incondicional de Satisfação de 30 dias. Se após testar o produto você achar que ele não entregou o brilho e a proteção prometidos, basta nos chamar no WhatsApp que reembolsamos 100% do seu dinheiro.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/50 px-3.5 py-1 text-xs sm:text-sm font-bold text-amber-300 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>TIRE TODAS AS SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Perguntas Frequentes sobre a Resina Extreme
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200">
            Respostas claras e diretas para você comprar com total segurança e tranquilidade.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? "bg-surface-card border-amber-500/50 shadow-md"
                    : "bg-surface-100 border-surface-border hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen
                        ? "bg-amber-500 text-black rotate-180"
                        : "bg-surface-border text-gray-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-200 leading-relaxed border-t border-surface-border/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="rounded-2xl bg-surface-100 border border-surface-border p-6 text-center">
          <h4 className="text-base font-bold text-white mb-2">Ainda ficou com alguma dúvida?</h4>
          <p className="text-sm text-gray-200 mb-4 max-w-lg mx-auto">
            Nossa equipe de atendimento técnico está pronta para te atender no WhatsApp e tirar qualquer dúvida sobre o seu veículo.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20Resina%20Extreme."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm uppercase tracking-wide transition-colors shadow-glow-emerald"
          >
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Falar com Atendente no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
