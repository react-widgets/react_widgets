import { ReactNode } from "react";
import { MeasuredSize } from "../types";
/**
 * Signature for the callback function of a measured size about width, height
 * for target element about `Layout` widget.
 */
export type LayoutCallback = (size: MeasuredSize, element: HTMLElement) => void;
export declare function Layout({ before, behind, children }: {
    before?: LayoutCallback;
    behind?: LayoutCallback;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
