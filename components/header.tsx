"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Asadel
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </Link>
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
            Projects
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#about" className="block text-sm hover:text-accent transition">
              About
            </Link>
            <Link href="#projects" className="block text-sm hover:text-accent transition">
              Projects
            </Link>
            <Link href="#contact" className="block text-sm hover:text-accent transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
