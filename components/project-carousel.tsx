"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const projects: Project[] = [
    {
      title: "AfyaSoko website",
      description: "A modern business website for AfyaSoko, featuring their services with a clean, professional design.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React"],
      image: "/images/afyasoko.jpg",
      liveUrl: "https://afyasoko.com/"
    },
    {
      title: "Amani Assist",
      description: "A modern business website for Amani Assist, featuring their services with a clean, professional design.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React"],
      image: "/images/amani-assist.jpg",
      liveUrl: "https://amani-assist.vercel.app/"
    },
    {
      title: "Ardo Thrive Hub",
      description: "A vibrant community hub website with event management and resource sharing capabilities.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "Resend"],
      image: "/images/ardo-thrive.jpg",
      liveUrl: "https://ardothrivinghub.org/"
    },
    {
      title: "AppyDrop Delivery",
      description: "An interactive delivery platform with real-time order tracking and map integration.",
      tags: ["Next.js", "TypeScript", "Django", "Supabase"],
      image: "/images/appydrop.jpg",
      liveUrl: "https://appydrop.netlify.app"
    },
    {
      title: "Georgina Dev's Portfolio website",
      description: "A portfolio website for Georgina Dev, featuring their services with a clean, professional design.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React"],
      image: "/images/georgina-dev.jpg",
      liveUrl: "https://georgina-dev.vercel.app/"
    },
    {
      title: "BloomBody AI Tracker",
      description: "AI-powered fitness tracking application with body composition analysis.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "AI/ML"],
      image: "/images/bloombody.jpg",
      liveUrl: "https://bloombodyaitracker.vercel.app"
    },
    {
      title: "Affirm G website",
      description: "A modern website for Affirm G, where yu can track your tasks, goals, affirmations, reflections and moods with a clean, professional design.",
      tags: ["HTML", "CSS", "React", "MongoDB"],
      image: "/images/affirmg.jpg",
      liveUrl: "https://affirm-g.vercel.app/"
    },
    {
      title: "Elite Grillz",
      description: "E-commerce platform for premium dental jewelry with a modern, responsive design.",
      tags: ["React", "JavaScript", "TailwindCSS", "E-commerce"],
      image: "/images/elite-grillz.jpg",
      liveUrl: "https://elite-grillzs.vercel.app"
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 7000)
    return () => clearInterval(autoplayRef.current!)
  }, [projects.length])

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length)

  return (
    <div className="py-2 md:py-4 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              What I've Built
            </span>
            <span className="ml-2">🏗️</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

        <div className={isMobile ? "grid gap-10" : "overflow-hidden"}>
          <motion.div
            className="flex justify-center py-6 relative min-h-[580px] cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide()
              else if (info.offset.x > 100) prevSlide()
            }}
          >
            {projects.map((project, index) => {
              const isActive = index === currentIndex
              return (
                <motion.div
                  key={index}
                  className={`${
                    isMobile ? "w-full" : "absolute"
                  } px-4 max-w-md mx-auto`}
                  animate={
                    isMobile
                      ? {}
                      : {
                          x: (index - currentIndex) * 400,
                          scale: isActive ? 1 : 0.85,
                          opacity: isActive ? 1 : 0.4,
                          zIndex: isActive ? 10 : 1,
                        }
                  }
                  transition={{ duration: 0.4 }}
                  onClick={() => !isActive && !isMobile && setCurrentIndex(index)}
                  style={
                    isMobile
                      ? {}
                      : {
                          cursor: isActive ? "default" : "pointer",
                          left: "50%",
                          marginLeft: "-190px",
                        }
                  }
                >
                  <div
                    className={`relative overflow-hidden rounded-xl bg-gray-900 border-2 transition-all duration-300 hover:shadow-xl ${
                      isActive
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/20'
                        : 'border-gray-800 hover:border-purple-500/30'
                    } h-full flex flex-col`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live Site
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>

    </div>
  )
}
