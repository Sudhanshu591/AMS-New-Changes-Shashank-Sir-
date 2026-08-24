import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Industries } from "../components/Industries";
import { Services } from "../components/Services";
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

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Industries />
      <Services />
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
