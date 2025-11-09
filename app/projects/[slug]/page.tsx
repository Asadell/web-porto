import { notFound } from "next/navigation"
import Link from "next/link"
import { Globe, Play, Download, Github, ChevronLeft, Check } from "lucide-react"

const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and admin dashboard",
    image: "/ecommerce-dashboard.png",
    role: "Full Stack Developer",
    duration: "3 months",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"],
    challenge:
      "Build a scalable e-commerce platform that could handle thousands of concurrent users with real-time inventory management.",
    solution:
      "Implemented a microservices architecture with Next.js for the frontend, Node.js for the backend, and Firebase for real-time database synchronization.",
    impact: "Reduced page load time by 45% and improved checkout conversion rate by 28%.",
    keyFeatures: [
      "Real-time inventory management across multiple warehouses",
      "Integrated payment processing with Stripe and PayPal",
      "Admin dashboard with analytics and order management",
      "Mobile-optimized shopping experience",
      "Product recommendation engine using ML",
    ],
    architecture:
      "React frontend communicates with Node.js backend via REST API, with Firebase handling real-time updates and PostgreSQL managing transactional data.",
    liveUrl: "https://example.com",
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    image: "/task-management-interface.png",
    role: "Lead Developer",
    duration: "2 months",
    tags: ["React", "Firebase", "TypeScript", "Tailwind"],
    challenge: "Create a real-time collaboration platform where multiple users can work on tasks simultaneously.",
    solution:
      "Used Firebase Realtime Database for instant synchronization and implemented optimistic updates for better UX.",
    impact: "Enabled teams to collaborate 3x faster with reduced communication overhead.",
    keyFeatures: [
      "Real-time task updates across all team members",
      "Kanban board view with drag-and-drop functionality",
      "Team member invitations and role-based access control",
      "Activity history and audit logs",
      "Mobile app integration",
    ],
    architecture: "React frontend integrated with Firebase for authentication, real-time database, and hosting.",
    liveUrl: "https://example.com",
    playStoreUrl: "https://play.google.com",
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and analytics",
    image: "/blog-interface.jpg",
    role: "Full Stack Developer",
    duration: "2 months",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    challenge: "Build a performant blogging platform that supports SEO and real-time analytics.",
    solution:
      "Leveraged Next.js static generation for SEO, implemented ISR for dynamic content, and used PostgreSQL for robust data management.",
    impact: "Achieved 95+ Lighthouse score and served 100k+ monthly users with zero downtime.",
    keyFeatures: [
      "Markdown editor with live preview",
      "SEO optimization with meta tags and sitemap generation",
      "Comment system with spam detection",
      "Real-time analytics dashboard",
      "CDN integration for fast content delivery",
    ],
    architecture:
      "Next.js static site generation with server-side rendering for dynamic pages, PostgreSQL database, and Vercel hosting.",
    liveUrl: "https://example.com",
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with charts, metrics, and data visualization",
    image: "/analytics-dashboard-charts.png",
    role: "Frontend Developer",
    duration: "1.5 months",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    challenge: "Display real-time analytics data with smooth animations and intuitive visualizations.",
    solution:
      "Implemented WebSocket connections for real-time updates and used React Query for efficient data fetching and caching.",
    impact: "Reduced data visualization latency by 60%, enabling real-time insights for 500+ users.",
    keyFeatures: [
      "Real-time metrics and KPI tracking",
      "Interactive charts with drill-down capabilities",
      "Custom dashboard layouts and widgets",
      "Export reports to PDF and CSV",
      "Performance monitoring and alerts",
    ],
    architecture:
      "React frontend with WebSocket connection to Node.js backend for real-time updates, Chart.js for visualizations.",
    liveUrl: "https://example.com",
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description: "ChatGPT-like interface with conversation history and custom prompts",
    image: "/modern-chat-interface.png",
    role: "Full Stack Developer",
    duration: "2.5 months",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    challenge: "Create a conversational AI interface with long conversation history and custom system prompts.",
    solution:
      "Integrated OpenAI API with streaming responses, implemented vector search for context retrieval, and used MongoDB for conversation history.",
    impact: "Successfully handled 50k+ conversations with 99.5% uptime and average response time of 1.2s.",
    keyFeatures: [
      "Streaming text responses for real-time feedback",
      "Custom system prompts and model selection",
      "Conversation history with search functionality",
      "Token usage tracking and cost optimization",
      "Export conversations as PDF or JSON",
    ],
    architecture:
      "React frontend with server-side streaming via Node.js, OpenAI API integration, and MongoDB for persistence.",
    liveUrl: "https://example.com",
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description: "Real-time weather application with forecast and location-based features",
    image: "/weather-app-interface.png",
    role: "Frontend Developer",
    duration: "1 month",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
    challenge: "Build a responsive weather app with accurate forecasts and smooth location-based features.",
    solution:
      "Used Geolocation API for user location, integrated with weather API, and implemented progressive enhancement for offline support.",
    impact: "Reached 25k downloads on app stores with 4.8-star rating and 95% user retention.",
    keyFeatures: [
      "Real-time weather updates from multiple sources",
      "7-day forecast with hourly breakdown",
      "Location-based weather alerts",
      "Favorite locations and saved preferences",
      "Offline mode with cached data",
    ],
    architecture:
      "React mobile app with Geolocation API integration, external weather API data source, and service worker for offline support.",
    liveUrl: "https://example.com",
    playStoreUrl: "https://play.google.com",
    apkUrl: "https://drive.google.com/drive/folders/example",
    repoUrl: "https://github.com",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const links = [
    ...(project.liveUrl && project.liveUrl !== "#"
      ? [{ label: "View Live Demo", url: project.liveUrl, icon: Globe }]
      : []),
    ...(project.playStoreUrl && project.playStoreUrl !== "#"
      ? [{ label: "Get on Play Store", url: project.playStoreUrl, icon: Play }]
      : []),
    ...(project.apkUrl && project.apkUrl !== "#"
      ? [{ label: "Download APK", url: project.apkUrl, icon: Download }]
      : []),
    ...(project.repoUrl && project.repoUrl !== "#"
      ? [{ label: "View Code on GitHub", url: project.repoUrl, icon: Github }]
      : []),
  ]

  return (
    <main className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 cursor-pointer transition"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full rounded-lg" />

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Role</h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Duration</h3>
              <p>{project.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary rounded cursor-pointer hover:bg-accent hover:text-accent-foreground transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent p-6 rounded">
            <h2 className="text-2xl font-bold mb-3">Impact & Results</h2>
            <p className="text-foreground leading-relaxed">{project.impact}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold">Architecture Overview</h2>
            <p className="text-foreground leading-relaxed">{project.architecture}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            {links.length > 0 ? (
              links.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))
            ) : (
              <p className="text-muted-foreground">Project links coming soon.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
