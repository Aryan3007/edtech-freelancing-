"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { HeroSvg } from "./hero-svg"
import Image from "next/image"

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-40 animate-blob" />
      <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute left-1/4 bottom-1/4 w-1/2 h-1/2 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
    </div>
  )
}

const DrawCircleText = () => {
  return (
    <span className="relative">
      Education
      <svg viewBox="0 0 286 73" fill="none" className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
          }}
          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
          stroke="#FACC15"
          strokeWidth="3"
        />
      </svg>
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} className="relative min-h-screen lg:pt-12 pt-28 flex items-center justify-center overflow-hidden bg-gray-50">
      <HeroSvg />
      <AnimatedGradient />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="inline-block mb-4">
            <motion.div
              className="bg-white/30 backdrop-blur-md rounded-full px-3 py-1 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                Learning With Grade Next
              </span>
            </motion.div>
          </div>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Master Learning with Smart  <DrawCircleText />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Unlock personalized learning real-time insights. Stay on track with adaptive practice, smart revisions,
            and interactive challenges designed for your success. 
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative overflow-hidden rounded-full  bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-6 text-lg shadow-lg transition-all duration-300 group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center">
                  Request demo
                  <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative overflow-hidden rounded-full  bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-6 text-lg shadow-lg transition-all duration-300 group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-300 to-violet-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center">
                  Chat With us
                  <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:mt-12 flex my-6 items-center justify-center bottom-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h1>Enhance Learning with Grade Next </h1>
            <Image src="/hero.gif" width={100} height={100} alt="logo" />

          </motion.div>
        </motion.div>
      </div>




    </section>
  )
}

