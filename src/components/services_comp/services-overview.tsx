"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, Lightbulb, BarChart } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Adaptive Learning",
      description: "Personalized learning paths that adapt to each student's strengths, weaknesses, and learning pace.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      delay: 0.1,
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Tutoring",
      description: "Intelligent tutoring systems that provide real-time feedback and support across all subjects.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      delay: 0.2,
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Engaging multimedia content that brings complex concepts to life through interactive experiences.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      delay: 0.3,
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into student performance with actionable recommendations for improvement.",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      delay: 0.4,
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive suite of educational technology services designed to transform the learning
            experience for students of all ages and abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${service.color} p-6 text-white`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
              <div className="bg-white p-6">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm font-medium flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Learn more <span className="ml-2">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

