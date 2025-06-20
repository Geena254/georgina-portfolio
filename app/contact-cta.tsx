"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white rounded-t-[60px] px-8 pt-20 mt-4 mx-4 md:mx-10 lg:mx-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6 text-sm text-gray-200">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:njokikimani001@gmail.com" className="hover:text-purple-300">
                    njokikimani001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+254796676253" className="hover:text-purple-300">
                    +254 796 676 253
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h3>
            <p className="text-gray-300 mb-8">
              Let’s collaborate on your next project. Whether it’s a website or app, I’m here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 transition-all">
                <a
                  href="mailto:njokikimani001@gmail.com?subject=Project%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 transition-all"
              >
                <a
                  href="https://calendar.app.google/3w5p7fGJY8DbdNda9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
