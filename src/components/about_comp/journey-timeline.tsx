"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function JourneyTimeline() {
  const timelineItems = [
    {
      year: "2013",
      title: "Company Founded",
      description: "Started with a small team of educators and developers passionate about transforming education.",
      achievements: ["Initial team of 5 members", "Secured seed funding", "Developed concept prototype"],
    },
    {
      year: "2015",
      title: "First Platform Launch",
      description: "Released our first learning management system, serving 1,000+ students in the first year.",
      achievements: ["1,000+ active users", "Partnership with 3 schools", "95% user satisfaction"],
    },
    {
      year: "2017",
      title: "AI Integration",
      description: "Pioneered adaptive learning algorithms to personalize the educational experience.",
      achievements: ["Patented AI algorithm", "40% improvement in learning outcomes", "Featured in EdTech Magazine"],
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded to 15 countries, making our platform available in 8 different languages.",
      achievements: ["Offices in 4 continents", "Multi-language support", "100,000+ global users"],
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Released our mobile application, making learning accessible anytime, anywhere.",
      achievements: ["1M+ app downloads", "4.8 star app rating", "Mobile learning award winner"],
    },
    {
      year: "2023",
      title: "10 Million Users",
      description: "Reached a milestone of 10 million users worldwide, with a 98% satisfaction rate.",
      achievements: ["10M+ active users", "98% satisfaction rate", "Series C funding secured"],
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            From a small startup to a global educational technology company, here&apos;s how we&apos;ve grown over the
            years.
          </p>
        </motion.div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-200"></div>

          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1"></div>

                {/* Timeline dot with year */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 hover:shadow-xl transition-shadow ${index % 2 === 0 ? "mr-12" : "ml-12"}`}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-emerald-700">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (visible only on mobile) */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-200"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Year bubble */}
                <div className="absolute left-4 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                  {item.year.substring(2)}
                </div>

                {/* Content */}
                <motion.div
                  className="bg-white p-5 rounded-xl shadow-md border-l-4 border-emerald-500"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-xs font-semibold text-emerald-700 mb-1">{item.year}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                  <div className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

