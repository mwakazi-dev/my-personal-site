"use client";

import React from "react";

import withWrapper from "@/hoc/withWrapper";

const Desire = () => {
  return (
    <p className="antialiased">
      <span className="text-[#CB80AB]">Technology</span>, Music,{" "}
      <span className="text-[#CB80AB]">Programming</span> and{" "}
      <span>Gaming.</span>
    </p>
  );
};

export default withWrapper(Desire);
