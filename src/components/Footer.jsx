import Link from "next/link";

const serviceLinks = [
  { name: "Roofing", href: "/services/roofing" },
  { name: "Siding", href: "/services/siding" },
  { name: "Kitchen Remodeling", href: "/services/kitchens" },
  { name: "Bathroom Remodeling", href: "/services/bathrooms" },
  { name: "Pavers & Hardscape", href: "/services/pavers" },
  { name: "Home Renovations", href: "/services/renovations" },
  { name: "Dumpster Rental", href: "/services/dumpster-rental" },
  { name: "Demolition & Clean-outs", href: "/services/demolition" },
];

const nassauTowns = [
  "Massapequa", "Seaford", "Wantagh", "Merrick", "Levittown",
  "East Meadow", "Bellmore", "Freeport", "Baldwin", "Farmingdale",
  "Bethpage", "Hicksville", "Plainview", "Woodbury", "Oyster Bay",
];

const suffolkTowns = [
  "Babylon", "Lindenhurst", "Amityville", "Copiague", "West Babylon",
  "Deer Park", "West Islip", "North Babylon", "Wyandanch", "Bay Shore",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Services */}
          <div>
            <h3
              className="text-[#C9A84C] font-bold uppercase tracking-widest text-sm mb-5 pb-2 border-b border-[#C9A84C]/30"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Service Areas */}
          <div>
            <h3
              className="text-[#C9A84C] font-bold uppercase tracking-widest text-sm mb-5 pb-2 border-b border-[#C9A84C]/30"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Service Areas
            </h3>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-semibold">Nassau County</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {nassauTowns.join(" · ")}
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-semibold">Western Suffolk</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {suffolkTowns.join(" · ")}
            </p>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3
              className="text-[#C9A84C] font-bold uppercase tracking-widest text-sm mb-5 pb-2 border-b border-[#C9A84C]/30"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">Phone</p>
                <a
                  href="tel:5165574933"
                  className="text-[#C9A84C] text-lg font-bold hover:text-[#E8C96A] transition-colors"
                >
                  516-557-4933
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">Email</p>
                <a
                  href="mailto:titanprojectsolutions7@gmail.com"
                  className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors break-all"
                >
                  titanprojectsolutions7@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">Location</p>
                <p className="text-gray-400 text-sm">Massapequa, NY</p>
                <p className="text-gray-400 text-sm">Nassau County, Long Island</p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:5165574933"
                  className="inline-block bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-sm px-5 py-2.5 rounded uppercase tracking-wide transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A84C]/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2025 Titan Project Solutions. Licensed &amp; Insured. Nassau County, NY.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
