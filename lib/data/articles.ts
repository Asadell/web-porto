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
    title: "Implementing Multi-Role User Access in Laravel API with Spatie",
    date: "Oct 26, 2024",
    readTime: "6 min read",
    link: "https://medium.com/himit-pens/implementing-user-roles-in-laravel-api-with-spatie-48b059a3b18f",
  },
  // {
  //   id: "2",
  //   title: "Pentingnya Sertifikasi bagi Programmer",
  //   date: "Jan 6, 2024",
  //   readTime: "5 min read",
  //   link: "https://medium.com/@asadelsatrio/pentingnya-sertifikasi-bagi-programmer",
  // },
]