import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Pavers & Hardscape Nassau County NY | Titan Project Solutions",
  description:
    "Expert paver installation for driveways, patios, walkways, and retaining walls across Nassau County, NY. Licensed & insured. Free estimates. Call 516-557-4933.",
  keywords: [
    "paver installation Nassau County",
    "driveway pavers Long Island",
    "patio pavers Nassau County",
    "hardscape contractor Massapequa NY",
    "retaining wall Long Island",
  ],
};

const paverServices = [
  { name: "Paver Driveways", desc: "Replace cracked concrete or asphalt with beautiful, durable paver driveways that add serious curb appeal." },
  { name: "Patio Design & Installation", desc: "Custom outdoor patio spaces using natural stone, concrete pavers, or porcelain tile for year-round enjoyment." },
  { name: "Walkways & Pathways", desc: "Elegant front walkways and backyard pathways that frame your home and tie the landscape together." },
  { name: "Pool Surrounds", desc: "Non-slip, heat-resistant paver installations around in-ground pools - safe and stylish." },
  { name: "Retaining Walls", desc: "Engineered retaining walls using block, natural stone, or concrete to manage grade changes and erosion." },
  { name: "Steps & Stoops", desc: "Bluestone, concrete, and paver steps and stoops to replace deteriorating concrete or wood." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Babylon", "Lindenhurst", "Amityville",
];

export default function PaversPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Outdoor & Hardscape</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Pavers &amp; Hardscape in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Premium paver installations that stand up to Long Island winters and look incredible year after year. Driveways, patios, walkways, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Hardscape Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paverServices.map((s) => (
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
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Built for Long Island</h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>Long Island&apos;s freeze-thaw cycles are tough on hardscape. Improperly installed pavers heave, settle, and crack within a few years - and cheap materials crumble even faster. Titan Project Solutions uses premium pavers with proper sub-base preparation including adequate compacted stone and sand bedding to ensure stability through decades of winters.</p>
            <p>We handle all aspects of your hardscape project - excavation, grading, drainage planning, base installation, paver laying, and joint sand sealing. Every project is completed to manufacturer specifications and Long Island soil conditions.</p>
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

      <CTABanner title="Transform Your Outdoor Space" subtitle="Get a free hardscape estimate from Titan Project Solutions. Serving Nassau County and Western Suffolk." />
    </>
  );
}
