import { Children, CSSProperties, ReactNode } from "react";
import { Scrollable } from "./Scrollable";
import { DeepOmit, SizeUnit } from "../types";

export type ColumnAlignment =
    | "bottomCenter"
    | "bottomLeft"
    | "bottomRight"
    | "center"
    | "centerLeft"
    | "centerRight"
    | "topCenter"
    | "topLeft"
    | "topRight"
    | "spaceBetweenLeft"
    | "spaceBetweenCenter"
    | "spaceBetweenRight"
    | "spaceAroundLeft"
    | "spaceAroundCenter"
    | "spaceAroundRight"
    | "spaceEvenlyLeft"
    | "spaceEvenlyCenter"
    | "spaceEvenlyRight";

export interface ColumnProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "alignItems" | "alignContent" | "justifyContent"> {
    className?: string;
    children?: ReactNode;
    paddingAndGap?: SizeUnit;
    reverse?: any;
    wrap?: any;
    size?: SizeUnit;
    scrollable?: any;
    align?: ColumnAlignment;

    [key: string]: any;
}

export function Column(p: ColumnProperties) {
    const align = p.align;
    const style: CSSProperties = {...p, ...{
        flexDirection: p.reverse ? "column-reverse" : undefined,
        flexWrap: p.wrap ? "wrap" : undefined,
    } as CSSProperties};

    if (p.size) {
        console.assert(p.width == null, "The `width` cannot be defined when defining the `size`.");
        console.assert(p.height == null, "The `height` cannot be defined when defining the `size`.");
        style.width = p.size;
        style.height = p.size;
    }

    if (p.paddingAndGap) {
        console.assert(p.padding == null, "The `padding` cannot be defined when defining the `paddingAndGap`.");
        console.assert(p.gap == null, "The `gap` cannot be defined when defining the `paddingAndGap`.");
        style.padding = p.paddingAndGap;
        style.gap = p.paddingAndGap;
    }

    // BOTTOM RELATED
    if (align == "bottomCenter") {
        style.alignItems = "center";
        style.alignContent = "center",
        style.justifyContent = "end";
    } else if (align == "bottomLeft") {
        style.alignItems = "start";
        style.alignContent = "start";
        style.justifyContent = "end";
    } else if (align == "bottomRight") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "end";
    } else

    // CENTER RELATED
    if (align == "center") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "center";
    } else if (align == "centerLeft") {
        style.alignItems = "start";
        style.alignContent = "start";
        style.justifyContent = "center";
    } else if (align == "centerRight") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "center";
    } else

    // TOP RELATED
    if (align == "topCenter") {
        style.alignItems = "center";
        style.alignContent = "center";
    } else if (align == "topLeft") {
        style.alignItems = "left";
        style.alignContent = "left";
    } else if (align == "topRight") {
        style.alignItems = "right";
        style.alignContent = "right";
    } else

    // SPACE BETWEEN
    if (align == "spaceBetweenLeft") {
        style.justifyContent = "space-between";
    } else if (align == "spaceBetweenCenter") {
        style.alignContent = "center";
        style.justifyContent = "space-between";
    } else if (align == "spaceBetweenRight") {
        style.alignContent = "end";
        style.justifyContent = "space-between";
    } else

    // SPACE AROUND
    if (align == "spaceAroundLeft") {
        style.justifyContent = "space-between";
    } else if (align == "spaceAroundCenter") {
        style.alignContent = "center";
        style.justifyContent = "space-around";
    } else if (align == "spaceAroundRight") {
        style.alignContent = "end";
        style.justifyContent = "space-around";
    } else

    // SPACE AROUND
    if (align == "spaceEvenlyLeft") {
        style.justifyContent = "space-evenly";
    } else if (align == "spaceEvenlyCenter") {
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-evenly";
    } else if (align == "spaceEvenlyRight") {
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-evenly";
    }

    return <widget-column className={p.className} style={style} children={p.children} />
}