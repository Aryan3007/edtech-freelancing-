import FAQ from "@/components/faq";
import Footer from "@/components/footer";
// import Hero from "@/components/hero";
import PricingSection from "@/components/PricingSection";
import StickyScroll from "@/components/StickyScroll";
import SurfCarousel from "@/components/testimonial-carousel";
import SustainableSection from "@/components/mesh-stats";
// import OpeningScreen from "@/components/opening-screen";
import VerticalAccordion from "@/components/VerticalAccordion";
import HeroCarousel from "@/components/hero-carousel";
import ComparisonTable from "@/components/comparison-table";
// import TextParallaxContentExample from "@/components/TextParallaxContent";

export default function Home() {
  return (
    <main>


      {/* <Hero /> */}
      <HeroCarousel/>
      {/* <OpeningScreen /> */}
      <VerticalAccordion />

      <SustainableSection />
      <StickyScroll />
      {/* <TextParallaxContentExample /> */}
<ComparisonTable/>
      <PricingSection />
      <SurfCarousel />
      <FAQ />
      <Footer />
    </main>
  )
}

