"use client"

import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-accent font-medium uppercase tracking-wide">Welcome</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Hi, I'm <span className="text-accent">Asadel</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">Muhammad Satrio Asadel</p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Full Stack Developer crafting beautiful, performant digital experiences with modern web technologies.
            Specialized in React, Next.js, TypeScript, and backend development.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <img
              src="/professional-developer-avatar.png"
              alt="Asadel - Full Stack Developer"
              className="w-full h-full rounded-2xl object-cover border-4 border-accent shadow-2xl hover:shadow-blue-500/30 transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
