"use client"

import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"

const courses = [
  {
    id: 1,
    title: "First Touch",
    price: 1350,
    hours: 150,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },
  {
    id: 2,
    title: "Let's Get Wet",
    price: 1675,
    hours: 220,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },
  {
    id: 3,
    title: "Basic Surf",
    price: 925,
    hours: 70,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },  {
    id: 4,
    title: "First Touch",
    price: 1350,
    hours: 150,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },
  {
    id: 5,
    title: "Let's Get Wet",
    price: 1675,
    hours: 220,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },
  {
    id: 6,
    title: "Basic Surf",
    price: 925,
    hours: 70,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Jonathan Hope",
      avatar:
        "https://images.unsplash.com/photo-1599054802207-91d346adc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Yogyakarta",
    },
  },
]

export default function SurfCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(2)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)

    // Start autoplay
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 4000)

    return () => {
      clearInterval(autoplay)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="min-h-screen text-black py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel */}
        <div className="relative text-white">
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
                    className="flex-[0_0_80%] max-w-lg mx-auto px-4"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div>
                          <div className="text-sm mb-1">USD{course.price}</div>
                          <div className="text-sm text-gray-300">{course.hours} hours</div>
                        </div>
                        <div className="bg-white border rounded-lg backdrop-blur-sm bg-opacity-60 text-black p-4">
                          <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                          <div className="flex items-center space-x-3">
                            <Image
                              src={course.instructor.avatar || "/placeholder.svg"}
                              alt={course.instructor.name}
                              width={40}
                              height={40}
                              className="rounded-full h-12 w-12"
                            />
                            <div>
                              <div className="text-sm font-medium">{course.instructor.name}</div>
                              <div className="text-sm text-gray-900">{course.instructor.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="rounded-full h-16 w-16 bg-[#000000] hover:bg-black shadow-lg hover:text-white hover:scale-95 duration-200 transition-all text-[#ffffff]"
            >
              <ChevronLeft className="text-2xl" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="rounded-full h-16 w-16 bg-[#000000] hover:bg-black shadow-lg hover:text-white hover:scale-95 duration-200 transition-all text-[#ffffff]"
            >
              <ChevronRight className="text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

