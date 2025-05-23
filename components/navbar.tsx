"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar, Mail, Twitter } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#about" },
  ]

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:njokikimani001@gmail.com",
      label: "Email Me",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/KimaniSWE",
      label: "Twitter",
    },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/4 -translate-x-1/2 z-50 w-[75%] max-w-3xl rounded-full backdrop-blur-lg bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 shadow-xl px-6 py-3"
    >
    {/* This outer div now centers everything inside it */}
    <div className="flex justify-between items-center w-full">
        <Link href="#home" className="text-2xl font-bold text-white" onClick={(e) => scrollToSection(e, "#home")}>
          GeorginaDev<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-pink-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Social Links and CTA */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label={link.label}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              {link.icon}
            </motion.a>
          ))}

          <Link
            href="https://calendar.app.google/3w5p7fGJY8DbdNda9"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black border border-white text-white px-4 py-2 rounded font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black hidden md:block"
          >
            Book a Call
          </Link>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Dropdown Navigation Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900/95 backdrop-blur-md border border-gray-800 overflow-hidden z-50"
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="py-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                          onClick={(e) => scrollToSection(e, link.href)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.05 }}
                    >
                      <Link
                        href="https://calendar.app.google/3w5p7fGJY8DbdNda9"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Call
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}