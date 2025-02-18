import BouncyCardsFeatures from "@/components/BouncyCardsFeatures";
import FAQ from "@/components/faq";
import FeaturesSection from "@/components/features-section";
import Hero from "@/components/hero";
import PricingSection from "@/components/PricingSection";
import Stats from "@/components/stats";
// import OppositeScroll from "@/components/OppositeScroll";
import TextParallaxContentExample from "@/components/TextParallaxContent";
// import { VelocityText } from "@/components/VelocityText";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <VelocityText/> */}

      <FeaturesSection />
<TextParallaxContentExample/>
{/* <OppositeScroll/> */}
<BouncyCardsFeatures/>
<PricingSection/>
<FAQ/>
     <Stats/>
    </main>
  )
}

