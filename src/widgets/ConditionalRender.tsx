import { memo, ReactNode } from "react";

/**
 * This component conditionally renders its children. It is memoized using React.memo
 * and only re-renders when the `value` prop changes. If the `value` remains the same 
 * between renders, the component skips re-rendering, optimizing performance.
 */
export const ConditionalRender = memo((props: {value: any, children: ReactNode}) => {
    return props.children;
}, (previous, current) => {
    return previous.value === current.value;
});