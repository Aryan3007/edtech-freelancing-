"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { FiMenu } from "react-icons/fi"
import Header from "./header"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      {/* <Header /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">
          {/* Logo/Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="text-xl uppercase font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
            >
              Flokana
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ml-10 flex items-baseline space-x-1"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} className="relative px-3 py-2 rounded-md text-sm font-medium group">
                    <span className="relative z-10 text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                      {item.label}
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gray-100 rounded-md -z-10"
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden gap-2 md:flex"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-white border  rounded-full shadow-lg text-black hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                variant="default"
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="border shadow-lg rounded-full  border-gray-900  hover:shadow-xl transition-all duration-300"
                variant="default"
              >
                Login
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <FiMenu className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.nav>
  )
}

export default Navbar

