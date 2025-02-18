import BouncyCardsFeatures from "@/components/BouncyCardsFeatures";
import FAQ from "@/components/faq";
import FeaturesSection from "@/components/features-section";
import Hero from "@/components/hero";
import OppositeScroll from "@/components/OppositeScroll";
// import TextParallaxContentExample from "@/components/TextParallaxContent";

export default function Home() {
  return (
    <main>
      <Hero />
     
      <FeaturesSection />
{/* <TextParallaxContentExample/> */}
<OppositeScroll/>
<BouncyCardsFeatures/>
<FAQ/>
    </main>
  )
}

