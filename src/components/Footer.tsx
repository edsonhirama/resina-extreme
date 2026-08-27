import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-gray-950 py-10 px-4 text-center text-xs text-gray-400">
      <div className="mx-auto max-w-5xl space-y-3">
        <div className="text-base font-black tracking-wider text-white">
          RESINA <span className="text-emerald-400">EXTREME</span>
        </div>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Produto premium para estética e revitalização automotiva. Resultados podem variar conforme o estado prévio da pintura e modo de aplicação.
        </p>
        <p className="text-gray-400 font-bold">
          Entrega com pagamento no ato (Cash On Delivery) · Frete Grátis para todo o Brasil.
        </p>
        <p className="text-gray-400 pt-2 border-t border-gray-900">
          © {new Date().getFullYear()} Resina Extreme. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
