"use client"

import { motion, useInView } from "framer-motion"
import { Database, GitBranch, Package, Smartphone, Cpu, MousePointer, Heart, ArrowRightLeft } from 'lucide-react'
import { useRef } from "react"

const features = [
  {
    icon: Database,
    title: "Leverage Large Action Model",
    description: "Streamline automation with our powerful model.",
  },
  {
    icon: GitBranch,
    title: "Cross-Platform Automations",
    description: "Automate across all apps, whether native, mobile, or web.",
  },
  {
    icon: Package,
    title: "No API Needed",
    description: "Automate legacy systems like SAP without requiring APIs.",
  },
  {
    icon: Smartphone,
    title: "User-Friendly Orchestration Platform",
    description: "Built for users with no engineering background.",
  },
  {
    icon: Cpu,
    title: "AI & ML Integration",
    description: "Open-source AI and ML integration with no need for specialized engineers.",
  },
  {
    icon: MousePointer,
    title: "One-Click Server Deployment",
    description: "Deploy and manage automation servers with a single click.",
  },
  {
    icon: Heart,
    title: "Compliance Ready",
    description: "SOC I, SOC II, GDPR, HIPAA compliant, with third-party audits.",
  },
  {
    icon: ArrowRightLeft,
    title: "Scalable",
    description: "Built to grow with your needs.",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-left mb-16 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          We help you build complex automations in the simplest way.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border transition-shadow"
            >
              <div className="w-12 h-12 mb-4 text-blue-500">
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}