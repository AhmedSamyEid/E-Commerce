import { ReactNode } from "react";

export interface User {
  src: string;
  alt: string;
  description: string;
  name: string;
}

export interface Category {
  icon?: ReactNode;
  number: string;
  description: string;
}
