"use client"

import { motion } from "framer-motion"

const competencies = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Flutter", "Firebase", "Mobile Development", "Database Design", "UI/UX"]

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
              I'm a passionate full-stack and mobile developer with expertise in building scalable web and mobile applications with beautiful user interfaces. I specialize in creating cross-platform solutions and believe in writing clean, maintainable code while staying updated with the latest technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
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