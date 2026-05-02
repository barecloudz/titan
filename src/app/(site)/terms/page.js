import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Titan Project Solutions",
  description: "Terms of Service for titanprojectsolutions.com. Please read before using our website.",
  alternates: { canonical: "https://titanprojectsolutions.com/terms" },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal</p>
        <h1
          className="text-4xl font-black text-white uppercase tracking-tight mb-3"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Terms of Service
        </h1>
        <div className="w-16 h-1 bg-[#C9A84C] mb-8" />
        <p className="text-gray-500 text-sm mb-10">Last updated: May 1, 2026</p>

        <div className="space-y-10 text-gray-400 text-sm leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at titanprojectsolutions.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site. These terms apply to all visitors, users, and anyone who accesses the Site.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>2. Informational Purpose Only</h2>
            <p>
              The content on this Site is provided for general informational purposes only. Nothing on this Site constitutes a binding contract, guarantee, warranty, or commitment to perform any service at any particular price or timeline. All pricing discussed on this Site represents general estimates only and is not a quote or offer. Actual pricing is determined after an in-person assessment and provided in a written estimate.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>3. No Guarantee of Response Times</h2>
            <p>
              Response time estimates listed on this Site (such as &ldquo;within 24 hours&rdquo; or &ldquo;within 48 hours&rdquo;) represent our typical goal and are not guaranteed. Actual response times may vary based on call volume, time of day, weekends, and other factors. For urgent matters, we recommend calling us directly at{" "}
              <a href="tel:5165574933" className="text-[#C9A84C] hover:text-[#E8C96A]">516-557-4933</a>.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>4. Workmanship Warranty</h2>
            <p>
              Titan Project Solutions stands behind the quality of our work. Specific warranty terms, scope, duration, and conditions are set forth in your written project contract. No warranty is created by statements on this website. Manufacturer warranties on materials are separate from our workmanship warranty and are subject to the terms of the applicable manufacturer.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>5. Financing</h2>
            <p>
              Financing is offered through Service Finance Company, LLC, a Truist Bank subsidiary, and is subject to credit approval. Applying for financing will result in a hard credit inquiry on your credit report. Advertised rates and terms are subject to change and may not be available to all applicants. Titan Project Solutions is not a lender and does not make credit decisions. All financing terms are governed solely by Service Finance Company. See their website at{" "}
              <a href="https://www.svcfin.com" className="text-[#C9A84C] hover:text-[#E8C96A]" target="_blank" rel="noopener noreferrer">svcfin.com</a>{" "}
              for full terms and disclosures.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>6. Communications Consent</h2>
            <p>
              By submitting a contact form on this Site and providing your phone number, you consent to receive calls and text messages from Titan Project Solutions at the number provided, including regarding your inquiry and our services. Message and data rates may apply. You may opt out at any time by replying STOP to any text message or by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Titan Project Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site or reliance on information presented herein. Our total liability for any claim arising from use of this Site shall not exceed $100. This limitation does not apply to claims arising from actual construction services performed under a signed contract.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>8. Intellectual Property</h2>
            <p>
              All content on this Site including text, images, logos, and graphics is the property of Titan Project Solutions or its licensors. You may not reproduce, distribute, or use any content without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>9. Third-Party Sites</h2>
            <p>
              This Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of those sites and do not endorse them. Use of third-party sites is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>10. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of New York. Any disputes arising from use of this Site or these terms shall be resolved in the courts of Nassau County, New York.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>12. Contact</h2>
            <p>
              Titan Project Solutions<br />
              Massapequa, NY 11758<br />
              Phone: <a href="tel:5165574933" className="text-[#C9A84C] hover:text-[#E8C96A]">516-557-4933</a><br />
              Email: <a href="mailto:titanprojectsolutions7@gmail.com" className="text-[#C9A84C] hover:text-[#E8C96A]">titanprojectsolutions7@gmail.com</a>
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-[#C9A84C] text-sm hover:text-[#E8C96A]">← Back to Home</Link>
          <span className="text-gray-600 mx-3">|</span>
          <Link href="/privacy" className="text-[#C9A84C] text-sm hover:text-[#E8C96A]">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
}
