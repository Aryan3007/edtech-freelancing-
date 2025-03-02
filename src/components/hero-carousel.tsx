"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Carousel slide data
const slides = [
  {
    id: 4,
    backgroundImage: "https://images.unsplash.com/photo-1490424660416-359912d314b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Master Learning with AI-Powered Education",
    subheading: "",
    paragraph:
      "Unlock personalized learning with real-time AI insights. Stay on track with adaptive practice, smart revisions, and interactive challenges designed for your success.",
    buttonLink: "/stanford-partnership",
  },{
    id: 1,
    backgroundImage: "https://images.unsplash.com/photo-1602542165989-999c53234fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Stanford & Havard University",
    subheading: "Built with Expert Guidance ",
    paragraph:
      "Developed with insights from top educators and researchers, Grade Next integrates proven learning methodologies to enhance student success.",
    buttonLink: "/stanford-partnership",
  },
  {
    id: 2,
    backgroundImage: "https://images.unsplash.com/photo-1617117206620-b01f2919ff86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "McGill University ",
    subheading: "Empowering Education with Innovation",
    paragraph:
      "In collaboration with McGill University experts, Grade Next incorporates cutting-edge ducational research to create an engaging and effective learning experience for students worldwide.",
    buttonLink: "/harvard-partnership",
  },
  {
    id: 3,
    backgroundImage: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "The University of Tokyo ",
    subheading: "Advancing Learning with Excellence",
    paragraph:
      "With insights from leading researchers at The University of Tokyo, Grade Next integrates innovative learning strategies to enhance student engagement, critical thinking, and academic growth.",
    buttonLink: "/mit-partnership",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 20000)

    return () => clearInterval(interval)
  }, []) // Removed unnecessary dependency: currentSlide

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container max-w-7xl mx-auto h-full px-4 flex flex-col justify-center">
            <div
              className={`max-w-2xl  transition-all duration-700 ${
                currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-white text-xl md:text-2xl font-medium mb-2 animate-fadeIn">{slide.subheading}</h3>
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slideUp">
                {slide.heading}
              </h2>
              <p className="text-white text-lg md:text-xl mb-6 max-w-xl animate-fadeIn">{slide.paragraph}</p>
              <Link
                href={slide.buttonLink}
                className="inline-block bg-blue-400 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 animate-fadeIn"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

