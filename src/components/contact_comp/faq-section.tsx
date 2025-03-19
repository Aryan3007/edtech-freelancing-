"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "How quickly can I expect a response after submitting a contact form?",
      answer:
        "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line for immediate assistance.",
    },
    {
      question: "Can I schedule a demo of your platform?",
      answer:
        "You can request a demo through our contact form or by calling our sales team directly. We'll arrange a personalized demonstration tailored to your specific educational needs.",
    },
    {
      question: "Do you offer technical support outside of business hours?",
      answer:
        "Yes, we provide 24/7 emergency technical support for our enterprise clients. For standard plans, our support team is available during regular business hours, with extended support options available.",
    },
    {
      question: "How can I provide feedback about your platform?",
      answer:
        "We value your feedback! You can share your thoughts through our contact form, by emailing feedback@edtechplatform.com, or through the feedback feature within the platform itself.",
    },
    {
      question: "Do you have representatives in my country?",
      answer:
        "We have offices and representatives in major cities across North America, Europe, Asia, and Australia. Contact us with your location details, and we'll connect you with the nearest representative.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find quick answers to common questions about contacting and working with us.
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
                    ? "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700"
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

