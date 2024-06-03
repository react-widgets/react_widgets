import { CSSProperties } from "react";

export interface ImageProperties extends CSSProperties {
    src: string, // URL about image file.

    [key: string]: any;
}

export function Image(p: ImageProperties) {
    return <img src={p.src} style={p} />
}