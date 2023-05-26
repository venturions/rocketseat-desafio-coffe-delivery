import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  bold?: boolean;
  color?:
    | "white"
    | "yellow-light"
    | "yellow"
    | "yellow-dark"
    | "purple-light"
    | "purple"
    | "purple-dark"
    | "base-title"
    | "base-subtitle"
    | "base-text"
    | "base-label"
    | "base-hover"
    | "base-button"
    | "base-input"
    | "base-card"
    | "background";
}
