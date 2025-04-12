"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Details - Left Side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Get In Touch
                </span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <a
                      href="mailto:njokikimani001@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      njokikimani001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <a href="tel:+254712345678" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +254 796 676 253
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action - Right Side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to bring your ideas to life?</h3>
              <p className="text-gray-300 mb-8">
                Let's collaborate on your next project. Whether you need a website, application, or digital solution,
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 h-auto text-lg">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=njokikimani001@gmail.com&su=Project%20Inquiry:%20Let's%20Work%20Together&body=Hi%20Georgina,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20some%20details:%0A%0A-%20Project%20type:%20%0A-%20Timeline:%20%0A-%20Budget%20range:%20%0A-%20Brief%20description:%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards,"
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
                  className="border-2 border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 h-auto text-lg"
                >
                  <a href="https://calendar.app.google/3w5p7fGJY8DbdNda9" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
