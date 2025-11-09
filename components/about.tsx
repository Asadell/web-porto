"use client"

import { motion } from "framer-motion"

const competencies = ["Laravel", "Golang", "Flutter", "React.js", "Next.js", "Firebase", "TypeScript", "REST API", "IoT Integration", "AWS"]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-Stack and Mobile Developer with 1 year of experience building scalable, user-centered web and mobile applications. Proficient in Flutter, Laravel, Golang, Next.js, and Firebase, with a strong grasp of backend architecture, API integration, and modern UI design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I’m a 5th-semester Informatics Engineering student at PENS, actively participating in research projects and tech events as a speaker. I enjoy learning new technologies, solving challenging problems, and building digital solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {competencies.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}