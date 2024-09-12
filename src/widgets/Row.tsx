import { CSSProperties, ReactNode } from "react";
import { Scrollable } from "./Scrollable";
import { DeepOmit, SizeUnit } from "../types";

export type RowAlignment =
    | "bottomCenter"
    | "bottomLeft"
    | "bottomRight"
    | "bottomSpaceBetween"
    | "bottomSpaceAround"
    | "bottomSpaceEvenly"
    | "center"
    | "centerLeft"
    | "centerRight"
    | "centerSpaceBetween"
    | "centerSpaceAround"
    | "centerSpaceEvenly"
    | "topCenter"
    | "topLeft"
    | "topRight"
    | "topSpaceBetween"
    | "topSpaceAround"
    | "topSpaceEvenly"

export interface RowProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    className?: string,
    children?: ReactNode,
    paddingAndGap?: SizeUnit;
    reverse?: any,
    wrap?: any,
    size?: SizeUnit,
    align?: RowAlignment;

    [key: string]: any;
}

export function Row(p: RowProperties) {
    const align = p.align;
    const style: CSSProperties = {...p, ...{
        flexDirection: p.reverse ? "row-reverse" : undefined,
        flexWrap: p.wrap ? "wrap" : undefined,
        gap: p.gap,
    } as CSSProperties};

    if (p.size) {
        console.assert(p.width == null, "The width cannot be defined when defining the size.");
        console.assert(p.height == null, "The height cannot be defined when defining the size.");
        style.width = p.size;
        style.height = p.size;
    }

    if (p.paddingAndGap) {
        console.assert(p.padding == null, "The padding cannot be defined when defining the paddingAndGap.");
        console.assert(p.gap == null, "The gap cannot be defined when defining the paddingAndGap.");
        style.padding = p.paddingAndGap;
        style.gap = p.paddingAndGap;
    }

    // BOTTOM RELATED
    if (align == "bottomCenter") {
        style.alignItems = "end";
        style.alignContent = "end",
        style.justifyContent = "center";
    } else if (align == "bottomLeft") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "left";
    } else if (align == "bottomRight") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "right";
    } else if (align == "bottomSpaceBetween") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-between";
    } else if (align == "bottomSpaceAround") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-around";
    } else if (align == "bottomSpaceEvenly") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-evenly";
    } else

    // CENTER RELATED
    if (align == "center") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "center";
    } else if (align == "centerLeft") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "left";
    } else if (align == "centerRight") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "right";
    } else if (align == "centerSpaceBetween") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-between";
    } else if (align == "centerSpaceAround") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-around";
    } else if (align == "centerSpaceEvenly") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-evenly";
    } else

    // TOP RELATED
    if (align == "topCenter") {
        style.justifyContent = "center";
    } else if (align == "topLeft") {
        style.justifyContent = "left";
    } else if (align == "topRight") {
        style.justifyContent = "right";
    } else if (align == "topSpaceBetween") {
        style.justifyContent = "space-between";
    } else if (align == "topSpaceAround") {
        style.justifyContent = "space-around";
    } else if (align == "topSpaceEvenly") {
        style.justifyContent = "space-evenly";
    }

    return <widget-row className={p.className} style={style} children={p.children} />
}