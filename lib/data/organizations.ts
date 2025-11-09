export interface Organization {
  id: number
  name: string
  role: string
  period: string
  type: "organization" | "committee"
  description: string
  achievements?: string[]
  logo?: string
}

export const organizationsData: Organization[] = [
  {
    id: 1,
    name: "ITDS PENS Association",
    role: "Young Staff",
    period: "Nov 2024 - Present",
    type: "organization",
    description: "Active member of ITDS (Information Technology Development Society) at Politeknik Elektronika Negeri Surabaya",
    achievements: [
      "Chief Executive of Agile Teknik Festival 2024",
      "Chief Executive of Pekan Komunitas Teknologi 2024",
    ],
    logo: "/itds-logo.png",
  },
  {
    id: 2,
    name: "E-Code HIMIT PENS",
    role: "Backend Developer",
    period: "Dec 2024 - Present",
    type: "organization",
    description: "Backend developer division in HIMIT (Himpunan Mahasiswa Teknik Informatika) student organization",
    achievements: [
      "Built backend features for internal workflows and content management",
      "Designed clean APIs and database structures for scalability",
      "Collaborated with frontend team for smooth integration",
    ],
    logo: "/himit-logo.png",
  },
  {
    id: 3,
    name: "Agile Teknik Festival 2024",
    role: "Chief Executive",
    period: "2024",
    type: "committee",
    description: "Led the technical festival event bringing together students and industry professionals",
    achievements: [
      "Successfully managed team of 50+ committee members",
      "Coordinated multiple technical workshops and competitions",
      "Achieved 500+ participants from various universities",
    ],
    logo: "/agile-teknik-logo.png",
  },
  {
    id: 4,
    name: "Pekan Komunitas Teknologi 2024",
    role: "Chief Executive",
    period: "2024",
    type: "committee",
    description: "Organized technology community week featuring talks, workshops, and networking sessions",
    achievements: [
      "Coordinated with multiple tech communities and speakers",
      "Managed event logistics and sponsorship",
      "Delivered successful multi-day technology event",
    ],
    logo: "/pkt-logo.png",
  },
]