// import BouncyCardsFeatures from "@/components/BouncyCardsFeatures";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
// import FeaturesSection from "@/components/features-section";
import Hero from "@/components/hero";
import PricingSection from "@/components/PricingSection";
import StickyScroll from "@/components/StickyScroll";
// import Stats from "@/components/stats";
import SustainableSection from "@/components/sustainable-section";

// import OppositeScroll from "@/components/OppositeScroll";
import TextParallaxContentExample from "@/components/TextParallaxContent";
// import { VelocityText } from "@/components/VelocityText";

export default function Home() {
  return (
    <main>


      <Hero />
      <SustainableSection/>
      {/* <VelocityText/> */}
<StickyScroll/>
      {/* <FeaturesSection /> */}
      <TextParallaxContentExample/>
      {/* <OppositeScroll/> */}
      {/* <BouncyCardsFeatures /> */}
      <PricingSection />
      <FAQ />
      <Footer/>
    </main>
  )
}

