"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Educational Experience?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join thousands of educators and students who are already benefiting from our innovative platform. Contact us
            today to learn how we can help you achieve your educational goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="relative overflow-hidden rounded-full bg-white text-emerald-600 px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:bg-gray-100"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 text-black border-white/70 hover:text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <span className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

