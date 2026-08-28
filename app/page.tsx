"use client";

import React from "react";
import { TopBanner } from "@/components/TopBanner";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { HowToUseSection } from "@/components/HowToUseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CodHowItWorks } from "@/components/CodHowItWorks";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-gray-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* 1. Top Urgency & Trust Notification Bar */}
      <TopBanner />

      {/* 2. Hero Section (Mobile-first, Badges, COD Hook, Product Media) */}
      <HeroSection />

      {/* 3. Problem & Agitation Section (PAS Framework) */}
      <ProblemSection />

      {/* 4. Technical Features & Authority Breakdown */}
      <FeaturesSection />

      {/* 5. Before & After Showcase & Media Demonstration */}
      <BeforeAfterShowcase />

      {/* 6. 3-Step Simple Application Guide */}
      <HowToUseSection />

      {/* 7. Social Proof & Customer Reviews (35+ Demographics) */}
      <TestimonialsSection />

      {/* 8. COD Security: How Pay-On-Delivery Works */}
      <CodHowItWorks />

      {/* 9. Offer & Kit Selection with Direct COD CTAs */}
      <OfferSection id="oferta-checkout" />

      {/* 10. 30-Day Risk Reversal Guarantee */}
      <GuaranteeSection />

      {/* 11. FAQ Accordion with JSON-LD Schema */}
      <FaqSection />

      {/* 12. Complete Legal & Security Footer */}
      <Footer />

      {/* 13. Floating Mobile Sticky CTA Bar */}
      <StickyMobileCta />
    </main>
  );
}
