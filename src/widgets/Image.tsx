import { CSSProperties } from "react";

export interface ImageProperties extends CSSProperties {
    src: string, // URL about image file.
    className?: string,

    [key: string]: any;
}

export function Image(p: ImageProperties) {
    return <img className={p.className} src={p.src} style={p} />
}