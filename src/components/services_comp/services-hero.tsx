"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0">
          {/* Animated circles */}
          <motion.div
            initial={{ opacity: 0.7, scale: 0.8 }}
            animate={{
              opacity: [0.7, 0.4, 0.7],
              scale: [0.8, 1.2, 0.8],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0.7, scale: 0.8 }}
            animate={{
              opacity: [0.7, 0.4, 0.7],
              scale: [0.8, 1.2, 0.8],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 18,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 blur-3xl"
          />
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ y: -100, x: -100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 left-20 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
        >
          <Sparkles className="w-10 h-10 text-yellow-300" />
        </motion.div>

        <motion.div
          initial={{ y: 100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
        >
          <Zap className="w-10 h-10 text-emerald-300" />
        </motion.div>

        <motion.div
          initial={{ y: 100, x: -100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
        >
          <BookOpen className="w-10 h-10 text-blue-300" />
        </motion.div>

        <motion.div
          initial={{ y: -100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-20 right-20 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
        >
          <Users className="w-10 h-10 text-pink-300" />
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
          Transformative Educational Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          Elevate Learning with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
            Innovative Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
        >
          Discover our comprehensive suite of educational technology services designed to transform how students learn
          and educators teach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="relative overflow-hidden rounded-full bg-white text-indigo-600 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center">
              Explore Services
              <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                →
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/70 text-black hover:text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Request Demo
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

