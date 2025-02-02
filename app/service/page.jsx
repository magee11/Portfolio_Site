"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
  {
    num: "01",
    title: "React JS Developer",
    description:
      "Experienced React JS developer with 2.5 years of hands-on experience. Proficient in React.js, Next.js, Redux, TypeScript, JavaScript, CSS3, and HTML5. Skilled in optimizing performance and delivering high-quality user interfaces.",
    href: "/react-js-developer",
  },
  {
    num: "02",
    title: "Backend Developer",
    description:
      "Skilled Backend Developer with experience in Node.js, Java Spring Boot, and Python Flask. Adept at building and maintaining scalable server-side applications and working with databases like SQL and NoSQL.",
    href: "/backend-developer",
  },
  {
    num: "03",
    title: "MERN Stack Developer",
    description:
      "Proficient MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. Capable of building full-stack applications from scratch and integrating frontend and backend seamlessly.",
    href: "/mern-stack-developer",
  },
  {
    num: "04",
    title: "SEO Specialist",
    description:
      "Experienced in optimizing websites for search engines using techniques like keyword research, on-page SEO, and link building. Focused on improving site rankings and enhancing online visibility.",
    href: "/seo-specialist",
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
                  <Link  href={service.href} className="w-[50px] h-[50px] rounded-full bg-white text-black group-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight />
                  </Link>
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
