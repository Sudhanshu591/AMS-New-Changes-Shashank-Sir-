import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Providers } from "./providers";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, ORG_NAME } from "../lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AMS: Anchorage Management System | SDLC Corp",
    template: "%s | AMS by SDLC Corp",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "anchorage management system",
    "vessel tracking",
    "berthing management",
    "port management software",
    "AIS VTMIS integration",
    "AI occupancy prediction",
    "maritime software",
    "SDLC Corp",
  ],
  authors: [{ name: ORG_NAME }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "AMS: Anchorage Management System | SDLC Corp",
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "AMS by SDLC Corp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMS: Anchorage Management System | SDLC Corp",
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// JSON-LD structured data so search engines understand the organization + product.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      "@type": "SoftwareApplication",
      name: "AMS — Anchorage Management System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, On-premise, Private cloud",
      description: SITE_DESCRIPTION,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "1500",
        highPrice: "3900",
      },
      publisher: { "@type": "Organization", name: ORG_NAME },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
