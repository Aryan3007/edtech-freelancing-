"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"

const stats = [
  {
    value: 45,
    suffix: "%",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    value: 15.5,
    suffix: "K+",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    value: 20,
    suffix: "B+",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 3000 // 3 second
      const frames = 60 // 60 frames for smooth animation
      const interval = duration / frames
      const step = value / frames

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += step
        if (currentCount >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(currentCount)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(value % 1 === 0 ? 0 : 1)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-xl font-bold mb-16 max-w-3xl mx-auto leading-tight"
        >
          <span className="text-indigo-900">BUILD TRUST WITH YOUR USERS WITH A </span>
          <span className="text-indigo-500">BEAUTIFUL LANDING PAGE</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

