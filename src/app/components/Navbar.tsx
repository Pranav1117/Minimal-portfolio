"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Edu_AU_VIC_WA_NT_Hand, Nunito, Outfit } from "next/font/google";

const edu = Edu_AU_VIC_WA_NT_Hand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // your selected weights
  variable: "--font-edu",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "1000"],
  variable: "--font-nunito",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "My App",
  description: "Using Google Fonts in Next.js",
};

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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className= {`${edu.variable} ${nunito.variable} ${outfit.variable} text-xl `}>Wei</div>
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/socials/linkedin.svg"}
          height={30}
          width={30}
          alt="linkedin"
          className="cursor-pointer"
        />
        <Image
          src={"/images/socials/github.svg"}
          height={15}
          width={15}
          alt="github"
          className="cursor-pointer"
        />
        <Image
          src={"/images/socials/mail.svg"}
          height={20}
          width={20}
          alt="e-mail"
          className="cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
