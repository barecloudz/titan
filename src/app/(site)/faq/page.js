import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "FAQ | Roofing Contractor Nassau County NY | Titan Project Solutions",
  description:
    "Frequently asked questions about Titan Project Solutions. Roofing, remodeling, dumpster rental, service areas, financing, and more. Serving Nassau County and Long Island, NY.",
  alternates: { canonical: "https://titanprojectsolutions.com/faq" },
  openGraph: {
    url: "https://titanprojectsolutions.com/faq",
    title: "FAQ | Titan Project Solutions | Roofing Contractor Nassau County",
    description: "Answers to the most common questions about Titan Project Solutions. Roofing, remodeling, service areas, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Titan Project Solutions FAQ" }],
  },
};

const faqs = [
  {
    category: "Roofing",
    items: [
      {
        question: "Do you offer free roofing estimates in Nassau County?",
        answer: "Yes, Titan Project Solutions offers free roofing estimates throughout Nassau County and Long Island. Call or text (516) 557-4933 to schedule. We serve Massapequa, Seaford, Wantagh, Merrick, Bellmore, and surrounding towns.",
      },
      {
        question: "Do you offer 24/7 emergency roofing service?",
        answer: "Yes, Titan Project Solutions provides 24/7 emergency roofing service for storm damage, leaks, and urgent repairs throughout Nassau County and Long Island. Call or text (516) 557-4933 any time, day or night.",
      },
      {
        question: "What roofing services do you offer?",
        answer: "We offer roof replacement, roof repair, storm damage restoration, shingle roofing, flat roofing, standing seam metal roofing, slate roofing, and copper roofing. We work on residential homes throughout Nassau County and Western Suffolk County, Long Island.",
      },
      {
        question: "Do you handle insurance claims for storm damage roofing?",
        answer: "Yes, Titan Project Solutions assists homeowners with storm damage roof repair and works directly alongside your insurance adjuster. We document the damage thoroughly and coordinate to make sure you receive a fair settlement. We handle Nassau County storm damage claims regularly.",
      },
      {
        question: "What is the cost of a roof replacement on Long Island?",
        answer: "Roof replacement costs on Long Island vary depending on size, materials, and condition. Titan Project Solutions provides free estimates. Call (516) 557-4933 for an accurate quote for your home in Nassau County.",
      },
    ],
  },
  {
    category: "About Titan Project Solutions",
    items: [
      {
        question: "Are you a licensed and insured roofing contractor?",
        answer: "Yes, Titan Project Solutions is fully licensed and insured to perform roofing work in New York State. We carry full liability insurance and workers' compensation on every project.",
      },
      {
        question: "How long have you been in business?",
        answer: "Titan Project Solutions has been serving Long Island homeowners since 2015 with over 500 completed projects in Nassau County and Western Suffolk County.",
      },
      {
        question: "Are you family-owned?",
        answer: "Yes, Titan Project Solutions is a family-owned and operated business based in Massapequa, NY. We have been serving Long Island homeowners since 2015 with a focus on quality craftsmanship and honest pricing.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        question: "Do you do kitchen and bathroom remodeling as well as roofing?",
        answer: "Yes, Titan Project Solutions is a full-service home improvement contractor. In addition to roofing, we specialize in kitchen remodeling, bathroom renovations, siding installation, pavers and masonry, and home additions throughout Nassau County.",
      },
      {
        question: "Do you offer dumpster rental in Nassau County?",
        answer: "Yes, Titan Project Solutions offers 10, 20, 30, and 40-yard dumpster rentals in Nassau County and Western Suffolk County, Long Island. Call (516) 557-4933 to check availability.",
      },
      {
        question: "Do you offer excavation and drainage services?",
        answer: "Yes, Titan Project Solutions operates excavators for residential excavation, site grading, French drain installation, dry wells, and yard drainage solutions throughout Nassau County and Long Island, NY. Call (516) 557-4933 for a free estimate.",
      },
      {
        question: "Do you offer financing for roofing projects?",
        answer: "Yes, we offer financing options for roofing replacement and major renovation projects. Contact us at (516) 557-4933 to discuss options.",
      },
    ],
  },
  {
    category: "Service Areas & Contact",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We serve all of Nassau County including Massapequa, Seaford, Wantagh, Merrick, Bellmore, Levittown, East Meadow, Farmingdale, Bethpage, and Hicksville, as well as Western Suffolk County including Babylon, Lindenhurst, Amityville, and Deer Park.",
      },
      {
        question: "How do I contact Titan Project Solutions?",
        answer: "Call or text us at (516) 557-4933 or visit titanprojectsolutions.com. We serve Nassau County and Long Island, NY. Free estimates available.",
      },
    ],
  },
];

const allFaqItems = faqs.flatMap((cat) => cat.items);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://titanprojectsolutions.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://titanprojectsolutions.com/faq" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Got Questions?
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8">
            Everything you need to know about Titan Project Solutions — roofing, remodeling, service areas, and more. Can&apos;t find your answer? Call or text us any time.
          </p>
          <a
            href="tel:5165574933"
            className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-7 py-4 rounded uppercase tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Call 516-557-4933
          </a>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2
                className="text-xl font-black text-[#C9A84C] uppercase tracking-widest mb-6 pb-3 border-b border-[#C9A84C]/20"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-[#C9A84C]/20 transition-colors"
                  >
                    <h3
                      className="text-white font-bold text-base mb-3"
                      style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                    >
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-400 mb-8">Call or text us any time — including nights and weekends.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Free estimates on roofing, remodeling, siding, and more. Licensed and insured. Nassau County and Long Island."
      />
    </>
  );
}
