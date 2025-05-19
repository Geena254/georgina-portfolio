"use client"

import type React from "react"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageSquare, Smartphone, Calendar, MapPin, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import SocialIcon from "@/components/social-icon";


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

