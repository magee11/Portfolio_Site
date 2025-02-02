"use client"
import { useState } from "react";
import { FaAws, FaLaptopCode, FaNodeJs, FaGlobe, FaReact,FaShoppingCart } from 'react-icons/fa';
import { BiSolidBowlHot } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiBurgerking } from "react-icons/si";
import { motion } from "framer-motion";
import { RiStockFill } from "react-icons/ri";
import { PiCoffeeFill } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";

const projects = [
  {
    title: "Amazon's Smartbiz",
    description:
      "Developed using React JS, Storybook, Amazon Framework for UI, React Query, SCSS, MobX, and Micro Frontend architecture with Amazon Core Services.",
    href: "https://smartbiz.amazon.in/",
    icon: <FaAws />,
    category: "Official",
  },
  {
    title: "Biryani by Kilo",
    description:
      "Created with React JS, SCSS, Redux, AWS Services, SEO optimization, Mappls Maps, and Razorpay Payment Integration.",
    href: "https://biryanibykilo.com/",
    icon: <BiSolidBowlHot />,
    category: "Official",
  },
  {
    title: "Burger King",
    description:
      "Developed using the same stack as BBK: React JS, SCSS, Redux, AWS Services, SEO, Mappls Maps, and Razorpay Payment Integration.",
    href: "https://www.burgerking.in/",
    icon: <SiBurgerking />,
    category: "Official",
  },
  {
    title: "Aditya Birla E-commerce Site",
    description:
      "Built with WordPress, Node.js, React JS, PHP Middleware, MySQL, and MongoDB.",
    href: "",
    icon: <FaShoppingCart />,
    category: "Official",
  },
  {
    title: "Project Management Tool",
    description:
      "A tool developed using HTML, CSS, JS, React JS, Python Flask, MySQL, and AWS Services.",
    href: "",
    icon: <TbBrandGoogleAnalytics />,
    category: "Official",
  },
  {
    title: "Food Ordering App",
    description:
      "Developed a responsive food ordering application with features like dark themes, search functionality, profile management, and an optimized SEO structure.",
    href: "https://imaginative-chimera-bd0733.netlify.app/",
    icon: <IoFastFoodSharp />,
    category: "Personal",
  },
  {
    title: "Stock Management Project App",
    description:
      "A React Native app with Tailwind CSS, iOS, Android, Zustand, Face ID, React Query, and Chart.js for stock management.",
    href: "",
    icon: <RiStockFill />,
    category: "Personal",
  },
  {
    title: "Coffee Buying App",
    description:
      "A React Native app with Styled Components, Async Storage, and FlatList for a seamless coffee buying experience.",
    href: "",
    icon: <PiCoffeeFill />,
    category: "Personal",
  },
  {
    title: "Weather Website",
    description:
      "A mobile-responsive weather website using React JS, CSS, and Context Store, integrated with weather APIs.",
    href: "https://weather-project-123.netlify.app/",
    icon: <TiWeatherPartlySunny />,
    category: "Personal",
  },
  {
    title: "Airbnb Clone",
    description:
      "Built a clone of the Airbnb website using React JS and CSS for a responsive and interactive user interface.",
    href: "",
    icon: <TbBrandAirbnb />,
    category: "Personal",
  },
  {
    title: "Social Media Clone Website",
    description:
      "Developed a social media clone using React JS, HTML, CSS, and the useContext Store for state management.",
    href: "",
    icon: <FaFacebook />,
    category: "Personal",
  },
];
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Official");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleToggle = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const maxPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <Link href={project.href} target="_blank" key={index}>
              <div className="flex-1 flex flex-col justify-center gap-4 group p-4 border border-transparent hover:border-accent transition-all duration-500">
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-[20px] md:text-[24px] lg:text-[22px] text-white group-hover:text-accent transition-all duration-500 font-bold leading-none">
                    {project.title}
                  </h2>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold group-hover:text-accent transition-all duration-500">
                    {project.icon}
                  </div>
                </div>
                <p className="text-white/70 group-hover:text-white transition-all duration-500">
                  {project.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
