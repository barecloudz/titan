import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Home Renovations Nassau County NY | Titan Project Solutions",
  description:
    "Full-service home renovations, additions, basement finishing, and structural work in Nassau County, NY. Licensed general contractor. Free estimates. Call 516-557-4933.",
  keywords: [
    "home renovation Nassau County",
    "general contractor Long Island",
    "basement finishing Nassau County",
    "home addition Long Island",
    "gut renovation Massapequa NY",
  ],
};

const renovationServices = [
  { name: "Full Home Renovations", desc: "Gut renovations of entire homes or multiple rooms simultaneously, managed by one experienced team." },
  { name: "Room Additions", desc: "Expand your home with a new bedroom, family room, or in-law suite. We handle permits, framing, and finishes." },
  { name: "Basement Finishing", desc: "Transform your unfinished basement into livable space - home office, entertainment room, or bedroom suite." },
  { name: "Structural Work", desc: "Load-bearing wall removal, beam installation, and structural modifications with proper engineering support." },
  { name: "Flooring Installation", desc: "Hardwood, LVP, tile, and carpet installation throughout your home as part of a larger renovation." },
  { name: "Drywall & Painting", desc: "Professional drywall installation, finishing, and painting to bring your renovation to a polished conclusion." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
  "Babylon", "Lindenhurst", "West Babylon",
];

export default function RenovationsPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">General Construction</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Home Renovations in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Whether you&apos;re finishing a basement or adding a room, Titan Project Solutions manages your renovation from permits to punch list. Licensed general contractor based in Massapequa, NY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Renovation Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renovationServices.map((s) => (
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
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>One Contractor. Full Scope.</h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>The biggest headache in home renovation is coordinating multiple contractors. Titan Project Solutions is a true general contractor - we self-perform the majority of our work and coordinate the specialty trades we don&apos;t, giving you a single point of contact for your entire project.</p>
            <p>We pull all required permits in Nassau County, schedule inspections, and make sure your project is 100% legal and code-compliant. Don&apos;t risk an unpermitted addition that causes problems at resale - do it right with Titan.</p>
            <p>Our project managers communicate with you throughout the process so you always know what&apos;s happening, what&apos;s next, and what to expect. No guessing, no surprises.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Service Areas</h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (<span key={area} className="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">{area}</span>))}
          </div>
        </div>
      </section>

      <CTABanner title="Plan Your Renovation" subtitle="Get a free renovation estimate from Titan Project Solutions - Nassau County's trusted general contractor." />
    </>
  );
}
