import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Roofing, Siding, Kitchens & More - Nassau County",
  description:
    "Titan Project Solutions offers roofing, siding, kitchen remodeling, bathroom renovations, pavers, dumpster rental, demolition, and more across Nassau County, NY. Licensed & insured. Call 516-557-4933.",
  keywords: [
    "roofing contractor Nassau County",
    "siding installation Long Island",
    "kitchen remodeling Nassau County",
    "bathroom renovation Long Island",
    "pavers Nassau County",
    "dumpster rental Long Island",
    "demolition Nassau County",
    "construction services Massapequa NY",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Full-Service Construction
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Roofing &amp; Construction Services for Nassau County
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-5" />
          <p className="text-gray-400 text-lg">
            One company. Eight services. Everything your home needs - done right the first time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-5">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`flex flex-col sm:flex-row items-start gap-6 bg-[#1a1a1a] border rounded-lg p-7 hover:border-[#C9A84C]/40 transition-all group ${
                service.featured ? "border-[#C9A84C]/40" : "border-white/5"
              }`}
            >
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-black text-lg"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2
                    className="text-xl font-black text-white uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                  >
                    {service.name}
                  </h2>
                  {service.featured && (
                    <span className="bg-[#C9A84C] text-black text-xs font-bold px-2 py-0.5 rounded uppercase">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">{service.fullDesc}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
