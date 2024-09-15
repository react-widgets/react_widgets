import { ReactNode } from "react";
import { IntrinsicSize } from "@web-package/utility";
/**
 * Signature for the function that is called when the intrinsic and viewport size of the `SizedMaster` component
 * changes, handling an additional layout phase for the `SizedSlaver` components.
 */
export type SizedSlaverCallback = (size: IntrinsicSize, element: HTMLElement) => void;
/**
 * This widget is used to imperatively resolve situations where, due to the lack of
 * dependencies, size changes and reflows do not occur based on certain elements
 * that perform independent layout calculations.
 *
 * Used with `SizedConnection` and `SizedMaster` widgets.
 */
export declare function SizedSlaver({ onLayout, children }: {
    onLayout: SizedSlaverCallback;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
