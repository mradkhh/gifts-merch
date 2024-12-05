import ContactSection from "./(components)/contact-section";
import { Footer } from "./(components)/footer/footer";
import GiftLanding from "./(components)/giftlanding-section";
import { SiteHeader } from "./(components)/header/header";
import HeroSection from "./(components)/hero-section";
import PartnersSection from "./(components)/partners-section";
import PopularSection from "./(components)/popular-section";
import ProductCustomizer from "./(components)/product-customizer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <PopularSection />
      <GiftLanding />
      <ProductCustomizer />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
