"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export const VelocityText: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const smoothX = useSpring(x, { mass: 1, stiffness: 50, damping: 20 })

  return (
    <div ref={targetRef} className="relative h-20 bg-gray-50 overflow-hidden px-4">
      <div className="sticky top-0 h-full flex items-center">
        <motion.div
          style={{ x: smoothX }}
          className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-none text-neutral-800"
        >
          Nothing in this world can take the place of persistence. Talent will not; nothing is more common than
          unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the
          world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan Press
          On! has solved and always will solve the problems of the human race.
        </motion.div>
      </div>
    </div>
  )
}

