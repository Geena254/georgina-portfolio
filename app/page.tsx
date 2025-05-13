"use client"

import type React from "react"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageSquare, Smartphone, Calendar, MapPin, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import SocialIcon from "@/components/social-icon";

const timelineData = [
  {
    id: 1,
    company: "Freelance",
    role: "Fullstack Web Developer",
    period: "2024 - Present",
    location: "Remote",
    type: "Full-time",
    logo: "/company-a-logo.svg",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Django", "Python"],
  },
  {
    id: 2,
    company: "M_TREAT",
    role: "Fullstack Web Developer Intern",
    period: "Jan 2025 - May 2025",
    location: "Remote",
    type: "Full-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Django", "Next.js", "Material MUI"],
  },
]

// Dynamically import components that might cause hydration issues
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), { ssr: false })
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Loading = dynamic(() => import("@/components/loading"), { ssr: false })
const InteractiveShapes = dynamic(() => import("@/components/interactive-shapes"), { ssr: false })
const AnimatedBoxes = dynamic(() => import("@/components/AnimatedBoxes"), { ssr: false })
const AboutMe = dynamic(() => import("@/components/about-me"), { ssr: false })
const ContactCTA = dynamic(() => import("@/components/contact-cta"), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Error scrolling to section:", error)
    }
  }

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Your All-In-One<br />
                Dev and Designer
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Full-Stack Developer | UI/UX Designer | Tech Explorer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => scrollToSection("about")}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                onClick={() => scrollToSection("about")}
              >
                About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Timeline Section */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            The Journey So Far
          </span>
          <span className="ml-2 text-white">🛤️</span>
        </h3>
        <div className="relative">
          {/* Vertical Line (only visible on larger screens) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.company}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />
                    </div> */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <h4 className="text-lg text-purple-400">{item.company}</h4>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{item.type}</span>
                      </div>
                    </div>
                  </div>
                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeline Point (hidden on mobile) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                {/* Timeline Connector (hidden on mobile) */}
                {index < timelineData.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                    style={{ top: "100%", height: "100px" }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text content on the left */}
            <div className="text-gray-300">
              <h3 className="mb-1">Georgina Dev.</h3>
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Georgina Kimani. All rights reserved.
              </div>
            </div>

            {/* Social links on the right */}
            <div className="flex flex-wrap justify-center gap-4">
              <SocialIcon icon={<Github />} href="https://github.com/Geena254" label="GitHub" />
              <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/georgina-kimani" label="LinkedIn" />
              <SocialIcon icon={<Instagram />} href="https://instagram.com/_k.e.e.m.a.n.e_" label="Instagram" />
              <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/georgina-kimani" label="Discord" />
              <SocialIcon
                icon={<Smartphone />}
                href="#"
                label="Mobile Apps"
                className="opacity-50 cursor-not-allowed"
                onClick={(e) => {
                  e.preventDefault()
                  console.log("Mobile icon click prevented")
                }}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

