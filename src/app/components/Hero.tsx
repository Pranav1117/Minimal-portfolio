import { Intro } from "../utils/Constants";

const HeroSection = () => {
  return (
    <div className="w-[100%] mt-18 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">

    <div className="w-[30rem] ">
      <div className="flex gap-4 items-center">
        <h3 className="text-4xl">{Intro.name}</h3>
        <div>{Intro.tag}</div>
      </div>
      <div className="mt-2 font-thin text-neutral-500 leading-tight">{Intro.desc}</div>
    </div>
    </div>
  );
};

export default HeroSection;
