import React from "react";
import { TopBar } from "./TopBar";
import { HeroSection } from "./HeroSection";
import { SocialProofStrip } from "./SocialProofStrip";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { VideoProofGrid } from "./VideoProofGrid";
import { BenefitsGrid } from "./BenefitsGrid";
import { ProblemSection } from "./ProblemSection";
import { HowItWorks } from "./HowItWorks";
import { RiskReversalCod } from "./RiskReversalCod";
import { TestimonialsGrid } from "./TestimonialsGrid";
import { ComparisonTable } from "./ComparisonTable";
import { PricingKits } from "./PricingKits";
import { FaqSection } from "./FaqSection";
import { FinalCta } from "./FinalCta";
import { FloatingCta } from "./FloatingCta";
import { Footer } from "./Footer";
import { StructuredData } from "./StructuredData";

export function ResinaExtremeLanding() {
  return (
    <main className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased selection:bg-emerald-500 selection:text-gray-950">
      <StructuredData />
      <TopBar />
      <HeroSection />
      <SocialProofStrip />
      <BeforeAfterSlider />
      <VideoProofGrid />
      <BenefitsGrid />
      <ProblemSection />
      <HowItWorks />
      <RiskReversalCod />
      <TestimonialsGrid />
      <ComparisonTable />
      <PricingKits />
      <FaqSection />
      <FinalCta />
      <FloatingCta />
      <Footer />
    </main>
  );
}

export default ResinaExtremeLanding;
