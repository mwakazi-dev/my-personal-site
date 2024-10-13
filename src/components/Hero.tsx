"use client";

import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center p-4 h-[30vh] w-[90%] md:w-[40%] mx-auto my-24">
      <Cover className="text-md  lg:text-xl font-semibold  mx-auto text-center mt-6 relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white antialiased ">
        <blockquote>
          Software engineering is not just about writing code. It’s about
          solving problems and making lives better.
        </blockquote>
        <div className="flex justify-center gap-1">
          <span>💻</span>
          <span>📝</span>
          <span>🎮</span>
          <span>🎧</span>
        </div>
      </Cover>
    </div>
  );
};

export default Hero;
