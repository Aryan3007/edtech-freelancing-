"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Sparkles, TrendingUp, Users, Target, BarChart3, Goal } from "lucide-react"

const stats = {
  before: {
    title: "Before Grade Next:",
    mainStat: "5-10%",
    subStats: [
      { label: "High Performers Across the Organization", value: "5-10%", icon: TrendingUp },
      { label: "Performance Rate", value: "65%", icon: Users },
      { label: "Efficiency", value: "72%", icon: Target },
      { label: " Goal Achievement", value: "58%", icon: Goal },
    ],
    gradient: "from-slate-500 to-slate-600",
    lightGradient: "from-slate-500/10 to-slate-600/10",
  },
  after: {
    title: "After Grade Next",
    mainStat: "10-20%",
    subStats: [
      { label: "High Performers Across the Organization", value: "10-20%", icon: TrendingUp },
      { label: "Performance Rate", value: "94%", icon: Users },
      { label: "Efficiency", value: "89%", icon: Target },
      { label: "Goal Achievement", value: "89%", icon: Goal },
    ],
    gradient: "from-blue-500 to-indigo-600",
    lightGradient: "from-blue-500/10 to-indigo-600/10",
  },
}

export default function MeshStats() {
  const [activeState, setActiveState] = useState<"before" | "after">("before")

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100/50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
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
            <Sparkles className="h-6 w-6 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Transform Learning, Maximize Success
            </h2>
            <Sparkles className="h-6 w-6 text-blue-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
Enhance performance, boost engagement, and drive better outcomes with a tailored learning
experience          </motion.p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-16">
          <motion.div
            className="bg-white p-2 rounded-full shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex relative">
              <motion.div
                className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                initial={{ width: "50%", x: 0 }}
                animate={{ x: activeState === "before" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: "50%" }}
              />
              <button
                onClick={() => setActiveState("before")}
                className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                  activeState === "before" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                Before Grade Next
              </button>
              <button
                onClick={() => setActiveState("after")}
                className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                  activeState === "after" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                After Grade Next
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl"
            >
              <div className={`p-8 bg-gradient-to-r ${stats[activeState].gradient}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{stats[activeState].title}</h3>
                <p className="text-6xl font-bold text-white">{stats[activeState].mainStat}</p>
                <p className="text-white/80 mt-2">High performers across the organization</p>
              </div>
              <div className="p-8">
                <div className="grid gap-6">
                  {stats[activeState].subStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${stats[activeState].lightGradient}`}>
                            <Icon
                              className={`h-5 w-5 ${activeState === "after" ? "text-blue-600" : "text-slate-600"}`}
                            />
                          </div>
                          <span className="font-medium text-slate-600">{stat.label}</span>
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                          {stat.value}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

