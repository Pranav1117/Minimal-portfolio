import React from "react";
import { Experiences } from "../utils/Constants";

const Experience = () => {
  return (
    <div>
      <h3 className="text-2xl">Experience</h3>
      <div>
        {Experiences.map((item, index) => {
          return (
            <div className="mt-3" key={index}>
              <div className="flex justify-between">
                {/* @ts-ignore */}
                {/* Comp name and duration */}
                <h4 className="text-xl">{item.companyName}</h4>
                <p className="text-xs text-neutral-400">{item.duration}</p>
              </div>
              <div className="flex flex-col gap-1 mt-1.5">
                {/* Role */}
                <div className="text-md text-neutral-300">{`- ${item.role}`}</div>
                {/* Desc */}
                <div className="text-neutral-500 leading-tight">
                  <ul className="flex flex-col space-y-1">
                    {item.desc.map((des, ind) => (
                      <li key={ind} className="list-disc list-inside text-sm">{des}</li>
                    ))}
                  </ul>
                </div>
                {/* Stack */}
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
