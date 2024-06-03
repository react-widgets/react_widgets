import { ReactNode } from "react";

export function Expanded({children}: {
    children: ReactNode
}) {
    return <div style={{
        width: "100%",
        height: "100%"
    }}>{children}</div>
}