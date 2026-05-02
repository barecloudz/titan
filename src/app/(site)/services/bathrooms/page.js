import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Bathroom Remodeling Nassau County NY | Titan Project Solutions",
  description:
    "Expert bathroom renovations in Nassau County. Full gut remodels, tile, vanities, waterproofing, and more. Licensed contractor. Free estimates. Call 516-557-4933.",
  alternates: { canonical: "https://titanprojectsolutions.com/services/bathrooms" },
  openGraph: {
    title: "Bathroom Remodeling Nassau County NY | Titan Project Solutions",
    description: "Expert bathroom renovations in Nassau County. Full gut remodels, tile, vanities & more. Free estimates. Call 516-557-4933.",
    url: "https://titanprojectsolutions.com/services/bathrooms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bathroom Remodeling Nassau County NY | Titan Project Solutions",
    description: "Expert bathroom renovations in Nassau County. Full gut remodels, tile, vanities & more. Free estimates. Call 516-557-4933.",
  },
  keywords: [
    "bathroom remodeling Nassau County",
    "bathroom renovation Long Island",
    "bathroom contractor Massapequa NY",
    "tile installation Nassau County",
    "master bath renovation Long Island",
  ],
};

const bathroomServices = [
  { name: "Full Gut Renovation", desc: "Complete bathroom teardown and rebuild. New waterproofing, tile, fixtures, and all finishes." },
  { name: "Shower & Tub Replacement", desc: "Remove old, dated tubs and showers and install custom tile showers or modern freestanding tubs." },
  { name: "Tile Installation", desc: "Floor tile, wall tile, and shower tile installed by skilled craftsmen. Any style, any pattern." },
  { name: "Vanity & Fixture Updates", desc: "New vanities, toilets, faucets, lighting, and mirrors to update your bathroom without a full gut." },
  { name: "Waterproofing", desc: "Proper waterproofing membrane installation behind all tile and wet areas - the step that matters most." },
  { name: "Accessibility Upgrades", desc: "Walk-in showers, grab bars, comfort-height fixtures, and ADA-compliant bathroom modifications." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
];

export default function BathroomsPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Interior Remodeling</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Bathroom Remodeling in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Luxury bathroom renovations from gut demo to final fixture - Titan Project Solutions handles every detail so your new bathroom is done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Bathroom Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bathroomServices.map((s) => (
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
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Why Choose Titan for Your Bathroom?</h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>A properly renovated bathroom starts with proper waterproofing - a step that less experienced contractors often skip or cut corners on. At Titan, we never cut corners on waterproofing. Every shower and wet area gets the membrane treatment it needs before a single tile goes up.</p>
            <p>We handle bathroom projects from 50-square-foot powder rooms to full master bathroom suite renovations. Our team manages the plumbing, electrical, tile work, and finish carpentry in-house, ensuring seamless coordination and a faster timeline.</p>
            <p>Whether you want a spa-inspired master bath with heated floors and a custom steam shower, or a clean, functional guest bathroom update - Titan delivers quality you can see and feel every day.</p>
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

      <CTABanner title="Upgrade Your Bathroom Today" subtitle="Contact Titan Project Solutions for a free bathroom remodeling estimate in Nassau County, NY." />
    </>
  );
}
