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
  image?: string
  liveUrl?: string
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const projects: Project[] = [
    {
      title: "Amani Assist Website",
      description: "A small business website for Amani Assist showcasing what they are all about.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React"],
      liveUrl: "https://amani-assist.vercel.app/",
    },
    {
      title: "Ardo Thrive Hub website",
      description: "A hub website for Ardo Thrive Hub showcasing what they are all about.",
      tags: ["Next.js", "Typescript", "TailwindCSS", "React", "Resend"],
      liveUrl: "https://ardothrivinghub.org/",
    },
    {
      title: "AppyDrop Delivery",
      description: "A drinks delivery website using a map locater to deliver products.",
      tags: ["Vite", "TypeScript", "Next.js", "TailwindCSS", "Django Rest Framework", "Supabase"],
      liveUrl: "https://appydrop.netlify.app",
    },
    {
      title:"BloomBody Tracker",
      description: "An AI-powered body composition tracker.",
      tags: ["Typescript.js", "Next.js", "Tailwind.css", "Resend"],
      liveUrl: "https://bloombodyaitracker.vercel.app",
    },
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
    <div className="py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          What I've Built
        </span>
        <span className="ml-2 text-white">🏗️</span>
      </h2>

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
                    className={`p-6 sm:p-8 rounded-lg bg-gray-900 border ${
                      isActive ? "border-purple-500" : "border-gray-800"
                    } shadow-lg h-full`}
                  >
{/*                     {project.image && (
                      <div
                        className="mb-6 w-full h-56 relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setLightboxImage(project.image!)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          unoptimized
                        />
                      </div>
                    )} */}
                    <h3 className="text-2xl font-bold mb-3 text-white text-center md:text-left">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-center md:text-left">{project.description}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && isActive && (
                      <div className="mt-4 text-center md:text-left">
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
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!lightboxImage} onClose={() => setLightboxImage(null)} className="fixed z-50 inset-0">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-black rounded-xl p-4 shadow-lg">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-2 right-2 text-white hover:text-red-400"
            >
              <X size={24} />
            </button>
            {lightboxImage && (
              <div className="w-[90vw] h-[60vh] relative">
                <Image
                  src={lightboxImage}
                  alt="Lightbox Preview"
                  fill
                  className="object-contain rounded-md"
                  unoptimized
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
