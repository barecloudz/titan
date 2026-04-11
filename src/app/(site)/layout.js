import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pb-[60px] sm:pb-0">{children}</main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
