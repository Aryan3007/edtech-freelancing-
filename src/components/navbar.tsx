"use client"

import { useState } from "react"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full lg:w-1/2 pt- right-0 z-50 transition-all duration-300 ${isScrolled ? " lg:w-full top-2" : "bg-transparent"
        }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`${isScrolled ? "justify-center" : "justify-between"} flex items-center h-16`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className={` ${isScrolled ? "hidden" : ""} text-xl uppercase font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:from-gray-600 hover:to-gray-800 transition-all duration-300`}>
              Flokana
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className={`p-2 rounded-full bg-black w-fit px-4 uppercase text-white text-center ${isScrolled ? "flex" : "hidden"} gap-2`}><h1>Flokana</h1></div>

          <div className="hidden mx-2 bg-black py-2 px-2 rounded-full h-fit md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center"
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
                  <Link
                    href={item.href}
                    className={` px-4 py-[5px] rounded-full text-xs ${pathname === item.href ? "bg-[#a2d2ff] text-black" : "text-white hover:bg-gray-900"
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>
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
            className={`${isScrolled ? "" : "md:flex"}`}
          >

            <motion.div className="flex gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="border bg-black rounded-full shadow-lg border-gray-900 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                variant="default"
              >
                Get Started
              </Button> <Button
                className="border bg-black rounded-full shadow-lg border-gray-900 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
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

