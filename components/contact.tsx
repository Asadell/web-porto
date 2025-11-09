"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="space-y-12">
        <motion.div 
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg">Email</h3>
            <a href="mailto:hello@example.com" className="text-accent hover:underline">
              hello@example.com
            </a>
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}