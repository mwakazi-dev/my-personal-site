import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Nav } from "@/types/nav";
import { Bio } from "@/types/bio";
import { Social } from "@/types/socials";

export const NavList: Nav[] = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Posts", href: "/posts" },
  {
    name: "Github",
    href: "https://github.com/jmwakz99",
    isExternal: true,
    icon: <GitHubLogoIcon />,
  },
];

export const BioList: Bio[] = [
  { year: "1993", description: "Born in Taita, Kenya" },
  {
    year: "2014",
    description: "Completed High School in Lifespring Christian Academy",
  },
  {
    year: "2015",
    description:
      "I realized my passion for tech and taught myself how to code.",
  },
  {
    year: "2019",
    description:
      "Graduated with honors in Certified Public Accounting from KASNEB.",
  },

  {
    year: "2020",
    description: "Worked as a Frontend Developer at ",
    companyLink: "https://www.mjengosmart.com/",
    companyName: "Mjengo Smart",
  },
  {
    year: "2024",
    description: "Worked as a Frontend Developer at ",
    companyLink: "https://www.poweredbypeople.com/",
    companyName: "Powered by People",
  },
];

export const Socials: Social[] = [
  {
    name: "Github",
    href: "https://github.com/jmwakz99",
    isExternal: true,
    icon: <GitHubLogoIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/johnson-mwakazi/",
    isExternal: true,
    icon: <LinkedInLogoIcon />,
  },
  {
    name: "Twitter",
    href: "https://x.com/JohnsonMwa74194",
    isExternal: true,
    icon: <TwitterLogoIcon />,
  },
];
