"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const sections = [
  {
    tag: "Our Services",
    title: "Custom Material Solutions",
    description: "Tailoring solutions to meet specific project requirements and environmental goals",
    video: "/vid1.mp4",
    gradient: "from-[#a2d2ff] to-[#a2d2ff]",
    tagColor: "bg-[#d1e9ff]/10 text-[#2196f3]",
  },
  {
    tag: "Our Process",
    title: "Innovative Manufacturing",
    description: "Advanced manufacturing techniques ensuring quality and sustainability",
    video: "/vid2.mp4",
    gradient: "from-[#a2d2ff] to-[#a2d2ff]",
    tagColor: "bg-[#d1e9ff]/10 text-[#2196f3]",
  },
  {
    tag: "Our Impact",
    title: "Sustainable Development",
    description: "Creating positive environmental impact through responsible material choices",
    video: "/vid1.mp4",
    gradient: "from-[#a2d2ff] to-[#a2d2ff]",
    tagColor: "bg-[#d1e9ff]/10 text-[#2196f3]",
  },
]

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
    videoRefs.current = videoRefs.current.slice(0, sections.length) // Ensure the array has the correct length

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
                <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-50`} />

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 h-full">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center">
                    <span
                      className={`inline-block px-4 py-2 rounded-full ${section.tagColor} text-sm font-medium mb-6 w-fit`}
                    >
                      {section.tag}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>

                    <p className="text-gray-600 text-lg">{section.description}</p>
                  </div>

                  {/* Right Content - Video */}
                  <div className="relative h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                    >
                      <video
                   ref={(el) => { videoRefs.current[index] = el; void 0; }}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/placeholder.svg"
                      >
                        <source src={section.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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

