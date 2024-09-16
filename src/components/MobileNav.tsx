import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavList } from "@/constants/data";

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <Button variant={"outline"} className="p-2 bg-[#F5F7F8]">
          <MenuIcon className="w-fit h-fit text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {NavList.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              target={nav.isExternal ? "_blank" : ""}
            >
              <DropdownMenuItem>
                {nav.name}
                <DropdownMenuShortcut>{nav.icon}</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
