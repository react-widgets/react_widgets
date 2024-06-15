import { ReactNode, Ref, useLayoutEffect, useReducer, useRef, useState } from "react"
import { AnimatedSize } from "./AnimatedSize";
import { Row } from "./Row";
import { Box } from "./Box";

export type AnimatedPageListener = (event: AnimatedPageEvent) => void;

export interface AnimatedPageEvent {
    type: "push" | "pop";
    target?: ReactNode;
}

export interface AnimatedPageBehavior {
    fadeInKeyframeName: string,
    fadeInTimeFunction?: string,
    fadeOutKeyframeName: string,
    fadeOutTimeFunction?: string,
    duration: string,
}

/** Manages an animated-page widget from the outside imperatively. */
export class AnimatedPageController {
    private _listeners: AnimatedPageListener[] = [];

    push(component: ReactNode) {
        this.notifyListeners({type: "push", target: component});
    }

    pop() {
        this.notifyListeners({type: "pop"})
    }

    addListeners(callback: AnimatedPageListener) {
        console.assert(!this._listeners.includes(callback), "Already registered a given listener.");
        this._listeners.push(callback);
    }

    removeListener(callback: AnimatedPageListener) {
        console.assert(this._listeners.includes(callback), "Already not registered a given listener.")
        this._listeners = this._listeners.filter(l => l != callback);
    }
    
    notifyListeners(event: AnimatedPageEvent) {
        this._listeners.forEach(l => l(event));
    }
}

export class AnimatedPageElement extends HTMLElement {
    connectedCallback() {

    }
}

export enum AnimatedPageStatus {
    none,
    push,
    pop,
}

export function AnimatedPage({children, controller, pushBehavior, popBehavior}: {
    children: ReactNode,
    controller: AnimatedPageController,
    pushBehavior: AnimatedPageBehavior,
    popBehavior: AnimatedPageBehavior,
}) {
    const cpRef = useRef<HTMLDivElement>(null); // is current page.
    const rpRef = useRef<HTMLDivElement>(null); // is reference page.
    const [pages, setPages] = useState<ReactNode[]>([children]);
    const [status, setStatus] = useState(AnimatedPageStatus.none);

    useLayoutEffect(() => { // init state.
        let listener: AnimatedPageListener;
        controller.addListeners(listener = event => {
            if (event.type == "push") {
                return setStatus(AnimatedPageStatus.push), setPages([...pages, event.target]);
            }
            
            if (event.type == "pop") {
                return setStatus(AnimatedPageStatus.pop);
            }
        });
        
        return () => controller.removeListener(listener);
    }, []);

    useLayoutEffect(() => {
        const cPage = cpRef.current;
        const rPage = rpRef.current?.firstElementChild as HTMLElement;

        if (status == AnimatedPageStatus.none) return;
        if (status == AnimatedPageStatus.push) {
            const behavior = pushBehavior;
            cPage.style.animation = `${behavior.fadeInKeyframeName} ${behavior.duration}`;
            rPage.style.animation = `${behavior.fadeOutKeyframeName} ${behavior.duration}`;
            cPage.style.animationFillMode = "forwards";
            rPage.style.animationFillMode = "forwards";
        } else {
            const behavior = popBehavior;
            cPage.style.animation = `${behavior.fadeInKeyframeName} ${behavior.duration}`;
            rPage.style.animation = `${behavior.fadeOutKeyframeName} ${behavior.duration}`;
            cPage.style.animationFillMode = "forwards";
            rPage.style.animationFillMode = "forwards";
            rPage.onanimationend = () => setPages(pages.splice(0, pages.length - 1));
        }
    }, [status]);

    return (
        <AnimatedSize duration={pushBehavior.duration}>
            <Row position="relative" children={pages.map((page, i) => {
                if (status == AnimatedPageStatus.none || pages.length == 1) return page;
                if (status == AnimatedPageStatus.push) {
                    if (i != pages.length - 1) {
                        return <Ghost key={i} refer={rpRef} children={page} />
                    } else {
                        return <div key={i} ref={cpRef}>{page}</div>;
                    }
                } else {
                    if (i == pages.length - 2) {
                        return <div key={i} ref={cpRef}>{page}</div>;
                    } else {
                        return <Ghost key={i} refer={rpRef}>{page}</Ghost>
                    }
                }
            })} />
        </AnimatedSize>
    )
}

function Ghost({refer, children}: {
    refer: Ref<HTMLDivElement>
    children: ReactNode,
}) {
    return (
        <Box refer={refer} position="absolute" width="0px" height="0px">
            <Box minWidth="max-content" maxWidth="max-content" children={children} />
        </Box>
    )
}