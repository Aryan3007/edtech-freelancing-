"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Education Avenue", "Tech District, Innovation City", "CA 94103, United States"],
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@edtechplatform.com", "support@edtechplatform.com"],
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Offices",
      details: ["New York • London", "Singapore • Sydney", "Toronto • Berlin"],
      color: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;re here to help! Reach out to us through any of these channels and we&apos;ll respond as quickly as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center mb-6 ${method.iconColor}`}
              >
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{method.title}</h3>
              <ul className="space-y-2">
                {method.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

