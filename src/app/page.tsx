import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { Mission } from "../components/Mission";
import { Industries } from "../components/Industries";
import { Services } from "../components/Services";
import { VesselOptimization } from "../components/VesselOptimization";
import { Screenshots } from "../components/Screenshots";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Metrics } from "../components/Metrics";
import { Technology } from "../components/Technology";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { Security } from "../components/Security";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import { faq } from "../data/site";

export const metadata: Metadata = {
  title: "AMS: Anchorage Management System | SDLC Corp",
  description:
    "Real-time vessel tracking, AI-predicted occupancy and intelligent anchorage & berthing assignment for modern ports. Book a demo of AMS by SDLC Corp.",
  alternates: { canonical: "/" },
};

// FAQ structured data — eligible for FAQ rich results in search.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Trust />
      <Mission />
      <Industries />
      <Services />
      <VesselOptimization />
      <Screenshots />
      <WhyChooseUs />
      <Metrics />
      <Technology />
      <HowItWorks />
      <Testimonials />
      <Security />
      <Pricing />
      <FAQ />
      <CTABanner />
    </main>
  );
}
