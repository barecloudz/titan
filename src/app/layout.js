import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Titan Project Solutions | Roofing Contractor Nassau County, NY",
    template: "%s | Titan Project Solutions",
  },
  description:
    "Titan Project Solutions is Nassau County's #1 roofing contractor. Licensed & insured. Serving Massapequa, Long Island, and surrounding areas. Free estimates. Call 516-557-4933.",
  keywords: [
    "roofing contractor Nassau County",
    "roofing company Long Island",
    "roof replacement Massapequa",
    "siding contractor Nassau County",
    "kitchen remodeling Long Island",
    "bathroom renovation Nassau County",
    "pavers Long Island",
    "dumpster rental Nassau County",
    "demolition Long Island",
    "construction company Massapequa NY",
  ],
  authors: [{ name: "Titan Project Solutions" }],
  creator: "Titan Project Solutions",
  metadataBase: new URL("https://titan-project.netlify.app"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://titanprojectsolutions.com",
    siteName: "Titan Project Solutions",
    title: "Titan Project Solutions | Roofing Contractor Nassau County, NY",
    description:
      "Nassau County's trusted roofing contractor. Roofing, siding, kitchens, bathrooms, pavers & more. Licensed & insured. Free estimates. 516-557-4933.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Titan Project Solutions - Nassau County Roofing & Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Project Solutions | Roofing Contractor Nassau County, NY",
    description:
      "Nassau County's trusted roofing contractor. Roofing, siding, kitchens, bathrooms, pavers & more. Licensed & insured. Free estimates.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-[#111111] text-white" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        <Header />
        <main className="pb-[60px] sm:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
