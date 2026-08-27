import React, { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o pagamento na entrega (COD)?",
      a: "Você preenche seus dados de entrega sem pagar nada agora. Nós enviamos o produto com frete grátis pelos Correios ou transportadora. Quando o entregador chegar na sua casa, você confere o pacote e só então faz o pagamento em dinheiro, PIX ou cartão diretamente para ele.",
    },
    {
      q: "Preciso passar dados de cartão de crédito no site?",
      a: "Não! Nenhum dado bancário, senha ou cartão de crédito é exigido no nosso site. Sua compra é 100% livre de risco contra fraudes virtuais.",
    },
    {
      q: "A Resina Extreme serve para qualquer cor de carro?",
      a: "Sim, a fórmula é incolor e universal. Funciona perfeitamente em pinturas pretas, brancas, pratas, vermelhas, azuis, foscas ou metálicas, realçando a cor original.",
    },
    {
      q: "É difícil de aplicar? Preciso de politriz?",
      a: "Não precisa de politriz nem de experiência prévia. Basta um pano limpo de microfibra. A maioria dos clientes aplica no carro inteiro em 15 a 20 minutos.",
    },
    {
      q: "Pode queimar ou estragar a pintura do meu veículo?",
      a: "Não! A Resina Extreme não possui abrasivos agressivos que desgastam o verniz. Ela cria uma película protetora de nanotecnologia que sela e protege.",
    },
    {
      q: "Quanto tempo dura a proteção na lataria?",
      a: "A película protetora com brilho vitrificado e ação hidrorrepelente costuma durar semanas a meses, dependendo da frequência de lavagem e exposição ao tempo.",
    },
    {
      q: "O frete é realmente grátis para qualquer lugar do Brasil?",
      a: "Sim! O frete é 100% gratuito para capitais e cidades do interior de todos os estados brasileiros.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-950 px-4">
      {/* FAQ Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            TIRE SUAS DÚVIDAS
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Tudo o que você precisa saber antes de receber seu kit em casa.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-extrabold text-white hover:text-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={`ml-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-emerald-400 font-black transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/40 pt-3">
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
