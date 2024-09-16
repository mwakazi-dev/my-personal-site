import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Nav } from "@/types/nav";

export const NavList: Nav[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Posts", href: "/posts" },
  {
    name: "Github",
    href: "https://github.com/jmwakz99",
    isExternal: true,
    icon: <GitHubLogoIcon />,
  },
];
