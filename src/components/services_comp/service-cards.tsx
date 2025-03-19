"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ServiceCards() {
  const services = [
    {
      id: "adaptive-learning",
      title: "Adaptive Learning Platform",
      description:
        "Our flagship adaptive learning platform uses AI to create personalized learning paths for each student, ensuring they master concepts at their own pace.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      features: [
        "Personalized learning paths",
        "Real-time progress tracking",
        "Adaptive difficulty adjustment",
        "Comprehensive subject coverage",
        "Engaging interactive content",
      ],
      color: "from-blue-600 to-indigo-700",
      textColor: "text-blue-600",
    },
    {
      id: "virtual-classroom",
      title: "Virtual Classroom Solution",
      description:
        "Create immersive virtual learning environments that facilitate collaboration, engagement, and effective knowledge transfer regardless of physical location.",
      image:
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: [
        "HD video conferencing",
        "Interactive whiteboard",
        "Breakout rooms for group work",
        "Integrated assessment tools",
        "Session recording and playback",
      ],
      color: "from-purple-600 to-pink-700",
      textColor: "text-purple-600",
    },
    {
      id: "assessment-analytics",
      title: "Assessment & Analytics",
      description:
        "Comprehensive assessment tools paired with powerful analytics to measure learning outcomes and provide actionable insights for improvement.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Diverse question formats",
        "Automated grading",
        "Performance analytics",
        "Learning gap identification",
        "Custom report generation",
      ],
      color: "from-emerald-600 to-teal-700",
      textColor: "text-emerald-600",
    },
  ]

  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600">
            Explore our comprehensive range of educational technology services designed to transform the learning
            experience.
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeService === service.id
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : `bg-white ${service.textColor} hover:bg-gray-100`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Service content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2"
                  >
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40`}></div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${service.textColor}`}>{service.title}</h3>
                      <p className="text-gray-600 mb-8">{service.description}</p>
                      <h4 className="font-bold text-gray-800 mb-4">Key Features:</h4>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className={`w-5 h-5 mt-0.5 ${service.textColor}`} />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-medium shadow-md hover:shadow-lg transition-shadow`}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

