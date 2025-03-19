"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Sparkles } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { href: string; label: string }[]
  currentPath: string
}

export function MobileMenu({ isOpen, onClose, navItems, currentPath }: MobileMenuProps) {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-white shadow-xl z-[1001]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                          currentPath === item.href
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="p-6 space-y-4 border-t border-gray-200">
                <Button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-6 font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-2 border-violet-500 text-violet-600 hover:bg-violet-50 py-6 font-medium"
                >
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

