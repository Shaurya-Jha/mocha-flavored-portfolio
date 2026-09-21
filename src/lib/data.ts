interface WorkExperience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  keyTechnologies: string[];
  briefSummary: string;
  highlights?: string[];
  startDate: Date;
  endDate: Date | "present";
}

interface Project {
  id: number;
  title: string;
  visitUrl?: string;
  briefSummary?: string;
  description?: string;
  keyTechnologies?: string[];
}

type CertificateIssuer = "Udemy";

interface Certificate {
  id: number,
  name: string;
  certificateUrl: string;
  issuer: CertificateIssuer;
}

interface Skill {
  type: string;
  values: string[];
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "KackerSoft",
    companyUrl: "",
    keyTechnologies: [
      "React",
      "Next.js",
      "Express",
      "Django",
      "GitHub Actions",
    ],
    briefSummary:
      "Building and shipping production web applications with a focus on performance, reusable architecture, and developer workflows.",
    highlights: [
      "Shipped production features across React and Next.js applications used by enterprise clients.",
      "Improved critical API response times by 2–4× by eliminating N+1 queries with Django ORM optimizations.",
      "Built REST APIs with Express and automated CI/CD workflows using GitHub Actions.",
      "Mentored software engineering interns through onboarding, code reviews, and technical guidance.",
    ],
    startDate: new Date(2025, 0, 1), // year, month index, day
    endDate: "present",
  },
  {
    id: 2,
    role: "Django Developer Intern",
    company: "Writeroo",
    companyUrl: "https://writeroo.net/",
    keyTechnologies: [
      "Django",
      "Django ORM",
      "Django Rest Framework",
      "Docker",
    ],
    briefSummary:
      "Developed backend APIs and application features using Django and Django REST Framework.",
    highlights: [
      "Built and maintained RESTful APIs for communication between frontend and backend systems.",
      "Implemented unit and integration tests using DRF's APITestCase to improve reliability of core application features.",
      "Worked with Django ORM for database migrations, queries, and relationship management.",
    ],
    startDate: new Date(2024, 5, 30), // year, month index, day
    endDate: new Date(2024, 11, 31), // year, month index, day
  },
  {
    id: 3,
    role: "Full-Stack Developer Intern",
    company: "Trevita Infotech",
    companyUrl: "https://www.trevitainfotech.com/",
    keyTechnologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"],
    briefSummary:
      "Contributed to full-stack web development across React frontends and Node.js backend services.",
    highlights: [
      "Built RESTful APIs with Node.js and Express.js, integrating MongoDB and MySQL for data management.",
      "Developed responsive React interfaces using reusable components, React Hooks, and Context API.",
      "Integrated frontend applications with backend services using asynchronous API requests.",
    ],
    startDate: new Date(2023, 11, 1), // year, month index, day
    endDate: new Date(2024, 3, 31), // year, month index, day
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Jobemirate",
    visitUrl: "https://jobemirate.onrender.com/",
    briefSummary:
      "Jobemirate is a website made for one of the freelance client for their business needs.",
    description: "",
    keyTechnologies: [
      "React",
      "Next.js",
      "Bootstrap 5",
      "Animate.css",
      "Django",
      "Django Rest Framework",
      "Supabase",
      "Supabase S3 bucket",
    ],
  },
  {
    id: 2,
    title: "DeepCarTalk",
    visitUrl: "https://deepcartalk.com/",
    briefSummary:
      "DeepCarTalk is a discourse based forum for all the car enthusiasts out there. You want to know something about a car, review for next car you might be purchasing, or want to know information about the part your car is running on? This is a place for you.",
    description: "",
    keyTechnologies: [
      "Discourse",
      "Ember.js",
      "Ruby on Rails",
      "AWS",
      "AWS S3",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    name: 'Docker Basics Unleashed',
    certificateUrl: 'https://www.udemy.com/certificate/UC-7bf91a8a-01e7-4491-818f-6b231b9f0e7f/',
    issuer: 'Udemy',
  },
  {
    id: 2,
    name: 'Complete Node.js Bootcamp: From Basics to Advance',
    certificateUrl: 'https://www.udemy.com/certificate/UC-4a102aca-8901-4865-bde0-836c92d2de9f/',
    issuer: 'Udemy',
  },
  {
    id: 3,
    name: 'JavaScript Fundamentals to Advanced: Full-Stack Development',
    certificateUrl: 'https://www.udemy.com/certificate/UC-55e76d7b-70d5-41a4-88d8-10ec1744c6a5/',
    issuer: 'Udemy',
  },
  {
    id: 4,
    name: 'The Complete PyTest Automation Course',
    certificateUrl: 'https://www.udemy.com/certificate/UC-655635e7-ed19-4643-8b27-2bc293c94d6c/',
    issuer: 'Udemy',
  },
]

export const SKILLS: Skill[] = [
  {
    type: 'Frontend',
    values: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
  },
  {
    type: 'Backend',
    values: ['Node.js', 'Express', 'Django', 'Django REST Framework']
  },
  {
    type: 'Data',
    values: ['PostgreSQL', 'MongoDB', 'Prisma']
  },
  {
    type: 'Infrastructure',
    values: ['Git', 'Docker', 'Github Actions', 'AWS', 'Linux']
  },
  {
    type: 'Tools',
    values: ['Docker Desktop', 'Postman', 'Orbstack', 'VS Code', 'Zed']
  },
]

interface NavLinks {
  name: string;
  path: string;
}

export const NAVLINKS: NavLinks[] = [
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  {
    name: 'skills',
    path: '/skills'
  },
  {
    name: 'certifications',
    path: '/certifications'
  },
]