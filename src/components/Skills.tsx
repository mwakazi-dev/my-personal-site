"use client";
import React from "react";

import { SKILLS } from "@/constants/data";
import withWrapper from "@/hoc/withWrapper";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Skills = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-row items-center  mb-10 w-full">
          <AnimatedTooltip items={SKILLS.slice(0, 8)} />
        </div>
        <div className="flex flex-row items-center  mb-10 w-full">
          <AnimatedTooltip items={SKILLS.slice(8, 16)} />
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-row items-center  mb-10 w-full">
          <AnimatedTooltip items={SKILLS.slice(0, 6)} />
        </div>
        <div className="flex flex-row items-center  mb-10 w-full">
          <AnimatedTooltip items={SKILLS.slice(6, 12)} />
        </div>
        <div className="flex flex-row items-center  mb-10 w-full">
          <AnimatedTooltip items={SKILLS.slice(12, 15)} />
        </div>
      </div>
    </div>
  );
};

export default withWrapper(Skills);
