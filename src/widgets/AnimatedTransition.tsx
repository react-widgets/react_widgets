import { CSSProperties, ReactNode, useLayoutEffect, useRef, useState } from "react";
import { DeepOmit, DurationUnit, MeasuredSize } from "../types";
import { ConditionalRender } from "./ConditionalRender";
import { Box } from "./Box";

/** Signature for the types that defines a transition animation about `AnimatedTransition` widget. */
export type AnimatedTransitionAnimation = {
    duration?: DurationUnit;
    fadeIn: string | {from: CSSProperties, to: CSSProperties};
    fadeInDuration?: DurationUnit;
    fadeOut: string | {from?: CSSProperties, to: CSSProperties};
    fadeOutDuration?: DurationUnit;
}

/**
 * This widget is used to animate transitions between different states of child elements. 
 * A `value` can be optionally provided to explicitly trigger a transition when the value changes. 
 * If no `value` is provided, transitions are based on changes in the child elements.
 *
 * @param {T} value - Optional trigger key that indicates when a transition should occur.
 *                    If not provided, the transition is based on the change of `children`.
 */
export function AnimatedTransition<T = any>({value, style, animation, children}: {
    /** This property value is trigger key. */
    value?: T;
    style?: DeepOmit<CSSProperties, "position">;
    animation: AnimatedTransitionAnimation;
    children: ReactNode;
}) {
    // If not given a separate key, refer to children to define the change.
    const key = value ?? children;

    // This ref hook that defines a count value to give each a unique ID of an element.
    const countRef = useRef(0);

    // This ref hook that defines the unique state of an element.
    const statesRef = useRef([{key, id: countRef.current}]);
    const states = statesRef.current;

    // This state that defines the unique identifiers for a state update.
    const [_, setState] = useState(0);

    // A change in the current key means that the child has been updated.
    if (states.length != 0 && states[states.length - 1].key !== key) {
        states.push({key: key, id: countRef.current += 1});
    }

    return (
        <div style={{...{position: "relative"}, ...style}}>
            {states.map((state, index) => {
                return (
                    <AnimatedTransitionRender
                        key={state.id}
                        value={state.key}
                        first={state.id == 0}
                        latest={index == states.length - 1}
                        children={children}
                        animation={animation}
                        onDetach={() => {
                            statesRef.current = statesRef.current.filter(e => e.id !== state.id);
                            setState(v => v + 1);
                        }}
                    />
                )
            })}
        </div>
    )
}

export function AnimatedTransitionRender<T = any>({value, first, latest, children, onDetach, animation}: {
    value: T;
    first: boolean;
    latest: boolean;
    children: ReactNode;
    onDetach: VoidFunction;
    animation: AnimatedTransitionAnimation;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const previousSizeRef = useRef<MeasuredSize>({width: 0, height: 0});

    console.assert(
        animation.duration != null || animation.fadeInDuration != null,
        "A given not exists a duration of the fade-in animation. therefore, " +
        "you should defines the value of the `duration` or `fadeInDuration`."
    );

    console.assert(
        animation.duration != null || animation.fadeOutDuration != null,
        "A given not exists a duration of the fade-out animation. therefore, " +
        "you should defines the value of the `duration` or `fadeOutDuration`."
    );

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;

        if (latest) {
            const fadeInDuration = animation.fadeOutDuration ?? animation.duration;

            if (first) return;
            if (typeof animation.fadeIn == "string") { // is CSS animation
                wrapper.style.animation = `${animation.fadeIn} ${fadeInDuration}`;
            } else {
                // is CSS transition
                wrapper.style.transitionProperty = [...new Set([
                    ...Object.keys(animation.fadeIn.from),
                    ...Object.keys(animation.fadeIn.to)
                ])].join(", ");

                // from
                Object.entries(animation.fadeIn.from).forEach(([key, value]) => {
                    wrapper.style.setProperty(key, value);
                });

                requestAnimationFrame(() => {
                    wrapper.style.transitionDuration = fadeInDuration;

                    // @ts-ignore
                    Object.entries(animation.fadeIn.to).forEach(([key, value]) => {
                        wrapper.style.setProperty(key, value as string);
                    });
                })
            }
        } else {
            const fadeOutDuration = animation.fadeOutDuration ?? animation.duration;
            const size = previousSizeRef.current;

            wrapper.style.width = `${size.width}px`;
            wrapper.style.height = `${size.height}px`;

            if (typeof animation.fadeOut == "string") { // is CSS animation
                wrapper.style.animation = `${animation.fadeOut} ${fadeOutDuration}`;
                wrapper.onanimationend = onDetach;
            } else {
                // is CSS transition
                wrapper.style.transitionProperty = [...new Set([
                    ...Object.keys(animation.fadeOut.from ?? []),
                    ...Object.keys(animation.fadeOut.to)
                ])].join(", ");

                wrapper.style.transitionDuration = fadeOutDuration;
                wrapper.ontransitionend = onDetach;

                // Don't need to explicitly define the 'from' for fade-out CSS transition.
                if (animation.fadeOut.from != null) {
                    Object.entries(animation.fadeOut.from).forEach(([key, value]) => {
                        wrapper.style.setProperty(key, value);
                    });
                }

                requestAnimationFrame(() => {
                    wrapper.style.transitionDuration = fadeOutDuration;

                    // @ts-ignore
                    Object.entries(animation.fadeOut.to).forEach(([key, value]) => {
                        wrapper.style.setProperty(key, value as string);
                    });
                });
            }
        }
    }, [latest]);

    useLayoutEffect(() => {
        const observer = new ResizeObserver(entries => {
            previousSizeRef.current = {
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height,
            }
        });

        observer.observe(wrapperRef.current);

        return () => observer.disconnect();
    }, []);

    // To allow the current element to refer to the parent element size.
    const position = latest ? undefined : "absolute";

    return (
        <Box ref={wrapperRef} position={position}>
            <ConditionalRender active={!latest} value={value} children={children} />
        </Box>
    )
}