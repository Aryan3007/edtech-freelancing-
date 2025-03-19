"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Award, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutHero() {
  return (
    <section className="relative min-h-[100vh]  flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        {/* Animated shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${(i + 2) * 100}px`,
                height: `${(i + 2) * 100}px`,
                top: `${i * 10}%`,
                left: `${i * 15}%`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 left-[20%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
        >
          <BookOpen className="w-8 h-8 text-emerald-300" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-20 right-[20%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
        >
          <Users className="w-8 h-8 text-cyan-300" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-40 left-[30%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
        >
          <Award className="w-8 h-8 text-yellow-300" />
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-40 right-[30%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
        >
          <Lightbulb className="w-8 h-8 text-orange-300" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium"
        >
          About Our Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
        >
          Transforming{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">Education</span>{" "}
          Through Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text- md:text-lg text-white/90 mb-10 max-w-3xl mx-auto"
        >
          We&apos;re on a mission to make quality education accessible to everyone through innovative technology solutions
          that adapt to individual learning styles.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="grid grid-cols-3 max-w-xl mx-auto gap-4 sm:gap-6 mb-12"
>
  {[
    { label: "Years of Experience", value: "10+" },
    { label: "Students Worldwide", value: "50k+" },
    { label: "Satisfaction Rate", value: "98%" },
  ].map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-3 min-w-[100px] sm:min-w-[120px]"
    >
      <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
      <span className="text-xs text-white/80">{stat.label}</span>
    </motion.div>
  ))}
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="relative overflow-hidden rounded-full bg-white text-emerald-600 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center">
              Our Mission
              <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                →
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 text-black border-white/70 hover:text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Meet Our Team
          </Button>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

