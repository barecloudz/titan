import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "About Us | Roofing Contractor Nassau County",
  description:
    "Titan Project Solutions is a family-owned roofing and construction company based in Massapequa, NY. Licensed & insured. Serving Nassau County for over 10 years. Call 516-557-4933.",
  keywords: [
    "about Titan Project Solutions",
    "roofing contractor Massapequa NY",
    "licensed contractor Nassau County",
    "family owned construction company Long Island",
  ],
  alternates: { canonical: "https://titanprojectsolutions.com/about" },
  openGraph: {
    title: "About Titan Project Solutions | Family-Owned Nassau County Contractor",
    description: "Family-owned roofing and construction company based in Massapequa, NY. Licensed & insured. Serving Nassau County for over 10 years.",
    url: "https://titanprojectsolutions.com/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Titan Project Solutions | Family-Owned Nassau County Contractor",
    description: "Family-owned roofing and construction company based in Massapequa, NY. Licensed & insured. 10+ years serving Nassau County.",
  },
};

const values = [
  {
    title: "Honesty First",
    desc: "We give you a straight answer and a fair price. No hidden fees, no upselling, no bait-and-switch tactics. You'll know exactly what you're getting before we lift a tool.",
  },
  {
    title: "Quality Materials",
    desc: "We partner with top-tier manufacturers and only use materials we'd put on our own homes. From CertainTeed roofing systems to James Hardie siding - quality in, quality out.",
  },
  {
    title: "Clean Jobsites",
    desc: "We respect your property. Our crew cleans up every single day and leaves your home the way we found it - minus whatever problem we were hired to fix.",
  },
  {
    title: "We Stand Behind Our Work",
    desc: "Every project comes with our workmanship guarantee. If something isn't right, we make it right. That commitment is in writing in every contract we sign.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Nassau County&apos;s Trusted Roofing &amp; Construction Team
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Based in Massapequa, NY. Serving Long Island homeowners since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-black text-white uppercase tracking-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Built on Long Island.<br />
                <span className="text-[#C9A84C]">Built to Last.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Titan Project Solutions was founded right here in Massapequa, NY, with one goal in mind: to be the roofing and construction company that Long Island homeowners could actually trust.
                </p>
                <p>
                  We&apos;ve spent over a decade building our reputation one project at a time - from complete roof replacements after storm damage to full kitchen and bathroom renovations. We don&apos;t cut corners and we don&apos;t disappear after the job is done.
                </p>
                <p>
                  As a family-owned business, every project matters to us personally. Your home is your biggest investment, and we treat it that way. That&apos;s not just a marketing line - it&apos;s why the majority of our work comes from referrals from satisfied customers across Nassau and Suffolk County.
                </p>
                <p>
                  We are fully licensed and insured in New York State, and we pull all required permits. You&apos;ll never be left exposed.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg p-6">
                <p className="text-4xl font-black text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>10+</p>
                <p className="text-white font-semibold">Years Serving Long Island</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg p-6">
                <p className="text-4xl font-black text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>500+</p>
                <p className="text-white font-semibold">Projects Completed</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg p-6">
                <p className="text-4xl font-black text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>30+</p>
                <p className="text-white font-semibold">Towns Across Nassau &amp; Suffolk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              How We Operate
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111111] border border-white/5 rounded-lg p-7 hover:border-[#C9A84C]/30 transition-all">
                <h3
                  className="text-[#C9A84C] font-bold uppercase tracking-wide text-sm mb-3"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-[#111111] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Titan Project Solutions is a <strong className="text-white">fully licensed and insured</strong> general contractor operating in Nassau and Suffolk County, New York.
            We carry general liability insurance and workers&apos; compensation on every project. Ask for our license information and we&apos;ll provide it upfront.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-sm px-6 py-3 rounded uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
