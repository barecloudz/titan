import Link from "next/link";

export const metadata = {
  title: "Financing Available | Titan Project Solutions",
  description:
    "Finance your roofing, siding, kitchen, or home renovation project with Titan Project Solutions. Flexible payment options including 0% interest plans. Apply online in minutes.",
};

const plans = [
  {
    label: "Same as Cash",
    headline: "12 Months — 0% Interest",
    sub: "No monthly payments during promo period",
    tag: "Most Popular",
    highlight: true,
  },
  {
    label: "No Interest, No Payments",
    headline: "12 Months — Then 9.99% for 10 Years",
    sub: "Defer everything, then roll into fixed rate",
    tag: null,
    highlight: false,
  },
  {
    label: "Low Fixed Rate",
    headline: "7.99% for 15 Years",
    sub: "Lowest monthly payment option",
    tag: "Best Rate",
    highlight: false,
  },
  {
    label: "Fixed Rate",
    headline: "9.99% for 10 Years",
    sub: "Predictable payments, no surprises",
    tag: null,
    highlight: false,
  },
  {
    label: "Deferred Interest",
    headline: "18 Months — Deferred Interest",
    sub: "Minimum monthly payments required",
    tag: null,
    highlight: false,
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] border-b border-[#C9A84C]/20 py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Financing Available</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Don't Wait to Fix <span className="text-[#C9A84C]">Your Home</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Get the roof, siding, or renovation you need today - and pay on your terms. Fast approval, flexible plans, no contractor fees.
          </p>
          <form
            target="_self"
            action="https://apply.svcfin.com/home/dealerAuthentication"
            method="post"
          >
            <input name="id" type="hidden" value="6501257857" />
            <input name="key" type="hidden" value="1742219857" />
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-8 py-4 rounded uppercase tracking-widest transition-colors shadow-lg hover:shadow-[#C9A84C]/30 hover:shadow-xl"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Apply Online Now
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-4">Takes minutes to apply. Flexible plans available.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#111111] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[4px] mb-3">Flexible Options</p>
            <h2
              className="text-3xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Plans to Fit Every Budget
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.label}
                className={`relative rounded-lg p-6 border transition-all ${
                  plan.highlight
                    ? "bg-[#1a1507] border-[#C9A84C]/60 shadow-[0_0_30px_rgba(201,168,76,0.1)]"
                    : "bg-[#0a0a0a] border-white/10"
                }`}
              >
                {plan.tag && (
                  <span className="absolute -top-3 left-5 bg-[#C9A84C] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px] mb-2">{plan.label}</p>
                <p
                  className={`text-lg font-black leading-tight mb-1 ${plan.highlight ? "text-[#C9A84C]" : "text-white"}`}
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {plan.headline}
                </p>
                <p className="text-gray-500 text-sm">{plan.sub}</p>
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          <div className="bg-[#0a0a0a] border border-[#C9A84C]/20 rounded-lg p-8 text-center">
            <h3
              className="text-2xl font-black text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Apply through our financing partner in minutes. Once approved, we'll schedule your project right away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <form
                target="_self"
                action="https://apply.svcfin.com/home/dealerAuthentication"
                method="post"
              >
                <input name="id" type="hidden" value="6501257857" />
                <input name="key" type="hidden" value="1742219857" />
                <button
                  type="submit"
                  className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-8 py-3.5 rounded uppercase tracking-widest transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  Apply Online
                </button>
              </form>
              <a
                href="tel:5165574933"
                className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-bold text-sm px-8 py-3.5 rounded uppercase tracking-wide transition-colors"
              >
                Call 516-557-4933
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Apply Online", desc: "Fill out a quick application through our secure financing partner. Takes less than 5 minutes." },
              { step: "02", title: "Get Approved", desc: "Fast decisions. Once approved, let us know and we'll schedule your free estimate." },
              { step: "03", title: "We Get to Work", desc: "Project starts, you pay on your terms. Quality Work. Done Right." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-4">
                  <span className="text-[#C9A84C] font-black text-sm">{item.step}</span>
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#111111] border-t border-[#C9A84C]/20 py-12 px-4 text-center">
        <p className="text-gray-500 text-sm mb-2">Questions about financing?</p>
        <a href="tel:5165574933" className="text-[#C9A84C] font-black text-xl hover:text-[#E8C96A] transition-colors">
          Call 516-557-4933
        </a>
        <p className="text-gray-600 text-xs mt-2">We'll walk you through the best plan for your project.</p>
      </section>
    </>
  );
}
