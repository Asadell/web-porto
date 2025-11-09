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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and admin dashboard",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"],
    image: "/ecommerce-dashboard.png",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tags: ["React", "Firebase", "TypeScript", "Tailwind"],
    image: "/task-management-concept.png",
    slug: "task-management-app",
  },
  {
    id: 3,
    title: "Flutter Food Delivery App",
    description: "Cross-platform mobile app for food ordering with real-time tracking and Firebase backend",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    image: "/food-delivery-app.png",
    slug: "flutter-food-delivery",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and analytics",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    image: "/blog-interface.jpg",
    slug: "blog-platform",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with charts, metrics, and data visualization",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    image: "/analytics-dashboard.png",
    slug: "analytics-dashboard",
  },
  {
    id: 6,
    title: "Fitness Tracker Mobile App",
    description: "Flutter-based fitness tracking app with workout plans, progress tracking, and Firebase sync",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    image: "/fitness-tracker-app.png",
    slug: "fitness-tracker-flutter",
  },
  {
    id: 7,
    title: "AI Chat Assistant",
    description: "ChatGPT-like interface with conversation history and custom prompts",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    image: "/modern-chat-interface.png",
    slug: "ai-chat-assistant",
  },
  {
    id: 8,
    title: "Weather App",
    description: "Real-time weather application with forecast and location-based features",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
    image: "/weather-app-interface.png",
    slug: "weather-app",
  },
  {
    id: 9,
    title: "E-Wallet Mobile App",
    description: "Secure digital wallet app with transaction history, QR payments, and Firebase authentication",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    image: "/ewallet-app.png",
    slug: "ewallet-flutter",
  },
]