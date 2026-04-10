import Link from "next/link";

export default function CTABanner({
  title = "Ready to Start Your Project?",
  subtitle = "Call us today for a free estimate. No pressure, no obligation - just honest pricing and quality workmanship.",
  phone = "516-557-4933",
}) {
  return (
    <section className="bg-[#C9A84C] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-4"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="w-full sm:w-auto bg-black hover:bg-[#111111] text-white font-bold text-base px-8 py-4 rounded uppercase tracking-wide transition-all shadow-lg text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Call {phone}
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base px-8 py-4 rounded uppercase tracking-wide transition-all text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
