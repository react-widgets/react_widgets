import { CSSProperties, ReactNode } from "react";
import { DeepOmit, DurationUnit } from "../types";
/** Signature for the types that defines a transition animation about `AnimatedTransition` widget. */
export type AnimatedTransitionAnimation = {
    duration?: DurationUnit;
    fadeIn: string | {
        from: CSSProperties;
        to: CSSProperties;
    };
    fadeInDuration?: DurationUnit;
    fadeOut: string | {
        from?: CSSProperties;
        to: CSSProperties;
    };
    fadeOutDuration?: DurationUnit;
};
/**
 * This widget is used to animate transitions between different states of child elements.
 * A `value` can be optionally provided to explicitly trigger a transition when the value changes.
 * If no `value` is provided, transitions are based on changes in the child elements.
 *
 * @param {T} value - Optional trigger key that indicates when a transition should occur.
 *                    If not provided, the transition is based on the change of `children`.
 */
export declare function AnimatedTransition<T = any>({ value, style, animation, children }: {
    /** This property value is trigger key. */
    value?: T;
    style?: DeepOmit<CSSProperties, "position">;
    animation: AnimatedTransitionAnimation;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function AnimatedTransitionRender<T = any>({ value, first, latest, children, onDetach, animation }: {
    value: T;
    first: boolean;
    latest: boolean;
    children: ReactNode;
    onDetach: VoidFunction;
    animation: AnimatedTransitionAnimation;
}): import("react/jsx-runtime").JSX.Element;
