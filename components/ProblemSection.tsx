import React from "react";
import { AlertTriangle, XCircle, DollarSign, Clock, ShieldAlert } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-20 bg-surface-200 border-b border-surface-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold text-red-400 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>O PROBLEMA QUE NINGUÉM TE CONTA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Você Lava o Carro no Sábado e na Terça-Feira Ele Já Está{" "}
            <span className="text-red-400">Opaco e Cheio de Poeira?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Manter o veículo com aquele aspecto impecável de concessionária parece uma batalha perdida
            quando você depende dos métodos tradicionais.
          </p>
        </div>

        {/* 3 Core Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1 */}
          <div className="rounded-xl bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Preços Abusivos em Estéticas
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Estéticas automotivas chegam a cobrar de <strong>R$ 800 a R$ 2.500</strong> por
                espelhamentos e vitrificações que muitas vezes afinam o verniz original da sua pintura
                com polimentos agressivos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-border flex items-center gap-2 text-xs text-red-400 font-semibold">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              <span>Gasto recorrente e desnecessário</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Ceras em Pasta Cansativas
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Ceras tradicionais exigem horas esfregando a lataria, deixam manchas esbranquiçadas e
                impossíveis de tirar nas borrachas e plásticos, e derretem na primeira chuva quente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-border flex items-center gap-2 text-xs text-red-400 font-semibold">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              <span>Perda de tempo e esforço inútil</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Sol Forte e Chuva Ácida
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                O clima brasileiro é implacável. O sol intenso queima a resina da pintura, e a água de
                chuva contaminada com poluição e fezes de pássaros corrói o verniz, causando manchas
                permanentes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-border flex items-center gap-2 text-xs text-red-400 font-semibold">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              <span>Desvalorização direta do veículo</span>
            </div>
          </div>
        </div>

        {/* The Bridge / Solution Teaser */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-lg font-bold text-amber-300 uppercase tracking-wide">
            Existe uma maneira simples, rápida e 10x mais barata de proteger seu veículo
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto">
            Você não precisa de maquinário profissional ou gastar rios de dinheiro. A{" "}
            <strong>Resina Extreme</strong> entrega a proteção cerâmica líquida que blinda a sua
            pintura em apenas 15 minutos na garagem.
          </p>
        </div>
      </div>
    </section>
  );
}
