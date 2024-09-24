import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Nav } from "@/types/nav";
import { Bio } from "@/types/bio";
import { Social } from "@/types/socials";
import { Work } from "@/types/work";

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
  { year: "1993", description: "Born in Taita, Kenya." },
  {
    year: "2014",
    description: "Completed High School in Lifespring Christian Academy.",
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
    year: "2017",
    description: "Worked as a Frontend Developer at ",
    companyLink: "https://www.mjengosmart.com/",
    companyName: "Mjengo Smart",
  },
  {
    year: "2019",
    description: "Worked as a Frontend Developer at ",
    companyLink: "https://www.wakilichapchap.co.ke/",
    companyName: "Wakili ChapChap",
  },
  {
    year: "2021",
    description: "Worked as a Frontend Developer at ",
    companyLink: "https://www.friyay.io/",
    companyName: "Friyay",
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

export const works: Work[] = [
  {
    id: "poweredbypeople",
    companyName: "Powered by People",
    site: "https://www.poweredbypeople.com/",
    stack: ["Typescript", "React", "Next.js", "Ant Design", "GraphQL Api"],
    summary: "Powered by People is a wholesale marketplace.",
    description:
      "Powered by People is a wholesale marketplace. It enables independent, diverse makers and brands by providing access to markets, financing, and digital tools.",
    images: ["/images/pbp.png", "/images/pbp2.png", "/images/pbp3.png"],
    year: "2024",
  },
  {
    id: "mjengosmart",
    companyName: "MjengoSmart",
    site: "https://www.mjengosmart.com/",
    stack: ["React", "Tailwind", "RESTful Api"],
    summary:
      "MjengoSmart is a platform that streamlines construction processes.",
    description:
      "MjengoSmart is a platform that streamlines construction processes. It achieves this by providing a platform for construction companies to manage their projects, track their progress, and communicate with their clients.",
    images: [
      "/images/mjengo.png",
      "/images/mjengo2.png",
      "/images/mjengo3.png",
    ],
    year: "2020",
  },
  {
    id: "utally",
    companyName: "Utally",
    site: "https://utally-web-app.vercel.app/",
    stack: [
      "Typescript",
      "React",
      "Next js ",
      "Tailwind",
      "RESTful Api",
      "Firebase",
    ],
    summary: "Utally is a platform that allows users to buy psn codes",
    description:
      "Utally is a platform that allows users to buy psn codes and redeem them in their PS Store wallet. Which later they can purchase games or subscriptions in the PlayStation Store.",
    images: [
      "/images/utally.png",
      "/images/utally3.png",
      "/images/utally4.png",
      "/images/utally5.png",
    ],
    year: "2017",
  },
  {
    id: "afrotasker",
    companyName: "AfroTasker",
    site: "https://www.afrotasker.com/",
    stack: [
      "Typescript",
      "React",
      "Next js",
      "Tailwind",
      "RESTful Api",
      "Prisma",
      "Neon Database",
    ],
    summary:
      "AfroTasker is a platform that connects people who need services with those who provide them.",
    description:
      "AfroTasker is a platform that connects people who need services with those who provide them. As a user, you can create a profile and select the services you need. Then you can find a user who can provide the service you need using an uber like location based search. After they complete the assignment, the user is paid through the platform.",
    images: [
      "/images/afrotasker.png",
      "/images/afrotasker2.png",
      "/images/afrotasker3.png",
    ],
    year: "2024",
  },
];
