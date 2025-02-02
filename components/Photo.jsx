"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/images/profile.png";

const Photo = () => { 
  return (
    <div className="w-full h-full flex items-center justify-center relative pt-8 xl:pt-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[320px] h-[320px] xl:w-[470px] xl:h-[470px] p-4 bg-white rounded-full flex items-center justify-center mix-blend-lighten relative z-10"
        >
          <Image
            src={profilePic}
            priority
            style={{ borderRadius: '50%' }}
            quality="100"
            layout="fill"
            alt="Profile Picture"
            className="object-cover"
          />
        </motion.div>
        <motion.svg
          className="absolute w-[306px] h-[306px] xl:w-[456px] xl:h-[456px] z-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 2 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
