import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { Column } from "./Column";
import { Box } from "./Box";

export interface AppBar {
    alignment?: AppBarAlignment,
    component: ReactNode
}

export enum AppBarAlignment {
    scroll = "scroll",
    center = "center",
    absolute = "absolute"
}

export class AppBarPosition {
    offset: number;
    minExtent: number = 0;
    maxExtent: number = 0;

    constructor(initialOffset: number = 0) {
        this.offset = initialOffset;
    }

    consume(delta: number) {
        let newOffset = this.offset + delta;
        if (newOffset > this.maxExtent) {
            this.offset = this.maxExtent;
            return;
        }
        if (newOffset < this.minExtent) {
            this.offset = this.minExtent;
            return;
        }

        this.offset = newOffset;
    }
}

export function AppBarConnection({appbars, children}: {
    appbars: AppBar[],
    children: ReactNode
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const appbarPositionRef = useRef<AppBarPosition>(new AppBarPosition());
    const scrollOffsetRef = useRef(window.scrollY);

    const getAppbar = () => wrapperRef.current.firstElementChild as HTMLElement;
    const getAppbarBody = () => wrapperRef.current.lastElementChild as HTMLElement;

    useLayoutEffect(() => {
        const appbar = getAppbar();
        const appbarBody = getAppbarBody();
        const appbarPosition = appbarPositionRef.current;

        const appbarRect = appbar.getBoundingClientRect();
        const appbarHeight = appbarRect.height;

        appbarPosition.maxExtent = appbarHeight;
        appbarBody.style.marginTop = `${appbarHeight}px`;
    }, []);

    useEffect(() => {
        const position = appbarPositionRef.current;

        window.addEventListener("scroll", event => {
            const oldOffset = scrollOffsetRef.current;
            const newOffset = window.scrollY;
            const relOffset = newOffset - oldOffset;

            position.consume(relOffset);
            getAppbar().style.transform = `translate(0px, -${position.offset}px)`;

            scrollOffsetRef.current = newOffset; 
        }, {passive: true});
    }, []);

    return (
        <Box display="flex" refer={wrapperRef}>
            <Box position="fixed" width="100%" willChange="transform" children={appbars.map(e => e.component)} />
            <Box>{children}</Box>
        </Box>
    )
}