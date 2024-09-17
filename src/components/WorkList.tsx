"use client";
import React from "react";

import withWrapper from "@/hoc/withWrapper";
import { works } from "@/constants/data";
import WorkItem from "./Work";

const WorkList = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        {works.map((work) => (
          <WorkItem key={work.companyName} work={work} />
        ))}
      </div>
    </div>
  );
};

export default withWrapper(WorkList);
