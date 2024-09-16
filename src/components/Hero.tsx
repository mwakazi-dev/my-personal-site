"use client";

import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center p-4 h-[20vh] w-[90%] md:w-[40%] mx-auto mt-24">
      <Cover className="text-xl md:text-2xl lg:text-2xl font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        When something is important enough, you do it even if the odds are not{" "}
        in your favour.
      </Cover>
    </div>
  );
};

export default Hero;
