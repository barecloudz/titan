import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background photo */}
      <Image
        src="/images/project-01.png"
        alt="Nassau County home construction and remodeling by Titan Project Solutions"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      {/* Dark overlay - heavy enough to keep text readable, light enough to see the photo */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Gold gradient tint at bottom */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(to top, #1a1507 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
              Massapequa, NY - Licensed &amp; Insured
            </span>
          </div>
          <Link href="/financing" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] transition-colors rounded-full px-4 py-1.5">
            <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            <span className="text-black text-xs font-black uppercase tracking-widest">
              Financing Available
            </span>
          </Link>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Nassau County&apos;s{" "}
          <span className="text-[#C9A84C]">#1 Roofing</span>
          <br />
          Contractor
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 font-light">
          Long Island&apos;s Full-Service Remodeling &amp; Construction Experts
        </p>
        <p className="text-[#C9A84C] text-sm sm:text-base font-semibold tracking-widest uppercase mb-10">
          Licensed &amp; Insured &nbsp;•&nbsp; Free Estimates &nbsp;•&nbsp; Quality Work. Done Right.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-base px-8 py-4 rounded uppercase tracking-wide transition-all shadow-lg hover:shadow-[#C9A84C]/30 hover:shadow-xl text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Get a Free Estimate
          </Link>
          <a
            href="tel:5165574933"
            className="w-full sm:w-auto border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-base px-8 py-4 rounded uppercase tracking-wide transition-all text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Call 516-557-4933
          </a>
        </div>

        {/* Area Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Nassau County", "Long Island", "Western Suffolk", "Massapequa", "Seaford", "Wantagh"].map((area) => (
            <span
              key={area}
              className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#111111]" />
    </section>
  );
}
