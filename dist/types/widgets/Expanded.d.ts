import { ReactNode } from "react";
/** Signature for the type of a direction for Expanded widget. */
export type ExpandedDirection = "vertical" | "horizontal";
/**
 * A widget that adapts to fill the remaining space within its parent container.
 * This component adjusts its size based on the available space left after
 *
 * considering other siblings within the same parent element.
 * It supports both vertical and horizontal directions.
 *
 * See Also, Primarily used to resolve issues with inheriting the parent size as is.
*/
export declare function Expanded({ direction, children }: {
    direction: ExpandedDirection;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
