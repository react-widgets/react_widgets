import { CSSProperties, ReactNode } from "react";
import { DeepOmit } from "../types";
export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a" | "p" | "span";
export type TextAlignment = "left" | "center" | "end";
export interface TextProperties extends DeepOmit<CSSProperties, "display" | "WebkitBoxOrient" | "WebkitLineClamp" | "overflow"> {
    children: ReactNode;
    type?: TextType;
    maxLine?: number;
    alignment?: TextAlignment;
    [key: string]: any;
}
export declare function Text(p: TextProperties): import("react/jsx-runtime").JSX.Element;
