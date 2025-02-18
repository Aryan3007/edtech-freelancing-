/* eslint-disable @next/next/no-img-element */
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const contentSections = [
  {
    title: "Black Nike w white check",
    description:
      "Experience the iconic Nike Air Force 1 in classic black leather with the signature white swoosh. This timeless design combines durability with style, featuring premium materials and the legendary Air cushioning that revolutionized basketball footwear.",
    image: "https://plus.unsplash.com/premium_photo-1718146019028-6118387862d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Monochrome Collection",
    description:
      "Discover our curated collection of black and white sneakers, where classic design meets contemporary style. Each pair is carefully crafted to deliver both comfort and aesthetic appeal, perfect for those who appreciate minimalist fashion.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fh01pKLglRJ2IgetnTVjxCcqFVQr33.png",
  },
  {
    title: "White shoes in the rain",
    description:
      "Our water-resistant white sneakers are designed to withstand the elements while maintaining their pristine appearance. Featuring advanced waterproof technology and durable materials, these shoes are perfect for unpredictable weather.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VSlbV3MaVE8XqFfIqb0YJYM7IgydQH.png",
  },
]

export default function OppositeScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left Section - Content */}
        <motion.div className="w-1/2 bg-black text-white relative" style={{ y: y1 }}>
          {contentSections.map((section, index) => (
            <div key={index} className="h-screen flex flex-col justify-center p-12 lg:p-16">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{section.title}</h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">{section.description}</p>
                <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Section - Images */}
        <motion.div className="w-1/2 bg-gradient-to-b from-gray-100 to-white relative" style={{ y: y2 }}>
          {contentSections.map((section, index) => (
            <div key={index} className="h-screen relative flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

     
    </div>
  )
}

