"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const items = [
  {
    id: 0,
    title: "AI-Powered Adaptive Learning & Performance Tracking",
    color: "bg-red-500",
    hoverColor: "group-hover:bg-red-600",
    textColor: "text-red-50",
    gradientColor: "from-red-500 via-red-600 to-red-700",
    lightColor: "from-red-500/10 to-red-600/10",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2071&auto=format&fit=crop",
    description:
      "Grade Next ensures that learning is tailored to each student’s needs through AI-driven adaptive questioning. As students progress, the system dynamically adjusts the difficulty level, reinforcing weaker concepts before moving forward. AI-powered insights from weekly and community tests provide structured assessments, enabling students to measure growth, identify improvement areas, and stay motivated. The leader dashboard showcases individual and peer performance, fostering a competitive and goal-driven learning environment.",
    features: [
      "Personalized practice sessions for better comprehension",
      "Step-by-step learning to master key concepts",
      "Interactive exercises for skill enhancement",
      "Continuous progress tracking and improvement",
    ],
    content: {
      subtitle: "Personalized Questioning & Progress Insights",
      description:
        "Effective learning requires consistent reinforcement, and Grade Next’s AI-powered smart revision system ensures just that. The platform automatically schedules revisions based on past performance, helping students revisit and strengthen weak concepts. Weekly, 15-day, and monthly revision plans provide structured review sessions, ensuring long-term retention and mastery of topics. If students struggle repeatedly with specific concepts, additional AI-driven practice sessions are introduced to solidify understanding before moving forward..",
      stats: [
        { label: "Skill Improvement", value: "94%" },
        { label: "Concept Mastery", value: "91%" },
        { label: "Student Engagement", value: "4.8/5" },
      ],
    },
  },
  {
    id: 1,
    title: "Expert Tutor Support & Guidance",
    color: "bg-blue-500",
    hoverColor: "group-hover:bg-blue-600",
    textColor: "text-blue-50",
    gradientColor: "from-blue-500 via-blue-600 to-blue-700",
    lightColor: "from-blue-500/10 to-blue-600/10",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    description:
      "Learn Through Real-World Applications & Hands-on Practice. Gain a deeper understanding of concepts with practical applications, experiments, and structured problem-solving methods designed to boost critical thinking.",
    features: [
      "Hands-on activities and real-world problem-solving",
      "Conceptual learning beyond traditional methods",
      "Application-based exercises for deeper insight",
      "Encouraging curiosity and analytical thinking",
    ],
    content: {
      subtitle: "Personalized Assistance & Concept Clarity",
      description:
        "Grade Next bridges the gap between independent learning and expert guidance. If a student consistently struggles with specific topics, tutors are automatically notified to intervene and provide personalized support. One-on-one revision sessions ensure concept clarity, helping students overcome challenges with targeted explanations and guided practice. This direct interaction fosters confidence, encourages deeper understanding, and ensures that no student is left behind.",
      stats: [
        { label: "Problem-Solving", value: "93%" },
        { label: "Critical Thinking", value: "89%" },
        { label: "Knowledge Application", value: "4.7/5" },
      ],
    },
  },
  {
    id: 2,
    title: "Future-Ready Skills",
    color: "bg-emerald-500",
    hoverColor: "group-hover:bg-emerald-600",
    textColor: "text-emerald-50",
    gradientColor: "from-emerald-500 via-emerald-600 to-emerald-700",
    lightColor: "from-emerald-500/10 to-emerald-600/10",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    description:
      "Develop Logical Thinking & Problem-Solving Abilities. Empower learners with structured exercises designed to enhance cognitive abilities, logical reasoning, and structured thinking through engaging challenges and real-world projects.",
    features: [
      "Logical reasoning and structured thinking exercises",
      "Project-based learning for skill development",
      "Problem-solving challenges for better understanding",
      "Interactive modules to boost creativity and innovation",
    ],
    content: {
      subtitle: "Logical Reasoning & Cognitive Development",
      description:
        "Our future-ready skills program empowers learners with structured exercises designed to enhance cognitive abilities, logical reasoning, and structured thinking. Through engaging challenges and real-world projects, students develop essential problem-solving abilities that prepare them for future academic and career success. Our project-based learning approach and interactive modules boost creativity and innovation while building a strong foundation in logical reasoning that transfers across disciplines and real-life situations.",
      stats: [
        { label: "Logical Reasoning", value: "95%" },
        { label: "Cognitive Growth", value: "92%" },
        { label: "Innovation Skills", value: "4.9/5" },
      ],
    },
  },
]

const VerticalAccordionWithPopup = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

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

  const handleLearnMore = (id: number) => {
    setSelectedItem(id)
    setIsAutoPlaying(false)
  }

  return (
    <>
        <h1 className="pt-12 lg:pt-32 pb-12 text-4xl font-bold text-center">The GradeNext Programme</h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 justify-center min-h-screen p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group flex flex-col items-center justify-center
            ${
              activeItem === item.id
                ? "lg:w-[800px] h-[550px] md:h-[500px] lg:h-[600px]"
                : "lg:w-32 h-24 md:h-28 lg:h-[600px]"
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
                src={item.image || "/placeholder.svg?height=600&width=800"}
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
                    : "lg:-rotate-90 lg:-left-8 lg:top-1/2 lg:-translate-y-1/2 lg:text-2xl text-xl left-6 top-1/2 -translate-y-1/2"
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
                  className={`text-base lg:text-lg font-medium my-4 lg:mb-6 ${item.textColor}
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
                  onClick={() => handleLearnMore(item.id)}
                  className={`
                  mt-6 lg:mt-8 px-4 lg:px-6 py-2 rounded-full border-2 border-current
                  bg-white hover:scale-95 transition-all text-gray-900 duration-300 text-sm lg:text-base
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

      {/* Full-screen Popup */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {items.map(
              (item) =>
                selectedItem === item.id && (
                  <div key={item.id} className="min-h-screen relative">
                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => {
                        setSelectedItem(null)
                        setIsAutoPlaying(true)
                      }}
                      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>

                    <div className="container mx-auto px-4 py-24">
                      <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                          {/* Content */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                          >
                            <div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.gradientColor}`}
                              />
                              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
                              <p className="text-xl text-gray-600">{item.content.subtitle}</p>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">{item.content.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8">
                              {item.content.stats.map((stat, index) => (
                                <motion.div
                                  key={stat.label}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 + index * 0.1 }}
                                  className="text-center"
                                >
                                  <div
                                    className={`text-2xl font-bold bg-gradient-to-r ${item.gradientColor} bg-clip-text text-transparent`}
                                  >
                                    {stat.value}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                                </motion.div>
                              ))}
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <Button
                                className={`bg-gradient-to-r ${item.gradientColor} text-white px-8 py-6 rounded-xl text-lg hover:opacity-90 transition-opacity`}
                              >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                            </motion.div>
                          </motion.div>

                          {/* Image */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                          >
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg?height=600&width=800"}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              {/* Gradient overlay */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.lightColor} mix-blend-multiply`}
                              />
                            </div>

                            {/* Decorative elements */}
                            <div
                              className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradientColor} rounded-full opacity-50`}
                            />
                            <div
                              className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${item.gradientColor} rounded-full opacity-80`}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordionWithPopup

