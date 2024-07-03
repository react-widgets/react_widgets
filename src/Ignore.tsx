import { ReactNode } from "react";

export function Ignore({target = "auto", children}: {
    target?: "auto" | "TabNavigation", // The name of target component.
    children: ReactNode,
}) {
    return (
        <div className={`ignore=${target}`} children={children} />
    )
}