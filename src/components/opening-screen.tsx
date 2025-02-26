"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const tabs = [
  {
    id: "learning",
    label: "Learning at the 'just-right' level",
    title: "Self-learning",
    color: "bg-linear-to-r from-lime-200 via-green-400 to-emerald-600",
    lightColor: "from-orange-500/10 to-orange-600/10",
    content: {
      subtitle: "Personalized Learning Path",
      description:
        "When students advance ahead of school grade level in the Kumon worksheets, they learn for themselves what they are yet to be taught at school. When they encounter something new, they study the example, draw on previous learning and give it a try.",
      stats: [
        { label: "Success Rate", value: "94%" },
        { label: "Student Growth", value: "87%" },
        { label: "Satisfaction", value: "4.8/5" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "worksheets",
    label: "The Kumon worksheets",
    title: "Progressive Learning",
    color: "bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500",
    lightColor: "from-yellow-500/10 to-yellow-600/10",
    content: {
      subtitle: "Structured Development",
      description:
        "Our worksheets are designed to help students master concepts and advance beyond their school grade level. Each worksheet builds on skills learned in previous worksheets, ensuring a solid foundation for learning.",
      stats: [
        { label: "Completion Rate", value: "92%" },
        { label: "Skill Mastery", value: "89%" },
        { label: "Progress Rate", value: "95%" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "instructors",
    label: "Kumon Instructors",
    title: "Expert Guidance",
    color: "bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600",
    lightColor: "from-purple-500/10 to-purple-600/10",
    content: {
      subtitle: "Professional Support",
      description:
        "Our certified instructors are trained to observe and guide students through their learning journey. They provide the right amount of support while encouraging independent learning.",
      stats: [
        { label: "Certified Teachers", value: "100%" },
        { label: "Experience", value: "12+ Yrs" },
        { label: "Student Rating", value: "4.9/5" },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]

export default function OpeningScreen() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null)

  return (
    <section className="pb-28 flex gap-8 justify-center items-center flex-col max-w-7xl mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        The Kumon Programme
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

