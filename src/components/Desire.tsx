import React from "react";

import withWrapper from "@/hoc/withWrapper";

const Desire = () => {
  return (
    <div className="flex flex-col   ">
      <h2 className="text-2xl underline font-bold antialiased ">I ❤️</h2>
      <p>
        <span className="text-[#CB80AB]">Technology</span>, Music,{" "}
        <span className="text-[#CB80AB]">Programming</span> and{" "}
        <span>Gaming.</span>
      </p>
    </div>
  );
};

export default withWrapper(Desire);
