"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const items = [
  {
    id: 0,
    title: "SCIENCE",
    color: "bg-red-500",
    hoverColor: "group-hover:bg-red-600",
    textColor: "text-red-50",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2071&auto=format&fit=crop",
    description: "Master mathematics from basic arithmetic to advanced calculus with our comprehensive program.",
    features: [
      "Personalized learning path",
      "Daily practice worksheets",
      "Regular assessments",
      "Problem-solving skills",
    ],
  },
  {
    id: 1,
    title: "ENGLISH",
    color: "bg-blue-500",
    hoverColor: "group-hover:bg-blue-600",
    textColor: "text-blue-50",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    description: "Develop strong reading, writing, and communication skills through our proven methodology.",
    features: ["Reading comprehension", "Writing exercises", "Vocabulary building", "Grammar mastery"],
  },
  {
    id: 2,
    title: "SCIENCE",
    color: "bg-emerald-500",
    hoverColor: "group-hover:bg-emerald-600",
    textColor: "text-emerald-50",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    description: "Explore the wonders of science through hands-on experiments and engaging lessons.",
    features: ["Interactive experiments", "Scientific concepts", "Lab work", "Research projects"],
  },
  {
    id: 3,
    title: "CODING",
    color: "bg-violet-500",
    hoverColor: "group-hover:bg-violet-600",
    textColor: "text-violet-50",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    description: "Learn programming fundamentals and build real-world applications.",
    features: ["Basic programming", "Web development", "App creation", "Problem solving"],
  },
]

const VerticalAccordion = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveItem((prev) => (prev + 1) % items.length)
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = (id: number) => {
    setIsAutoPlaying(false)
    setActiveItem(id)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 justify-center min-h-screen p-2">
      {items.map((item) => (
        <div
          key={item.id}
          className={`group flex flex-col items-center justify-center
            ${
              activeItem === item.id
                ? "lg:w-[800px] h-[400px] md:h-[500px] lg:h-[600px]"
                : "lg:w-28 h-24 md:h-28 lg:h-[600px]"
            } 
            w-full rounded-2xl lg:rounded-3xl duration-500 transition-all relative overflow-hidden ${item.color}
            hover:shadow-2xl cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background Image with Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-500
            ${activeItem === item.id ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={item.id === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent`} />
          </div>

          {/* Content Container */}
          <div className="relative w-full h-full flex flex-col">
            {/* Title - Different positioning for mobile and desktop */}
            <h1
              className={`
                absolute transition-all duration-500 font-bold tracking-wider ${item.textColor}
                ${
                  activeItem === item.id
                    ? "lg:left-10 lg:top-10 lg:text-4xl text-2xl left-6 top-6"
                    : "lg:-rotate-90 lg:left-1 lg:top-1/2 lg:-translate-y-1/2 lg:text-3xl text-xl left-6 top-1/2 -translate-y-1/2"
                }
              `}
            >
              {item.title}
            </h1>

            {/* Content - Only visible when active */}
            <div
              className={`
                transition-all duration-500 delay-200 absolute 
                ${activeItem === item.id ? "opacity-100" : "opacity-0"}
                lg:top-32 lg:left-10 lg:right-10
                top-20 left-6 right-6
              `}
            >
              <p
                className={`text-base lg:text-lg font-medium mb-4 lg:mb-6 ${item.textColor}
                ${activeItem === item.id ? "block" : "hidden"}`}
              >
                {item.description}
              </p>

              <div className="space-y-2 lg:space-y-4">
                {item.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: activeItem === item.id ? 0 : -20, opacity: activeItem === item.id ? 1 : 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className={`flex items-center gap-2 lg:gap-3
                      ${activeItem === item.id ? "block" : "hidden"}`}
                  >
                    <ArrowRight className={`w-4 h-4 lg:w-5 lg:h-5 ${item.textColor}`} />
                    <span className={`${item.textColor} text-sm lg:text-base`}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: activeItem === item.id ? 0 : 20, opacity: activeItem === item.id ? 1 : 0 }}
                transition={{ delay: 0.4 }}
                className={`
                  mt-6 lg:mt-8 px-4 lg:px-6 py-2 rounded-full border-2  border-current
                  bg-white hover:scale-95 transition-all text-gray-900  duration-300 text-sm lg:text-base
                  ${activeItem === item.id ? "block" : "hidden"}
                `}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VerticalAccordion

