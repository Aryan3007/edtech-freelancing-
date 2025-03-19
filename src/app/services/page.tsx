import Footer from "@/components/footer"
import PricingSection from "@/components/PricingSection"
import FeaturesSection from "@/components/services_comp/features-section"
import ServiceCards from "@/components/services_comp/service-cards"
import ServicesCTA from "@/components/services_comp/services-cta"
import ServicesHero from "@/components/services_comp/services-hero"
import ServicesOverview from "@/components/services_comp/services-overview"


export const metadata = {
  title: "Our Services | EdTech Platform",
  description: "Explore our comprehensive range of educational technology services designed to transform learning experiences.",
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServicesHero />
      <ServicesOverview />
      <ServiceCards />
      <FeaturesSection />
      <PricingSection />

      <ServicesCTA />
      <Footer/>
    </main>
  )
}
