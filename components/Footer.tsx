import React from "react";
import { ShieldCheck, Truck, Lock, Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-300 border-t border-surface-border text-gray-400 py-10 sm:py-14 pb-24 sm:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-surface-border">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-black text-xs shadow-glow-amber">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white tracking-wider">
                RESINA EXTREME <span className="text-amber-400 text-xs font-bold">500ml</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Revestimento líquido finalizador e protetor automotivo de alto desempenho. Tecnologia de
              hidrorrepelência e vitrificação com foco em durabilidade, facilidade de lavagem e brilho
              profundo.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% na Entrega
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <Truck className="w-4 h-4" /> Envio para Todo o Brasil
              </span>
            </div>
          </div>

          {/* Col 2: Segurança */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Garantia & Segurança
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados Criptografados</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Risco de Fraude Online</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>Rastreio Oficial via WhatsApp</span>
              </li>
              <li>
                <span>Garantia de 30 Dias</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Links Úteis */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Informações
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#oferta-checkout" className="hover:text-amber-400 transition-colors">
                  Ver Kits e Ofertas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Políticas de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Trocas e Devoluções (CDC)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 text-center text-[11px] text-gray-500 space-y-3">
          <p className="max-w-3xl mx-auto leading-relaxed">
            <strong>Aviso Legal:</strong> A Resina Extreme é um produto cosmético automotivo
            desenvolvido para acabamento e proteção de vernizes íntegros. Não remove riscos profundos
            nem substitui reparos de funilaria em pinturas danificadas. Os resultados de durabilidade
            podem variar conforme condições de uso, clima e lavagem do veículo.
          </p>
          <p>
            © {new Date().getFullYear()} Resina Extreme Brasil. Todos os direitos reservados. CNPJ:
            00.000.000/0001-00 • Atendimento de Segunda a Sexta das 09h às 18h.
          </p>
        </div>
      </div>
    </footer>
  );
}
