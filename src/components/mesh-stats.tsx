"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, TrendingUp, Users, Target, BarChart3, Goal, Star, Zap } from "lucide-react"

const stats = {
  before: {
    title: "Before GradeNext:",
    mainStat: "5-10%",
    subStats: [
      { label: "High Performers Across the Organization", value: "5-10%", icon: TrendingUp },
      { label: "Performance Rate", value: "65%", icon: Users },
      { label: "Efficiency", value: "72%", icon: Target },
      { label: " Goal Achievement", value: "58%", icon: Goal },
    ],
    gradient: "from-rose-500 to-orange-500",
    lightGradient: "from-rose-500/10 to-orange-500/10",
    accentColor: "text-rose-600",
    bgGradient: "from-rose-50 to-orange-50",
  },
  after: {
    title: "After GradeNext",
    mainStat: "10-20%",
    subStats: [
      { label: "High Performers Across the Organization", value: "10-20%", icon: TrendingUp },
      { label: "Performance Rate", value: "94%", icon: Users },
      { label: "Efficiency", value: "89%", icon: Target },
      { label: "Goal Achievement", value: "89%", icon: Goal },
    ],
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-500/10 to-purple-600/10",
    accentColor: "text-violet-600",
    bgGradient: "from-violet-50 to-purple-50",
  },
}

// Floating elements for decoration
import { ReactNode } from "react";

const FloatingElement = ({ delay = 0, className = "", children }: { delay?: number; className?: string; children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function MeshStats() {
  const [activeState, setActiveState] = useState<"before" | "after">("before")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Auto-switch between tabs for demo effect
    const interval = setInterval(() => {
      setActiveState((prev) => (prev === "before" ? "after" : "before"))
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${activeState === "before" ? "from-rose-50 to-orange-50/30" : "from-violet-50 to-purple-50/30"} transition-colors duration-1000`}
      />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            backgroundColor: activeState === "before" ? "#f43f5e" : "#8b5cf6",
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            backgroundColor: activeState === "before" ? "#fb923c" : "#a855f7",
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            backgroundColor: activeState === "before" ? "#f97316" : "#c084fc",
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            <FloatingElement delay={0} className="absolute top-20 left-[20%]">
              <div
                className={`w-12 h-12 rounded-lg rotate-12 bg-gradient-to-br ${activeState === "before" ? "from-rose-400 to-orange-400" : "from-violet-400 to-purple-400"} opacity-20`}
              />
            </FloatingElement>

            <FloatingElement delay={1} className="absolute top-40 right-[25%]">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${activeState === "before" ? "from-orange-300 to-amber-300" : "from-purple-300 to-fuchsia-300"} opacity-20`}
              />
            </FloatingElement>

            <FloatingElement delay={2} className="absolute bottom-40 left-[15%]">
              <div
                className={`w-20 h-20 rounded-lg rotate-45 bg-gradient-to-br ${activeState === "before" ? "from-amber-400 to-yellow-400" : "from-fuchsia-400 to-pink-400"} opacity-20`}
              />
            </FloatingElement>

            <FloatingElement delay={1.5} className="absolute bottom-20 right-[20%]">
              <div
                className={`w-14 h-14 rounded-lg -rotate-12 bg-gradient-to-br ${activeState === "before" ? "from-rose-300 to-red-300" : "from-indigo-300 to-violet-300"} opacity-20`}
              />
            </FloatingElement>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles
                className={`h-8 w-8 ${activeState === "before" ? "text-rose-500" : "text-violet-500"} transition-colors duration-1000`}
              />
            </motion.div>

            <h2
              className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeState === "before" ? "from-rose-600 to-orange-600" : "from-violet-600 to-purple-600"} transition-colors duration-1000`}
            >
              Transform Learning, Maximize Success
            </h2>

            <motion.div
              animate={{
                rotate: [0, -10, 0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            >
              <Sparkles
                className={`h-8 w-8 ${activeState === "before" ? "text-orange-500" : "text-purple-500"} transition-colors duration-1000`}
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Enhance performance, boost engagement, and drive better outcomes with a tailored learning experience
          </motion.p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-16">
          <motion.div
            className="bg-white p-2 rounded-full shadow-xl border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex relative">
              <motion.div
                className={`absolute h-full rounded-full bg-gradient-to-r ${activeState === "before" ? "from-rose-500 to-orange-500" : "from-violet-500 to-purple-600"} transition-colors duration-1000`}
                initial={{ width: "50%", x: 0 }}
                animate={{ x: activeState === "before" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: "50%" }}
              />
              <button
                onClick={() => setActiveState("before")}
                className={`relative px-6 py-3 lg:text-base text-xs rounded-full flex items-center gap-2 transition-colors ${
                  activeState === "before" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="h-5 lg:flex hidden w-5" />
                Before GradeNext
              </button>
              <button
                onClick={() => setActiveState("after")}
                className={`relative px-6 py-3 rounded-full lg:text-base text-xs flex items-center gap-2 transition-colors ${
                  activeState === "after" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Star className="h-5 lg:flex hidden w-5" />
                After GradeNext
              </button>
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="flex justify-center w-full">
          {/* Stats Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeState}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl border border-slate-100"
            >
              <div className={`p-8 bg-gradient-to-r ${stats[activeState].gradient}`}>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {activeState === "before" ? (
                      <BarChart3 className="h-8 w-8 text-white/90" />
                    ) : (
                      <Star className="h-8 w-8 text-white/90" />
                    )}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{stats[activeState].title}</h3>
                </div>

                <div className="flex items-end gap-3">
                  <p className="text-6xl font-bold text-white">{stats[activeState].mainStat}</p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-2"
                  >
                    <span className="text-white/80 text-lg">High performers</span>
                  </motion.div>
                </div>

                <div className="mt-4 bg-white/10 h-1 rounded-full w-full">
                  <motion.div
                    className="h-full rounded-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: activeState === "before" ? "30%" : "70%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>

              <div className={`p-2 bg-gradient-to-b ${stats[activeState].bgGradient} bg-opacity-30`}>
                <div className="grid gap-6">
                  {stats[activeState].subStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${stats[activeState].gradient}`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-medium text-slate-700">{stat.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stats[activeState].gradient}`}
                          >
                            {stat.value}
                          </span>
                          {activeState === "after" && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <Sparkles className="h-5 w-5 text-amber-400" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Bottom decorative element */}
                <div className="mt-8 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className={`px-6 py-3 rounded-full bg-gradient-to-r ${stats[activeState].gradient} text-white font-medium flex items-center gap-2 shadow-lg`}
                  >
                    {activeState === "before" ? (
                      <>
                        <span>Ready to upgrade?</span>
                        <Zap className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Maximized performance!</span>
                        <Star className="h-4 w-4" />
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

