import { ReactNode, useLayoutEffect, useRef, useState } from "react"
import { AnimatedSize } from "./AnimatedSize";
import { Row } from "./Row";
import { Box } from "./Box";

export type AnimatedPageListener = (event: AnimatedPageEvent) => void;

export interface AnimatedPageEvent {
    type: "push" | "pop" | "clear";
    target?: ReactNode;
}

/** Manages an animated-page widget from the outside imperatively. */
export class AnimatedPageController {
    private _listeners: AnimatedPageListener[] = [];

    push(component: ReactNode) {
        this.notifyListeners({type: "push", target: component});
    }

    pop() {
        this.notifyListeners({type: "pop"});
    }

    clear() {
        this.notifyListeners({type: "clear"});
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

export enum AnimatedPageStatus {
    none,
    push,
    pop,
    clear,
}

export function AnimatedPage({children, controller, duration, opacityEffect = false, maxWidth}: {
    children: ReactNode,
    controller: AnimatedPageController,
    duration: string,
    opacityEffect?: boolean,
    maxWidth?: string
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

            if (event.type == "clear") {
                return setStatus(AnimatedPageStatus.clear), setPages([pages[0]]);
            }
        });
        
        return () => controller.removeListener(listener);
    }, []);

    useLayoutEffect(() => {
        const cPage = cpRef.current?.getElementsByClassName("ghost-inner")[0] as HTMLElement;
        const rPage = rpRef.current?.getElementsByClassName("ghost-inner")[0] as HTMLElement;

        const cRect = cPage?.getBoundingClientRect();
        const rRect = rPage?.getBoundingClientRect();

        if (status == AnimatedPageStatus.none) return;
        if (status == AnimatedPageStatus.push) {
            cPage.style.transform = `translate(${rRect.width}px, 0px)`;
            cPage.getBoundingClientRect(); // reflowed
            cPage.style.transform = "translate(0px, 0px)";
            cPage.style.transitionProperty = "opacity, transform";
            cPage.style.transitionDuration = duration;

            rPage.style.transform = "translate(0px, 0px)";
            rPage.getBoundingClientRect(); // reflowed
            rPage.style.transform = `translate(-${cRect.width - (cRect.width - rRect.width)}px, 0px)`;
            rPage.style.transitionProperty = "opacity, transform";
            rPage.style.transitionDuration = duration;
        } else if (status == AnimatedPageStatus.pop) {
            cPage.style.transform = `translate(${rRect.width}px, 0px)`;
            cPage.getBoundingClientRect(); // reflowed
            cPage.style.transform = "translate(0px, 0px)";
            cPage.style.transitionProperty = "opacity, transform";
            cPage.style.transitionDuration = duration;
            cPage.ontransitionend = () => {
                cPage.ontransitionend = null;
                setPages(pages.splice(0, pages.length - 1));
            }

            rPage.style.transform = "translate(0px, 0px)";
            rPage.getBoundingClientRect(); // reflowed
            rPage.style.transform = `translate(${cRect.width}px, 0px)`;
            rPage.style.transitionProperty = "opacity, transform";
            rPage.style.transitionDuration = duration;
        } else {
            cPage?.removeAttribute("style");
        }
    }, [status]);

    return (
        <AnimatedSize duration={duration}>
            <Row position="relative" children={pages.map((page, i) => {
                let isCurrentPage = (status == AnimatedPageStatus.push)
                    ? i == pages.length - 1
                    : i == pages.length - 2

                // To keep alive for a page component state.
                if (pages.length == 1) isCurrentPage = true;

                return (
                    <AnimatedPagePlace
                        key={i}
                        refer={isCurrentPage ? cpRef : rpRef}
                        ghost={isCurrentPage == false}
                        children={<Box maxWidth={maxWidth}>{page}</Box>}
                    />
                )
            })} />
        </AnimatedSize>
    )
}

function AnimatedPagePlace({refer, ghost, children}: {
    refer: React.MutableRefObject<HTMLDivElement>,
    ghost: boolean,
    children: ReactNode,
}) {
    useLayoutEffect(() => {
        const wrapper = refer.current;
        const wrapperInner = wrapper.firstElementChild as HTMLElement;

        if (ghost) {
            wrapper.style.position = "absolute";
            wrapper.style.width = "0px";
            wrapper.style.height = "0px";
            wrapperInner.style.minWidth = "max-content";
            wrapperInner.style.maxWidth = "max-cotnent";
        } else {
            wrapper.removeAttribute("style");
        }
    }, [ghost]);

    return (
        <div ref={refer}>
            <div className="ghost-inner" children={children} />
        </div>
    )
}