"use client"

import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 gap-8">
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <motion.p 
              className="text-sm text-accent font-medium uppercase tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm <span className="text-accent">Asadel</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Muhammad Satrio Asadel
            </motion.p>
          </div>

          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Full-Stack and Mobile Developer crafting scalable, user-centered applications with modern technologies.
            Specialized in Flutter, Laravel, Golang, Next.js, and Firebase with strong backend architecture expertise.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://docs.google.com/document/d/1fL2D8aPXTpyI49SDwdApdX3A47WYsig4XxAh_mJTa8Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              View CV
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <img
              src="/professional-developer-avatar.png"
              alt="Asadel - Full Stack Developer"
              className="w-full h-full rounded-2xl object-cover border-4 border-accent shadow-2xl hover:shadow-blue-500/30 transition"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}