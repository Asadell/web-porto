export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  slug: string
  // Detail fields
  role: string
  duration: string
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

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Nusajar UTBK Tryout Platform",
    description: "Online UTBK tryout platform migrated from Laravel to Golang & Next.js for better performance",
    tags: ["Golang", "Next.js", "TypeScript", "Tailwind"],
    image: "/nusajar-platform.png",
    slug: "nusajar-utbk-platform",
    role: "Full Stack Web Developer",
    duration: "Oct 2024 - Mar 2025",
    challenge:
      "Migrate an existing Laravel + Inertia.js platform to modern tech stack while maintaining all features and improving performance. The challenge was to ensure zero downtime during migration and improve the overall user experience.",
    solution:
      "Engineered a complete migration to Golang backend and Next.js frontend. Created a centralized interface for managing tryout sessions, question banks, and participant tracking. Refined frontend structure and optimized data flow to ensure seamless experience across devices.",
    impact: "Successfully improved platform performance by 40%, reduced server load, and enhanced maintainability. Platform now handles thousands of concurrent users efficiently with improved response times.",
    keyFeatures: [
      "Centralized tryout session management system",
      "Dynamic question bank with multiple question types",
      "Real-time participant tracking and scoring",
      "Optimized data flow for better performance",
      "Responsive design for seamless cross-device experience",
      "Admin dashboard for content and user management",
    ],
    architecture:
      "Golang RESTful API backend with Next.js frontend using TypeScript. Implemented efficient data caching and optimized database queries for handling large-scale tryout sessions.",
    liveUrl: "https://nusajar.com",
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: null,
  },
  {
    id: 2,
    title: "D-Cows Livestock Monitoring",
    description: "IoT-based livestock monitoring system with RFID integration for real-time health tracking",
    tags: ["Golang", "Flutter", "Firebase", "MQTT", "IoT"],
    image: "/dcows-monitoring.png",
    slug: "dcows-livestock-monitoring",
    role: "Full Stack Developer",
    duration: "Mar 2025 - Jul 2025",
    challenge:
      "Develop a comprehensive livestock monitoring system that can track multiple animals simultaneously with real-time data from various sensors. Integration of RFID readers for automated cow identification was critical.",
    solution:
      "Built a scalable IoT platform using Golang backend with MQTT protocol for sensor communication. Developed Flutter mobile app for farmers to monitor livestock health and receive alerts. Integrated RFID reader for efficient and automated cow identification.",
    impact: "Enabled farmers to monitor livestock health 24/7, reducing manual checking time by 70%. Early detection of health issues improved animal welfare and reduced veterinary costs.",
    keyFeatures: [
      "Real-time sensor data processing and monitoring",
      "RFID-based automated cow identification system",
      "Health status alerts and notifications",
      "Environmental condition monitoring (temperature, humidity)",
      "Activity tracking and behavior analysis",
      "Historical data visualization and reporting",
    ],
    architecture:
      "Golang backend with MQTT broker for IoT communication. Flutter mobile app with Firebase for real-time data synchronization. Sensor data processed and stored in time-series database for analytics.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Website Sekolah Mitra Harapan",
    description: "Complete school management system with attendance, scheduling, and online examination features",
    tags: ["Laravel", "Inertia.js", "React", "MySQL", "RBAC"],
    image: "/school-website.png",
    slug: "school-mitra-harapan",
    role: "Full Stack Web Developer",
    duration: "Aug 2024 - Sep 2024",
    challenge:
      "Build a comprehensive school management system that could handle multiple user roles (admin, teachers, students, parents) with different access levels and features. Online examination system needed to be robust and secure.",
    solution:
      "Developed a full-featured school management website using Laravel backend with Inertia.js and React frontend. Designed scalable database schema and implemented secure role-based access control. Created an online exam feature with automated scoring and result tracking.",
    impact: "Streamlined school administration processes, reduced manual paperwork by 80%, and improved communication between teachers, students, and parents. Online exam system saved teachers hours of grading time.",
    keyFeatures: [
      "Multi-role access control (Admin, Teacher, Student, Parent)",
      "Real-time attendance tracking and reporting",
      "Class scheduling and timetable management",
      "Online examination system with automated scoring",
      "Grade management and report card generation",
      "Communication portal for announcements and messages",
    ],
    architecture:
      "Laravel MVC backend with Inertia.js for seamless React integration. MySQL database with optimized schema for handling school data. Role-based middleware for secure access control.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: null,
  },
  {
    id: 4,
    title: "Reading Manager App",
    description: "Smart reading assistant with AI-powered Q&A, summaries, and semantic search using Gemini API",
    tags: ["Flutter", "Gemini API", "RAG", "Firebase"],
    image: "/reading-manager.png",
    slug: "reading-manager-app",
    role: "Mobile Full Stack Developer",
    duration: "Mar 2025 - Jun 2025",
    challenge:
      "Create an intelligent reading assistant that can understand context from PDF documents and provide meaningful answers to user questions. The app needed to handle large documents efficiently and provide accurate AI-generated responses.",
    solution:
      "Built a smart reading assistant using Flutter with Gemini API integration. Implemented RAG (Retrieval-Augmented Generation) architecture for contextual Q&A. Designed features for book tracking, annotations, and semantic search to enhance reading experience.",
    impact: "Helped users comprehend complex documents 3x faster with AI-powered summaries and contextual answers. Students and researchers reported significant improvement in study efficiency.",
    keyFeatures: [
      "AI-powered contextual Q&A from PDF documents",
      "Automatic document summarization using Gemini API",
      "RAG architecture for accurate information retrieval",
      "Book tracking and reading progress management",
      "Smart annotations and highlighting system",
      "Semantic search across document library",
    ],
    architecture:
      "Flutter mobile app with Gemini API for AI features. RAG pipeline implemented for efficient document processing and retrieval. Firebase for user data and document storage.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 5,
    title: "House Price Predictor",
    description: "Mobile ML app for house price prediction using TensorFlow Lite with user-contributed training data",
    tags: ["Flutter", "TensorFlow Lite", "Firebase ML"],
    image: "/house-predictor.png",
    slug: "house-price-predictor",
    role: "Mobile Full Stack Developer",
    duration: "May 2025",
    challenge:
      "Build a mobile app that can predict house prices accurately using machine learning, while allowing users to contribute training data to improve predictions over time.",
    solution:
      "Developed a Flutter app with TensorFlow Lite integration for on-device ML inference. Implemented Firebase ML for model training and updates. Enabled user-added training data via Firebase to continuously improve prediction accuracy.",
    impact: "Provided users with instant house price estimates with 85% accuracy. User-contributed data improved model performance by 15% over three months.",
    keyFeatures: [
      "TensorFlow Lite on-device ML inference",
      "House price prediction based on multiple features",
      "User data contribution system via Firebase",
      "Model training and updates through Firebase ML",
      "Historical prediction tracking",
      "Comparison with market prices",
    ],
    architecture:
      "Flutter mobile app with TensorFlow Lite for ML inference. Firebase ML for model training and deployment. Firebase Firestore for storing user-contributed data and predictions.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Hotel Booking App",
    description: "Location-based hotel booking platform with Google Maps integration and instant reservation",
    tags: ["Flutter", "Google Maps API", "Firebase"],
    image: "/hotel-booking.png",
    slug: "hotel-booking-app",
    role: "Mobile Full Stack Developer",
    duration: "Apr 2025",
    challenge:
      "Create a user-friendly hotel booking app that shows nearby hotels based on user location and allows instant reservation with real-time availability checking.",
    solution:
      "Integrated Google Maps API to display nearby hotels based on current location. Implemented booking system with real-time room availability and instant reservation confirmation. Used Firebase for backend services and real-time data synchronization.",
    impact: "Simplified hotel search and booking process, reducing booking time by 60%. Users appreciated the location-based search and instant confirmation features.",
    keyFeatures: [
      "Google Maps integration for hotel location visualization",
      "Location-based hotel search and filtering",
      "Real-time room availability checking",
      "Instant booking and reservation system",
      "Hotel reviews and ratings",
      "Booking history and management",
    ],
    architecture:
      "Flutter mobile app with Google Maps SDK integration. Firebase backend for hotel data, bookings, and user management. Real-time database for availability synchronization.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 7,
    title: "Vorka Multi-Organization App",
    description: "Organization management app with Firebase RBAC and real-time QR code attendance system",
    tags: ["Flutter", "Firebase", "RBAC", "QR Code"],
    image: "/vorka-app.png",
    slug: "vorka-organization-app",
    role: "Mobile Full Stack Developer",
    duration: "Dec 2024",
    challenge:
      "Build a multi-organization management app with complex role-based access control where each organization can have different user roles and permissions. QR code attendance needed to be secure with time-sensitive codes.",
    solution:
      "Developed a Flutter app with Firebase-based Role-Based Access Control (RBAC) supporting multiple organizations. Implemented real-time QR code attendance system with unique, time-sensitive codes for enhanced security.",
    impact: "Enabled organizations to manage members efficiently with 90% reduction in manual attendance tracking. Security features prevented attendance fraud completely.",
    keyFeatures: [
      "Multi-organization support with isolated data",
      "Firebase RBAC for granular permission control",
      "Real-time QR code generation for attendance",
      "Time-sensitive QR codes for security",
      "Member management and role assignment",
      "Meeting and event scheduling",
      "Attendance history and reporting",
    ],
    architecture:
      "Flutter mobile app with Firebase Authentication and Firestore. Custom RBAC implementation using Firebase security rules. Cloud Functions for QR code generation and validation.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 8,
    title: "HIMIT One Gate System",
    description: "User management platform with achievement tracking and activity visualization dashboard",
    tags: ["Laravel", "MySQL", "REST API"],
    image: "/onegate-himit.png",
    slug: "himit-onegate-system",
    role: "Backend Developer",
    duration: "Jan 2025",
    challenge:
      "Create a unified system for managing HIMIT organization members with features for tracking achievements, visualizing member growth, and displaying comprehensive activity data.",
    solution:
      "Built backend features for managing users, tracking achievements, visualizing growth metrics, and displaying activity data. Designed clean APIs and database structures to ensure reliability and scalability.",
    impact: "Centralized member management system improved organizational efficiency. Achievement tracking motivated members and increased engagement by 45%.",
    keyFeatures: [
      "User management with role-based access",
      "Achievement tracking and badge system",
      "Growth visualization dashboard",
      "Activity data collection and analysis",
      "RESTful API for frontend integration",
      "Data export and reporting features",
    ],
    architecture:
      "Laravel RESTful API with MySQL database. Clean architecture with separation of concerns. Optimized queries for dashboard performance.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
  {
    id: 9,
    title: "HIMIT ITDS Website",
    description: "Association website with dynamic content management for agenda, articles, and community profiles",
    tags: ["Laravel", "MySQL", "REST API"],
    image: "/himit-website.png",
    slug: "himit-itds-website",
    role: "Backend Developer",
    duration: "Feb 2025",
    challenge:
      "Develop a flexible backend system that supports dynamic content management for various types of content including agenda, articles, galleries, and community profiles.",
    solution:
      "Developed comprehensive APIs for key features: agenda management, article publishing, gallery system, community section, and cabinet profiles. Structured models & controllers to support dynamic content and modular page rendering.",
    impact: "Streamlined content management for ITDS organization. Reduced content update time by 70% and improved website maintainability.",
    keyFeatures: [
      "Dynamic agenda and event management",
      "Article publishing system with categories",
      "Gallery management with image optimization",
      "Community profile pages",
      "Cabinet and member profiles",
      "RESTful API architecture",
      "Admin panel integration support",
    ],
    architecture:
      "Laravel MVC backend with RESTful API design. MySQL database with normalized schema. Modular controller structure for maintainability.",
    liveUrl: null,
    playStoreUrl: null,
    apkUrl: null,
    repoUrl: "https://github.com",
  },
]