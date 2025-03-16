"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium"
            >
              About Our Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
            >
              Transforming Education Through Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              We&apos;re on a mission to make quality education accessible to everyone through innovative technology
              solutions. Our platform combines cutting-edge AI with proven learning methodologies to create personalized
              educational experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-violet-600 text-xl font-bold">10+</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Years of</p>
                  <p className="text-gray-500">Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl font-bold">50k+</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Students</p>
                  <p className="text-gray-500">Worldwide</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl font-bold">98%</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Satisfaction</p>
                  <p className="text-gray-500">Rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-violet-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Our Philosophy</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We believe that education should be personalized, engaging, and accessible to everyone regardless of
                their background.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

