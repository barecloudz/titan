import Image from "next/image";
import Link from "next/link";

const projects = [
  { src: "/images/project-02.jpg", label: "Kitchen Remodel", sub: "Massapequa, NY" },
  { src: "/images/project-17.jpg", label: "Bathroom Renovation", sub: "Wantagh, NY" },
  { src: "/images/project-10.jpg", label: "Kitchen Remodel", sub: "Seaford, NY" },
  { src: "/images/project-22.jpg", label: "Luxury Bath", sub: "Merrick, NY" },
  { src: "/images/project-12.jpg", label: "Kitchen Remodel", sub: "Levittown, NY" },
  { src: "/images/project-23.jpg", label: "Bathroom Renovation", sub: "Bellmore, NY" },
];

export default function Portfolio() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Our Work
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Recent Projects
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mt-5" />
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-[#C9A84C] border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 text-xs font-bold uppercase tracking-widest px-5 py-3 rounded transition-all"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Get a Free Estimate →
          </Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1a1a1a]"
            >
              <Image
                src={p.src}
                alt={`${p.label} in ${p.sub} by Titan Project Solutions`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="text-white font-bold text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {p.label}
                </p>
                <p className="text-[#C9A84C] text-xs mt-0.5">{p.sub}</p>
              </div>
              {/* Gold corner tag */}
              <div className="absolute top-3 left-3 bg-[#C9A84C] text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Serving Nassau County &amp; Western Suffolk - Roofing photos coming soon. Ask us about our roofing portfolio.
        </p>
      </div>
    </section>
  );
}
