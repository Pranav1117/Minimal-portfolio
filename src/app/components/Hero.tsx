import { Intro } from "../utils/Constants";

const HeroSection = () => {
  return (
    <div className="mt-14 w-[30rem]">
      <div className="flex gap-4 items-center">
        <h3 className="text-4xl">{Intro.name}</h3>
        <div>{Intro.tag}</div>
      </div>
      <div className="mt-2 font-thin text-neutral-500">{Intro.desc  }</div>
    </div>
  );
};

export default HeroSection;
