"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Figma, FileText, Blocks, Braces, MessageSquare, Calendar, MapPin, Building2 } from "lucide-react"
import ProjectCarousel from "./project-carousel"
import Certificates from "./Certificates"

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "HTML" },
    { name: "C" },
    { name: "AI" },
    { name: "CSS" },
    { name: "TailwindCSS" },
    { name: "Python" },
  ],
  "Frameworks/Libraries": [
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Django" },
  ],
  Tools: [
    { name: "Git" },
    { name: "Docker" },
    { name: "Figma" },
  ],
}

const timelineData = [
  {
    id: 1,
    company: "Freelance",
    role: "Fullstack Web Developer",
    period: "2024 - Present",
    location: "Remote",
    type: "Full-time",
    logo: "/images/favicon.ico",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Django", "Python"],
  },
  {
    id: 2,
    company: "AFYASOKO",
    role: "CoFounder & Software Engineer",
    period: "May 2025 - Present",
    location: "Remote",
    type: "Full-time",
    logo: "/images/afya 4.jpg",
    skills: ["Next.js", "FastAPI", "TailwindCSS"],
  },
  {
    id: 3,
    company: "M_TREAT",
    role: "Fullstack Web Developer Intern",
    period: "Jan 2025 - May 2025",
    location: "Remote",
    type: "Full-time",
    logo: "/images/favicon.ico",
    skills: ["React", "Django", "Next.js", "Material MUI"],
  },
]
const services = [
  {
    icon: <Blocks className="w-6 h-6 text-purple-400" />,
    title: "Frontend Development",
    description: "Custom frontend sites from Figma designs."
  },
  {
    icon: <Braces className="w-6 h-6 text-pink-400" />,
    title: "Full Stack Development",
    description: "End-to-end web app development using modern frameworks."
  },
  {
    icon: <Figma className="w-6 h-6 text-pink-400" />,
    title: "UI/UX Design",
    description: "Figma designs for your app."
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    title: "API Integration",
    description: "Connecting third-party APIs seamlessly."
  },
  {
    icon: <Github className="w-6 h-6 text-pink-400" />,
    title: "Web3 Integration",
    description: "Incorporate decentralized tech into your app stack."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    title: "Technical Consultation",
    description: "Expert advice on tech architecture and implementation."
  }
]

export default function AboutMe() {
  const sectionContainer = "container mx-auto px-4";

  return (
    <section id="about" className="bg-black">
      <div className={sectionContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Coffee, Code & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/georgina-profile.jpg"
                  alt="Georgina Kimani"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert text-lg leading-relaxed text-gray-200">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  UI Designer and Full Stack Dev 💻. Building secure, scalable solutions and designs. Turning complex
                  tech into seamless experiences. ⛓⚡🔥
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Georgina Kimani!</strong>
                  </p>
                  <p className="mb-4">
                    A <strong>UI/UX Designer 🧙‍♂️</strong> and <strong>Full Stack Alchemist 💻</strong>, turning{" "}
                    <strong> coffee into code </strong>and ideas into reality
                    <strong>~zero bugs(most of the time)</strong>!
                  </p>
                  <p className="mb-4">
                    I spend my days <strong>hacking away in TryHackMe</strong>—and my nights wondering why codes i wrote
                    ain't working😅. When I'm not coding, I'm probably by the beach enjoying the calmness, deep-diving
                    into <strong>DeFi rabbit holes</strong>, contributing to <strong>open-source chaos</strong>, or
                    preaching crypto and blockchain to anyone who'll listen (or can't escape).
                  </p>
                  <p>
                    Let's <strong>connect, build, and break things</strong>—because the{" "}
                    <strong>future is decentralized, and I refuse to be left behind!</strong> ⛓⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sections separator */}
          <hr className="my-10 border-t border-purple-500/10" />

          {/* Projects Section */}
          <div>
            <ProjectCarousel />
          </div>
          {/* Sections separator */}
          <hr className="my-10 border-t border-purple-500/10" />

          {/* Services Section */}
          <section id="services" className="py-14 bg-black">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    My Expertise
                  </span>
                  <span className="ml-2 text-white">🛠️</span>
                </h2>
          
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg group transition-transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4">
                        {service.icon}
                      </div>
                      {/* Title & Description */}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      {/* Overlay Phone Mockup */}
                      <img
                        src="/images/phone-mockup.png"
                        alt="Mockup"
                        className="absolute right-[-20px] bottom-[-30px] w-24 opacity-80 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          {/* Sections separator */}
          <hr className="my-10 border-t border-purple-500/10" />

          {/* Skills Section */}
          <div className="py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Code Alchemist
                </span>
                <span className="ml-2">⚔️</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.values(skillsData).flat().map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center p-4 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3">
                      <span className="text-2xl">
                        {(() => {
                          const iconMap = {
                            'JavaScript': 'JS',
                            'TypeScript': 'TS',
                            'React': '⚛️',
                            'Next.js': '▫️',
                            'Node.js': '🟢',
                            'Express.js': '🚀',
                            'Django': '🐍',
                            'Git': '🔀',
                            'Docker': '🐳',
                            'Figma': '🎨',
                            'HTML': '📝',
                            'CSS': '🎨',
                            'TailwindCSS': '🌊',
                            'Python': '🐍',
                            'C': 'C',
                            'AI': '🤖'
                          };
                          return iconMap[skill.name] || skill.name.charAt(0);
                        })()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Sections separator */}
      <hr className="my-10 border-t border-purple-500/10" />

      {/* Certificates Section */}
      <Certificates />
      {/* Sections separator */}
      <hr className="my-10 border-t border-purple-500/10" />

      {/* Timeline Section */}
      <div className="py-5 bg-black">
        <div className={sectionContainer}>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              The Journey So Far
            </span>
            <span className="ml-2 text-white">🛤️</span>
          </h3>
          <div className="relative space-y-12">
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
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                        <img
                          src={item.logo || "/placeholder.svg"}
                          alt={item.company}
                          width={56}
                          height={56}
                          className="rounded-full"
                        />
                      </div>
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
      </div>
    </section>
  )
}
