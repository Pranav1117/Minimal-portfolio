"use client";

import React from "react";
import Image from "next/image";
import { Project } from "../utils/Constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl"
      >
        Stuff I built
      </motion.h3>

      <div className="flex overflow-x-auto flex-nowrap gap-4 mt-4 scrollbar-hide">
        {Project.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={index}
            className="backdrop-blur bg-white/5 shadow-lg rounded h-[300px] w-[31%] shrink-0 overflow-hidden cursor-pointer flex flex-col space-y-6"
          >
            {/* Image */}
            <div className="h-[50%] relative overflow-hidden">
              <Image
                src={item.path}
                alt={item.title}
                fill
                className="object-cover scale-100 hover:scale-110 duration-200"
              />
            </div>
            <div className="px-3">
              <div>{item.title}</div>
              <div className="text-neutral-500 text-sm mt-2 break-words">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
