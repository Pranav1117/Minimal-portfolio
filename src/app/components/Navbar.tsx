'use client'

import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      className={`fixed top-2 left-1/2 -translate-x-1/2 flex justify-between items-center px-6 py-3 transition-all duration-300 ${
        scrolled
          ? 'rounded-full bg-neutral-800/70 backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[500rem] max-w-[45rem] '
          : 'bg-neutral-900 w-full max-w-[50rem]'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="text-xl">Wei</div>
      <div>f</div>
    </motion.nav>
  );
};

export default Navbar;
