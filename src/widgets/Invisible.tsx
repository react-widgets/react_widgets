import { ReactNode, useLayoutEffect, useRef } from "react";
import { Box } from "./Box";

/**
 * This widget is used under the assumption that the size of the child is explicitly known.
 * If the widget's box is not visible, it excludes the child from rendering to avoid reflow costs.
 * 
 * This can significantly improve performance in scenarios involving large amounts of UI data,
 * such as displaying vector images in UI/UX.
 */
export function Invisible({size, width, height, children, threshold = 1e-10}: {
    size?: string;
    width?: string;
    height?: string;
    threshold?: number;
    children: ReactNode;
}) {
    const wrapperRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const child = wrapper.firstElementChild as HTMLElement;

        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                // If the wrapper element is not visible, hide the child element.
                if (entry.intersectionRatio == 0) {
                    child.style.display = "none";
                } else {
                    // If the wrapper becomes visible, restore the child element display.
                    child.style.removeProperty("display");
                }
            }
        }, {threshold});

        observer.observe(wrapper);

        return () => observer.disconnect();
    }, []);

    return (
        <Box ref={wrapperRef} width={width ?? size} height={height ?? size}>
            <Box children={children} />
        </Box>
    );
}