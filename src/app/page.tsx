import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PricingSection from "@/components/PricingSection";
import StickyScroll from "@/components/StickyScroll";
import SurfCarousel from "@/components/testimonial-carousel";
import SustainableSection from "@/components/sustainable-section";
import OpeningScreen from "@/components/opening-screen";
import VerticalAccordion from "@/components/VerticalAccordion";
// import TextParallaxContentExample from "@/components/TextParallaxContent";

export default function Home() {
  return (
    <main>


      <Hero />
      <SustainableSection />
      <StickyScroll />
      <OpeningScreen/>
      <VerticalAccordion/>
      {/* <TextParallaxContentExample /> */}
  
      <PricingSection />
      <SurfCarousel/>
      <FAQ />
      <Footer />
    </main>
  )
}

