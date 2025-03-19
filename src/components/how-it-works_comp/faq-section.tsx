"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "How long does it take to implement the platform?",
      answer:
        "Implementation typically takes 2-4 weeks, depending on the size of your institution and the complexity of your needs. Our team works closely with you to ensure a smooth and efficient onboarding process.",
    },
    {
      question: "Is the platform compatible with our existing systems?",
      answer:
        "Yes, our platform is designed to integrate seamlessly with most Learning Management Systems (LMS), Student Information Systems (SIS), and other educational tools. We provide APIs and connectors for popular systems like Canvas, Blackboard, Google Classroom, and more.",
    },
    {
      question: "How do you ensure data privacy and security?",
      answer:
        "We take data privacy and security very seriously. Our platform is FERPA and GDPR compliant, with end-to-end encryption, regular security audits, and strict access controls. We never sell or share student data with third parties.",
    },
    {
      question: "What kind of training and support do you provide?",
      answer:
        "We offer comprehensive training for administrators, teachers, and students, including live webinars, on-demand videos, and documentation. Our support team is available via chat, email, and phone, with dedicated account managers for enterprise clients.",
    },
    {
      question: "Can the platform be customized to our specific curriculum?",
      answer:
        "Customization is one of our platform's strengths. We can adapt to your specific curriculum, learning objectives, and teaching methodologies. Our content team can also help create custom materials if needed.",
    },
    {
      question: "What devices and browsers are supported?",
      answer:
        "Our platform works on all modern devices including desktops, laptops, tablets, and smartphones. We support the latest versions of Chrome, Firefox, Safari, and Edge browsers. We also offer native mobile apps for iOS and Android.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our platform, implementation process, and support services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-colors ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 rounded-b-xl">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

