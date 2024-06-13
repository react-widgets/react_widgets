import { ReactNode, useLayoutEffect, useReducer, useState } from "react"
import { AnimatedSize } from "./AnimatedSize";
import { Row } from "./Row";

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
        console.assert(!this._listeners.includes(callback), "Already not registered a given listener.")
        this._listeners = this._listeners.filter(l => l != callback);
    }
    
    notifyListeners(event: AnimatedPageEvent) {
        this._listeners.forEach(l => l(event));
    }
}

export function AnimatedPage({children, controller, behavior}: {
    children: ReactNode,
    controller: AnimatedPageController,
    behavior: AnimatedPageBehavior,
}) {
    const reducer = (states: ReactNode[], {type, target}: { type: string; target?: ReactNode }) => {
        if (type == "push") {
            return [...states, target];
        } else {
            if (states.length == 1) {
                throw new Error("Can't more pages to pop because pages is one.");
            } else {
                return states.splice(0, states.length - 1);
            }
        }
    };
    const [pages, setPages] = useReducer(reducer, [children]);

    useLayoutEffect(() => { // init state.
        let listener: AnimatedPageListener;
        controller.addListeners(listener = event => {
            if (event.type == "push") {
                return setPages({type: "push", target: event.target});
            }
            
            if (event.type == "pop") {
                return setPages({type: "pop"});
            }
        });
        
        return controller.removeListener(listener);
    }, []);

    return (
        <AnimatedSize duration={behavior.duration}>
            <Row children={pages[pages.length - 1]} />
        </AnimatedSize>
    )
}