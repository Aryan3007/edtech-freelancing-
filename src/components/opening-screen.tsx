"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const tabs = [
  {
    id: "learning",
    label: "The Grade Next Programme",
    title: "Adaptive Learning & Performance Tracking",
    color: "bg-linear-to-r from-lime-200 via-green-400 to-emerald-600",
    lightColor: "from-orange-500/10 to-orange-600/10",
    content: {
      subtitle: "Personalized Questioning & Progress Insights",
      description:
        "Grade Next ensures that learning is tailored to each student’s needs through adaptive questioning. As students progress, the system dynamically adjusts the difficulty level, reinforcing weaker concepts before moving forward. Weekly and community tests provide structured assessments, enabling students to measure their growth, identify improvement areas, and stay motivated. The leader dashboard showcases individual and peer performance, fostering a competitive and goal-driven learning environment.",
      stats: [
        { label: "Success Rate", value: "95%" },
        { label: "Student Progress", value: "89%" },
        { label: "Learning Satisfaction", value: "4.9/5" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "worksheets",
    label: "Smart Revisions for Mastery",
    title: "Targeted Practice & Retention Boost",
    color: "bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500",
    lightColor: "from-yellow-500/10 to-yellow-600/10",
    content: {
      subtitle: "Structured Review & Reinforcement",
      description:
        "Effective learning requires consistent reinforcement, and Grade Next’s smart revision system ensures just that. The platform automatically schedules revisions based on past performance, helping students revisit and strengthen weak concepts. Weekly, 15-day, and monthly revision plans provide structured review sessions, ensuring long-term retention and mastery of topics. If students struggle repeatedly with specific concepts, additional practice sessions are introduced to solidify understanding before moving forward.",
      stats: [
        { label: "Concept Retention", value: "92%" },
        { label: "Practice Completion", value: "85%" },
        { label: "Student Confidence", value: "4.8/5" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "instructors",
    label: "Expert Tutor Support & Guidance",
    title: "Personalized Assistance & Concept Clarity",
    color: "bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600",
    lightColor: "from-purple-500/10 to-purple-600/10",
    content: {
      subtitle: "One-on-One Guidance & Targeted Explanations",
      description:
        "Grade Next bridges the gap between independent learning and expert guidance. If a student consistently struggles with specific topics, tutors are automatically notified to intervene and provide personalized support. One-on-one revision sessions ensure concept clarity, helping students overcome challenges with targeted explanations and guided practice. This direct interaction fosters confidence, encourages deeper understanding, and ensures that no student is left behind.",
      stats: [
        { label: "Concept Improvement", value: "90%" },
        { label: "Student Engagement", value: "88%" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function OpeningScreen() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null)

  return (
    <section className="py-28 flex gap-8 justify-center items-center flex-col max-w-7xl mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      The Grade Next Programme
      </h2>      {/* Grid Layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => setSelectedTab(selectedTab === tab.id ? null : tab.id)}
              className="relative text-left rounded-2xl h-[300px] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tab.color}`} />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-evenly">
                <div className="flex items-center gap-4">
                  <motion.div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white/20`} />
                  <h3 className="text-xl font-medium text-white">{tab.label}</h3>
                </div>

                <div className="mt-auto">
                  <p className="text-white/80 text-sm line-clamp-3">{tab.content.description}</p>
                </div>

                <button className="bg-white my-4 w-fit px-4 text-sm p-2 rounded-full">Learn more...</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Content */}
      <AnimatePresence>
        {selectedTab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {tabs.map(
              (tab) =>
                selectedTab === tab.id && (
                  <div key={tab.id} className="min-h-screen relative">
                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => setSelectedTab(null)}
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
                                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${tab.color}`}
                              />
                              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tab.title}</h1>
                              <p className="text-xl text-gray-600">{tab.content.subtitle}</p>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">{tab.content.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8">
                              {tab.content.stats.map((stat, index) => (
                                <motion.div
                                  key={stat.label}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 + index * 0.1 }}
                                  className="text-center"
                                >
                                  <div
                                    className={`text-2xl font-bold bg-gradient-to-r ${tab.color} bg-clip-text text-transparent`}
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
                                className={`bg-gradient-to-r ${tab.color} text-white px-8 py-6 rounded-xl text-lg hover:opacity-90 transition-opacity`}
                              >
                                Learn more
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
                                src={tab.image || "/placeholder.svg"}
                                alt={tab.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              {/* Gradient overlay */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${tab.lightColor} mix-blend-multiply`}
                              />
                            </div>

                            {/* Decorative elements */}
                            <div
                              className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${tab.color} rounded-full opacity-50`}
                            />
                            <div
                              className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${tab.color} rounded-full opacity-80`}
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
    </section>
  )
}

