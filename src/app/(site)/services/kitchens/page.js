import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Kitchen Remodeling Nassau County NY | Titan Project Solutions",
  description:
    "Custom kitchen remodeling in Nassau County. Full gut renovations, cabinetry, countertops, and more. Licensed & insured contractor. Free estimates. Call Titan at 516-557-4933.",
  keywords: [
    "kitchen remodeling Nassau County",
    "kitchen renovation Long Island",
    "kitchen contractor Massapequa NY",
    "custom kitchen cabinets Nassau County",
    "kitchen gut renovation Long Island",
  ],
  alternates: { canonical: "https://titanprojectsolutions.com/services/kitchens" },
  openGraph: {
    title: "Kitchen Remodeling Nassau County NY | Titan Project Solutions",
    description: "Custom kitchen remodeling in Nassau County. Full gut renovations, cabinetry, countertops & more. Free estimates. Call 516-557-4933.",
    url: "https://titanprojectsolutions.com/services/kitchens",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kitchen Remodeling Nassau County NY | Titan Project Solutions",
    description: "Custom kitchen remodeling in Nassau County. Full gut renovations, cabinetry, countertops & more. Free estimates. Call 516-557-4933.",
  },
};

const kitchenServices = [
  { name: "Full Gut Renovation", desc: "Complete kitchen teardown and rebuild from the studs up. New layout, new everything." },
  { name: "Custom Cabinetry", desc: "Semi-custom and custom cabinet installation in a wide range of styles, finishes, and configurations." },
  { name: "Countertops", desc: "Granite, quartz, marble, and laminate countertops measured, cut, and installed to perfection." },
  { name: "Flooring", desc: "Tile, hardwood, LVP, and more. We handle the full flooring installation as part of your kitchen remodel." },
  { name: "Plumbing & Electrical", desc: "All plumbing and electrical work is handled in-house by our licensed team - no subcontractor runaround." },
  { name: "Backsplash & Tile", desc: "Custom tile backsplash installation to complete the look of your new kitchen." },
];

const serviceAreas = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown", "East Meadow",
  "Bellmore", "Freeport", "Baldwin", "Farmingdale", "Bethpage", "Hicksville", "Plainview",
];

export default function KitchensPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3"><Link href="/services" className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide hover:text-[#E8C96A]">← All Services</Link></div>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Interior Remodeling</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            Kitchen Remodeling in Nassau County, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            From full gut renovations to targeted updates, Titan Project Solutions delivers custom kitchen remodels that transform the most important room in your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165574933" className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Call 516-557-4933</a>
            <Link href="/contact" className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kitchenServices.map((s) => (
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
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>Why Choose Titan for Your Kitchen?</h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>A kitchen remodel is one of the highest-ROI projects a homeowner can undertake - but only when it&apos;s done well. Subpar workmanship, misaligned cabinets, or sloppy tile work can actually hurt your home&apos;s value.</p>
            <p>Titan Project Solutions manages every phase of your kitchen renovation in-house. We handle the demo, framing changes, plumbing, electrical, cabinetry installation, countertop fabrication coordination, flooring, and all finish work. You won&apos;t be stuck chasing five different contractors.</p>
            <p>We work closely with each homeowner to understand their vision, their budget, and their timeline - then we execute it. Every kitchen we complete in Nassau County is one we&apos;re proud to put our name on.</p>
            <div className="mt-6 border border-[#C9A84C]/30 bg-[#C9A84C]/5 rounded-lg p-5">
              <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-1">Notice for Wren Kitchens Customers</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                If you were affected by the recent{" "}
                <Link href="/wren-kitchens-rescue" className="text-[#C9A84C] hover:text-[#E8C96A] font-semibold underline">
                  Wren Kitchens closure
                </Link>
                , see our dedicated rescue program. We complete unfinished installations, source missing materials, and take over stalled projects across Nassau and Suffolk Counties.
              </p>
            </div>
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

      <CTABanner title="Start Your Kitchen Remodel" subtitle="Call Titan Project Solutions for a free kitchen renovation estimate in Nassau County, NY." />
    </>
  );
}
