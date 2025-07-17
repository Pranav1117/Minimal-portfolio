"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Big_Shoulders_Stencil_Display } from "next/font/google";
import { motion } from "framer-motion";

const bigShouldersStencil = Big_Shoulders_Stencil_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={` z-10 fixed top-2 left-1/2 -translate-x-1/2 flex justify-between items-center px-6 py-3 transition-all duration-300 ${
        scrolled
          ? "rounded-full bg-neutral-800/70 backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[500rem] max-w-[47rem] "
          : "bg-neutral-900 w-full max-w-[52.5rem]"
      }`}
      // initial={{ y: -50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
    >
      <div
        className={`${bigShouldersStencil.className} text-neutral-400 text-xl `}
      >
        Wei
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/pranav-bavaskar-a154a5232/"
          target="_blank"
        >
          <Image
            src={"/images/socials/linkedin.svg"}
            height={30}
            width={30}
            alt="linkedin"
            className="cursor-pointer"
          />
        </a>
        <a href="https://github.com/Pranav1117" target="_blank">
          <Image
            src={"/images/socials/github.svg"}
            height={15}
            width={15}
            alt="github"
            className="cursor-pointer"
          />
        </a>
        <a href="mailto:pranavbavaskar1@gmail.com">
          <Image
            src={"/images/socials/mail.svg"}
            height={20}
            width={20}
            alt="e-mail"
            className="cursor-pointer"
          />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
