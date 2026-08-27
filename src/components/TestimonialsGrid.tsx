import React from "react";

export function TestimonialsGrid() {
  const testimonials = [
    {
      name: "Carlos Menezes",
      city: "Belo Horizonte · MG",
      initials: "CM",
      color: "bg-blue-600",
      text: "Testei em metade do capô para comparar. A diferença no sol foi absurda! E o melhor de tudo foi receber primeiro e pagar só na entrega.",
    },
    {
      name: "Sandra Ribeiro",
      city: "Curitiba · PR",
      initials: "SR",
      color: "bg-purple-600",
      text: "Meu carro de 8 anos parecia novo. No estacionamento do shopping perguntaram se eu tinha mandado vitrificar a pintura.",
    },
    {
      name: "Jorge Farias",
      city: "Recife · PE",
      initials: "JF",
      color: "bg-teal-600",
      text: "Sempre tive muito receio de comprar na internet. Como paguei somente ao receber o pacote em mãos, comprei sem medo. Valeu cada centavo.",
    },
    {
      name: "Marlene Costa",
      city: "Porto Alegre · RS",
      initials: "MC",
      color: "bg-amber-600",
      text: "Não queria gastar R$ 700 em polimento de estúdio. Apliquei em 15 minutos com o pano e o brilho ficou idêntico.",
    },
    {
      name: "Edvaldo Souza",
      city: "Goiânia · GO",
      initials: "ES",
      color: "bg-emerald-600",
      text: "Passei no carro e na moto. Praticidade total, sem máquina, sem sujeira e o frete chegou bem antes do prazo.",
    },
    {
      name: "Patrícia Alves",
      city: "Salvador · BA",
      initials: "PA",
      color: "bg-pink-600",
      text: "O carro ficou espelhado de um jeito que dá para ver o reflexo do prédio no capô. Recomendo de olhos fechados!",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-950 border-t border-gray-800 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">
            QUEM USOU, APROVOU
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Mais de 14.850 Clientes Satisfeitos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Veja a experiência de quem já recuperou o brilho original do veículo em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-3xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-lg"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                  {"★★★★★"}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">"{t.text}"</p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-800/80 pt-4">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white font-black text-xs ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-black text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
