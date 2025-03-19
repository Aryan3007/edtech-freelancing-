"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Zap, Users, Globe, Shield, Clock, Smartphone } from "lucide-react"

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Implementation",
      description: "Get up and running quickly with our streamlined onboarding process and dedicated support team.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Learning",
      description: "Foster teamwork and peer-to-peer learning with built-in collaboration tools and features.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Accessibility",
      description: "Access your learning materials from anywhere in the world, on any device, at any time.",
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Rest easy knowing your data is protected with enterprise-grade security and compliance measures.",
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving Automation",
      description: "Automate routine tasks like grading and feedback to focus more time on teaching and learning.",
      color: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Learning",
      description: "Engage with content on the go with our fully responsive mobile apps for iOS and Android.",
      color: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Features That Make Us Different
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines cutting-edge technology with proven educational methodologies to deliver an
                unparalleled learning experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4 ${feature.iconColor}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div style={{ y, opacity }} className="relative">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="Educational technology in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-xl opacity-70" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-xl opacity-70" />

            {/* Stats cards */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>

            <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

