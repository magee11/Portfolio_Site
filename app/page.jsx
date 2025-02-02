"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Magesh_Resume.pdf";
    link.download = "Magesh_Resume.pdf";
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:mt-8 xl:mb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl xl:text-5xl">
              Hello I&apos;m <br />
              <span className="text-accent">Magesh A</span>
            </span>
            <br />
            <br />
            <span className="text-2xl">Frontend Engineer</span>
            <p className="text-[12px] xl:text-[14px] max-w-[500px] text-white/80 mb-9 mt-2">
              Experienced React JS developer with 2.5 years of expertise in
              frontend and backend development. Proficient in React, Next.js,
              AWS, Node.js, Redux, TypeScript, Java Spring Boot, Python Flask,
              and SQL. Currently contributing to the Amazon SmartBiz project,
              optimizing client and customer applications. Skilled in
              performance optimization, modern technologies, and DSA for
              efficient problem-solving.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 mb-3">
              <Button
                className="items-center flex gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-10 w-10 border border-white rounded-full flex justify-center items-center text-base hover:text-accent hover:border-accent py-2.5"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
