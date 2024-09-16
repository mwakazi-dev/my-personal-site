"use client";

import Link from "next/link";

import ThemeToggler from "./ui/ThemeToggler";
import { NavList } from "@/constants/data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col justify-center items-center py-2 px-4 bg-white">
      <div className="flex items-center justify-between w-full md:w-[54%]">
        <aside className="flex items-center justify-center gap-4">
          <h1 className="antialiased font-bold w-fit text-xl p-0 m-0 align-sub">
            Johnson Mwakazi
          </h1>
          <nav className="flex items-center justify-center gap-4 pt-1 hidden md:inline-flex">
            {NavList.map((nav) => (
              <Link
                href={nav.href}
                key={nav.name}
                className={cn(
                  "flex items-center justify-center gap-2 hover:bg-secondary hover:text-white p-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  ",
                  {
                    "bg-secondary text-white": pathname === nav.href,
                  }
                )}
              >
                {nav.icon && nav.icon}
                {nav.name}
              </Link>
            ))}
          </nav>
        </aside>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Navbar;
