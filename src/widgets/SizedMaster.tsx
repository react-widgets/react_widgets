import { HTMLProps, ReactNode, useContext, useLayoutEffect, useRef } from "react";
import { Box, BoxProperties } from "./Box";
import { SizedConnectionContext } from "./SizedConnection";
import { ElementUtil } from "@web-package/utility";
import { DeepOmit } from "../types";



/**
 * This widget is used to resolve the issue where one element's size change causes another
 * element to undergo reflow, leading to delays in operations such as animations,
 * due to the strong dependency between two elements with high reflow costs.
 * 
 * Used with `SizedConnection` and `SizedSlaver` widgets.
 */
export function SizedMaster(props: DeepOmit<BoxProperties, "ref" | "position">) {
    const controller = useContext(SizedConnectionContext);
    const wrapperRef = useRef<HTMLDivElement>(null);

    console.assert(
        controller != null,
        "The `SizedConnection` component does not exist among the ancestor components of this `SizedMaster` component, " +
        "Therefore you need to insert a `SizedConnection` component into ancestor tree of the `SizedMaster` component."
    );

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const target = wrapper.firstElementChild as HTMLElement;

        // Called when a intrinsic and viewport size of an element changed.
        const observer = new ResizeObserver(() => {
            controller?.notifyListeners(ElementUtil.intrinsicSizeOf(target));
        });

        observer.observe(target, {box: "border-box"});

        return () => observer.disconnect();
    }, []);

    return <Box ref={wrapperRef} position="absolute" {...props} />
}