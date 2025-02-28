import type React from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            onClick={onClose}
          >
            Contact
          </Link>
          <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="text-white font-normal w-full bg-blue-400 hover:scale-95 shadow-lg rounded-full transition-all duration-300">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="text-white font-normal w-full bg-blue-400 hover:scale-95 shadow-lg rounded-full transition-all duration-300">
                Login
              </Button>
            </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

