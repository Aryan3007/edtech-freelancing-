"use client"

import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Waves, Sun, Compass, Wind } from "lucide-react"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"

// Updated course data with more variety and colors
const courses = [
  {
    id: 1,
    title: "First Touch",
    price: 1350,
    hours: 150,
    color: "from-blue-400 to-cyan-300",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
    icon: Waves,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
  {
    id: 2,
    title: "Let's Get Wet",
    price: 1675,
    hours: 220,
    color: "from-teal-400 to-emerald-300",
    image:
      "https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Sarah Waters",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Bali",
    },
    icon: Sun,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
  {
    id: 3,
    title: "Basic Surf",
    price: 925,
    hours: 70,
    color: "from-amber-400 to-yellow-300",
    image:
      "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Mike Turner",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Hawaii",
    },
    icon: Compass,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
  {
    id: 4,
    title: "Advanced Techniques",
    price: 1850,
    hours: 180,
    color: "from-purple-400 to-indigo-300",
    image:
      "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Lisa Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "California",
    },
    icon: Wind,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
  {
    id: 5,
    title: "Pro Surfing",
    price: 2100,
    hours: 250,
    color: "from-pink-400 to-rose-300",
    image:
      "https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Australia",
    },
    icon: Sun,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
  {
    id: 6,
    title: "Ocean Mastery",
    price: 1775,
    hours: 200,
    color: "from-orange-400 to-red-300",
    image:
      "https://images.unsplash.com/photo-1513737567531-bc431c8e5e73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "South Africa",
    },
    icon: Compass,
    description:"This course is designed for beginners who want to learn the basics of surfing. You will learn how to paddle, stand up, and ride the waves with confidence."
  },
]

export default function SurfCarousel() {
  // Fix the emblaApi initialization and button functionality
  // Update the useEmblaCarousel call to ensure proper initialization
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  })

 
  const [selectedIndex, setSelectedIndex] = useState(1)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
   
  }, [emblaApi])

  // Fix the useEffect to properly initialize buttons state
  useEffect(() => {
    if (!emblaApi) return

    // Update selected index
    setSelectedIndex(emblaApi.selectedScrollSnap())

    // Add event listeners
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="min-h-screen  py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-[5%] w-80 h-80 rounded-full bg-teal-200 opacity-20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-amber-200 opacity-30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Decorative wave patterns */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity="0.5"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Discover Surf Courses
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From beginners to advanced surfers, find the perfect course to ride the waves with confidence and style.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <AnimatePresence mode="wait">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0.5,
                      scale: selectedIndex === index ? 1 : 0.8,
                      rotateY: selectedIndex === index ? 0 : 15,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="flex-[0_0_80%] max-w-lg mx-auto lg:px-4"
                  >
                    <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-xl group">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Colorful overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-b ${course.color} opacity-60`} />

                      {/* Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm font-semibold mb-1 bg-white/80 text-blue-600 px-3 py-1 rounded-full inline-block">
                              ${course.price}
                            </div>
                            <div className="text-sm bg-white/80 text-slate-700 px-3 py-1 rounded-full inline-block mt-2">
                              {course.hours} hours
                            </div>
                          </div>
                          <motion.div
                            className="bg-white/80 p-2 rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                          >
                            <course.icon className="h-6 w-6 text-blue-500" />
                          </motion.div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform transition-all duration-300 group-hover:-translate-y-2">
                          <h3 className="text-2xl font-bold mb-4 text-slate-800">{course.title}</h3>
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Image
                                src={course.instructor.avatar || "/placeholder.svg"}
                                alt={course.instructor.name}
                                width={48}
                                height={48}
                                className="rounded-full h-12 w-12 object-cover border-2 border-white shadow-md"
                              />
                              <div className="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-800">{course.instructor.name}</div>
                              <div className="text-xs text-slate-500 flex items-center">
                                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                {course.instructor.location}
                              </div>
                            </div>
                          </div>

                          <motion.div
                            className={`mt-4 w-full py-2 text-left p-2 rounded-lg bg-gradient-to-r ${course.color} text-white font-medium text-sm shadow-md`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {course.description}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {courses.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index ? "w-8 bg-blue-500" : "w-2 bg-slate-300"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

