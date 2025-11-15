"use client"

import { useState } from "react"

interface Collaboration {
  id: string
  name: string
  logo: string
  role: string
  year: string
  description: string
}

const collaborations: Collaboration[] = [
  {
    id: "1",
    name: "Tech Company A",
    logo: "/tech-company-logo-a.jpg",
    role: "Full Stack Developer",
    year: "2023-2024",
    description: "Built scalable web applications and improved platform performance",
  },
  {
    id: "2",
    name: "Digital Agency B",
    logo: "/digital-agency-logo-b.jpg",
    role: "Frontend Developer",
    year: "2022-2023",
    description: "Developed responsive web interfaces for multiple client projects",
  },
  {
    id: "3",
    name: "Startup C",
    logo: "/startup-logo-c.jpg",
    role: "Lead Developer",
    year: "2023",
    description: "Architected and led development of core product features",
  },
  {
    id: "4",
    name: "Enterprise D",
    logo: "/enterprise-logo-d.jpg",
    role: "Backend Developer",
    year: "2022",
    description: "Optimized database queries and API performance",
  },
  {
    id: "5",
    name: "Creative Studio E",
    logo: "/creative-studio-logo-e.jpg",
    role: "Full Stack Developer",
    year: "2021-2022",
    description: "Created custom solutions for brand and design projects",
  },
  {
    id: "6",
    name: "FinTech F",
    logo: "/fintech-company-logo-f.jpg",
    role: "Senior Developer",
    year: "2024",
    description: "Implemented secure payment processing and transaction systems",
  },
]

export default function Collaborations() {
  const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null)

  return (
    <section id="collaborations" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Partners & Clients</h2>
          <p className="text-muted-foreground max-w-2xl">
            Companies and teams I've had the privilege to collaborate with
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {collaborations.map((collab) => (
            <button
              key={collab.id}
              onClick={() => setSelectedCollab(selectedCollab?.id === collab.id ? null : collab)}
              className="group relative aspect-square flex items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-accent/10 hover:border-accent transition-all duration-200 cursor-pointer"
            >
              <img
                src={collab.logo || "/placeholder.svg"}
                alt={collab.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </button>
          ))}
        </div>

        {/* Details Card */}
        {selectedCollab && (
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={selectedCollab.logo || "/placeholder.svg"}
                alt={selectedCollab.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{selectedCollab.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedCollab.year}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-accent mb-1">Role</p>
                <p className="text-sm text-foreground">{selectedCollab.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-accent mb-1">Description</p>
                <p className="text-sm text-muted-foreground">{selectedCollab.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
