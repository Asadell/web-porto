"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/lib/data/skills"

export default function Skills() {
  return (
    <section className="bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Skills</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Tech Stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((group, groupIndex) => (
              <motion.div 
                key={group.category} 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <h3 className="font-semibold text-lg">{group.category}</h3>
                <div className="space-y-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.p 
                      key={skill} 
                      className="text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}