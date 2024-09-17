"use client";

import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import withWrapper from "../hoc/withWrapper";

const About = () => {
  return (
    <div>
      <p className="indent-4 w-fit antialiased">
        Johnson is a web and mobile developer with a passion for creating
        seamless and engaging user experiences based in Kenya. He has extensive
        experience working in diverse industries, including ecommerce and
        construction. Johnson excels in building scalable, production-ready web
        and mobile applications and is deeply involved in the full development
        lifecycle, from planning and design to solving real-world challenges
        with code. Beyond the technical realm, Johnson enjoys attending car
        shows and meeting new people, always eager to explore new ideas and
        experiences.
      </p>
      <Link href="/works">
        <Button className="w-fit text white my-4 mx-auto text-white flex  justify-between gap-4 items-center">
          My Portfolio <ChevronRightCircle className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};

export default withWrapper(About);
