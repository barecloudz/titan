const GOOGLE_REVIEWS_URL = "https://share.google/dIm11wWHjHraB0D2y";

function StarRow() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-6 h-6 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-3">
          Google Reviews
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          What Clients Are Saying
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5 mb-10" />

        <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-2xl p-10 sm:p-14 flex flex-col items-center gap-6">
          {/* Google G logo */}
          <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 13 5 4 14 4 24s9 19 20 19c10 0 19-7 19-19 0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 43c5 0 9.4-1.9 12.8-5l-6-5C29 34.7 26.6 35 24 35c-5.2 0-9.5-2.5-11.3-6.2l-6.6 5.1C9.7 39.1 16.3 43 24 43z"/>
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6 5C41 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>

          <div className="flex flex-col items-center gap-2">
            <StarRow />
            <p
              className="text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              5.0
            </p>
            <p className="text-gray-400 text-sm">Based on 20+ Google Reviews</p>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Our customers across Nassau &amp; Suffolk County share their experiences directly on Google — unfiltered, unedited, and verified.
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm px-8 py-4 rounded uppercase tracking-widest transition-colors"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Read Our Google Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <p className="text-gray-600 text-xs">Opens Google — no account needed</p>
        </div>
      </div>
    </section>
  );
}
