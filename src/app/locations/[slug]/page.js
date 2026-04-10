import { locations } from "@/data/locations";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `Roofing Contractor in ${location.name}, NY | Titan Project Solutions`,
    description: `Titan Project Solutions is the trusted roofing contractor serving ${location.name}, NY. We also offer siding, kitchens, bathrooms, pavers, and more. Licensed & insured. Free estimates. Call 516-557-4933.`,
    keywords: [
      `roofing contractor ${location.name} NY`,
      `roofing company ${location.name}`,
      `contractor ${location.name} NY`,
      `roof replacement ${location.name}`,
      `siding ${location.name} NY`,
    ],
  };
}

const allServices = [
  { name: "Roofing", href: "/services/roofing" },
  { name: "Siding", href: "/services/siding" },
  { name: "Kitchen Remodeling", href: "/services/kitchens" },
  { name: "Bathroom Remodeling", href: "/services/bathrooms" },
  { name: "Pavers & Hardscape", href: "/services/pavers" },
  { name: "Home Renovations", href: "/services/renovations" },
  { name: "Dumpster Rental", href: "/services/dumpster-rental" },
  { name: "Demolition & Clean-outs", href: "/services/demolition" },
];

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const nearbyTowns = locations
    .filter((l) => l.county === location.county && l.slug !== slug)
    .slice(0, 6);

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
            {location.county} County, NY
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Roofing Contractor in {location.name}, NY
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Titan Project Solutions proudly serves {location.name}, NY with professional roofing, siding, kitchen remodeling, bathroom renovations, paver installation, and more. Licensed &amp; insured. Based in Massapequa, right here on Long Island.
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

      {/* About Serving this Town */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black text-white uppercase tracking-tight mb-8"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Serving {location.name} Homeowners
          </h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>
              Titan Project Solutions has been serving homeowners in {location.name}, NY and the surrounding {location.county} County area for over a decade. We&apos;re not a national franchise - we&apos;re a locally owned and operated construction company based right here in Massapequa. When you call us, you get a real person who knows the area, understands local permit requirements, and cares about the community.
            </p>
            <p>
              Our most requested service in {location.name} is roofing. Long Island homeowners deal with harsh weather year-round - summer storms, strong coastal winds, and brutal winters that take a toll on roofs. We offer free roofing inspections, emergency tarping, complete roof replacements, and targeted repairs. If your roof was damaged by a recent storm, we can work with your insurance company to get your claim handled correctly.
            </p>
            <p>
              Beyond roofing, we handle everything from bathroom tile work to complete home renovations, driveway paver installations, and dumpster rentals for your cleanout project. One call to Titan gets you access to a full-service construction team that knows {location.name} and cares about doing great work.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-black text-white uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Services We Offer in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-[#111111] border border-white/5 rounded-lg p-5 hover:border-[#C9A84C]/30 transition-all group flex items-center justify-between"
              >
                <span className="text-white text-sm font-semibold group-hover:text-[#C9A84C] transition-colors">
                  {s.name}
                </span>
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Titan */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-black text-white uppercase tracking-tight mb-8"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Why {location.name} Homeowners Choose Titan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Local & Licensed", desc: "Based in Massapequa, NY. Fully licensed and insured in New York State." },
              { title: "Free Estimates", desc: "No-pressure written estimates for every project, big or small." },
              { title: "5-Star Reputation", desc: "Consistently rated 5 stars by homeowners across Nassau County." },
              { title: "Quality Guaranteed", desc: "Every project backed by our workmanship warranty. Quality Work. Done Right." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-white/5 rounded-lg p-5">
                <h3
                  className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Towns */}
      {nearbyTowns.length > 0 && (
        <section className="bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-4">
              Also Serving Nearby Communities
            </p>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map((town) => (
                <Link
                  key={town.slug}
                  href={`/locations/${town.slug}`}
                  className="bg-[#111111] border border-white/10 text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 text-xs px-3 py-1.5 rounded-full transition-colors"
                >
                  {town.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready to Work with a Trusted ${location.name} Contractor?`}
        subtitle={`Call Titan Project Solutions for a free estimate on roofing, siding, renovations, and more in ${location.name}, NY.`}
      />
    </>
  );
}
