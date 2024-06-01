import { CSSProperties, ReactNode } from "react";

export interface RowProperties extends Omit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    children?: ReactNode,
    gap?: string,
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
}

export function Row(p: RowProperties) {
    const style: CSSProperties = {...p, ...{
        display: "flex",
        flexDirection: p.reverse != null ? "row-reverse" : "row",
        flexWrap: p.wrap != null ? "wrap" : undefined,
        gap: p.gap,
    }};

    if (p.wrap && p.scrollable) {
        throw new Error("wrap and scrollable.");
    }

    // BOTTOM RELATED
    if (p.bottomCenter) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end",
        style.justifyContent = "center";
    } else if (p.bottomLeft) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "left";
    } else if (p.bottomRight) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "right";
    } else if (p.bottomSpaceBetween) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-between";
    } else if (p.bottomSpaceAround) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-around";
    } else if (p.bottomSpaceEvenly) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-evenly";
    } else

    // CENTER RELATED
    if (p.center) {
        console.log("sdfdsfsdfs");
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "center";
    } else if (p.centerLeft) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "left";
    } else if (p.centerRight) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "right";
    } else if (p.centerSpaceBetween) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-between";
    } else if (p.centerSpaceAround) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-around";
    } else if (p.centerSpaceEvenly) {
        style.height = "100%";
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

    return (
        <div style={style}>{p.children}</div>
    )
}