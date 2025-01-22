import { ReactNode } from "react";

/** This widget explicitly disables other gestures and actions in widgets such as `TabNavigation`. */
export function Ignore({children}: {children: ReactNode}) {
    return <div className="ignore" children={children} />;
}