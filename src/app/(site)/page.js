import Hero from "@/components/Hero";
import Link from "next/link";
import FinancingStrip from "@/components/FinancingStrip";
import Stats from "@/components/Stats";
import ServiceGrid from "@/components/ServiceGrid";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://titanprojectsolutions.com/#business",
  name: "Titan Project Solutions",
  description: "Nassau County's #1 roofing contractor. Full-service construction company offering roofing, siding, kitchen remodeling, bathroom renovation, pavers, dumpster rental, and demolition. Licensed and insured.",
  url: "https://titanprojectsolutions.com",
  telephone: "+15165574933",
  image: "https://titanprojectsolutions.com/og-image.jpg",
  logo: "https://titanprojectsolutions.com/logo-new.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Massapequa",
    addressRegion: "NY",
    postalCode: "11758",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.6773,
    longitude: -73.4679,
  },
  areaServed: [
    "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
    "Bellmore", "Farmingdale", "Bethpage", "Hicksville", "Plainview", "Woodbury",
    "Syosset", "Westbury", "Garden City", "Copiague", "Babylon", "Lindenhurst",
    "Amityville", "Deer Park",
  ].map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "New York" } })),
  knowsAbout: ["Roofing", "Siding", "Kitchen Remodeling", "Bathroom Remodeling", "Pavers", "Home Renovation", "Dumpster Rental", "Demolition", "Excavation", "Drainage"],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasMap: "https://maps.google.com/?q=Titan+Project+Solutions+Massapequa+NY",
  sameAs: [],
};

export const metadata = {
  title: "Nassau County Roofing Contractor | Titan Project Solutions",
  description:
    "Titan Project Solutions - Nassau County's #1 roofing contractor. 24/7 emergency service. Roofing, siding, kitchens, bathrooms, pavers & more. Licensed & insured. Based in Massapequa, NY. Free estimates. Call 516-557-4933.",
  keywords: [
    "roofing contractor Nassau County",
    "roofing company Long Island",
    "roof replacement Massapequa NY",
    "Nassau County contractor",
    "siding installation Long Island",
    "kitchen remodeling Nassau County",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      {/* Wren Kitchens urgency banner */}
      <Link
        href="/wren-kitchens-rescue"
        className="block bg-[#1a1a1a] border-y border-[#C9A84C]/30 hover:bg-[#222] transition-colors group"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-2 py-1 rounded">
              Alert
            </span>
            <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
              Stranded by Wren Kitchens?{" "}
              <span className="text-[#C9A84C]">We can finish your kitchen.</span>
            </p>
          </div>
          <span
            className="text-[#C9A84C] text-xs font-black uppercase tracking-widest group-hover:text-[#E8C96A] flex items-center gap-1 flex-shrink-0"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Free Assessment →
          </span>
        </div>
      </Link>
      <FinancingStrip />
      <Stats />
      <ServiceGrid />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
