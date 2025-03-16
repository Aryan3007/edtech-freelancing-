"use client"

import { motion } from "framer-motion"

export default function JourneyTimeline() {
  const timelineItems = [
    {
      year: "2013",
      title: "Company Founded",
      description: "Started with a small team of educators and developers passionate about transforming education.",
    },
    {
      year: "2015",
      title: "First Platform Launch",
      description: "Released our first learning management system, serving 1,000+ students in the first year.",
    },
    {
      year: "2017",
      title: "AI Integration",
      description: "Pioneered adaptive learning algorithms to personalize the educational experience.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded to 15 countries, making our platform available in 8 different languages.",
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Released our mobile application, making learning accessible anytime, anywhere.",
    },
    {
      year: "2023",
      title: "10 Million Users",
      description: "Reached a milestone of 10 million users worldwide, with a 98% satisfaction rate.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600">
            From a small startup to a global educational technology company, here&apos;s how we&apos;ve grown over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-100"></div>

          <div className="space-y-12">
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

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-violet-500 rounded-full border-4 border-white z-10"></div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? "mr-10" : "ml-10"}`}>
                    <div className="inline-block px-4 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

