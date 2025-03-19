"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Shield, Star, Zap } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge educational solutions.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empathy",
      description: "We deeply understand and care about the needs of our students and educators.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all we do.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for exceptional quality in our products and services.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Adaptability",
      description: "We embrace change and continuously evolve to meet emerging needs.",
      color: "bg-teal-100 text-teal-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600">
            These principles guide everything we do, from product development to customer service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 ${value.color.split(" ")[0]} rounded-full flex items-center justify-center mb-4 ${value.color.split(" ")[1]}`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

