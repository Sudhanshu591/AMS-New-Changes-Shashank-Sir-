import type { Metadata } from "next";
import { Blog } from "../../components/Blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights for smarter, safer port operations — AI occupancy planning, geofencing, berthing optimization and maritime system integration.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main className="pt-20 md:pt-24">
      <Blog />
    </main>
  );
}
