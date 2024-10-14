"use client";

import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import withWrapper from "../hoc/withWrapper";

const About = () => {
  return (
    <div>
      <p className="indent-4 w-fit antialiased">
        I am a web and mobile developer with over 4 years of experience,
        specializing in building scalable applications and leading development
        teams. My expertise spans various projects in both web and mobile
        development, where I have consistently demonstrated strong
        problem-solving skills and the ability to collaborate effectively with
        cross-functional teams. I have contributed to open-source projects, such
        as{"  "}
        <Link
          href="https://github.com/boyuai/antd-country-phone-input"
          className="text-primary"
        >
          antd-country-phone-input
        </Link>
        , showcasing my commitment to community-driven development. Outside of
        work, I am passionate about empowering aspiring developers, enjoying
        reading, and playing video games.
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
