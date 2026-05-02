import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Free Roofing Estimate Nassau County",
  description:
    "Contact Titan Project Solutions for a free estimate on roofing, siding, kitchens, bathrooms, pavers, and more. Based in Massapequa, NY. Call 516-557-4933 today.",
  keywords: [
    "contact Titan Project Solutions",
    "free roofing estimate Nassau County",
    "roofing estimate Long Island",
    "contractor contact Massapequa NY",
  ],
  alternates: { canonical: "https://titanprojectsolutions.com/contact" },
  openGraph: {
    title: "Contact Titan Project Solutions | Free Estimate Nassau County",
    description: "Get a free estimate on roofing, siding, kitchens, bathrooms, pavers & more. Based in Massapequa, NY. Call 516-557-4933.",
    url: "https://titanprojectsolutions.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Titan Project Solutions | Free Estimate Nassau County",
    description: "Get a free estimate on roofing, siding, kitchens, bathrooms & more. Based in Massapequa, NY. Call 516-557-4933.",
  },
};

const contactDetails = [
  {
    label: "Phone",
    value: "516-557-4933",
    href: "tel:5165574933",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "titanprojectsolutions7@gmail.com",
    href: "mailto:titanprojectsolutions7@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Massapequa, NY 11758",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sat: 7am–7pm | Sun: By Appt",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Request Your Free Estimate
          </h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-5" />
          <p className="text-gray-400 text-lg">
            Ready to start your project? Fill out the form below or call us directly. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2
                className="text-xl font-black text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Contact Info
              </h2>
              <div className="space-y-5">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-[#C9A84C] transition-colors font-medium text-sm break-all">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg p-6">
              <h3
                className="text-[#C9A84C] font-bold uppercase tracking-wide text-sm mb-3"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Service Areas
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We serve all of <strong className="text-white">Nassau County</strong> and <strong className="text-white">Western Suffolk County</strong>, including Massapequa, Seaford, Wantagh, Merrick, Levittown, Babylon, Lindenhurst, and 20+ more towns.
              </p>
            </div>

            <div className="bg-[#C9A84C] rounded-lg p-6 text-center">
              <p
                className="text-black font-black text-xl uppercase mb-2"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Call Us Now
              </p>
              <a
                href="tel:5165574933"
                className="text-black font-black text-2xl hover:text-[#111111] transition-colors"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                516-557-4933
              </a>
              <p className="text-black/70 text-xs mt-1">Mon–Sat 7am–7pm</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2
              className="text-xl font-black text-white uppercase tracking-wide mb-6"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
