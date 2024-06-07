import { CSSProperties, ReactNode, Ref } from "react";
import { Box } from "./Box";

export interface ClipBoxProperties {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children: ReactNode,
}

export function ClipBox(p: ClipBoxProperties) {
    return (
        <Box
            className={p.className}
            refer={p.refer}
            display="flex"
            overflow="hidden"
        >
            {p.children}
        </Box>
    )
}