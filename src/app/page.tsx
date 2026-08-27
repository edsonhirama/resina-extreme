import type { Metadata } from "next";
import { ResinaExtremeLanding } from "../components/ResinaExtremeLanding";

export const metadata: Metadata = {
  title: "Resina Extreme | Brilho Espelhado de Fábrica em 15 Minutos",
  description:
    "Restaure e vitrifique a pintura do seu carro em casa. Receba primeiro e pague somente na entrega (COD) com Frete Grátis para todo o Brasil. Sem cartão.",
  keywords: [
    "resina extreme",
    "vitrificador automotivo",
    "polimento em casa",
    "brilho espelhado",
    "pagamento na entrega",
    "estetica automotiva",
  ],
  authors: [{ name: "Resina Extreme" }],
  openGraph: {
    title: "Resina Extreme | Brilho Vitrificado e Pagamento na Entrega",
    description:
      "Devolva o brilho de fábrica para o seu veículo em 15 minutos. Você só paga quando receber em casa.",
    url: "https://resinaextreme.com.br",
    siteName: "Resina Extreme",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resina Extreme | Brilho Espelhado em 15 Minutos",
    description: "Receba em casa e pague somente na entrega. Frete Grátis para todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ResinaExtremeLanding />;
}
