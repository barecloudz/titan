import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Titan Project Solutions",
  description: "Privacy Policy for Titan Project Solutions. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://titanprojectsolutions.com/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal</p>
        <h1
          className="text-4xl font-black text-white uppercase tracking-tight mb-3"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Privacy Policy
        </h1>
        <div className="w-16 h-1 bg-[#C9A84C] mb-8" />
        <p className="text-gray-500 text-sm mb-10">Last updated: May 1, 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-400 text-sm leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>1. Who We Are</h2>
            <p>
              Titan Project Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a licensed home improvement contractor based in Massapequa, NY. We operate the website at titanprojectsolutions.com. This Privacy Policy explains how we collect, use, and protect information you provide when you use our website or contact us.
            </p>
            <p className="mt-3">
              Questions about this policy? Contact us at{" "}
              <a href="mailto:titanprojectsolutions7@gmail.com" className="text-[#C9A84C] hover:text-[#E8C96A]">
                titanprojectsolutions7@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:5165574933" className="text-[#C9A84C] hover:text-[#E8C96A]">516-557-4933</a>.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>2. Information We Collect</h2>
            <p>We collect information you voluntarily provide when you fill out a contact or estimate request form on our website. This may include:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Details about your project or service request</li>
            </ul>
            <p className="mt-3">
              We do not collect payment information through our website. We do not knowingly collect information from children under 13.
            </p>
            <p className="mt-3">
              We may also collect basic technical data automatically when you visit our site (e.g., browser type, pages viewed, referring URL) through standard web analytics tools. This data is aggregated and not tied to your identity.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>3. How We Use Your Information</h2>
            <p>We use the information you submit to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Respond to your inquiry or estimate request</li>
              <li>Schedule consultations and project assessments</li>
              <li>Contact you by phone, text, or email about your project</li>
              <li>Send you information about services you&apos;ve expressed interest in</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">
              By submitting a form on our website and providing your phone number, you consent to receive calls and text messages from Titan Project Solutions at the number provided, including messages about your inquiry and our services. Message and data rates may apply. You may opt out at any time by replying STOP or contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>4. How We Share Your Information</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong className="text-white">Service providers:</strong> We use Netlify (form submission hosting) and Supabase (database) to store form submissions. These providers are contractually bound to protect your data.</li>
              <li><strong className="text-white">Financing partners:</strong> If you choose to apply for financing, you will be directed to our financing partner&apos;s website (Service Finance Company, a Truist Bank subsidiary). Their privacy policy governs information you submit on their platform.</li>
              <li><strong className="text-white">Legal requirements:</strong> We may disclose information if required by law or to protect our legal rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>5. Financing Disclosure</h2>
            <p>
              Financing is offered through Service Finance Company, LLC, a Truist Bank subsidiary. When you click &ldquo;Apply Online&rdquo; on our financing page, you are redirected to Service Finance Company&apos;s application portal. Titan Project Solutions does not collect, store, or process your financing application or credit information. Financing applications are subject to credit approval. Applying for financing will result in a hard credit inquiry. All financing terms, rates, and conditions are set by Service Finance Company and may vary based on creditworthiness. See{" "}
              <a href="https://www.svcfin.com" className="text-[#C9A84C] hover:text-[#E8C96A]" target="_blank" rel="noopener noreferrer">svcfin.com</a>{" "}
              for full terms and the Service Finance Company privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>6. Data Retention</h2>
            <p>
              We retain form submissions and lead information for up to 24 months for business purposes. You may request deletion of your data at any time by contacting us at the information below.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:titanprojectsolutions7@gmail.com" className="text-[#C9A84C] hover:text-[#E8C96A]">titanprojectsolutions7@gmail.com</a>.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>8. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no data transmission over the internet is 100% secure. We cannot guarantee absolute security of information transmitted to or from our website.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., financing partner, Google Maps). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>11. Contact Us</h2>
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
          <Link href="/terms" className="text-[#C9A84C] text-sm hover:text-[#E8C96A]">Terms of Service</Link>
        </div>
      </div>
    </section>
  );
}
