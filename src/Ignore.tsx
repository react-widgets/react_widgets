import { ReactNode } from "react";

export function Ignore({children}: {
    children: ReactNode,
}) {
    return (
        <div className="ignore" children={children} />
    )
}