/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, Play, Share2 } from "lucide-react"
import { useEffect, useRef } from "react"

const tags = ["Environmental", "Sustainable", "Green", "Eco-friendly", "Recycling", "Forward-thinking"]

export default function SustainableSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isInView) {
      videoRef1.current?.play().catch((error) => console.log("Video 1 autoplay failed:", error))
      videoRef2.current?.play().catch((error) => console.log("Video 2 autoplay failed:", error))
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={sectionRef} className="px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-full"
      >
        <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-6">
            <span>We&apos;re not just </span>
            <span className="text-[#a2d2ff]">building materials</span>
            <span> - we&apos;re building a </span>
            <br />
            <span className="text-[#a2d2ff]">legacy and change</span>
          </h2>
          <p className="text-gray-600 text-lg">Join us in sculpting green and sustainable world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-8">
          {/* Left Column */}
          <motion.div
           initial={{ opacity: 0, scale:0.2 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
            variants={itemVariants}
            className="relative col-span-1 rounded-2xl overflow-hidden aspect-square bg-[#90EE90]/10"
          >
            <video
              ref={videoRef1}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              poster="/placeholder.svg"
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 flex space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Play className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Share2 className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col bg-[#d0e8ff] rounded-2xl col-span-2 items-center justify-center p-6"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full text-sm bg-white text-blue-600"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
           
          </motion.div>

          {/* Right Column */}
          <motion.div
           initial={{ opacity: 0, scale:0.2 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
            variants={itemVariants}
            className="relative col-span-1 rounded-2xl overflow-hidden aspect-square bg-[#90EE90]/10"
          >
            <video
              ref={videoRef2}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              poster="/placeholder.svg"
            >
              <source src="/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 flex space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Play className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Share2 className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

