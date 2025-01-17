import { CSSProperties, forwardRef, FunctionComponent, LegacyRef, ReactNode, Ref } from "react";
import { DeepOmit, SizeUnit } from "../types";

export interface GridProperties extends DeepOmit<CSSProperties, "display" | "gridTemplateColumns" | "padding" | "margin"> {
    ref?: Ref<HTMLElement>;
    className?: string;
    children?: ReactNode;
    rowCount: number;
    gap?: SizeUnit;
    verticalGap?: string;
    horizontalGap?: string;
    padding?: string;
    margin?: string;

    [key: string]: any;
}

export const Grid = forwardRef<HTMLElement, GridProperties>((p, ref) => {
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
        <widget-grid ref={ref as LegacyRef<HTMLDivElement>} className={p.className} style={style} children={p.children} />
    )
}) as FunctionComponent<GridProperties>;
