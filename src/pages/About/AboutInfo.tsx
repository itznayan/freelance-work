import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: {
    x: 0,
    color: "#d4d4d8", // zinc-300
  },
  hover: {
    x: 50,
    color: "#ffffff", // zinc-50
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const textVariants = {
  initial: {
    x: 0,
    color: "#d4d4d8", // zinc-300
  },
  hover: {
    x: -50,
    color: "#ffffff", // zinc-50
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function AboutInfo({
  index,
  title,
  role,
  setModal,
}: {
  index: number;
  title: string;
  role: string;
  setModal: (data: { active: boolean; index: number }) => void;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="
        flex w-full items-center justify-between
        py-12
        border-b border-gray-200
        cursor-pointer
      "
    >
      {/* TITLE */}
      <motion.h2
        variants={titleVariants}
        className="text-[65px] font-mono font-extrabold text-zinc-300"
      >
        {title}
      </motion.h2>

      {/* ROLE */}
      <motion.p
        variants={textVariants}
        className="font-mono text-2xl font-semibold text-zinc-300"
      >
        {role}
      </motion.p>
    </motion.div>
  );
}
