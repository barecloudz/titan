import Link from "next/link";

export default function FinancingStrip() {
  return (
    <div className="bg-[#1a1507] border-y border-[#C9A84C]/30 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-sm">Financing Available</span>
            <span className="text-gray-400 text-sm"> - 0% interest plans, fast approval, no contractor fees.</span>
          </div>
        </div>
        <Link
          href="/financing"
          className="shrink-0 bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-xs px-5 py-2 rounded uppercase tracking-widest transition-colors"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
