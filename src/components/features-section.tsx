/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Database, GitBranch, Package } from "lucide-react"

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
  

]

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className=" text-black py-8">
      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col items-start justify-between md:flex-row mb-12 md:my-24">
        {/* Left sticky content */}
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/2 mt-2 md:mt-12 px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-blue-500 uppercase tracking-loose">Our Process</p>
            <p className="text-3xl md:text-4xl leading-normal font-bold md:leading-relaxed mb-2">
              How We Transform Your Business
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Discover how our AI-powered platform can revolutionize your workflow and boost productivity across your
              organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-sm bg-[#a2d2ff] text-[#000000] rounded-full py-2 px-4  transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </motion.div>
        </div>


        <div className="ml-0 md:ml-12 lg:w-1/2 sticky">
          <div className=" w-full h-full">
            <div className="relative wrap overflow-hidden p-4 h-full">

              {/* Feature cards */}
              {features.map((feature, index) => {

                const Icon = feature.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.2 }}
                    className={`mb-8 flex justify-between  items-center w-full`}
                  >

                    <div className={`order-1 w-full px-1 py-4 text-left`}>
                      <div className="bg-white border h-80 rounded-xl p-6">
                        <div className={`flex items-center justify-start mb-4`}>
                          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-500" />
                          </div>
                        </div>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{feature.title}</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-800">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

