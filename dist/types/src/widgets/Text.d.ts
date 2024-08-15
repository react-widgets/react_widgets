import { CSSProperties, ReactNode } from "react";
import { DeepOmit } from "../types";
export declare enum TextType {
    h1 = 0,
    h2 = 1,
    h3 = 2,
    h4 = 3,
    h5 = 4,
    h6 = 5,
    a = 6,
    p = 7,
    span = 8
}
export type TextAlignment = "left" | "center" | "end";
export interface TextProperties extends DeepOmit<CSSProperties, "display" | "WebkitBoxOrient" | "WebkitLineClamp" | "overflow"> {
    children: ReactNode;
    type?: TextType;
    maxLine?: number;
    alignment?: TextAlignment;
    [key: string]: any;
}
export declare function Text(p: TextProperties): import("react/jsx-runtime").JSX.Element;
