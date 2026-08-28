"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      q: "Como funciona o Pagamento na Entrega?",
      a: "É muito simples: você escolhe seu kit no site sem pagar nada e sem precisar cadastrar cartão online. Nós preparamos o seu pacote e enviamos com código de rastreamento para o seu WhatsApp. Quando o entregador chegar na sua residência, você confere o pacote e faz o pagamento na hora em dinheiro ou cartão na maquininha.",
    },
    {
      q: "Serve para qualquer cor de veículo?",
      a: "Sim! A Resina Extreme é um finalizador líquido 100% incolor. Funciona com máxima eficácia em pinturas pretas, brancas, pratas, cinzas, vermelhas, azuis e em todos os tipos de acabamento (sólido, metálico e perolizado).",
    },
    {
      q: "Quanto rende um frasco de 500 mL e quanto tempo dura?",
      a: "Um frasco de 500 mL rende de 8 a 10 aplicações completas em um veículo de porte médio. Como cada aplicação mantém a hidrorrepelência e o brilho por 1 a 2 meses, um único frasco garante até 1 ano e meio de cuidado contínuo.",
    },
    {
      q: "O produto remove riscos fundos ou recupera pintura queimada?",
      a: "Não. Somos 100% transparentes: a Resina Extreme atua como um selante e finalizador protetor de alta performance. Ela ameniza visualmente micro-riscos leves (marcas de pano e teias de aranha), mas não recupera pinturas queimadas até a base nem riscos fundos que atingiram a lataria.",
    },
    {
      q: "O efeito de brilho e hidrorrepelência sai na primeira chuva?",
      a: "Não! A resina forma uma camada de ancoragem que resiste a lavagens rotineiras, chuvas intensas e calor do sol. A água continuará escorrendo em gotas por até 60 dias após a aplicação.",
    },
    {
      q: "Preciso de politriz ou ferramentas profissionais para aplicar?",
      a: "Não precisa de nenhuma ferramenta especial. A aplicação é feita 100% à mão com apenas uma flanela de microfibra. Basta borrifar, espalhar e lustrar em movimentos circulares leves. Em menos de 15 minutos o carro todo está pronto.",
    },
    {
      q: "Posso aplicar em vidros, faróis e motos?",
      a: "Sim! É excelente para aplicação em motos, caminhões, faróis de policarbonato e no para-brisa (criando efeito de repelência de chuva na estrada). Além disso, não mancha borrachas nem plásticos pretos.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-20 bg-background relative border-b border-surface-border">
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Confira as respostas diretas para as principais dúvidas sobre a Resina Extreme.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "bg-surface-card border-amber-500/50"
                    : "bg-surface-100 border-surface-border hover:border-gray-600"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-white cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-surface-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
