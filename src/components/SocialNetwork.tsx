"use client";
import Link from "next/link";

import { Socials } from "@/constants/data";
import withWrapper from "@/hoc/withWrapper";

const SocialNetwork = () => {
  return (
    <div className="flex flex-col">
      {Socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target={social.isExternal ? "_blank" : "_self"}
          className="flex gap-4 hover:bg-secondary p-1 w-full items-center "
        >
          {social.icon}
          <p className="text-md antialiased">{social.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default withWrapper(SocialNetwork);
