"use client";
import React from "react";

import withWrapper from "@/hoc/withWrapper";
import { works } from "@/constants/data";
import WorkItem from "./Work";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const WorkList = () => {
  return (
    <div className=" flex flex-col gap-4">
      <Tabs defaultValue="completed" className="w-full bg-transparent ">
        <TabsList className="flex justify-start w-full grid-cols-2 mt-4">
          <TabsTrigger value="completed" className="">
            Completed
          </TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
        </TabsList>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {works
              .filter((work) => work.progress === "Completed")
              .map((work) => (
                <WorkItem key={work.companyName} work={work} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {works
              .filter((work) => work.progress === "Ongoing")
              .map((work) => (
                <WorkItem key={work.companyName} work={work} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="mobile">
          <div className="flex flex-row justify-start gap-4">
            {works.slice(4, 5).map((work) => (
              <WorkItem key={work.companyName} work={work} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default withWrapper(WorkList);
