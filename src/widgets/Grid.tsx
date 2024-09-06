import { CSSProperties, ReactNode } from "react";
import { DeepOmit, SizeUnit } from "../types";

export interface GridProperties extends DeepOmit<CSSProperties, "display" | "gridTemplateColumns" | "padding" | "margin"> {
    children?: ReactNode,
    rowCount: number,
    gap?: SizeUnit,
    verticalGap?: string,
    horizontalGap?: string,
    padding?: string,
    margin?: string,

    [key: string]: any;
}

export function Grid(p: GridProperties) {
    const style: CSSProperties = {...p, ...{ // given style + automatic and required style
        gridTemplateColumns: Array.from({length: p.rowCount}, () => "1fr").join(" "),
        padding: p.padding,
        margin: p.margin,
    } as CSSProperties};

    if (p.gap != null) {
        style.gap = p.gap;
    } else if (p.verticalGap != null) {
        style.rowGap = p.verticalGap;
    } else if (p.horizontalGap != null) {
        style.columnGap = p.horizontalGap;
    }

    return (
        /** @ts-ignore */
        <widget-grid style={style} children={p.children} />
    )
}