"use client";

import { useState } from "react";

const serviceOptions = [
  "Roofing",
  "Siding",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Pavers & Hardscape",
  "Home Renovations",
  "Dumpster Rental",
  "Demolition & Clean-outs",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      message: data.get("message"),
    };

    Promise.all([
      fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      }),
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    ])
      .then(() => setSubmitted(true))
      .catch((err) => console.error(err));
  }

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] border border-[#C9A84C]/30 rounded-lg p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 mb-5">
          <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-2xl font-black text-white uppercase tracking-wide mb-3"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-400">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours to schedule your free estimate.
        </p>
        <p className="mt-4 text-gray-500 text-sm">
          Need immediate assistance?{" "}
          <a href="tel:5165574933" className="text-[#C9A84C] font-semibold hover:text-[#E8C96A]">
            Call 516-557-4933
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full bg-[#111111] border border-white/10 rounded text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(516) 555-0100"
            className="w-full bg-[#111111] border border-white/10 rounded text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full bg-[#111111] border border-white/10 rounded text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
        />
      </div>

      <div>
        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
          Service Needed *
        </label>
        <select
          name="service"
          required
          className="w-full bg-[#111111] border border-white/10 rounded text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
        >
          <option value="" className="text-gray-600">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="text-white bg-[#1a1a1a]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project - location, scope, timeline, any questions..."
          className="w-full bg-[#111111] border border-white/10 rounded text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-black text-sm py-4 rounded uppercase tracking-widest transition-colors"
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
      >
        Request Free Estimate
      </button>

      <p className="text-gray-600 text-xs text-center">
        Or call us directly at{" "}
        <a href="tel:5165574933" className="text-[#C9A84C] hover:text-[#E8C96A]">
          516-557-4933
        </a>
        . We respond within 24 hours.
      </p>
    </form>
  );
}
