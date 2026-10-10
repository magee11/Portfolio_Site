"use client";
import { FaReact, FaServer, FaLayerGroup, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const service = [
  {
    num: "01",
    title: "Frontend Engineering",
    description:
      "Senior Software Engineer with 4 years of experience building scalable, production-ready web applications using React.js, Next.js, TypeScript, Redux, and Tailwind CSS. Skilled in reusable component design, SSR, Micro Frontends, and performance optimization, including cutting LCP from 30s to 2.5s.",
    icon: <FaReact />,
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Building and optimizing server-side applications with Node.js, Express.js, and Python Flask. Experienced with REST APIs, MongoDB, MySQL, PostgreSQL, and deploying on AWS (EC2, S3, CloudFront, RDS) with Docker and CI/CD.",
    icon: <FaServer />,
  },
  {
    num: "03",
    title: "Full Stack Development",
    description:
      "Delivering end-to-end product features from UI to API, as on Amazon SmartBiz and Biryani By Kilo, covering wallets, offers, search, orders, maps, and payment integrations, integrating frontend and backend seamlessly.",
    icon: <FaLayerGroup />,
  },
  {
    num: "04",
    title: "Vibe Coding with AI",
    description:
      "Rapidly designing and building apps using AI tools like Claude, Cursor, ChatGPT, Gemini, and GitHub Copilot. Exploring AI-native engineering with LLM workflows, MCP, prompt engineering, and AI agent orchestration to ship faster without compromising quality.",
    icon: <FaRobot />,
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className=" container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {service.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex  justify-between items-center">
                  <div className="text-4xl font-extrabold group-hover:text-accent transition-all duration-500">{service.num}</div>
                  <div className="w-[50px] h-[50px] rounded-full bg-white text-black text-2xl group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                    {service.icon}
                  </div>
                </div>
                {/* title  */}
                  <h2 className=" text-[22px] text-white group-hover:text-accent transition-all duration-500 font-bold leading-none">{service.title}</h2>
                  <p className="text-white/70 group-hover:text-white transition-all duration-500">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
