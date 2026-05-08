import { Code2, Database, Globe, Layout, Server, Terminal, FileText, University, Sparkles } from "lucide-react";

export const personalInfo = {
  name: "Sreeraj Binu Sukumaran",
  titles: ["Full Stack Developer", "MCA Student", "React & Django Developer"],
  tagline: "Building scalable, modern SaaS applications and exploring the cosmos of web development.",
  intro: "Student pursuing MCA from College of Engineering Thalassery under Cochin University of Science and Technology. I have hands-on experience with Full Stack Development using React, Typescript, Nodejs backend, PostgreSQL, and Django backend. I also hold good programming skills in JAVA and C from academics. With my strong academic background (91.67%), I am looking for an opening in the IT industry to apply my skills and knowledge to real-world problems and find solutions for personal and organizational growth.",
  email: "sreerajofl@gmail.com",
  phone: "+91 9961889760",
  location: "Kerala, India",
  github: "https://github.com/Sreeraj-SR",
  linkedin: "https://linkedin.com/in/213sreeraj-binu-sukumaran",
};

export const aboutStats = [
  { label: "MCA Aggregate", value: "91.67%", qualification: "Post Graduation" },
  { label: "Role", value: "Full Stack Intern" },
  { label: "BCA Score", value: "85%", qualification: "Under Graduation" },
  { label: "Tech Stack", value: "Modern Web" },
];

export const skills = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Python","JavaScript (ES6+)", "Java", "C", "C++"],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React.js","TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    items: ["Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "MySQL", "Supabase", "Prisma ORM"],
  },
  {
    category: "APIs & Auth",
    icon: <Globe className="w-5 h-5" />,
    items: ["RESTful APIs", "JWT", "OAuth 2.0", "RBAC"],
  },
  {
    category: "DevOps & Tools",
    icon: <Code2 className="w-5 h-5" />,
    items: ["GitHub", "Linux", "Postman", "API Testing", "Agile", "MVC Architecture"],
  },
  {
    category: "System Design & Documentation",
    icon: <FileText className="w-5 h-5" />,
    items: ["BRD (Business Requirements)", "SRS (Software Requirements)", "UML Diagrams", "Data Flow Diagrams", "ER Diagrams"],
  },
  {
    category: "Prompt Engineering & AI",
    icon: <Sparkles className="w-5 h-5" />,
    items: ["Advanced Prompting", "AI Code Generation", "Technical Documentation", "Image Generation"],
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Inker Robotics",
    period: "Feb 2026 – Present",
    location: "Thrissur,Kerala",
    responsibilities: [
      "Develop and maintain scalable SaaS web applications using React, Typescript and Node.js for production-level use cases, working within an Agile development workflow.",
      "Design and implement RESTful APIs following REST best practices, ensuring efficient and secure client-server communication.",
      "Developed the project from scratch 100% solely along with documentation and diagrams."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "STUARTS",
    description: "Student Freelance Collaboration Platform. Architected and built a full-stack platform enabling student freelancers to manage portfolios, list services, and handle collaboration requests.",
    tech: ["React", "Django", "REST Framework", "PostgreSQL", "JWT"],
    github: "https://github.com/Sreeraj-SR/Stuarts_Project",
    live: "#",
    features: [
      "Implemented a secure REST API layer using Django REST Framework with JWT-based authentication, token refresh, and role-based access control.",
      "Designed PostgreSQL database schema supporting user profiles, project listings, request management, and collaboration workflows.",
      "Performed API testing using Postman."
    ]
  },
  {
    id: 2,
    title: "EPISTEME",
    description: "Tech News & Community Platform. Built a full-stack tech news platform with personalised content delivery, user profiles, and a follow system.",
    tech: ["Django", "HTML", "Tailwind CSS", "SQLite"],
    github: "https://github.com/Sreeraj-SR/episteme",
    live: "#",
    features: [
      "Implemented complete authentication registration, login, and profile management with secure session handling and CSRF protection.",
      "Designed a category-based news listing and follow system, enabling users to curate personalised feeds.",
      "Applied responsive UI design using Tailwind CSS along with custom CSS, ensuring accessibility across desktop and mobile screens."
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering, Thalassery ",
    university : "Cochin University of Science and Technology",
    score: "91.67%",
    period: "Pursuing"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Mary's College, Sulthan Bathery ",
    university:"University of Calicut",
    score: "85%",
    period: "2020 – 2023"
  }
];

export const certifications = [
  "Ethical Hacking — NPTEL IIT",
  "Data Science with Django — Simplilearn",
  "Complete Web Development Bootcamp — Udemy",
  "Python Programming — IIT Bombay (NPTEL)",
  "EFSET English Certificate — C2 Proficient"
];
