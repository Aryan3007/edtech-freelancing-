"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// Extract animated components to a separate client component file
export function AnimatedGradientOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-purple-200 opacity-20 blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-emerald-200 opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />
    </>
  )
}

export function AnimatedParticles() {
  return (
    <>
      {[...Array(12)].map((_, i) => {
        // Use deterministic values based on index instead of random
        const topPosition = 10 + ((i * 8) % 80)
        const leftPosition = 15 + ((i * 7) % 70)
        const duration = 3 + (i % 5)
        const delay = i % 5

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-30"
            style={{
              top: `${topPosition}%`,
              left: `${leftPosition}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              delay,
            }}
          />
        )
      })}
    </>
  )
}

export function AnimatedHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export function AnimatedSparkle() {
  return (
    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
      <Sparkles className="h-6 w-6 text-violet-500 opacity-70" />
    </motion.div>
  )
}

export function AnimatedPricingCard({
  children,
  index,
  recommended,
}: {
  children: React.ReactNode
  index: number
  recommended?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${recommended ? "md:-mt-4 md:mb-4 z-10" : ""}`}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedRecommendedBadge() {
  return (
    <motion.span
      className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-flex items-center shadow-lg shadow-purple-500/20"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <Sparkles className="w-4 h-4 mr-1" />
      Recommended
    </motion.span>
  )
}

export function AnimatedButton({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button className={className} size="lg">
        {children}
      </Button>
    </motion.div>
  )
}

