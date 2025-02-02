import { animate, motion } from "framer-motion";
import React from "react";

const Strair = () => {
  const StairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%"],
    },
  };
  const reverseIndex = (index) => {
    const totalCount = 6;
    return totalCount - index - 1;
  };
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          end="end"
          variants={StairAnimation}
          key={index}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          className="h-full w-full bg-white relative"
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default Strair;
