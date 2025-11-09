export interface ProjectDetail {
  slug: string
  title: string
  description: string
  image: string
  role: string
  duration: string
  tags: string[]
  challenge: string
  solution: string
  impact: string
  keyFeatures: string[]
  architecture: string
  liveUrl: string | null
  playStoreUrl: string | null
  apkUrl: string | null
  repoUrl: string | null
}

export const projectDetails: ProjectDetail[] = [
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
    image: "/task-management-concept.png",
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
    slug: "flutter-food-delivery",
    title: "Flutter Food Delivery App",
    description: "Cross-platform mobile app for food ordering with real-time tracking and Firebase backend",
    image: "/food-delivery-app.png",
    role: "Mobile Developer",
    duration: "4 months",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    challenge: "Create a seamless food ordering experience with real-time order tracking for both customers and restaurants.",
    solution:
      "Built cross-platform mobile app using Flutter with Firebase for authentication, real-time database, and push notifications. Implemented Google Maps integration for delivery tracking.",
    impact: "Launched successfully with 10k+ downloads in first month, 4.7-star rating, and 85% user retention rate.",
    keyFeatures: [
      "Real-time order tracking with live map updates",
      "Restaurant search with filters and ratings",
      "Multiple payment methods integration (credit card, e-wallet, COD)",
      "Push notifications for order status updates",
      "Rating and review system for restaurants and drivers",
      "Order history and favorite restaurants",
    ],
    architecture:
      "Flutter mobile app with Firebase Authentication, Firestore for data storage, Cloud Functions for backend logic, and Firebase Cloud Messaging for notifications.",
    liveUrl: null,
    playStoreUrl: "https://play.google.com",
    apkUrl: "https://drive.google.com/drive/folders/example",
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
    image: "/analytics-dashboard.png",
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
    slug: "fitness-tracker-flutter",
    title: "Fitness Tracker Mobile App",
    description: "Flutter-based fitness tracking app with workout plans, progress tracking, and Firebase sync",
    image: "/fitness-tracker-app.png",
    role: "Mobile Developer",
    duration: "3 months",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    challenge: "Build a comprehensive fitness tracking app that works offline and syncs data across multiple devices.",
    solution:
      "Developed Flutter app with local SQLite database for offline support and Firebase sync for cloud backup. Integrated health APIs for step counting and calorie tracking.",
    impact: "Helped 5k+ users achieve their fitness goals with 90% daily active user rate and 4.8-star rating.",
    keyFeatures: [
      "Workout plan creation and customization",
      "Progress tracking with charts and statistics",
      "Exercise library with video demonstrations",
      "Calorie and nutrition tracking",
      "Step counter and activity monitoring",
      "Social features to share progress with friends",
    ],
    architecture:
      "Flutter mobile app with SQLite for local storage, Firebase Firestore for cloud sync, and platform-specific health APIs integration.",
    liveUrl: null,
    playStoreUrl: "https://play.google.com",
    apkUrl: "https://drive.google.com/drive/folders/example",
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
  {
    slug: "ewallet-flutter",
    title: "E-Wallet Mobile App",
    description: "Secure digital wallet app with transaction history, QR payments, and Firebase authentication",
    image: "/ewallet-app.png",
    role: "Mobile Developer",
    duration: "5 months",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    challenge: "Create a secure and user-friendly digital wallet with multiple payment methods and robust security features.",
    solution:
      "Built Flutter app with Firebase Authentication for secure login, implemented QR code scanning for payments, and used Firebase Cloud Functions for transaction processing with encryption.",
    impact: "Successfully processed 50k+ transactions totaling $2M+ with 99.9% transaction success rate and zero security breaches.",
    keyFeatures: [
      "Secure authentication with biometric login",
      "QR code payment and scanning functionality",
      "Top-up via bank transfer and credit card",
      "Transaction history with search and filters",
      "Bill payment integration (electricity, water, phone)",
      "P2P money transfer with contact list",
      "Cashback and loyalty rewards system",
    ],
    architecture:
      "Flutter mobile app with Firebase Authentication, Firestore for data storage, Cloud Functions for secure transaction processing, and encryption for sensitive data.",
    liveUrl: null,
    playStoreUrl: "https://play.google.com",
    apkUrl: "https://drive.google.com/drive/folders/example",
    repoUrl: "https://github.com",
  },
]