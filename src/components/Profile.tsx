"use client";
import withWrapper from "@/hoc/withWrapper";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-semibold antialiased">
          Johnson Mwakazi
        </h1>
        <p className="antialiased">
          Tech Enthusiast (Web Developer / Mobile Developer)
        </p>
      </div>
      <div>
        <Image
          src="/images/me.png"
          width={120}
          height={120}
          alt="profile"
          className="rounded-full  bg-primary shadow-inner shadow-2xl shadow-black"
        />
      </div>
    </div>
  );
};

export default withWrapper(Profile);
