import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WrenRescueForm from "@/components/WrenRescueForm";

export const metadata = {
  title: "Wren Kitchens Rescue Program | Long Island | Titan Project Solutions",
  description:
    "Wren Kitchens shut down their U.S. operations. Titan Project Solutions is helping Nassau & Suffolk County homeowners complete their unfinished kitchens. Free job site assessment within 24–48 hours. Call 516-557-4933.",
  keywords: [
    "Wren Kitchens closed Long Island",
    "Wren Kitchens out of business Nassau County",
    "finish Wren kitchen installation",
    "Wren Kitchens replacement contractor",
    "unfinished kitchen Long Island",
    "Wren Kitchens Massapequa",
    "Wren Kitchens Levittown",
    "Wren Kitchens Commack",
    "Wren Kitchens Freeport",
  ],
  alternates: {
    canonical: "https://titanprojectsolutions.com/wren-kitchens-rescue",
  },
  openGraph: {
    title: "Wren Kitchens Left You Hanging? Titan Project Solutions Can Help.",
    description:
      "Titan Project Solutions is completing unfinished Wren Kitchens projects across Nassau & Suffolk County. Free job site assessment within 24–48 hours.",
    url: "https://titanprojectsolutions.com/wren-kitchens-rescue",
    type: "website",
    images: [
      {
        url: "https://titanprojectsolutions.com/images/wren-rescue-og.jpg",
        width: 1200,
        height: 1200,
        alt: "Titan Kitchen Rescue Program — We Finish What Wren Kitchens Walked Away From",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wren Kitchens Left You Hanging? Titan Project Solutions Can Help.",
    description:
      "Completing unfinished Wren Kitchens projects across Long Island. Free job site assessment within 24–48 hours. Call 516-557-4933.",
    images: ["https://titanprojectsolutions.com/images/wren-rescue-og.jpg"],
  },
};

const rescueServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://titanprojectsolutions.com/wren-kitchens-rescue#service",
  name: "Titan Kitchen Rescue Program",
  description:
    "Titan Project Solutions completes unfinished Wren Kitchens installations across Long Island. We handle cabinets delivered but not installed, installations started but abandoned, missing materials, and projects paid in full but never started.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://titanprojectsolutions.com/#business",
    name: "Titan Project Solutions",
    telephone: "+15165574933",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Massapequa",
      addressRegion: "NY",
      postalCode: "11758",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Massapequa", "Levittown", "Freeport", "Elmont", "Commack", "Selden",
    "Nassau County", "Suffolk County",
  ].map((name) => ({ "@type": "City", name })),
  serviceType: "Kitchen Remodeling",
  url: "https://titanprojectsolutions.com/wren-kitchens-rescue",
  offers: {
    "@type": "Offer",
    description: "Free job site assessment within 24–48 hours for Wren Kitchens customers",
    price: "0",
    priceCurrency: "USD",
    name: "Free Job Site Assessment",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://titanprojectsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Kitchen Remodeling", item: "https://titanprojectsolutions.com/services/kitchens" },
    { "@type": "ListItem", position: 3, name: "Wren Kitchens Rescue Program", item: "https://titanprojectsolutions.com/wren-kitchens-rescue" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Titan install cabinets that were already delivered by Wren Kitchens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Wren Kitchens cabinets have been delivered but not installed, we can complete the installation. We'll send a crew to assess your materials and provide a firm quote — typically within 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "My Wren kitchen installation was started but never finished. Can you take it over?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We handle mid-project takeovers regularly. One of our project managers will assess exactly where things stand and give you a clear scope of what's needed to complete the job.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm missing materials Wren never delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer material sourcing assistance and can match or substitute cabinetry, countertops, hardware, and more. We work with supplier networks across Long Island to get your project moving.",
      },
    },
    {
      "@type": "Question",
      name: "Will Titan match Wren Kitchens' pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We price jobs fairly based on the actual work involved. We can't promise to match a quote from a company that went out of business, but we are transparent about costs and will work with your budget. Financing is also available through Service Finance.",
      },
    },
    {
      "@type": "Question",
      name: "Does Titan serve the areas where Wren Kitchens had showrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve customers from all former Wren Kitchens showroom areas including Massapequa, Levittown, Commack, Selden, Elmont, and Freeport, as well as all of Nassau and Suffolk Counties.",
      },
    },
  ],
};

const situations = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    title: "Cabinets Delivered, Not Installed",
    desc: "Your Wren order arrived. The boxes are sitting in your garage or living room. Now what? We'll install them — correctly, completely, on schedule.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Installation Started, Left Unfinished",
    desc: "Work started, then stopped. Your kitchen is torn apart and unusable. We take over mid-project with no runaround — just a clear path to done.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Materials Ordered, Never Arrived",
    desc: "You paid for cabinets, countertops, or hardware that Wren never delivered. We source replacement materials and get your project back on track.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Paid in Full, Work Never Started",
    desc: "You put money down and Wren went dark. Your deposit is likely gone — but your kitchen doesn't have to be. We'll give you a straight quote and get started fast.",
  },
];

const trustItems = [
  { label: "Fully Licensed & Insured", sub: "Nassau County contractor" },
  { label: "Family-Owned", sub: "Local to Massapequa, NY" },
  { label: "500+ Projects Completed", sub: "Nassau & Suffolk Counties" },
  { label: "Financing Available", sub: "Service Finance — apply in minutes" },
];

const steps = [
  { num: "01", title: "Call or Fill Out the Form", desc: "Give us a quick rundown of where your project stands. Takes two minutes." },
  { num: "02", title: "Free Job Site Assessment", desc: "We'll send someone to your home within 24–48 hours to see the situation firsthand." },
  { num: "03", title: "You Get a Firm Quote", desc: "No surprises. We tell you exactly what it costs to complete your kitchen before any work begins." },
  { num: "04", title: "We Finish Your Kitchen", desc: "Our crew shows up and sees it through to the end. Fully installed, fully done." },
];

const faqs = [
  {
    q: "Can Titan install cabinets that were already delivered by Wren Kitchens?",
    a: "Yes. If your Wren Kitchens cabinets have been delivered but not installed, we complete the installation. We'll assess your materials and provide a firm quote within 24 to 48 hours.",
  },
  {
    q: "My Wren installation was started but never finished. Can you take it over?",
    a: "Absolutely. Mid-project takeovers are something we handle regularly. A project manager will assess exactly where things stand and give you a clear scope to complete the job.",
  },
  {
    q: "What if I'm missing materials Wren never delivered?",
    a: "We offer material sourcing assistance and can match or substitute cabinetry, countertops, and hardware. We work with supplier networks across Long Island.",
  },
  {
    q: "Will Titan match Wren Kitchens' pricing?",
    a: "We price jobs fairly based on the actual work involved. We can't promise to match a closed company's quote, but we're transparent about costs and work with your budget. Financing is also available.",
  },
  {
    q: "Which areas do you serve?",
    a: "All former Wren Kitchens showroom areas: Massapequa, Levittown, Commack, Selden, Elmont, and Freeport — plus all of Nassau and Suffolk Counties.",
  },
];

export default function WrenKitchensRescuePage() {
  return (
    <>
      <JsonLd data={rescueServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Breaking: Wren Kitchens Has Shut Down U.S. Operations
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Wren Kitchens{" "}
            <span className="text-[#C9A84C]">Left You Hanging?</span>
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
          <p className="text-xl text-white font-bold mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
            We Finish What Others Walked Away From.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            Wren Kitchens has shut down their U.S. operations, leaving homeowners across Long Island with
            unfinished kitchens, missing materials, and nowhere to turn. Titan Project Solutions is here to fix that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5165574933"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-8 py-4 rounded uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 516-557-4933
            </a>
            <a
              href="#rescue-form"
              className="inline-flex items-center justify-center border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-8 py-4 rounded uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Get Help Now — Free Assessment
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Serving customers from former Wren showrooms:{" "}
            <span className="text-gray-400">Massapequa, Levittown, Commack, Selden, Elmont, and Freeport</span>
          </p>
        </div>
      </section>

      {/* Program benefits strip */}
      <section className="bg-[#C9A84C] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-black text-xs font-black uppercase tracking-[0.3em] mb-6 text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Titan Kitchen Rescue Program
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Free Job Site Assessment", sub: "Within 24–48 Hours" },
              { label: "Priority Scheduling", sub: "For Unfinished Kitchens" },
              { label: "Material Sourcing", sub: "Cabinets, Tops, Hardware & More" },
              { label: "Flexible Payment Options", sub: "Because you've been through enough" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-black font-black text-sm uppercase tracking-wide leading-tight" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                  {item.label}
                </p>
                <p className="text-black/70 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situation cards */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">We Can Help If</p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Are You in One of These Situations?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {situations.map((s) => (
              <div key={s.title} className="bg-[#1a1a1a] border border-white/5 hover:border-[#C9A84C]/30 rounded-lg p-6 transition-all">
                <div className="text-[#C9A84C] mb-4">{s.icon}</div>
                <h3
                  className="text-white font-black text-sm uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">Simple Process</p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Here&apos;s What Happens When You Call Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-[#C9A84C]/20 text-6xl font-black leading-none mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                  {step.num}
                </div>
                <h3
                  className="text-white font-black text-sm uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="rescue-form" className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3 text-center">Get Started</p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3 text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Stuck With an Unfinished Kitchen?
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Fill out the form below. We&apos;ll call you within 2 hours to schedule your free job site assessment.
            Financing available through Service Finance — apply in minutes.
          </p>
          <WrenRescueForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-black text-white uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/5 pb-6">
                <h3
                  className="text-white font-bold text-sm uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area mention */}
      <section className="bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">
            Serving customers from all former Wren Kitchens showroom locations:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Massapequa", "Levittown", "Commack", "Selden",
              "Elmont (Home Depot)", "Freeport (Home Depot)",
              "All of Nassau County", "Western Suffolk County",
            ].map((loc) => (
              <span
                key={loc}
                className="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#C9A84C] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Don&apos;t Stay Stuck. Let&apos;s Finish Your Kitchen.
          </h2>
          <p className="text-black/70 text-lg mb-8">
            Free job site assessment. No commitment. We show up within 24–48 hours.
          </p>
          <a
            href="tel:5165574933"
            className="inline-flex items-center gap-3 bg-black hover:bg-[#111111] text-white font-black text-2xl sm:text-3xl px-10 py-6 rounded uppercase tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            516-557-4933
          </a>
          <p className="mt-4 text-black/60 text-sm">
            or{" "}
            <a href="#rescue-form" className="text-black font-bold underline">
              fill out the form above
            </a>{" "}
            and we&apos;ll call you
          </p>
          <div className="mt-8 pt-6 border-t border-black/20">
            <p className="text-black/70 text-sm">
              Also helping with{" "}
              <Link href="/services/kitchens" className="text-black font-bold hover:underline">
                full kitchen remodels
              </Link>
              {" "}across Nassau &amp; Suffolk Counties.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
