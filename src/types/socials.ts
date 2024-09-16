import { ReactElement } from "react";

export type Social = {
  name: string;
  href: string;
  isExternal?: boolean;
  icon?: ReactElement;
};
