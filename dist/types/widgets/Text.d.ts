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
export declare namespace Text {
    type P = DeepOmit<TextProperties, "type">;
    export function h1(p: P): import("react/jsx-runtime").JSX.Element;
    export function h2(p: P): import("react/jsx-runtime").JSX.Element;
    export function h3(p: P): import("react/jsx-runtime").JSX.Element;
    export function h4(p: P): import("react/jsx-runtime").JSX.Element;
    export function h5(p: P): import("react/jsx-runtime").JSX.Element;
    export function h6(p: P): import("react/jsx-runtime").JSX.Element;
    export function a(p: P): import("react/jsx-runtime").JSX.Element;
    export function p(p: P): import("react/jsx-runtime").JSX.Element;
    export function span(p: P): import("react/jsx-runtime").JSX.Element;
    export {};
}
