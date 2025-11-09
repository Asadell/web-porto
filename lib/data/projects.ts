export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  slug: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Nusajar UTBK Tryout Platform",
    description: "Online UTBK tryout platform migrated from Laravel to Golang & Next.js for better performance",
    tags: ["Golang", "Next.js", "TypeScript", "Tailwind"],
    image: "/nusajar-platform.png",
    slug: "nusajar-utbk-platform",
  },
  {
    id: 2,
    title: "D-Cows Livestock Monitoring",
    description: "IoT-based livestock monitoring system with RFID integration for real-time health tracking",
    tags: ["Golang", "Flutter", "Firebase", "MQTT", "IoT"],
    image: "/dcows-monitoring.png",
    slug: "dcows-livestock-monitoring",
  },
  {
    id: 3,
    title: "Website Sekolah Mitra Harapan",
    description: "Complete school management system with attendance, scheduling, and online examination features",
    tags: ["Laravel", "Inertia.js", "React", "MySQL", "RBAC"],
    image: "/school-website.png",
    slug: "school-mitra-harapan",
  },
  {
    id: 4,
    title: "Reading Manager App",
    description: "Smart reading assistant with AI-powered Q&A, summaries, and semantic search using Gemini API",
    tags: ["Flutter", "Gemini API", "RAG", "Firebase"],
    image: "/reading-manager.png",
    slug: "reading-manager-app",
  },
  {
    id: 5,
    title: "House Price Predictor",
    description: "Mobile ML app for house price prediction using TensorFlow Lite with user-contributed training data",
    tags: ["Flutter", "TensorFlow Lite", "Firebase ML"],
    image: "/house-predictor.png",
    slug: "house-price-predictor",
  },
  {
    id: 6,
    title: "Hotel Booking App",
    description: "Location-based hotel booking platform with Google Maps integration and instant reservation",
    tags: ["Flutter", "Google Maps API", "Firebase"],
    image: "/hotel-booking.png",
    slug: "hotel-booking-app",
  },
  {
    id: 7,
    title: "Vorka Multi-Organization App",
    description: "Organization management app with Firebase RBAC and real-time QR code attendance system",
    tags: ["Flutter", "Firebase", "RBAC", "QR Code"],
    image: "/vorka-app.png",
    slug: "vorka-organization-app",
  },
  {
    id: 8,
    title: "HIMIT One Gate System",
    description: "User management platform with achievement tracking and activity visualization dashboard",
    tags: ["Laravel", "MySQL", "REST API"],
    image: "/onegate-himit.png",
    slug: "himit-onegate-system",
  },
  {
    id: 9,
    title: "HIMIT ITDS Website",
    description: "Association website with dynamic content management for agenda, articles, and community profiles",
    tags: ["Laravel", "MySQL", "REST API"],
    image: "/himit-website.png",
    slug: "himit-itds-website",
  },
]