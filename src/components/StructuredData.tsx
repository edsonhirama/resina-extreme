import React from "react";

export function StructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resina Extreme - Vitrificação e Brilho Automotivo",
    "description": "Revitalizador e vitrificador automotivo de alta performance. Devolve o brilho espelhado de fábrica em 15 minutos. Pague somente na entrega com frete grátis.",
    "brand": {
      "@type": "Brand",
      "name": "Resina Extreme"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "14850",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "109.99",
      "highPrice": "187.00",
      "offerCount": "3",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}
