import { ReactNode } from "react";
export type ExpandedDirection = "vertical" | "horizontal";
export declare function Expanded({ direction, children }: {
    direction: ExpandedDirection;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
