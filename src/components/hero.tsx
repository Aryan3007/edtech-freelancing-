"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Stats from "./stats"
import Navbar from "./navbar"


const stats = [
  {
    number: "503",
    label: "Happy Customer",
    image: "https://img.freepik.com/free-photo/abstract-building-with-sky_23-2148106883.jpg?t=st=1739982415~exp=1739986015~hmac=18aae12b05510495e13447d1cbf0681ab19cb5fcf6090e8a49f7499e7da0686a&w=740",
    tag: "News",
    title: "We're excited to reveal a brand new take on a Studio Set.",
    avatar: "https://images.unsplash.com/photo-1739823602919-fc52d84b7e7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Lee",
  },
  {
    number: "6700+",
    label: "Property Sales",
    image: "https://img.freepik.com/free-photo/abstract-building-with-sky_23-2148106883.jpg?t=st=1739982415~exp=1739986015~hmac=18aae12b05510495e13447d1cbf0681ab19cb5fcf6090e8a49f7499e7da0686a&w=740",
    tag: "News",
    title: "Update: Daily Only with us you will learn the real trends.",
    avatar: "https://images.unsplash.com/photo-1739823602919-fc52d84b7e7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
  },
  {
    number: "205",
    label: "Award Winning",
  },
]

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:pl-12 pt-4">


        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-20">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center justify-between mb-16">
              <Navbar />


            </nav>
            <div className="space-y-8 pt-8">
              <div>

                <h1 className="text-5xl md:text-6xl mb-4 lg:text-7xl leading-tight">
                  Scale Business
                  <br />
                  with Simple AI Tools
                </h1>
                <p className="text-gray-600 text-lg max-w-lg">
                  As a trusted best project that has been operating for 25 years, our commitment is always to prioritize
                  our client satisfaction
                </p>
              </div>

              {/* Achievement Cards */}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-4 flex items-start space-x-4"
                  >
                    <Image
                      src={stat.image || "/placeholder.svg"}
                      alt={stat.title || "Achievement"}
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                    <div className="space-y-2">
                      <span className="px-3 py-1 bg-[#a2d2ff] rounded-full text-sm">{stat.tag}</span>
                      <p className="font-medium">{stat.title}</p>
                      <div className="flex items-center space-x-2">
                        <Image
                          src={stat.avatar || "/placeholder.svg"}
                          alt="hello"
                          width={24}
                          height={24}
                          className="rounded-full h-10 w-10"
                        />
                        <span className="text-sm text-gray-600">{stat.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Statistics */}
              <div className="">
                <Stats />
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[calc(100vh-30px)] border rounded-3xl overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="Hero Image"
                fill
                className="object-cover"
              />
              {/* Best Project Badge */}
              <div className="absolute top-4 right-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-60 backdrop-blur-sm border rounded-3xl p-2 w-64 h-80 relative"

                >
                  {/* Top section with badge and title */}

                  <div className="flex text-black flex-col items-start gap-3">


                    <input type="email" placeholder="Enter your email" className="bg-gradient-to-br from-[#2f2f2f] to-[#0f0f0f] px-4 py-2 rounded-full border border-black w-full text-white" />
                    <Button className="bg-[#a2d2ff] hover:bg-[#a2d2ff8d] text-black rounded-full">Join Waitlist</Button>
                  </div>
                </motion.div>
              </div>
              {/* Discover More Button */}
              <motion.div className="absolute bottom-4 flex justify-center items-center right-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#a2d2ff] hover:bg-[#a2d2ff8d] text-black rounded-full px-6">
                  Discover More
                </Button>
                <ArrowUpRight className="w-full p-1.5 rounded-full bg-[#a2d2ff] h-full ml-2" />

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

