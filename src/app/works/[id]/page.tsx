"use client";

import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { works } from "@/constants/data";
import { findWork } from "@/lib/utils";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const WorkDetails: FC<Props> = ({ params: { id } }) => {
  const {
    companyName,
    year,
    description,
    site,
    stack,
    images,
    platform,
    progress,
  } = findWork(works, id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 } as any}
      >
        <div className="flex flex-col justify-center p-4 md:w-[40%] mx-auto  gap-4 my-16 ">
          <div className="flex items-center gap-2">
            <Link
              href="/works"
              className="text-[#CB80AB] font-bold anitialized hover:underline"
            >
              Works
            </Link>
            <ChevronRight className="w-3 h-3" />
            <h3 className="antialiased font-bold text-lg">{companyName}</h3>
            <span className=" px-[10px] bg-neutral-200  w-fit text-xs rounded-sm dark:text-black">
              {year}
            </span>
          </div>
          <p className="antialiased text-md indent-4 w-[100%]">{description}</p>

          <div className="px-4 flex flex-col gap-2 overflow-hidden">
            {site && (
              <div className="flex items-center gap-2">
                <span className="px-1 bg-neutral-200 anitialized  w-fit text-xs font-black dark:text-black ">
                  WEBSITE
                </span>
                <Link
                  href={site}
                  target="_blank"
                  className="text-md text-[#CB80AB] flex items-center gap-1"
                >
                  {companyName} <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            )}

            <div className="px-1 flex items-center gap-2">
              <span className=" px-1 bg-neutral-200 anitialized  w-fit text-xs font-black  dark:text-black">
                PLATFORM
              </span>
              <p className="text-md flex items-center gap-1">{platform}</p>
            </div>
            <div className="px-1 flex items-center gap-2">
              <span className=" px-1 bg-neutral-200 anitialized  w-fit text-xs font-black  dark:text-black">
                PROGRESS
              </span>
              <p className="text-md flex items-center gap-1">{progress}</p>
            </div>
            <div className="px-1 flex items-center gap-2 ">
              <span className="bg-neutral-200 anitialized  w-fit text-xs font-black  dark:text-black">
                STACK
              </span>
              {(stack as string[]).map((stackItem, index) => (
                <p
                  className="text-md flex items-center gap-1 w-fit text-wrap"
                  key={stackItem}
                >
                  {stackItem}
                  {Boolean(index !== stack.length - 1) && ","}
                </p>
              ))}
            </div>
          </div>
          {(images as string[]).map((image) => (
            <div
              className="flex flex-row gap-4  relative w-full h-[250px]  md:h-[380px]"
              key={image}
            >
              <Image
                src={image}
                fill={true}
                alt="me"
                style={{ objectFit: platform === "Web" ? "cover" : "contain" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkDetails;
