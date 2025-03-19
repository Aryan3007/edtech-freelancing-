"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users } from "lucide-react"

export default function MissionSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;re dedicated to revolutionizing education through technology, making learning more accessible,
            personalized, and effective for students of all ages and backgrounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
            className="bg-emerald-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower learners worldwide by providing innovative educational technology that adapts to individual
              learning styles and needs, making quality education accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="bg-teal-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where every person has access to personalized, high-quality education that helps them reach their
              full potential, regardless of their location or circumstances.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
            className="bg-cyan-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-600">
              We combine cutting-edge AI technology with proven educational methodologies to create adaptive learning
              experiences that meet each student where they are and help them progress at their optimal pace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

