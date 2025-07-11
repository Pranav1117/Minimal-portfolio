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

      <div className="flex overflow-x-auto flex-nowrap gap-4 mt-4 p-4 scrollbar-hide">
        {Project.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={index}
            className="h-[220px] w-[31%] shrink-0 rounded shadow overflow-hidden flex flex-col cursor-pointer group relative"
          >
            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={item.path}
                alt={item.title}
                fill
                className="object-cover transition-opacity transition-transform duration-300 scale-120 hover:scale-100 group-hover:opacity-90 group-hover:scale-100"
              />

              {/* Text overlay that slides up from bottom */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 h-full flex items-center
                  justify-center bg-gradient-to-t from-black/80 to-transparent
                  text-white text-lg px-4 pb-4
                  transform translate-y-full opacity-0
                  transition-all duration-200 ease-in-out
                  group-hover:translate-y-0 group-hover:opacity-100
                "
              >
                {item.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
