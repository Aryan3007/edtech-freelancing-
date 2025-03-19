import ContactForm from "@/components/contact_comp/contact-form"
import ContactHero from "@/components/contact_comp/contact-hero"
import ContactInfo from "@/components/contact_comp/contact-info"
import FaqSection from "@/components/contact_comp/faq-section"
import MapSection from "@/components/contact_comp/map-section"
import Footer from "@/components/footer"


export const metadata = {
  title: "Contact Us | EdTech Platform",
  description:
    "Get in touch with our team for inquiries, support, or to schedule a demo of our educational technology platform.",
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <FaqSection />
      <Footer/>
    </main>
  )
}

