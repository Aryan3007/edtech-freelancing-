import AboutHero from "@/components/about_comp/about-hero"
import ContactCTA from "@/components/about_comp/contact-cta"
import JourneyTimeline from "@/components/about_comp/journey-timeline"
import MissionSection from "@/components/about_comp/mission-section"
import TeamSection from "@/components/about_comp/team-section"
import ValuesSection from "@/components/about_comp/values-section"
import Footer from "@/components/footer"


export const metadata = {
  title: "About Us | EdTech Platform",
  description: "Learn about our mission, values, and the team behind our educational technology platform.",
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden  mx-auto">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <JourneyTimeline />
      <TeamSection />
    
      <ContactCTA />
      <Footer/>
    </main>
  )
}

