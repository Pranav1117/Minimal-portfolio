"use client";
import { useEffect, useState } from "react";
import { Intro } from "../utils/Constants";
import dynamic from "next/dynamic";
import { easeOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionTag = dynamic(() => import("./MotionTag"), { ssr: false });

const HeroSection = () => {
  const tags = Intro.tag;
  const [tag, setTag] = useState(tags[0]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect(() => {
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     index = (index + 1) % tags.length; // Loop back to 0
  //     setTag(tags[index]);
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 40, filter: "blur(8px)" }
      }
      transition={{ duration: 0.5, ease: easeOut }}
      className="w-[100%] mt-18 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
    >
      <div className="w-[30rem]">
        <div className="flex gap-4 items-center">
          <h3 className="text-4xl">{Intro.name}</h3>
          <div className="bg-neutral-800 rounded-md overflow-hidden">
            <MotionTag>{tag}</MotionTag>
          </div>
        </div>
        <div className="mt-2 font-thin text-neutral-500 leading-tight">
          {Intro.desc}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
