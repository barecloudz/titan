"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navServices = [
  { name: "Roofing", href: "/services/roofing" },
  { name: "Siding", href: "/services/siding" },
  { name: "Kitchens", href: "/services/kitchens" },
  { name: "Bathrooms", href: "/services/bathrooms" },
  { name: "Pavers & Hardscape", href: "/services/pavers" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "Dumpster Rental", href: "/services/dumpster-rental" },
  { name: "Demolition & Clean-outs", href: "/services/demolition" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#111111] border-b border-[#C9A84C]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-new.jpg"
              alt="Titan Project Solutions"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#1a1a1a] border border-[#C9A84C]/30 rounded shadow-2xl py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#C9A84C] font-semibold hover:bg-[#C9A84C]/10 uppercase tracking-wide"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-[#C9A84C]/20 my-1" />
                  {navServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations/massapequa" className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Phone */}
          <div className="hidden lg:block">
            <a
              href="tel:5165574933"
              className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-sm px-5 py-2.5 rounded tracking-wide uppercase transition-colors"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Call Now: 516-557-4933
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-300 hover:text-[#C9A84C] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#C9A84C]/20">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-300 hover:text-[#C9A84C] font-medium uppercase tracking-wide text-sm"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-[#C9A84C] font-medium uppercase tracking-wide text-sm"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 space-y-1 border-l border-[#C9A84C]/30">
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="block py-1.5 text-[#C9A84C] text-sm font-semibold">
                    All Services
                  </Link>
                  {navServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-gray-400 hover:text-[#C9A84C]"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/locations/massapequa" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-300 hover:text-[#C9A84C] font-medium uppercase tracking-wide text-sm">
              Locations
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-300 hover:text-[#C9A84C] font-medium uppercase tracking-wide text-sm">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-300 hover:text-[#C9A84C] font-medium uppercase tracking-wide text-sm">
              Contact
            </Link>
            <div className="pt-3 border-t border-[#C9A84C]/20">
              <a
                href="tel:5165574933"
                className="block text-center bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold py-3 rounded uppercase tracking-wide text-sm"
              >
                Call 516-557-4933
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
