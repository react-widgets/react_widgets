import { ReactNode } from "react";
import { IntrinsicSize } from "@web-package/utility";
/**
 * Signature for the function that is called when the intrinsic and viewport size of the `SizedMaster` component
 * changes, handling an additional layout phase for the `SizedSlaver` components.
 */
export type SizedSlaverCallback = (size: IntrinsicSize, element: HTMLElement) => void;
/**
 * This widget is used to resolve the issue where one element's size change causes another
 * element to undergo reflow, leading to delays in operations such as animations,
 * due to the strong dependency between two elements with high reflow costs.
 *
 * Used with `SizedConnection` and `SizedMaster` widgets.
 */
export declare function SizedSlaver({ onLayout, children }: {
    onLayout: SizedSlaverCallback;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
