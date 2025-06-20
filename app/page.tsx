"use client"

import type React from "react"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageSquare, Smartphone, Calendar, MapPin, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import SocialIcon from "@/components/social-icon";
import Lottie from "lottie-react";
import devAnimation from "../public/images/anime.json";

// Dynamically import components that might cause hydration issues
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), { ssr: false })
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Loading = dynamic(() => import("@/components/loading"), { ssr: false })
const InteractiveShapes = dynamic(() => import("@/components/interactive-shapes"), { ssr: false })
const AnimatedBoxes = dynamic(() => import("@/components/AnimatedBoxes"), { ssr: false })
const AboutMe = dynamic(() => import("@/components/about-me"), { ssr: false })
const ContactCTA = dynamic(() => import("./contact-cta"), { ssr: false })

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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            {/* Lottie Animation on the Left */}
            <div className="w-60 h-60">
              <Lottie
                animationData={devAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>

            {/* Text content */}
            <div className="text-center max-w-2xl relative">
              {/* 🚨 Callout Badge */}
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg">
                Available for Freelance 🚀
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Your All-In-One<br />
                Dev and Designer
              </h1>

              <h2 className="text-xl md:text-2xl mb-4 text-gray-300">
                🚀 Full-Stack Developer | UI/UX Designer | Tech Explorer
              </h2>

              <p className="text-md md:text-xl text-gray-300 mb-6">
                I help startups and teams bring their ideas to life through clean code,<br />
                pixel-perfect design, and lightning-fast delivery.
              </p>

              <p className="text-sm text-gray-400 mb-6">
                Trusted by teams at <span className="text-white font-semibold">Ardo Thrive Hub</span>, <span className="text-white font-semibold">AfyaSoko</span>, and more.
              </p>

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
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-white text-2xl">
            ↓
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Divider */}
      <hr className="px-8 mt-6 mx-4 md:mx-10 lg:mx-20 border-t border-purple-500/10" />

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black px-8 pb-10 mx-4 md:mx-10 lg:mx-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
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

