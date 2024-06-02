import { CSSProperties, ReactNode } from "react";

export interface ColumnProperties extends Omit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    children?: ReactNode,
    gap?: string,
    reverse?: any,
    wrap?: any,

    bottomCenter?: any,
    bottomLeft?: any,
    bottomRight?: any,
    center?: any,
    centerLeft?: any,
    centerRight?: any,
    topCenter?: any,
    topLeft?: any,
    topRight?: any,
    spaceBetweenLeft?: any,
    spaceBetweenCenter?: any,
    spaceBetweenRight?: any,
    spaceAroundLeft?: any,
    spaceAroundCenter?: any,
    spaceAroundRight?: any,
    spaceEvenlyLeft?: any,
    spaceEvenlyCenter?: any,
    spaceEvenlyRight?: any,

    [key: string]: any;
}

export function Column(p: ColumnProperties) {
    const style: CSSProperties = {...p, ...{
        display: "flex",
        flexDirection: p.reverse != null ? "column-reverse" : "column",
        flexWrap: p.wrap != null ? "wrap" : undefined,
        gap: p.gap,
    } as CSSProperties};

    // BOTTOM RELATED
    if (p.bottomCenter) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center",
        style.justifyContent = "end";
    } else if (p.bottomLeft) {
        style.height = "100%";
        style.alignItems = "start";
        style.alignContent = "start";
        style.justifyContent = "end";
    } else if (p.bottomRight) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "end";
    } else

    // CENTER RELATED
    if (p.center) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "center";
    } else if (p.centerLeft) {
        style.height = "100%";
        style.alignItems = "start";
        style.alignContent = "start";
        style.justifyContent = "center";
    } else if (p.centerRight) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "center";
    } else

    // TOP RELATED
    if (p.topCenter) {
        style.alignItems = "center";
        style.alignContent = "center";
    } else if (p.topLeft) {
        style.alignItems = "left";
        style.alignContent = "left";
    } else if (p.topRight) {
        style.alignItems = "right";
        style.alignContent = "right";
    } else

    // SPACE BETWEEN
    if (p.spaceBetweenLeft) {
        style.height = "100%";
        style.justifyContent = "space-between";
    } else if (p.spaceBetweenCenter) {
        style.height = "100%";
        style.alignContent = "center";
        style.justifyContent = "space-between";
    } else if (p.spaceBetweenRight) {
        style.height = "100%";
        style.alignContent = "end";
        style.justifyContent = "space-between";
    } else

    // SPACE AROUND
    if (p.spaceAroundLeft) {
        style.height = "100%";
        style.justifyContent = "space-between";
    } else if (p.spaceAroundCenter) {
        style.height = "100%";
        style.alignContent = "center";
        style.justifyContent = "space-around";
    } else if (p.spaceAroundRight) {
        style.height = "100%";
        style.alignContent = "end";
        style.justifyContent = "space-around";
    } else

    // SPACE AROUND
    if (p.spaceEvenlyLeft) {
        style.height = "100%";
        style.justifyContent = "space-evenly";
    } else if (p.spaceEvenlyCenter) {
        style.height = "100%";
        style.alignItems = "center";
        style.alignContent = "center";
        style.justifyContent = "space-evenly";
    } else if (p.spaceEvenlyRight) {
        style.height = "100%";
        style.alignItems = "end";
        style.alignContent = "end";
        style.justifyContent = "space-evenly";
    }

    return (
        <div style={style}>{p.children}</div>
    )
}