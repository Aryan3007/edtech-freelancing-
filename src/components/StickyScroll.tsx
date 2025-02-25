"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const sections = [
  {
    tag: "Our Services",
    title: "Custom Material Solutions",
    description: "Tailoring solutions to meet specific project requirements and environmental goals",
    video: "/vid1.mp4",
    gradient: "bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
  },
  {
    tag: "Our Process",
    title: "Innovative Manufacturing",
    description: "Advanced manufacturing techniques ensuring quality and sustainability",
    video: "/vid2.mp4",
    gradient: "bg-linear-to-r from-lime-200 via-green-400 to-emerald-600",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
  },
  {
    tag: "Our Impact",
    title: "Sustainable Development",
    description: "Creating positive environmental impact through responsible material choices",
    video: "/vid1.mp4",
    gradient: "bg-linear-to-r from-red-200 via-pink-400 to-rose-600",
    tagColor: "bg-[#000000FF]/10 text-[#000000FF]",
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
    <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" background-color="#FFFFFFFF" viewBox="0 0 1440 320"><path fill="#a2d2ff" fillOpacity="1" d="M0,96L16,90.7C32,85,64,75,96,90.7C128,107,160,149,192,149.3C224,149,256,107,288,117.3C320,128,352,192,384,218.7C416,245,448,235,480,208C512,181,544,139,576,133.3C608,128,640,160,672,149.3C704,139,736,85,768,80C800,75,832,117,864,133.3C896,149,928,139,960,149.3C992,160,1024,192,1056,208C1088,224,1120,224,1152,213.3C1184,203,1216,181,1248,176C1280,171,1312,181,1344,197.3C1376,213,1408,235,1424,245.3L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg> */}
   
    <div ref={containerRef} className="relative bg-[#ffffff] h-[300vh]">
  
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
    </div> </>
  )
}

