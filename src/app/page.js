import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServiceGrid from "@/components/ServiceGrid";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Nassau County Roofing Contractor | Titan Project Solutions",
  description:
    "Titan Project Solutions - Nassau County's #1 roofing contractor. Roofing, siding, kitchens, bathrooms, pavers & more. Licensed & insured. Based in Massapequa, NY. Free estimates. Call 516-557-4933.",
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
      <Hero />
      <Stats />
      <ServiceGrid />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
