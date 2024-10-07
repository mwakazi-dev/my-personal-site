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
  {
    name: "Github",
    href: "https://github.com/johnsonmwakazi-dev",
    isExternal: true,
    icon: <GitHubLogoIcon />,
  },
];

export const BioList: Bio[] = [
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
    href: "https://github.com/johnsonmwakazi-dev",
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
    platform: "Web",
    progress: "Completed",
    stack: [
      "Typescript",
      "React",
      "Next.js",
      "Ant Design",
      "GraphQL Api",
      "Jest",
      "Cypress",
    ],
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
    progress: "Completed",
    platform: "Web",
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
    progress: "Ongoing",
    platform: "Web",
    stack: [
      "Typescript",
      "React",
      "Next js ",
      "Tailwind",
      "RESTful Api",
      "Firebase",
      "Sendgrid",
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
    year: "2024",
  },
  {
    id: "afrotasker",
    companyName: "AfroTasker",
    site: "https://www.afrotasker.com/",
    platform: "Web",
    progress: "Ongoing",
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

  {
    id: "afrotasker-app",
    companyName: "AfroTasker Mobile App",
    site: "",
    progress: "Ongoing",
    platform: "Mobile",
    stack: [
      "Typescript",
      "React Native",
      "Tailwind CSS",
      "RESTful Api",
      "Firebase",
    ],
    summary:
      "AfroTasker is an app that connects people who need services with those who provide them.",
    description:
      "AfroTasker is an app that connects people who need services with those who provide them. As a user, you can create a profile and select the services you need. Then you can find a user who can provide the service you need using an uber like location based search. After they complete the assignment, the user is paid through the platform.",
    images: [
      "/images/afrotasker-mobile-1.png",
      "/images/afrotasker-mobile-2.png",
      "/images/afrotasker-mobile-3.png",
      "/images/afrotasker-mobile-4.png",
      "/images/afrotasker-mobile-5.png",
    ],
    year: "2024",
  },
];

export const SKILLS = [
  {
    id: 1,
    name: "JavaScript",
    designation: "5 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "2 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 3,
    name: "React/React Native",
    designation: "4 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Next.js",
    designation: "2 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 6,
    name: "Ant Design",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  },
  {
    id: 7,
    name: "Firebase",
    designation: "4 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },

  {
    id: 8,
    name: "Redux",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },

  {
    id: 9,
    name: "Jest",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },

  {
    id: 10,
    name: "Cypress",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-plain-wordmark.svg",
  },
  {
    id: 11,
    name: "HTML5",
    designation: "5 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 12,
    name: "CSS3",
    designation: "5 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 13,
    name: "GraphQl",
    designation: "2 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    id: 14,
    name: "Git",
    designation: "5 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 15,
    name: "Github",
    designation: "5 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    id: 16,
    name: "Gitlab",
    designation: "3 years",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
];
