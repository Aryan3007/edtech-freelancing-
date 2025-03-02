"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"


const sections = [
  {
    tag: "Structured Learning",
    title: "AI-Powered Structured Learning & Revisions",
    description: "A guided learning experience with AI-driven topic-wise practice, smart revisions, and repeated exposure to weak concepts for better retention.",
    video: "/vid1.mp4",
    gradient: "bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
    images: [
      { src: "/test.svg", width: 500, height: 500, className: "absolute top-0 left-0 z-20" },
      { src: "/test2.svg", width: 500, height: 500, className: "absolute top-10 left-44 z-10" },
    ],
  },
  {
    tag: "Performance Tracking",
    title: "Weekly Tests & AI-Driven Performance Insights",
    description: "Comprehensive weekly tests with a leader dashboard powered by AI to track progress, identify strengths, and focus on areas needing improvement.",
    video: "/vid2.mp4",
    gradient: "bg-linear-to-r from-lime-200 via-green-400 to-emerald-600",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
    images: [
      { src: "/test.svg", width: 500, height: 500, className: "absolute top-0 left-0 z-20" },
      { src: "/test2.svg", width: 500, height: 500, className: "absolute top-10 left-44 z-10" },
    ],
  },
  {
    tag: "Expert Guidance",
    title: "Expert Tutoring & Community Support",
    description: "Personalized tutor support for revising weak concepts, along with a collaborative student community for grade-based discussions and doubt-solving.",
    video: "/vid1.mp4",
    gradient: "bg-linear-to-r from-red-200 via-pink-400 to-rose-600",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
    images: [
      { src: "/test.svg", width: 500, height: 500, className: "absolute top-0 left-0 z-20" },
      { src: "/test2.svg", width: 500, height: 500, className: "absolute top-10 left-44 z-10" },
    ],
  },
];



export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])

  // Create video refs outside the map function
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, sections.length)

    sections.forEach((_, index) => {
      if (isInView && videoRefs.current[index]) {
        videoRefs.current[index]?.play().catch((error) => console.log(`Video ${index + 1} autoplay failed:`, error))
      }
    })
  }, [isInView])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {sections.map((section, index) => {
        return (
          <motion.div
            key={index}
            ref={sectionRef}
            style={{
              opacity: opacity,
              scale: scale,
            }}
            className="sticky top-0 h-screen flex flex-col items-center justify-center p-4"
          >
            <div className="max-w-7xl w-full h-[70vh]">
              <div className="relative bg-white rounded-3xl h-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient}`} />

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 p-8 md:p-12 h-full">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center">
                    <span
                      className={`inline-block px-4 py-2 rounded-full ${section.tagColor} text-sm font-medium mb-2 lg:mb-6 w-fit`}
                    >
                      {section.tag}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 lg:mb-4">{section.title}</h2>

                    <p className="text-gray-600 text-sm lg:text-lg">{section.description}</p>
                  </div>

                  {/* Right Content - Images */}
                  <div className="relative h-full flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.2, rotateY: 30 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.7,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="relative w-full h-96 lg:h-4/5 rounded-2xl"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Images with blob animation */}
                      {section.images.map((image, imageIndex) => (
                        <motion.div
                          key={imageIndex}
                          className={image.className}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: [0.8, 1.1, 1],
                            opacity: 1,
                          }}
                          transition={{
                            duration: 1.2,
                            delay: imageIndex * 0.2,
                            ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
                          }}
                        >
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/50 rounded-tl-lg z-10"></div>
                            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/50 rounded-tr-lg z-10"></div>
                            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/50 rounded-bl-lg z-10"></div>
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/50 rounded-br-lg z-10"></div>

                            {/* Blob animation overlay */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-20"
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.5, 0.3, 0.5],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              }}
                            />

                            <Image
                              src={image.src || "/placeholder.svg"}
                              width={image.width}
                              height={image.height}
                              alt=""
                              className="w-full h-48 lg:h-80 object-cover"
                            />
                          </div>
                        </motion.div>
                      ))}

                      {/* Gradient overlay */}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

