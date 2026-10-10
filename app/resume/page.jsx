"use client";
import { FaBriefcase, FaGraduationCap, FaCode, FaUser } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";
import AboutSection from "@/components/resume/AboutSection";

const sections = [
  { value: "experience", label: "Experience", icon: <FaBriefcase />, Component: ExperienceSection },
  { value: "education", label: "Education", icon: <FaGraduationCap />, Component: EducationSection },
  { value: "skills", label: "Skills", icon: <FaCode />, Component: SkillsSection },
  { value: "about", label: "About Me", icon: <FaUser />, Component: AboutSection },
];

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
      className="min-h-[80vh] py-8 xl:py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          orientation="vertical"
          className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-8 xl:gap-12 items-start"
        >
          <TabsList
            aria-label="Resume sections"
            className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-visible xl:sticky xl:top-8 -mx-1 px-1 pb-2 xl:pb-1"
          >
            {sections.map((section) => (
              <TabsTrigger
                key={section.value}
                value={section.value}
                className="shrink-0 w-auto xl:w-full gap-3 px-5 xl:justify-start"
              >
                <span aria-hidden="true">{section.icon}</span>
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-w-0">
            {sections.map(({ value, Component }) => (
              <TabsContent key={value} value={value} className="w-full mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Component />
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
