export interface Article {
  id: string
  title: string
  date: string
  link: string
  readTime: string
}

export const articlesData: Article[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Next.js Server Actions",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    link: "https://medium.com",
  },
  {
    id: "2",
    title: "React Performance Optimization: Patterns and Best Practices",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    link: "https://medium.com",
  },
  {
    id: "3",
    title: "TypeScript Tips for Full Stack Developers",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    link: "https://medium.com",
  },
]