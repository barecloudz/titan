import Link from "next/link";

const services = [
  {
    slug: "roofing",
    name: "Roofing",
    desc: "Full roof replacements, repairs, and storm damage restoration. Nassau County's most trusted roofing contractor.",
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M4 28L24 8L44 28" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="28" width="28" height="14" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="20" y="32" width="8" height="10" rx="1" stroke="#C9A84C" strokeWidth="2" />
      </svg>
    ),
  },
  {
    slug: "siding",
    name: "Siding",
    desc: "Vinyl, fiber cement, and composite siding installation and replacement. Weather-resistant and beautiful.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="36" height="6" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="18" width="36" height="6" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="28" width="36" height="6" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="38" width="36" height="4" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    slug: "kitchens",
    name: "Kitchen Remodeling",
    desc: "Custom kitchen renovations - cabinetry, countertops, flooring, and complete gut renovations.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="28" width="36" height="14" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="10" width="14" height="14" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="28" y="10" width="14" height="14" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <path d="M6 28L6 24" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 28L42 24" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="16" y1="35" x2="32" y2="35" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "bathrooms",
    name: "Bathroom Remodeling",
    desc: "Luxury bathroom renovations - tile, vanities, waterproofing, and full gut remodels.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 24H40V36C40 38.2 38.2 40 36 40H12C9.8 40 8 38.2 8 36V24Z" stroke="#C9A84C" strokeWidth="2.5" />
        <path d="M8 24H40" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 24V14C14 11.8 15.8 10 18 10H20C22.2 10 24 11.8 24 14" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="32" r="3" stroke="#C9A84C" strokeWidth="2" />
      </svg>
    ),
  },
  {
    slug: "pavers",
    name: "Pavers & Hardscape",
    desc: "Driveways, patios, walkways, and retaining walls. Premium paver systems built for Long Island.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="15" height="10" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="27" y="6" width="15" height="10" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="22" width="15" height="10" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="27" y="22" width="15" height="10" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="6" y="38" width="36" height="4" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    slug: "renovations",
    name: "Home Renovations",
    desc: "Additions, basement finishing, structural work, and full home renovations throughout Nassau County.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 42V18L24 6L40 18V42" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="28" width="12" height="14" rx="1" stroke="#C9A84C" strokeWidth="2.5" />
        <rect x="12" y="18" width="8" height="8" rx="1" stroke="#C9A84C" strokeWidth="2" />
        <rect x="28" y="18" width="8" height="8" rx="1" stroke="#C9A84C" strokeWidth="2" />
      </svg>
    ),
  },
  {
    slug: "dumpster-rental",
    name: "Dumpster Rental",
    desc: "10, 20, 30, and 40-yard dumpsters. Fast delivery throughout Nassau and Suffolk County.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M6 16H42L38 40H10L6 16Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M4 16H44" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 16V10" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 16V10" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="16" y2="36" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="36" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="24" x2="32" y2="36" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "demolition",
    name: "Demolition & Clean-outs",
    desc: "Interior demo, full teardowns, estate cleanouts, and debris removal. Fully licensed and insured.",
    featured: false,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M30 8L40 18L22 36H8V22L26 4L30 8Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M22 36L40 18" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 22L26 4" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 44H44" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured Roofing Card - spans 2 cols */}
          <div className="md:col-span-2 lg:col-span-2 relative bg-[#1a1a1a] border border-[#C9A84C]/40 rounded-lg p-8 group hover:border-[#C9A84C] transition-all hover:shadow-xl hover:shadow-[#C9A84C]/10 flex flex-col">
            <div className="absolute top-4 right-4">
              <span className="bg-[#C9A84C] text-black text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                Primary Service
              </span>
            </div>
            <div className="mb-5">{services[0].icon}</div>
            <h3
              className="text-2xl font-black text-white uppercase tracking-wide mb-3"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              {services[0].name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{services[0].desc}</p>
            <Link
              href={`/services/${services[0].slug}`}
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Other Service Cards */}
          {services.slice(1).map((service) => (
            <div
              key={service.slug}
              className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 group hover:border-[#C9A84C]/40 transition-all hover:shadow-lg hover:shadow-[#C9A84C]/5 flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className="text-base font-bold text-white uppercase tracking-wide mb-2"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-[#C9A84C] font-semibold text-xs uppercase tracking-wide group-hover:gap-2.5 transition-all"
              >
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
