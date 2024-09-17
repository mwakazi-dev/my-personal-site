"use client";
import Link from "next/link";
import React from "react";

import { BioList } from "@/constants/data";
import withWrapper from "@/hoc/withWrapper";

const Bio = () => {
  return (
    <div className="">
      {BioList.map((bio) => (
        <div key={bio.year} className="flex gap-4">
          <h3 className="font-extrabold antialiased">{bio.year}</h3>
          <div className="inline-block">
            <p className="inline antialiased">{bio.description}</p>
            {bio.companyLink && (
              <Link
                href={bio.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline antialiased"
              >
                {bio.companyName}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default withWrapper(Bio);
