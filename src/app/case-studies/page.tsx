import type { Metadata } from "next";
import { CaseStudies } from "../../components/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Proven results from SDLC Corp's maritime and logistics platforms — real-time shipment visibility, multi-modal tracking and AI ETAs.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-20 md:pt-24">
      <CaseStudies />
    </main>
  );
}
