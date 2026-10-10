"use client"
import { useState } from "react";
import { FaAws, FaShoppingCart } from 'react-icons/fa';
import { BiSolidBowlHot } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiBurgerking, SiUnilever } from "react-icons/si";
import { motion } from "framer-motion";
import { RiStockFill } from "react-icons/ri";
import { PiCoffeeFill } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Unilever",
    client: "Unilever (via Accenture)",
    description:
      "Building enterprise frontend features at Accenture using React JS, TypeScript, JavaScript, HTML5, CSS3, and REST APIs, with 20+ reusable components and 10+ custom hooks.",
    stack: ["React JS", "TypeScript", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    points: [
      "Developing frontend features for enterprise applications using React JS and TypeScript.",
      "Engineered 20+ reusable React components and 10+ custom hooks, reducing code duplication and improving maintainability.",
      "Integrating REST APIs to deliver production-ready features.",
      "Partnering with product owners, designers, backend engineers, and QA across 10+ Agile sprints.",
    ],
    href: "",
    icon: <SiUnilever />,
    category: "Official",
    current: true,
  },
  {
    title: "Amazon's Smartbiz",
    client: "Amazon (via Divum)",
    description:
      "Developed using React JS, Storybook, Amazon Framework for UI, React Query, SCSS, MobX, and Micro Frontend architecture with Amazon Core Services.",
    stack: ["React JS", "Storybook", "React Query", "MobX", "SCSS", "Micro Frontend", "SSR", "AWS"],
    points: [
      "Delivered end-to-end fullstack features for a large-scale e-commerce platform serving thousands of sellers.",
      "Migrated a client-side rendered application to Server-Side Rendering (SSR), reducing LCP from 30s to 2.5s.",
      "Built UI with the Amazon UI framework and Storybook on a Micro Frontend architecture.",
      "Managed server state with React Query and client state with MobX, integrated with Amazon Core Services.",
    ],
    href: "https://smartbiz.amazon.in/",
    icon: <FaAws />,
    category: "Official",
  },
  {
    title: "Biryani by Kilo",
    client: "Biryani By Kilo (via Divum)",
    description:
      "Created with React JS, SCSS, Redux, AWS Services, SEO optimization, Mappls Maps, and Razorpay Payment Integration.",
    stack: ["React JS", "Node JS", "Redux", "SCSS", "AWS", "Mappls APIs", "Razorpay", "SEO"],
    points: [
      "Implemented production-grade features including Wallets, Offers, Search, Orders, and Maps.",
      "Integrated Razorpay payments and Mappls Maps APIs.",
      "Boosted SEO score by 80%, resulting in a 50% increase in organic traffic.",
      "Optimized application performance across the ordering flow.",
    ],
    href: "https://biryanibykilo.com/",
    icon: <BiSolidBowlHot />,
    category: "Official",
  },
  {
    title: "Burger King",
    client: "Burger King India (via Divum)",
    description:
      "Developed using the same stack as BBK: React JS, SCSS, Redux, AWS Services, SEO, Mappls Maps, and Razorpay Payment Integration.",
    stack: ["React JS", "Redux", "SCSS", "AWS", "Mappls APIs", "Razorpay", "SEO"],
    points: [
      "Built features on the same platform stack as Biryani By Kilo.",
      "Integrated Mappls Maps and Razorpay payment flows.",
      "Applied SEO optimizations and AWS services for a fast, discoverable storefront.",
    ],
    href: "https://www.burgerking.in/",
    icon: <SiBurgerking />,
    category: "Official",
  },
  {
    title: "Aditya Birla E-commerce Site",
    client: "Aditya Birla (via Divum)",
    description:
      "Built with WordPress, Node.js, React JS, PHP Middleware, MySQL, and MongoDB.",
    stack: ["React JS", "Node JS", "WordPress", "PHP", "MySQL", "MongoDB", "SCSS"],
    points: [
      "Crafted responsive, production-ready UI components using React JS, JavaScript, HTML5, CSS3, and SCSS.",
      "Optimized Node.js middleware to improve API performance, reliability, and backend integration.",
      "Worked across WordPress, PHP middleware, MySQL, and MongoDB.",
    ],
    href: "",
    icon: <FaShoppingCart />,
    category: "Official",
  },
  {
    title: "Project Management Tool",
    client: "Internal project",
    description:
      "A tool developed using HTML, CSS, JS, React JS, Python Flask, MySQL, and AWS Services.",
    stack: ["React JS", "JavaScript", "HTML", "CSS", "Python Flask", "MySQL", "AWS"],
    points: [
      "Built the frontend with React JS, HTML, CSS, and JavaScript.",
      "Developed backend APIs with Python Flask and MySQL.",
      "Deployed using AWS services.",
    ],
    href: "",
    icon: <TbBrandGoogleAnalytics />,
    category: "Official",
  },
  {
    title: "Food Ordering App",
    client: "Personal project",
    description:
      "Developed a responsive food ordering application with features like dark themes, search functionality, profile management, and an optimized SEO structure.",
    stack: ["React JS", "CSS", "SEO"],
    points: [
      "Responsive food ordering experience across devices.",
      "Dark theme, search functionality, and profile management.",
      "Optimized SEO structure.",
    ],
    href: "https://imaginative-chimera-bd0733.netlify.app/",
    icon: <IoFastFoodSharp />,
    category: "Personal",
  },
  {
    title: "Stock Management Project App",
    client: "Personal project",
    description:
      "A React Native app with Tailwind CSS, iOS, Android, Zustand, Face ID, React Query, and Chart.js for stock management.",
    stack: ["React Native", "Tailwind CSS", "Zustand", "React Query", "Chart.js", "iOS", "Android"],
    points: [
      "Cross-platform stock management app for iOS and Android.",
      "Face ID authentication.",
      "State management with Zustand and data fetching with React Query.",
      "Stock charts built with Chart.js.",
    ],
    href: "",
    icon: <RiStockFill />,
    category: "Personal",
  },
  {
    title: "Coffee Buying App",
    client: "Personal project",
    description:
      "A React Native app with Styled Components, Async Storage, and FlatList for a seamless coffee buying experience.",
    stack: ["React Native", "Styled Components", "Async Storage", "FlatList"],
    points: [
      "Seamless coffee browsing and buying experience.",
      "Styled with Styled Components.",
      "Persisted data locally with Async Storage and rendered lists with FlatList.",
    ],
    href: "",
    icon: <PiCoffeeFill />,
    category: "Personal",
  },
  {
    title: "Weather Website",
    client: "Personal project",
    description:
      "A mobile-responsive weather website using React JS, CSS, and Context Store, integrated with weather APIs.",
    stack: ["React JS", "CSS", "Context API", "Weather API"],
    points: [
      "Mobile-responsive weather website.",
      "Live data from weather APIs.",
      "State managed with the Context API.",
    ],
    href: "https://weather-project-123.netlify.app/",
    icon: <TiWeatherPartlySunny />,
    category: "Personal",
  },
  {
    title: "Airbnb Clone",
    client: "Personal project",
    description:
      "Built a clone of the Airbnb website using React JS and CSS for a responsive and interactive user interface.",
    stack: ["React JS", "CSS"],
    points: [
      "Clone of the Airbnb website.",
      "Responsive, interactive user interface built with React JS and CSS.",
    ],
    href: "",
    icon: <TbBrandAirbnb />,
    category: "Personal",
  },
  {
    title: "Social Media Clone Website",
    client: "Personal project",
    description:
      "Developed a social media clone using React JS, HTML, CSS, and the useContext Store for state management.",
    stack: ["React JS", "HTML", "CSS", "Context API"],
    points: [
      "Social media clone website.",
      "Built with React JS, HTML, and CSS.",
      "State managed with useContext.",
    ],
    href: "",
    icon: <FaFacebook />,
    category: "Personal",
  },
];
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Official");

  const handleToggle = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-[#1c1c22]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <button
            className={`py-2 px-4 rounded-l font-semibold ${activeCategory === 'Official' ? 'bg-accent text-gray-700' : 'bg-gray-700 text-white'}`}
            onClick={() => handleToggle('Official')}
          >
            Professional
          </button>
          <button
            className={`py-2 px-4 rounded-r font-semibold ${activeCategory === 'Personal' ? 'bg-accent text-gray-700' : 'bg-gray-700 text-white'}`}
            onClick={() => handleToggle('Personal')}
          >
            Personal
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 md:gap-8"
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {filteredProjects.map((project) => (
            <Dialog key={project.title}>
              <DialogTrigger className="h-full text-left">
                <div className="h-full flex flex-col gap-4 group p-4 border border-transparent hover:border-accent transition-all duration-500">
                  <div className="w-full flex justify-between items-center">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[22px] text-white group-hover:text-accent transition-all duration-500 font-bold leading-none">
                      {project.title}
                      {project.current && (
                        <span className="ml-3 align-middle text-xs font-semibold px-2 py-1 rounded-full bg-accent text-primary">
                          Current
                        </span>
                      )}
                    </h2>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold group-hover:text-accent transition-all duration-500">
                      {project.icon}
                    </div>
                  </div>
                  <p className="flex-1 text-white/70 group-hover:text-white transition-all duration-500">
                    {project.description}
                  </p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <div className="flex items-center gap-4 pr-8">
                  <div className="text-4xl text-accent">{project.icon}</div>
                  <div>
                    <DialogTitle>
                      {project.title}
                      {project.current && (
                        <span className="ml-3 align-middle text-xs font-semibold px-2 py-1 rounded-full bg-accent text-primary">
                          Current
                        </span>
                      )}
                    </DialogTitle>
                    <DialogDescription className="mt-1">
                      Client: <span className="text-white">{project.client}</span>
                    </DialogDescription>
                  </div>
                </div>

                <h3 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">
                  Tech Stack
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-accent/50 text-accent bg-accent/10"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">
                  Key Achievements
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 marker:text-accent">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-semibold text-primary hover:bg-accent-hover transition-all"
                  >
                    Visit Site <FiExternalLink />
                  </a>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
