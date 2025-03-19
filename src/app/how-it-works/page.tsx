import Footer from "@/components/footer"
import BenefitsSection from "@/components/how-it-works_comp/benefits-section"
import DemoVideo from "@/components/how-it-works_comp/demo-video"
import FaqSection from "@/components/how-it-works_comp/faq-section"
import HowItWorksCTA from "@/components/how-it-works_comp/how-it-works-cta"
import HowItWorksHero from "@/components/how-it-works_comp/how-it-works-hero"
import ProcessSteps from "@/components/how-it-works_comp/process-steps"


export const metadata = {
  title: "How It Works | EdTech Platform",
  description: "Learn how our educational technology platform works and transforms the learning experience.",
}

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden">
      <HowItWorksHero />
      <ProcessSteps />
      <DemoVideo />
      <BenefitsSection />
      <FaqSection />
      <HowItWorksCTA />
      <Footer/>
    </main>
  )
}

