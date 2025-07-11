import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-2 flex flex-col gap-8 max-w-[56rem] min-h-screen mx-auto bg-neutral-900 px-12 py-2">
      {/* <div className="absolute top-[20%] left-[20%]  h-100 w-100 z-[-1] bg-gradient-to-b from-red-500 via-transparent"></div> */}
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
