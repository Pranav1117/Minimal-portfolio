import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-8 max-w-[56rem] h-screen mx-auto bg-neutral-900 px-12 py-2">
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
