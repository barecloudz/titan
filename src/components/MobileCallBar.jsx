"use client";
import Link from "next/link";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-[#C9A84C]/30 shadow-2xl">
      <a
        href="tel:5165574933"
        className="flex-1 flex items-center justify-center gap-2 bg-[#C9A84C] text-black font-black text-sm py-4 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-[#111111] text-[#C9A84C] font-black text-sm py-4 uppercase tracking-wide border-l border-[#C9A84C]/30"
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Free Quote
      </Link>
    </div>
  );
}
