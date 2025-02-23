"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
 
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    color: "hover:text-red-600",
  }
]

export default function Header() {
  return (
    <header className=" z-50 bg-[#a2d2ff]  border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className=" md:flex hidden items-center space-x-2">
              
              <span className="text-sm font-semibold ">
                Follow Us : 
              </span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-1"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 md:flex hidden transition-transform duration-200 group-hover:scale-110" />
                    <h1 className="">{social.name}</h1>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </header>
  )
}

