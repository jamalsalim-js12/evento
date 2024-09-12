import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
