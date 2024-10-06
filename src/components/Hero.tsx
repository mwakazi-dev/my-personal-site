"use client";

import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center p-4 h-[30vh] w-[90%] md:w-[40%] mx-auto my-24">
      <Cover className="text-md  lg:text-xl font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white antialiased ">
        <blockquote>
          “In mobile, people only look at a phone’s screen for about 90 seconds.
          They want relevant information quickly, which means one swipe, and
          they should be done.” – Marissa Mayer
        </blockquote>
        💻
      </Cover>
    </div>
  );
};

export default Hero;
