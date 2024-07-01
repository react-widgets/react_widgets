import { CSSProperties, ReactNode } from "react";
import { Scrollable } from "./Scrollable";
import { FlexOmit, SizeUnit } from "./types";

export interface RowProperties extends FlexOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    className?: string,
    children?: ReactNode,
    gap?: SizeUnit,
    reverse?: any,
    wrap?: any,
    scrollable?: any,

    bottomCenter?: any,
    bottomLeft?: any,
    bottomRight?: any,
    bottomSpaceBetween?: any,
    bottomSpaceAround?: any,
    bottomSpaceEvenly?: any,
    center?: any,
    centerLeft?: any,
    centerRight?: any,
    centerSpaceBetween?: any,
    centerSpaceAround?: any,
    centerSpaceEvenly?: any,
    topCenter?: any,
    topLeft?: any,
    topRight?: any,
    topSpaceBetween?: any,
    topSpaceAround?: any,
    topSpaceEvenly?: any,

    [key: string]: any;
}

export function Row(p: RowProperties) {
    const style: CSSProperties = {...p, ...{
        display: "flex",
        flexDirection: p.reverse != null ? "row-reverse" : "row",
        flexWrap: p.wrap != null ? "wrap" : undefined,
        gap: p.gap,
    } as CSSProperties};

    // BOTTOM RELATED
    if (p.bottomCenter) {
        style.alignItems = "end";
        style.alignContent = "end",
        style.justifyContent = "center";
    } else if (p.bottomLeft) {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "left";
    } else if (p.bottomRight) {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "right";
    } else if (p.bottomSpaceBetween) {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-between";
    } else if (p.bottomSpaceAround) {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-around";
    } else if (p.bottomSpaceEvenly) {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-evenly";
    } else

    // CENTER RELATED
    if (p.center) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "center";
    } else if (p.centerLeft) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "left";
    } else if (p.centerRight) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "right";
    } else if (p.centerSpaceBetween) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-between";
    } else if (p.centerSpaceAround) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-around";
    } else if (p.centerSpaceEvenly) {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-evenly";
    } else

    // TOP RELATED
    if (p.topCenter) {
        style.justifyContent = "center";
    } else if (p.topLeft) {
        style.justifyContent = "left";
    } else if (p.topRight) {
        style.justifyContent = "right";
    } else if (p.topSpaceBetween) {
        style.justifyContent = "space-between";
    } else if (p.topSpaceAround) {
        style.justifyContent = "space-around";
    } else if (p.topSpaceEvenly) {
        style.justifyContent = "space-evenly";
    }

    const content = (
        <div className={p.className} style={style} children={p.children} />
    );

    return p.scrollable ? <Scrollable.Horizontal children={content} /> : content;
}