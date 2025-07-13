"use client";
import React from "react";
import { Experiences, ExperiencesProp } from "../utils/Constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ExperienceItem = ({
  companyName,
  duration,
  role,
  desc,
  // stack,
}: ExperiencesProp) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="mt-3 my-12"
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 40, filter: "blur(8px)" }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between">
        <h4 className="text-xl">{companyName}</h4>
        <p className="text-xs text-neutral-400">{duration}</p>
      </div>
      <div className="flex flex-col gap-1 mt-1.5">
        <div className="text-md text-neutral-300">{`- ${role}`}</div>
        <div className="text-neutral-500 leading-tight">
          <ul className="flex flex-col space-y-1">
            {desc?.map((des: string, ind: number) => (
              <li key={ind} className="list-disc list-inside text-sm">
                {des}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl"
      >
        Experience
      </motion.h3>
      <div>
        {Experiences.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
