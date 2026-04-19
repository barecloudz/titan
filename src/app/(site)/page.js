import Hero from "@/components/Hero";
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
