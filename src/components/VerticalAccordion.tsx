"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi"
import type { IconType } from "react-icons"

interface Item {
  id: number
  title: string
  Icon: IconType
  imgSrc: string
  description: string
}

interface PanelProps {
  open: number
  setOpen: (id: number) => void
  id: number
  Icon: IconType
  title: string
  imgSrc: string
  description: string
}

// Custom hook for window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number | null }>({
    width: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};


const items: Item[] = [
  {
    id: 1,
    title: "Learning at the 'just-right' level",
    Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "Self-learning",
    Icon: FiPlay,
    imgSrc:
      "https://images.unsplash.com/photo-1598557470924-a2979fcdf017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "The Kumon worksheets",
    Icon: FiBell,
    imgSrc:
      "https://images.unsplash.com/photo-1593462475357-67ac85ec71a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Kumon Instructors",
    Icon: FiBarChart,
    imgSrc:
      "https://images.unsplash.com/photo-1598557404270-41cf2d95b9c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
]

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
}

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
}

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }: PanelProps) => {
  const { width } = useWindowSize()
  const isOpen = open === id

  return (
    <>
      <button
        className="max-w-7xl mx-auto bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          key={`panel-${id}`}
          variants={width && width > 1024 ? panelVariants : panelVariantsSm}
          initial="closed"
          animate="open"
          exit="closed"
          style={{
            backgroundImage: `url(${imgSrc || "/placeholder.jpg"})`, // Provide a default
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-full overflow-hidden relative bg-black flex items-end"
        >
        
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function VerticalAccordion() {
  const [open, setOpen] = useState<number>(items[0].id)

  return (
    <section className="p-4 ">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => (
  <Panel key={item.id} open={open} setOpen={setOpen} {...item} />
))}
      </div>
    </section>
  )
}

