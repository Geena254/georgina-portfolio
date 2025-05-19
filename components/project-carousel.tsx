"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  liveUrl?: string
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      title: "Ardo Thrive Hub website",
      description: "A hub website for Ardo Thrive Hub showcasing what they are all about.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React"],
      liveUrl: "https://ardothrivinghub.vercel.app/",
    },
    {
      title: "BarRush Delivery",
      description: "A drinks delivery website using a map locater to deliver products.",
      tags: ["Vite", "TypeScript", "React", "TailwindCSS", "Shadecn-UI", "Django Rest Framework"],
      liveUrl: "https://barrush.co.ke",
    },
    {
      title: "DJ Portfolio Website",
      description: "A portfolio website for a DJ showcasing music and events.",
      tags: ["Next.js", "TailwindCSS", "React"],
      liveUrl: "https://djshangatatu.vercel.app/",
    },
    {
      title: "M-TREAT Website",
      description:
        "A platform that links patients to doctors, hospitals, pharamacies for fast access to medical care.",
      tags: ["React.js", "Next.js", "Django RestFramework"],
      liveUrl: "https://m-treat.com",
    },
    {
      title: "Elite Dental Studio Website",
      description: "A business website for Elite Grillz.",
      tags: ["React", "JavaScript", "CSS", "HTML5"],
      liveUrl: "https://elite-grillzs.vercel.app/",
    },
    {
      title:"BloomBody Tracker",
      description: "An AI-powered body composition tracker landing page",
      tags: ["Typescript.js", "Tailwind.css"],
      liveUrl: "https://bloombodyaitracker.vercel.app",
    },
    {
      title: "Sassify Landing Page",
      description: "Landing page for a startup",
      tags: ["Next.js"],
      liveUrl: "https://sassifys.vercel.app",
    },
    {
      title: "Stylazar Blog Website",
      description:
        "Fullstack blogging platform with permanent storage on databases, and CRUD capabilities.",
      tags: ["React.js", "FastAPI", "Redis", "PostgreSQL", "MongoDB"],
      liveUrl: "https://stylazar.vercel.app",
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog and payment processing.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Postgresql"],
      liveUrl: "https://lagenti.verecel.app/",
    },
    {
      title: "School Management System",
      description: "Collaborative task management school system with real-time updates.",
      tags: ["Next.js", "React", "MongoDB", "Postgresql", "TailwindCSS"],
      liveUrl: "https://school.verecel.app/",
    },
  ]

  // Handle next and previous
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  // Calculate card positions and states
  const getCardProps = (index: number) => {
    // Calculate distance from current index (accounting for wrapping)
    const distance = Math.min(
      Math.abs(index - currentIndex),
      Math.abs(index - currentIndex - projects.length),
      Math.abs(index - currentIndex + projects.length),
    )

    // Determine if this card is active, adjacent, or further away
    const isActive = index === currentIndex
    const isAdjacent = distance === 1

    // Increased spacing between cards to accommodate larger card size
    const cardSpacing = 400

    return {
      isActive,
      isAdjacent,
      distance,
      x: (index - currentIndex) * cardSpacing,
      scale: isActive ? 1 : isAdjacent ? 0.85 : 0.7,
      opacity: isActive ? 1 : isAdjacent ? 0.6 : 0.3,
      zIndex: isActive ? 10 : isAdjacent ? 5 : 1,
    }
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          What I've Built
        </span>
        <span className="ml-2 text-white">🏗️</span>
      </h2>

      <div className="max-w-7xl mx-auto px-12 relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
        <div className="overflow-hidden" ref={carouselRef}>
          <div className="flex justify-center py-4">
            <div className="relative flex items-center justify-center h-[580px] w-full">
              {projects.map((project, index) => {
                const { isActive, isAdjacent, x, scale, opacity, zIndex } = getCardProps(index)

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[380px] px-4"
                    initial={false}
                    animate={{
                      x,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    onClick={() => {
                      if (!isActive && (isAdjacent || Math.abs(x) < 500)) {
                        setCurrentIndex(index)
                      }
                    }}
                    style={{
                      cursor: isActive ? "default" : "pointer",
                      left: "50%",
                      marginLeft: "-190px", // Half of the card width to center it
                    }}
                  >
                    <div
                      className={`p-8 rounded-lg bg-gray-900 border ${
                        isActive ? "border-purple-500" : "border-gray-800"
                      } transition-all duration-300 h-full shadow-lg`}
                    >
                      {project.image && (
                        <div className="mb-6 w-full h-56 relative rounded-lg overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            unoptimized={true}
                          />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-4 text-white text-center md:text-left">{project.title}</h3>
                      <p className="text-gray-400 mb-6 text-center md:text-left text-base">{project.description}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && isActive && (
                        <div className="mt-6 text-center md:text-left">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                          >
                            View Live Site
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
