"use client";

import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import withWrapper from "../hoc/withWrapper";

const About = () => {
  return (
    <div>
      <p className="indent-4 w-fit antialiased">
        Hi, I&apos;m Johnson, a web and mobile developer with over 4 years of
        experience. I&apos;ve had the opportunity to work on various projects,
        ranging from web and mobile development to leading a team of developers.
        I&apos;m known for my problem-solving skills and my ability to work
        collaboratively with cross-functional teams. I&apos;ve also contributed
        to open-source projects such as{" "}
        <Link
          className="text-primary"
          href="https://github.com/boyuai/antd-country-phone-input"
        >
          antd-country-phone-input
        </Link>
        . Outside of work, I empower aspiring developers, read books, and play
        video games.
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
