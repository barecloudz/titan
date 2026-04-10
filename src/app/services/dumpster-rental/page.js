import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Dumpster Rental Nassau County NY | 10-40 Yard | Titan Project Solutions",
  description:
    "Fast, affordable dumpster rental in Nassau County. 10, 20, 30, and 40-yard dumpsters delivered to your door. Call Titan Project Solutions at 516-557-4933.",
  keywords: [
    "dumpster rental Nassau County",
    "dumpster rental Long Island",
    "roll-off dumpster Massapequa NY",
    "10 yard dumpster Nassau County",
    "20 yard dumpster Long Island",
    "cleanout dumpster Nassau County",
  ],
};

const dumpsterSizes = [
  {
    size: "10-Yard",
    dimensions: "12' L × 8' W × 3.5' H",
    capacity: "~3 pickup truck loads",
    bestFor: "Small cleanouts, bathroom remodels, single-room renovations, yard debris.",
  },
  {
    size: "20-Yard",
    dimensions: "22' L × 8' W × 4' H",
    capacity: "~6 pickup truck loads",
    bestFor: "Kitchen remodels, roofing projects, basement cleanouts, mid-size renovations.",
  },
  {
    size: "30-Yard",
    dimensions: "22' L × 8' W × 6' H",
    capacity: "~9 pickup truck loads",
    bestFor: "Large home renovations, deck removals, siding tear-offs, construction projects.",
  },
  {
    size: "40-Yard",
    dimensions: "22' L × 8' W × 8' H",
    capacity: "~12 pickup truck loads",
    bestFor: "Major construction, commercial cleanouts, large-scale demolition projects.",
  },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville",
  "Babylon", "Lindenhurst", "Amityville", "West Babylon", "Bay Shore",
];

export default function DumpsterRentalPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Waste Management</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Dumpster Rental in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            10, 20, 30, and 40-yard roll-off dumpsters available for fast delivery anywhere in Nassau and Western Suffolk County. Transparent pricing, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Available Dumpster Sizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dumpsterSizes.map((d) => (
              <div key={d.size} className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all flex flex-col">
                <div className="text-3xl font-black text-[#C9A84C] mb-2" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>{d.size}</div>
                <p className="text-gray-500 text-xs mb-1">{d.dimensions}</p>
                <p className="text-gray-400 text-xs mb-3 font-medium">{d.capacity}</p>
                <div className="border-t border-white/10 pt-3 mt-auto">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1 font-semibold">Best for:</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{d.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Call or Request Online", desc: "Tell us the size you need, your address, and when you want delivery. Same-day delivery often available." },
              { step: "02", title: "We Deliver It", desc: "We drop the dumpster exactly where you need it on your property. Fast, professional, and careful with your driveway." },
              { step: "03", title: "We Pick It Up", desc: "When you're done filling it, call us and we'll pick it up and handle disposal. No hassle, no mess left behind." },
            ].map((item) => (
              <div key={item.step} className="bg-[#111111] border border-white/5 rounded-lg p-6">
                <div className="text-[#C9A84C] font-black text-2xl mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>{item.step}</div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg p-6">
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>What We Accept</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Construction debris, household junk, furniture, appliances, drywall, roofing materials, yard waste, concrete (limited), and general renovation waste. We&apos;ll let you know upfront if there are any restrictions for your specific load.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Delivery Areas</h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (<span key={area} className="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">{area}</span>))}
          </div>
        </div>
      </section>

      <CTABanner title="Need a Dumpster Delivered?" subtitle="Call Titan Project Solutions for fast dumpster rental in Nassau County. Transparent pricing, same-day delivery available." />
    </>
  );
}
