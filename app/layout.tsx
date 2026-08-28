import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Resina Extreme 500ml | Vitrificação & Proteção Automotiva (Pague na Entrega)",
  description:
    "Revestimento finalizador com efeito vitrificação e super hidrorrepelência. Brilho espelhado e proteção contra sol e chuva ácida por até 60 dias. Peça hoje e pague apenas ao receber em casa.",
  keywords: [
    "resina extreme",
    "vitrificação automotiva",
    "cera líquida automotiva",
    "proteção de pintura",
    "hidrorrepelência carro",
    "estética automotiva",
    "pagamento na entrega",
    "brilho espelhado carro",
  ],
  authors: [{ name: "Resina Extreme Brasil" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://resinaextreme.com.br",
    title: "Resina Extreme 500ml - O Efeito Espelho e Proteção Cerâmica em Minutos",
    description:
      "Proteja a pintura do seu veículo contra sol, poeira e chuva ácida. Rende de 8 a 10 aplicações com durabilidade de até 60 dias. Pague somente ao receber!",
    siteName: "Resina Extreme",
    images: [
      {
        url: "https://resinaextreme.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Resina Extreme - Revestimento Automotivo de Alta Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resina Extreme 500ml | Vitrificação Automotiva com Pagamento na Entrega",
    description: "Brilho espelhado e blindagem contra o clima. Pague somente na entrega!",
    images: ["https://resinaextreme.com.br/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Product & Organization Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Resina Extreme 500ml",
              image: ["https://resinaextreme.com.br/product-main.jpg"],
              description:
                "Revestimento automotivo líquido finalizador com efeito vitrificação, hidrorrepelência e proteção contra raios UV e chuva ácida.",
              brand: {
                "@type": "Brand",
                name: "Extreme Auto",
              },
              offers: {
                "@type": "Offer",
                url: "https://resinaextreme.com.br",
                priceCurrency: "BRL",
                price: "127.90",
                priceValidUntil: "2026-12-31",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "Resina Extreme Oficial",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "14820",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-gray-100 antialiased font-['Plus_Jakarta_Sans',sans-serif]">
        {children}
      </body>
    </html>
  );
}
