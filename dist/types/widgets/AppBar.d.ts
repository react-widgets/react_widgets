import { ReactNode } from "react";
export interface AppBar {
    alignment?: AppBarAlignment;
    component: ReactNode;
}
export declare enum AppBarAlignment {
    scroll = "scroll",
    center = "center",
    absolute = "absolute"
}
export declare class AppBarPosition {
    offset: number;
    minExtent: number;
    maxExtent: number;
    constructor(initialOffset?: number);
    consume(delta: number): void;
}
export declare function AppBarConnection({ appbars, children }: {
    appbars: AppBar[];
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
