import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import PropertyCarousel from "./components/PropertyCarousel";
import CitiesSection from "./components/CitiesSection";
import WhyUsSection from "./components/WhyUsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PropertyCarousel />
      <CitiesSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}