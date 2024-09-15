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
 * This widget is used to imperatively resolve situations where, due to the lack of
 * dependencies, size changes and reflows do not occur based on certain elements
 * that perform independent layout calculations.
 *
 * Used with `SizedMaster` and `SizedSlaver` widgets.
 */
export declare function SizedConnection({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
