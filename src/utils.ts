import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Task = {
  id: any;
  title: string;
  description: string;
  completed: boolean;
  user: string;
};
