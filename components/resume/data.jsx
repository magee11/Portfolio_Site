import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaInfinity,
  FaMousePointer,
  FaCubes,
  FaSearch,
  FaLayerGroup,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaPuzzlePiece,
  FaBookOpen,
  FaCode,
  FaUsers,
  FaUser,
  FaUserTie,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiMobx,
  SiReactquery,
  SiJest,
  SiTestinglibrary,
  SiWebpack,
  SiVite,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAnthropic,
  SiOpenai,
  SiGooglegemini,
  SiGithubcopilot,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const experience = [
  {
    role: "Advanced App Engineering Senior Analyst",
    company: "Accenture",
    logo: "/images/companies/accenture.png",
    duration: "May 2026 – Present",
    location: "Bengaluru, Karnataka",
    current: true,
  },
  {
    role: "Application Developer",
    company: "Divum Corporate Services Pvt. Ltd.",
    logo: "/images/companies/divum.png",
    duration: "June 2023 – April 2026",
    location: "Bengaluru, Karnataka",
  },
  {
    role: "Application Developer Intern",
    company: "Divum Corporate Services Pvt. Ltd.",
    logo: "/images/companies/divum.png",
    duration: "July 2022 – May 2023",
    location: "Bengaluru, Karnataka",
  },
];

export const educationSummary =
  "Bachelor of Engineering in Computer Science and Engineering, completed with first-class honours.";

export const education = [
  {
    degree: "B.E. – Computer Science and Engineering",
    institution: "E.G.S. Pillay Engineering College",
    duration: "2019 – 2023",
    location: "Nagapattinam, Tamil Nadu",
    badges: ["CGPA 8.3 / 10", "First Class"],
  },
];

export const educationStats = [
  { value: "B.E.", label: "Computer Science" },
  { value: "4 yrs", label: "2019 – 2023" },
  { value: "8.3", label: "CGPA out of 10" },
];

export const skillsSummary =
  "Technologies I use to build and ship production web applications, from UI to cloud.";

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaLayerGroup />,
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "SCSS", icon: <SiSass /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "MobX", icon: <SiMobx /> },
      { name: "Context API", icon: <FaReact /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Micro Frontend", icon: <FaCubes /> },
      { name: "SSR & SEO", icon: <FaSearch /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "System Design", icon: <FaLayerGroup /> },
    ],
  },
  {
    title: "Cloud and DevOps",
    icon: <FaCloud />,
    items: [
      { name: "AWS (EC2, S3, CloudFront, RDS)", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "CI/CD", icon: <FaInfinity /> },
      { name: "Git", icon: <FaGit /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "AI and Development Tools",
    icon: <FaRobot />,
    items: [
      { name: "Claude", icon: <SiAnthropic /> },
      { name: "Cursor", icon: <FaMousePointer /> },
      { name: "ChatGPT", icon: <SiOpenai /> },
      { name: "Gemini", icon: <SiGooglegemini /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "MCP & LLM Workflows", icon: <FaRobot /> },
    ],
  },
];

export const aboutSummary =
  "Senior Software Engineer from Bengaluru who enjoys turning complex requirements into fast, reliable, and well-crafted web experiences.";

export const aboutInfo = [
  { label: "Name", value: "Magesh A", icon: <FaUser /> },
  { label: "Role", value: "Senior Software Engineer", icon: <FaUserTie /> },
  { label: "Experience", value: "4 years", icon: <FaBriefcase /> },
  { label: "Location", value: "Bengaluru, Karnataka", icon: <FaMapMarkerAlt /> },
  { label: "Email", value: "mageshmarch@gmail.com", href: "mailto:mageshmarch@gmail.com", icon: <FaEnvelope /> },
  { label: "Phone", value: "+91 9345236199", href: "tel:+919345236199", icon: <FaPhoneAlt /> },
];

export const aboutBio = [
  "I'm a Senior Software Engineer with 4 years of experience building scalable web applications with React.js, Next.js, TypeScript, and Node.js — from enterprise applications at Accenture to large-scale e-commerce platforms like Amazon SmartBiz.",
  "I care deeply about performance and user experience: migrating an app to server-side rendering cut its Largest Contentful Paint from 30s to 2.5s, and SEO work lifted organic traffic by 50%.",
  "I'm continuously exploring AI-native engineering — LLM workflows, MCP, prompt engineering, AI agent orchestration, and AI-assisted development with Claude, Cursor, ChatGPT, Gemini, and GitHub Copilot.",
];

export const aboutHighlights = [
  { title: "Problem Solving", text: "Breaking down complex problems into clear, shippable solutions.", icon: <FaPuzzlePiece /> },
  { title: "Continuous Learning", text: "Always exploring new tools, from modern frameworks to AI workflows.", icon: <FaBookOpen /> },
  { title: "Clean Code", text: "Reusable components, readable code, and maintainable architecture.", icon: <FaCode /> },
  { title: "Teamwork", text: "Collaborating closely with product, design, backend, and QA.", icon: <FaUsers /> },
];
