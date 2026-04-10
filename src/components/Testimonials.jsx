const testimonials = [
  {
    name: "Michael R.",
    location: "Massapequa, NY",
    service: "Roof Replacement",
    stars: 5,
    quote:
      "Titan replaced our entire roof after storm damage and did an incredible job. The crew was professional, cleaned up every day, and finished ahead of schedule. I've already recommended them to three neighbors. If you need a roofing contractor in Nassau County, call Titan first.",
  },
  {
    name: "Jennifer T.",
    location: "Wantagh, NY",
    service: "Kitchen Remodel",
    stars: 5,
    quote:
      "We completely gutted our kitchen and Titan managed every single part of it. They coordinated the cabinets, countertops, plumbing, and electrical without us lifting a finger. The finished product is absolutely stunning. Quality work, done right - exactly like they promise.",
  },
  {
    name: "Anthony M.",
    location: "Seaford, NY",
    service: "Siding & Pavers",
    stars: 5,
    quote:
      "Had both the siding replaced and a new paver driveway installed by Titan. Two big projects, one company, zero headaches. Their pricing was fair and transparent, they showed up every day, and the result completely transformed our home's curb appeal. Couldn't be happier.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            What Our Clients Say
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Real Reviews
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1a1a1a] border border-white/5 rounded-lg p-7 flex flex-col hover:border-[#C9A84C]/20 transition-all"
            >
              <Stars count={t.stars} />
              <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
                <span className="inline-block mt-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs px-2 py-0.5 rounded">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
