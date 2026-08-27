import React from "react";

export function ProblemSection() {
  const problems = [
    {
      title: "Verniz Desbotado e Queimado",
      desc: "A exposição constante ao sol, fezes de pássaros e chuva ácida tira a vida e o brilho do seu veículo dia após dia.",
    },
    {
      title: "Polimento em Estúdio Custa R$ 800+",
      desc: "Oficinas cobram valores exorbitantes e muitas vezes usam politrizes agressivas que afinam o verniz original.",
    },
    {
      title: "Ceras Comuns Saem na Primeira Chuva",
      desc: "Você passa horas encerando o carro e, na primeira lavagem ou chuva, o brilho opaco volta como antes.",
    },
    {
      title: "Carro com Aspecto Envelhecido",
      desc: "Um carro com a lataria fosca perde valor de revenda e passa a impressão de descuido constante.",
    },
  ];

  return (
    <section className="py-12 sm:py-18 bg-gradient-to-b from-red-950/20 via-gray-950 to-gray-950 border-t border-red-900/20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-3 py-1 text-xs font-black text-red-400 uppercase tracking-widest mb-3">
            O PROBLEMA REAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Você Já Sentiu Desgosto ao Olhar Seu Carro no Sol?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            A maioria dos donos de carros passa por isso, mas pagar fortuna em polimento não é a única saída.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-red-500/20 bg-red-950/10 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-500/20 text-red-400 font-black text-lg">
                ✕
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">{p.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
