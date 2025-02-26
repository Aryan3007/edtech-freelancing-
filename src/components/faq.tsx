"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, Triangle, Square, Circle, Hexagon, Star } from "lucide-react"

const faqs = [
  {
    question: "Why is the sky blue?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.",
    gradient: "from-blue-500 to-indigo-600",
    lightGradient: " bg-gradient-to-r  from-blue-100 to-indigo-200",
    icon: "✨",
  },
  {
    question: "Why did the chicken cross the road?",
    answer:
      "To get to the other side! But seriously, this classic riddle has been making people groan and laugh for generations. It's the ultimate anti-joke that plays with our expectations of complex answers.",
    gradient: "from-amber-500 to-orange-600",
    lightGradient: "from-amber-100 to-orange-200",
    icon: "🐔",
  },
  {
    question: "How many licks does it take to get to the center of a tootsie pop?",
    answer:
      "According to scientific studies, it takes an average of 364 licks to reach the center of a Tootsie Pop. However, this number can vary based on factors like licking technique, saliva composition, and patience levels.",
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-100 to-rose-200",
    icon: "🍭",
  },
  {
    question: "Where's Waldo?",
    answer:
      "Waldo could be anywhere in the detailed illustrations! The key to finding him is to scan methodically and look for his distinctive red and white striped shirt, hat, and glasses. He's often hidden in plain sight among crowds of people and busy scenes.",
    gradient: "from-red-500 to-red-700",
    lightGradient: "from-red-100 to-red-200",
    icon: "🔍",
  },
  {
    question: "What is the meaning of life?",
    answer:
      "The meaning of life is a philosophical question that has been debated throughout history. While some say it's 42, others believe it's about finding purpose, connection, and joy in our everyday experiences.",
    gradient: "from-emerald-500 to-teal-600",
    lightGradient: "from-emerald-100 to-teal-200",
    icon: "🌱",
  },
  {
    question: "How do magnets work?",
    answer:
      "Magnets work through electromagnetic fields. They have north and south poles that attract or repel each other based on their orientation. This phenomenon is due to the alignment of electrons in certain materials, creating a magnetic field.",
    gradient: "from-purple-500 to-violet-600",
    lightGradient: "from-purple-100 to-violet-200",
    icon: "🧲",
  },
]

// Shape components
const ShapeSquare = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <Square className="w-full h-full" fill={fill} />
  </div>
)

const ShapeTriangle = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <Triangle className="w-full h-full" fill={fill} />
  </div>
)

const ShapeCircle = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <Circle className="w-full h-full" fill={fill} />
  </div>
)

const ShapeHexagon = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <Hexagon className="w-full h-full" fill={fill} />
  </div>
)

const ShapeStar = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <Star className="w-full h-full" fill={fill} />
  </div>
)

// Custom SVG shapes
const ShapeDiamond = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <polygon points="12,0 24,12 12,24 0,12" fill={fill} />
    </svg>
  </div>
)

const ShapeOctagon = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <polygon points="8,0 16,0 24,8 24,16 16,24 8,24 0,16 0,8" fill={fill} />
    </svg>
  </div>
)

const ShapePlus = ({ className = "", fill = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <rect x="8" y="0" width="8" height="24" fill={fill} />
      <rect x="0" y="8" width="24" height="8" fill={fill} />
    </svg>
  </div>
)

const ShapeRing = ({ className = "", stroke = "currentColor", size = 12 }) => (
  <div className={`${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  </div>
)

export default function FAQ() {
  // Create array of shape components
  const shapes = [
    ShapeCircle,
    ShapeSquare,
    ShapeTriangle,
    ShapeHexagon,
    ShapeStar,
    ShapeDiamond,
    ShapeOctagon,
    ShapePlus,
    ShapeRing,
  ]

 


  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden text-slate-800 ">
     
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </div>

      {/* Larger decorative shapes */}
      <div className="absolute top-20 right-10 opacity-10 rotate-12 pointer-events-none z-0">
        <ShapeHexagon size={120} fill="#6366f1" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 -rotate-12 pointer-events-none z-0">
        <ShapeStar size={100} fill="#8b5cf6" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-amber-500 mr-2 h-8 w-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Frequently Asked Questions
            </h2>
            <Sparkles className="text-amber-500 ml-2 h-8 w-8" />
          </div>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Everything you need to know about our service. Cant find the answer youre looking for?
            <a href="#" className="text-blue-600 hover:text-blue-800 ml-1 underline underline-offset-2">
              Contact our support team
            </a>
            .
          </p>
        </motion.div>

        <div className="grid gap-6">
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="backdrop-blur-sm"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`item-${index}`}
                    className={`border border-slate-200 shadow-sm rounded-xl overflow-hidden ${faq.lightGradient} bg-opacity-50`}
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-lg md:text-xl font-medium hover:no-underline group">
                      <div className="flex items-center">
                        <span className="mr-3 text-2xl">{faq.icon}</span>
                        <span className="text-slate-800 group-hover:text-slate-900 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-slate-700">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-10 border-l-2 border-slate-300"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 relative">
          <div className="h-1 w-full max-w-md mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
          <div className="flex justify-center mt-4 space-x-4">
            {shapes.slice(0, 5).map((ShapeComponent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ShapeComponent size={16} fill={index % 2 === 0 ? "#4f46e5" : "#8b5cf6"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

