import { ReactNode } from "react";
/**
 * This widget is used under the assumption that the size of the child is explicitly known.
 * If the widget's box is not visible, it excludes the child from rendering to avoid reflow costs.
 *
 * This can significantly improve performance in scenarios involving large amounts of UI data,
 * such as displaying vector images in UI/UX.
 */
export declare function Invisible({ size, width, height, children, threshold }: {
    size?: string;
    width?: string;
    height?: string;
    threshold?: number;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
