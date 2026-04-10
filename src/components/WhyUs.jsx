const pillars = [
  {
    title: "Licensed & Insured",
    desc: "Fully licensed and insured in New York State. Every project is protected - your home, our team, no exceptions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 4L40 12V24C40 33.6 33.1 42.5 24 45C14.9 42.5 8 33.6 8 24V12L24 4Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 24L22 29L31 19" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Free Estimates",
    desc: "No obligation, no pressure. We provide detailed written estimates so you know exactly what you're getting before we start.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="10" y="6" width="28" height="36" rx="2" stroke="#C9A84C" strokeWidth="2.5" />
        <path d="M16 16H32" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 22H32" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 28H24" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="34" cy="36" r="6" fill="#111111" stroke="#C9A84C" strokeWidth="2.5" />
        <path d="M34 33V36L36 38" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Family Owned",
    desc: "Locally owned and operated in Massapequa, NY. We treat every home we work on like it's our own - because Long Island is our community.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 6C24 6 10 16 10 28C10 35.7 16.3 42 24 42C31.7 42 38 35.7 38 28C38 16 24 6 24 6Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 28L22 33L31 22" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "On Time & On Budget",
    desc: "We show up when we say we will and finish what we start. Our clients consistently rate us 5 stars for professionalism and reliability.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="#C9A84C" strokeWidth="2.5" />
        <path d="M24 12V24L32 30" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            The Titan Difference
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Why Choose Titan
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">
            We&apos;ve built our reputation one project at a time across Nassau County. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#111111] border border-white/5 rounded-lg p-8 text-center hover:border-[#C9A84C]/30 transition-all group"
            >
              <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3
                className="text-white font-bold uppercase tracking-wide text-sm mb-3"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
