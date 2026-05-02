const stats = [
  { number: "500+", label: "Projects Completed", desc: "Across Nassau & Suffolk County" },
  { number: "10+", label: "Years Experience", desc: "Serving Long Island homeowners" },
  { number: "30+", label: "Towns Served", desc: "Nassau & Western Suffolk" },
  { number: "5★", label: "Rated", desc: "By our clients on Google" },
];

export default function Stats() {
  return (
    <section className="bg-[#C9A84C] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-none mb-2"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {stat.number}
              </div>
              <div
                className="text-black font-bold text-sm uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {stat.label}
              </div>
              <div className="text-black/60 text-xs hidden sm:block">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
