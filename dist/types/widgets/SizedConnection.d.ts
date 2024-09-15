import { IntrinsicSize } from "@web-package/utility";
import { ReactNode } from "react";
export declare const SizedConnectionContext: import("react").Context<SizedConnectionBinding>;
export type SizedConnectionListener = (size: IntrinsicSize) => void;
export declare class SizedConnectionBinding {
    private listeners;
    addListener(listener: SizedConnectionListener): void;
    removeListener(listener: SizedConnectionListener): void;
    notifyListeners(size: IntrinsicSize): void;
}
/**
 * This widget is used to resolve the issue where one element's size change causes another
 * element to undergo reflow, leading to delays in operations such as animations,
 * due to the strong dependency between two elements with high reflow costs.
 *
 * Used with `SizedMaster` and `SizedSlaver` widgets.
 */
export declare function SizedConnection({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
