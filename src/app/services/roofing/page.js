import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Roofing Contractor Nassau County NY | Roof Replacement & Repair",
  description:
    "Nassau County's #1 roofing contractor. Titan Project Solutions offers full roof replacements, repairs, storm damage restoration, and inspections. Licensed & insured. Free estimates. Call 516-557-4933.",
  keywords: [
    "roofing contractor Nassau County",
    "roof replacement Long Island",
    "roofing company Massapequa NY",
    "storm damage roofing Nassau County",
    "roof repair Long Island",
    "asphalt shingle roof Nassau County",
  ],
};

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
  "Plainview", "Woodbury", "Oyster Bay", "Babylon", "Lindenhurst", "Amityville",
  "West Babylon", "Bay Shore",
];

const roofingServices = [
  { name: "Complete Roof Replacement", desc: "Full tear-off and replacement of your existing roof using premium shingles and underlayment." },
  { name: "Asphalt Shingle Roofing", desc: "3-tab and architectural shingles from top manufacturers including CertainTeed and GAF." },
  { name: "Flat Roof Systems", desc: "TPO, EPDM, and modified bitumen flat roofing for low-slope applications." },
  { name: "Storm Damage Repair", desc: "Emergency tarping, insurance work coordination, and full storm damage restoration." },
  { name: "Roof Repairs", desc: "Targeted repairs for leaks, missing shingles, flashing failures, and ice dam damage." },
  { name: "Roof Inspections", desc: "Detailed written inspections for home sales, insurance claims, or general peace of mind." },
];

export default function RoofingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">
              ← All Services
            </Link>
          </div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Our #1 Service
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Nassau County&apos;s Trusted Roofing Contractor
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            From complete roof replacements to emergency storm repairs - Titan Project Solutions is the roofing company Nassau County homeowners trust. Licensed, insured, and local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5165574933"
              className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Call 516-557-4933
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-black text-white uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Roofing Services We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roofingServices.map((s) => (
              <div key={s.name} className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] mb-3" />
                <h3
                  className="text-white font-bold text-sm uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Titan for Roofing */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black text-white uppercase tracking-tight mb-8"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Why Choose Titan for Your Roof?
          </h2>
          <div className="space-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              Your roof is your home&apos;s first line of defense against Long Island&apos;s harsh weather - from summer thunderstorms and high winds to winter ice dams and nor&apos;easters. A compromised roof isn&apos;t just an inconvenience; it&apos;s a threat to your home&apos;s structure, your belongings, and your family&apos;s safety.
            </p>
            <p>
              At Titan Project Solutions, roofing is our primary service - the one we built our reputation on. We don&apos;t sub it out, we don&apos;t rush, and we don&apos;t use inferior materials. Every roof replacement comes with a proper tear-off, new underlayment, proper flashing around all penetrations, and manufacturer&apos;s warranty on materials plus our own workmanship guarantee.
            </p>
            <p>
              We work directly with homeowners on insurance claims following storm damage. Our team documents damage thoroughly and works with your adjuster to make sure you get what you&apos;re entitled to - not a lowball settlement.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["NY Licensed", "Fully Insured", "Free Estimates", "5-Star Rated"].map((badge) => (
              <div key={badge} className="bg-[#111111] border border-[#C9A84C]/20 rounded p-3 text-center">
                <p className="text-[#C9A84C] font-bold text-xs uppercase tracking-wide">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-black text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Roofing Service Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">And many more towns across Nassau and Western Suffolk County.</p>
        </div>
      </section>

      <CTABanner title="Need a New Roof?" subtitle="Call Titan Project Solutions for a free roofing estimate. Fast response, fair pricing, quality materials." />
    </>
  );
}
