"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Users, BookOpen, BarChart, Zap } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Assessment & Onboarding",
      description:
        "We begin by understanding your educational needs through a comprehensive assessment. Our team then sets up your customized platform and provides training for administrators, teachers, and students.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Needs assessment survey",
        "Platform customization",
        "User account setup",
        "Initial training sessions",
      ],
    },
    {
      number: "02",
      title: "Content Integration",
      description:
        "We integrate your existing curriculum and educational content into our platform, ensuring alignment with your learning objectives and standards. Custom content can also be created to fill any gaps.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: ["Curriculum mapping", "Content digitization", "Custom material creation", "Learning path design"],
    },
    {
      number: "03",
      title: "Implementation & Adaptation",
      description:
        "Students and teachers begin using the platform, with our AI technology adapting to each learner's pace and style. Real-time feedback helps optimize the learning experience.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Personalized learning paths",
        "Adaptive difficulty adjustment",
        "Real-time feedback",
        "Engagement monitoring",
      ],
    },
    {
      number: "04",
      title: "Analysis & Optimization",
      description:
        "Our analytics dashboard provides comprehensive insights into student performance and engagement. We continuously optimize the platform based on this data to improve learning outcomes.",
      icon: <BarChart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Performance analytics",
        "Progress reporting",
        "Learning gap identification",
        "Continuous improvement",
      ],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;ve designed a streamlined process to help you implement our educational technology platform quickly and
            effectively.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${step.color} opacity-30 mix-blend-overlay`}
                    ></div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-4xl font-bold`}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6`}
                >
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{step.description}</p>

                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

