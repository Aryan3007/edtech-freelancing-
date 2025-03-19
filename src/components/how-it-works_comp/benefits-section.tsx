"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

export default function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const benefits = [
    {
      title: "For Students",
      items: [
        "Personalized learning paths tailored to individual needs",
        "Engaging interactive content that makes learning fun",
        "Immediate feedback to reinforce understanding",
        "Self-paced progression that builds confidence",
        "Cross-device accessibility for learning anytime, anywhere",
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "For Teachers",
      items: [
        "Comprehensive analytics to track student progress",
        "Automated grading to save time and reduce workload",
        "Content customization tools to meet specific needs",
        "Communication features to enhance student engagement",
        "Professional development resources and support",
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "For Institutions",
      items: [
        "Data-driven insights to improve educational outcomes",
        "Scalable solutions that grow with your institution",
        "Cost-effective implementation with measurable ROI",
        "Compliance with educational standards and regulations",
        "Enhanced reputation through innovative educational approaches",
      ],
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-gray-600">
            Our platform delivers unique advantages for students, teachers, and educational institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              style={{
                y: index === 0 ? y1 : index === 2 ? y2 : 0,
                opacity: opacity,
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className={`h-3 ${benefit.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

