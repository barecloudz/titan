import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Demolition & Clean-outs Nassau County NY | Titan Project Solutions",
  description:
    "Interior demolition, structure teardowns, estate cleanouts, and debris removal across Nassau County, NY. Licensed & insured. Free estimates. Call 516-557-4933.",
  alternates: { canonical: "https://titanprojectsolutions.com/services/demolition" },
  openGraph: {
    title: "Demolition & Clean-outs Nassau County NY | Titan Project Solutions",
    description: "Interior demolition, structure teardowns, estate cleanouts & debris removal in Nassau County. Licensed & insured. Free estimates. Call 516-557-4933.",
    url: "https://titanprojectsolutions.com/services/demolition",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Demolition & Clean-outs Nassau County NY | Titan Project Solutions",
    description: "Interior demolition, estate cleanouts & debris removal in Nassau County. Free estimates. Call 516-557-4933.",
  },
  keywords: [
    "demolition contractor Nassau County",
    "interior demolition Long Island",
    "estate cleanout Nassau County",
    "house cleanout Long Island",
    "debris removal Massapequa NY",
  ],
};

const demolitionServices = [
  { name: "Interior Demolition", desc: "Selective demo of kitchens, bathrooms, basements, and rooms in preparation for renovation work." },
  { name: "Full Structure Teardown", desc: "Complete demolition of garages, sheds, outbuildings, and residential structures down to the slab." },
  { name: "Estate Cleanouts", desc: "Compassionate, efficient full-property cleanouts following estate sales, foreclosures, or relocations." },
  { name: "Hoarding Cleanouts", desc: "Non-judgmental, thorough cleanouts of heavily cluttered properties with full debris hauling." },
  { name: "Post-Construction Cleanup", desc: "Construction debris removal, dumpster overflow pickup, and final site cleanup after major projects." },
  { name: "Concrete & Masonry Demo", desc: "Concrete slab breaking, sidewalk removal, old patio teardown, and masonry demolition." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
  "Babylon", "Lindenhurst", "Amityville", "Bay Shore",
];

export default function DemolitionPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Demolition & Removal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Demolition &amp; Clean-outs in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            From interior teardowns before a remodel to full estate cleanouts - Titan Project Solutions handles all demolition and debris removal work safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Demolition Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demolitionServices.map((s) => (
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
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Safe, Licensed Demolition</h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>Demolition work - even interior demo - carries real risks if not handled by a licensed, experienced team. Structural damage, utility line strikes, asbestos disturbance, and improper debris disposal are all hazards that an unlicensed crew may not manage correctly.</p>
            <p>Titan Project Solutions is fully licensed and insured for all demolition work in New York State. We assess each job before we swing a single tool - identifying utilities, checking for hazardous materials, and planning the sequence of demolition to protect the structure around it.</p>
            <p>We haul away all debris, leaving your property clean and ready for whatever comes next - whether that&apos;s a renovation by our team or preparation for sale.</p>
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

      <CTABanner title="Schedule Your Demolition" subtitle="Get a free demolition or cleanout estimate from Titan Project Solutions. Serving Nassau County and Western Suffolk." />
    </>
  );
}
