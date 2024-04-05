
/** @param {{gap: string, reverse: boolean}} */
export function Column({children, gap, reverse = false}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: reverse ? "column-reverse" : "column",
            gap: gap,
        }}>{children}</div>
    )
}