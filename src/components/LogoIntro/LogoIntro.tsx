import React from "react";
import { motion } from "framer-motion";

type LogoIntroProps = {
  text: string;
};

const LogoIntro = (props: LogoIntroProps) => {
  const { text } = props;

  const descriptions = [
    "Just waiting for my problems to automatically disappear 🙃",
    "Future me will solve this!",
    "Everything is fine, don't worry!",
    "I know what I'm doing... I think.",
    "Yup",
  ];

  const randomIndex = Math.floor(Math.random() * descriptions.length);

  const wrapperVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const letterVariants = {
    initial: {
      transform: "rotateX(-90deg)",
      opacity: 0,
    },
    animate: {
      transform: "rotateX(360deg)",
      opacity: 1,
    },
    exit: {
      transform: "rotateX(360deg)",
      opacity: 0,
    },
  };

  return (
    <motion.div
      layout="position"
      className="intro-wrapper"
      variants={wrapperVariants}
      initial={{ opacity: 0, height: "1000px" }}
      animate={{ opacity: 1, height: "400px" }}
      transition={{ duration: 1, delay: 0.5, restDelta: 0.01 }}
    >
      <div className="texts">
        <p className="logo-intro">
          {[...text].map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="letter"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 40 + letterIndex * 3,
                delay: 0.5,
              }}
            >
              {`${letter}`}
            </motion.span>
          ))}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {descriptions[randomIndex]}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LogoIntro;
