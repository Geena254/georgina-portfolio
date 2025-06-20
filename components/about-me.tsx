"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, FileText, Blocks, Braces, MessageSquare, Calendar, MapPin, Building2 } from "lucide-react"
import ProjectCarousel from "./project-carousel"

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 75 },
    { name: "TypeScript", proficiency: 70 },
    { name: "HTML", proficiency: 90 },
    { name: "C", proficiency: 70 },
    { name: "TailwindCSS", proficiency: 80 },
    { name: "Python", proficiency: 60 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 90 },
    { name: "Next.js", proficiency: 80 },
    { name: "Node.js", proficiency: 80 },
    { name: "Express.js", proficiency: 65 },
    { name: "Django", proficiency: 75 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Docker", proficiency: 88 },
    { name: "Figma", proficiency: 80 },
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
    logo: "/company-a-logo.svg",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Django", "Python"],
  },
  {
    id: 2,
    company: "AFYASOKO",
    role: "CoFounder & Software Engineer",
    period: "May 2025 - Present",
    location: "Remote",
    type: "Full-time",
    logo: "/company-b-logo.svg",
    skills: ["Next.js", "FastAPI", "TailwindCSS"],
  },
  {
    id: 3,
    company: "M_TREAT",
    role: "Fullstack Web Developer Intern",
    period: "Jan 2025 - May 2025",
    location: "Remote",
    type: "Full-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Django", "Next.js", "Material MUI"],
  },

]

export default function AboutMe() {
  function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
      <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
        <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      )
    }

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

          {/* Projects Section */}
          <div className="mb-28">
            <ProjectCarousel />
          </div>

          {/* Services Section */}
          <section id="services" className="py-5 bg-black">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ServiceCard
                    icon={<Blocks className="w-10 h-10 text-purple-500" />}
                    title="Frontend Development"
                    description="Custom frontend sites from Figma designs."
                  />
                  <ServiceCard
                    icon={<Braces className="w-10 h-10 text-purple-500" />}
                    title="Full Stack Development"
                    description="End-to-end web application development with modern frameworks and best practices."
                  />
                  <ServiceCard
                    icon={<FileText className="w-10 h-10 text-pink-500" />}
                    title="API Integration"
                    description="Seamless integration of different APIs into existing applications and platforms."
                  />
                  <ServiceCard
                    icon={<Github className="w-10 h-10 text-purple-500" />}
                    title="Web3 Integration"
                    description="Seamless integration of Web3 technologies into existing applications and platforms."
                  />
                  <ServiceCard
                    icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                    title="Technical Consultation"
                    description="Expert advice on blockchain architecture, technology stack selection, and implementation strategies."
                  />
                </div>
              </motion.div>
            </div>
          </section>
          {/* Sections separator */}
          <hr className="my-20 border-t border-purple-500/10" />

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Alchemist
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Sections separator */}
      <hr className="my-20 border-t border-purple-500/10" />

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
  )}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
