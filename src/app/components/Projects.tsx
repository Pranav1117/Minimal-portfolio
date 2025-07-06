import React from "react";
import { Project } from "../utils/Constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <h3 className="text-2xl">Stuff I built</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {Project.map((item, index) => {
          return (
            <div className="h-[130px] w-[130px]" key={index}>
              <div>
                <Image
                  src={item.path}
                  alt="landing page"
                  height={100}
                  width={200}
                />
              </div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
