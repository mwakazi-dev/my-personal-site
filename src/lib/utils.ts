import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findWork = (works: any[], id: string) => {
  return works.find((work) => work.id === id) || {};
};
