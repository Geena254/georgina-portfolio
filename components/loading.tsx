"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const controls = useAnimation()
  
  const welcomeMessages = [
    'Loading your experience...',
    'Preparing something amazing...',
    'Almost there...'
  ]

  // Rotate through welcome messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length)
    }, 3000) // Change message every 3 seconds
    
    return () => clearInterval(messageInterval)
  }, [welcomeMessages.length])

  // Handle progress bar animation
  useEffect(() => {
    const duration = 12 // Total duration in seconds
    const interval = 50 // Update interval in milliseconds
    const totalSteps = (duration * 1000) / interval
    const step = 100 / totalSteps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({ width: `${progress}%` })
  }, [progress, controls])

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      {/* Welcome message */}
      <motion.div 
        className="text-2xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to my space
      </motion.div>
      
      <div className="w-64 relative">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello!
          </motion.h1>
          
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentMessage}
              className="text-xl text-gray-300 mt-4 h-8"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {welcomeMessages[currentMessage]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative">
          {/* Main loading bar container */}
          <div className="h-3 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              }}
              style={{
                opacity: 0.3,
              }}
            />

            {/* Progress bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 relative z-10"
              initial={{ width: 0 }}
              animate={controls}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute right-0 top-0 h-full w-1 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </div>

          {/* Percentage with animated counter */}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.span 
              className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>

          {/* Loading dots animation */}
          <motion.div 
            className="flex justify-center mt-6 space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
    </div>
  )
}
// This code creates a loading screen with a gradient progress bar and a glitch effect on the loading text.
// The progress bar fills up over a specified duration, and the background gradient moves continuously.