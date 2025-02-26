"use client"
import { motion } from "framer-motion"

export const HeroSvg = () => {
  return (
    <div className="w-full md:flex hidden absolute h-full p-4 justify-center gap-2 items-center">
      <div className="w-1/2 h-full flex justify-start items-end relative">
        {/* Left column shapes */}
        <motion.div
          className="h-44 w-44 rounded-lg absolute bottom-0 left-0"
          style={{
            background: "linear-gradient(135deg, #FF9D6C 0%, #BB4E75 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        />
        <motion.div
          className="h-44 w-44 rounded-full absolute bottom-0 left-48"
          style={{
            background: "linear-gradient(135deg, #6EDCC4 0%, #1AAB8B 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
        <motion.div
          className="h-20 w-20 rounded-full absolute bottom-48 left-16"
          style={{
            background: "linear-gradient(135deg, #FFD166 0%, #F0B775 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />
        <motion.div
          className="h-16 w-16 rotate-45 absolute bottom-36 left-48"
          style={{
            background: "linear-gradient(135deg, #A9C9FF 0%, #6C63FF 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1, rotate: 45 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
        />
      </div>

      <div className="w-1/2 h-full flex justify-end items-end relative">
        {/* Right column shapes */}
        <motion.div
          className="h-44 w-44 rounded-lg absolute bottom-0 right-48"
          style={{
            background: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
        <motion.div
          className="h-44 w-44 rounded-full absolute bottom-0 right-0"
          style={{
            background: "linear-gradient(135deg, #F97794 0%, #623AA2 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />
        <motion.div
          className="h-24 w-24 rounded-lg absolute bottom-48 right-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #5EFCE8 0%, #736EFE 100%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 opacity-50"
            style={{
              background: "radial-gradient(circle, transparent 30%, white 70%)",
              backgroundSize: "20px 20px",
            }}
          />
        </motion.div>
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="absolute bottom-32 right-48"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          <motion.path
            d="M30 0 L60 30 L30 60 L0 30 Z"
            fill="url(#grad1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9A8B" />
              <stop offset="100%" stopColor="#FF6A88" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute h-12 w-12 rounded-full"
        style={{
          background: "linear-gradient(135deg, #E2B0FF 0%, #9F44D3 100%)",
          top: "20%",
          left: "30%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.8,
          y: [0, -15, 0],
        }}
        transition={{
          scale: { duration: 0.8, delay: 0.9 },
          opacity: { duration: 0.8, delay: 0.9 },
          y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute h-8 w-8"
        style={{
          background: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
          top: "30%",
          right: "25%",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.8,
          y: [0, 20, 0],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 0.8, delay: 1 },
          opacity: { duration: 0.8, delay: 1 },
          y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 12, ease: "linear" },
        }}
      />
    </div>
  )
}

