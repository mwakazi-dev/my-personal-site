import { ReactElement } from "react";

export type Nav = {
  name: string;
  href: string;
  icon?: ReactElement;
  isExternal?: boolean;
};
