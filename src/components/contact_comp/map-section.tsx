"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Find Us
          </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of Innovation City, our headquarters is easily accessible by public transportation and
            has ample parking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="relative h-[500px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Location pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <div className="w-8 h-8 bg-red-500/30 rounded-full absolute top-0 left-0 animate-ping" />
              </motion.div>
            </div>

            {/* Info card */}
            <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">EdTech Headquarters</h3>
              <p className="text-gray-700 mb-4">
                123 Education Avenue
                <br />
                Tech District, Innovation City
                <br />
                CA 94103, United States
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Parking",
              description: "Complimentary parking available in our underground garage for visitors.",
            },
            { title: "Public Transit", description: "We're a 5-minute walk from Innovation Station on the Blue Line." },
            {
              title: "From the Airport",
              description:
                "A 25-minute drive from International Airport or take the Airport Express to Innovation Station.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-purple-600">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

