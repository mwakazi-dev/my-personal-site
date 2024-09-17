"use client";
import withWrapper from "@/hoc/withWrapper";

import { Socials } from "@/constants/data";
import Link from "next/link";

const SocialNetwork = () => {
  return (
    <div className="flex flex-col gap-2">
      {Socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target={social.isExternal ? "_blank" : "_self"}
          className="flex gap-4 hover:bg-secondary p-2 w-full items-center "
        >
          {social.icon}
          <p className="text-md antialiased">{social.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default withWrapper(SocialNetwork);
