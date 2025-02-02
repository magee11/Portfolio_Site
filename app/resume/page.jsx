"use client";
import batch from "../../public/images/resume/badge.svg";
import cap from "../../public/images/resume/cap.svg";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
  FaGit,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobexd } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { TooltipContent } from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "",
  info: [
    { fieldName: "Name", fieldValue: "Magesh" },
    { fieldName: "Stack", fieldValue: "Frontend Engineer" },
    { fieldName: "Email", fieldValue: "mageshmarch@gmail.com" },
    { fieldName: "Phone", fieldValue: "+91 9345236199" },
    { fieldName: "Exprience", fieldValue: "2.5+ years" }, 
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Languages", fieldValue: "English, Tamil" },
  ],
};

const exprience = {
  icon: batch,
  title: "My Exprience",
  description:
    "Experienced React JS developer with 2.5 years of expertise in frontend and backend development. Proficient in React, Next.js, AWS, Node.js, Redux, TypeScript, Java Spring Boot, Python Flask, and SQL. Currently contributing to the Amazon SmartBiz project, optimizing client and customer applications. Skilled in performance optimization, modern technologies, and DSA for efficient problem-solving.",
  item: [
    {
      company: "Divum Corporate Sevices Private Limited",
      position: "Frontend Developer",
      duration: "2023 - Present",
      location: "Bengaluru",
    },
    {
      company: "Divum Corporate Sevices Private Limited",
      position: "Frontend Developer",
      duration: "2023 - Present",
      location: "Bengaluru",
    },
  ],
};

const education = {
  icon: cap,
  title: "My Education",
  description:
    "I have successfully completed my Bachelor of Computer Science and Engineering with a first-class grade, achieving a GPA of 8.21 from EGS Pillay Engineering College, Nagapattinam.",
  item: [
    {
      institution: "E.G.S Pillay Engineering College",
      degree: "BE - Computer Science and Engineering",
      duration: "2019 - 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "With a passion for crafting efficient and scalable web applications, I've developed a versatile skill set that spans both frontend and backend technologies. My expertise allows me to create visually appealing and highly functional user interfaces, while also ensuring robust and secure server-side operations.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaAws />,
      name: "Amazon Web Services",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiAdobexd />,
      name: "Adobe XD",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="exprience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="exprience">Exprience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="exprience" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{exprience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {exprience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols lg:grid-cols-2 gap-[30px]">
                    {exprience.item.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-sm lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-extrabold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:gird-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-lg flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-extrabold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                {
                  about.info.map((item,index)=>(
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <p>{item.fieldName}</p>
                      <p className="text-white/60">{item.fieldValue}</p>
                    </li>
                  ))
                }
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
