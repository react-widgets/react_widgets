import { ReactNode, useContext, useLayoutEffect, useRef } from "react";
import { SizedConnectionContext, SizedConnectionListener } from "./SizedConnection";
import { IntrinsicSize } from "@web-package/utility";
import { Box } from "./Box";

/**
 * Signature for the function that is called when the intrinsic and viewport size of the `SizedMaster` component
 * changes, handling an additional layout phase for the `SizedSlaver` components.
 */
export type SizedSlaverCallback = (size: IntrinsicSize, element: HTMLElement) => void;

/**
 * This widget is used to imperatively resolve situations where, due to the lack of
 * dependencies, size changes and reflows do not occur based on certain elements
 * that perform independent layout calculations.
 * 
 * Used with `SizedConnection` and `SizedMaster` widgets.
 */
export function SizedSlaver({onLayout, children}: {
    onLayout: SizedSlaverCallback,
    children: ReactNode,
}) {
    const controller = useContext(SizedConnectionContext);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const callback: SizedConnectionListener = (size) => {
            onLayout(size, wrapperRef.current.firstElementChild as HTMLElement);
        }

        controller.addListener(callback);
        return () => controller.removeListener(callback);
    }, []);

    return <Box ref={wrapperRef} display="contents" children={children} />;
}