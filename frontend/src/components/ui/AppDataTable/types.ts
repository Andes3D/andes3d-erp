import { ReactNode } from "react";

export interface Column<T> {

  key: keyof T;

  title: string;

  width?: string;

  align?: "left" | "center" | "right";

  render?: (row: T) => ReactNode;

}