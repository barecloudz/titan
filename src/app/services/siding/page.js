import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Siding Contractor Nassau County NY | Vinyl & Fiber Cement Siding",
  description:
    "Professional siding installation and replacement in Nassau County. Titan Project Solutions installs vinyl, fiber cement, and composite siding. Licensed & insured. Free estimates. Call 516-557-4933.",
  keywords: [
    "siding contractor Nassau County",
    "vinyl siding installation Long Island",
    "fiber cement siding Nassau County",
    "James Hardie siding Long Island",
    "siding replacement Massapequa NY",
  ],
};

const sidingTypes = [
  { name: "Vinyl Siding", desc: "Low-maintenance, durable, and available in dozens of colors and profiles. The most popular choice for Long Island homeowners." },
  { name: "Fiber Cement (James Hardie)", desc: "Rot-resistant, fire-resistant, and incredibly durable. James Hardie siding is built for coastal conditions like Long Island's." },
  { name: "Composite Siding", desc: "A premium option that combines wood aesthetics with synthetic durability. Beautiful and long-lasting." },
  { name: "Cedar & Wood Siding", desc: "Traditional charm for homes requiring that natural wood look. Properly installed and treated for Long Island weather." },
  { name: "Siding Repair", desc: "Cracked, warped, or faded panels? We repair and match existing siding or replace sections seamlessly." },
  { name: "Trim & Fascia Work", desc: "Complete the look with professional soffit, fascia, and trim installation to complement your new siding." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
  "Plainview", "Babylon", "Lindenhurst", "Amityville", "West Babylon",
];

export default function SidingPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">
              ← All Services
            </Link>
          </div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Exterior</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Siding Installation &amp; Replacement in Nassau County
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Upgrade your home&apos;s appearance and weather protection with professional siding installation from Titan Project Solutions. Serving all of Nassau County and Western Suffolk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Siding Options We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sidingTypes.map((s) => (
              <div key={s.name} className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] mb-3" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>{s.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Why Titan for Siding?
          </h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>Long Island homes take a beating from salt air, wind, rain, and UV exposure year-round. The right siding doesn&apos;t just make your home look better - it protects your investment and improves energy efficiency.</p>
            <p>Titan Project Solutions installs every siding product with attention to proper fastening, sealing, and water management. We account for expansion and contraction, ensure proper installation around windows and doors, and complete every project with matching trim work for a finished, professional look.</p>
            <p>We&apos;re certified installers for James Hardie fiber cement siding, one of the most durable exterior cladding products available for coastal environments like Long Island.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Service Areas</h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Replace Your Siding?" subtitle="Get a free siding estimate from Nassau County's trusted contractor. Call or fill out the form today." />
    </>
  );
}
