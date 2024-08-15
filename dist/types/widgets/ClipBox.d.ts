import { CSSProperties, ReactNode, Ref } from "react";
import { DeepOmit } from "../types";
export interface ClipBoxProperties extends DeepOmit<CSSProperties, "display" | "overflow"> {
    refer?: Ref<HTMLDivElement>;
    className?: string;
    children: ReactNode;
    [key: string]: any;
}
export declare function ClipBox(p: ClipBoxProperties): import("react/jsx-runtime").JSX.Element;
