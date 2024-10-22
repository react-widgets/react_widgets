import { ElementUtil } from "@web-package/utility";
import { ReactNode, useLayoutEffect, useRef } from "react";

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
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                // If the wrapper element is not visible, hide the child element.
                // And, if the wrapper becomes visible, restore the child element display.
                entry.intersectionRatio == 0
                    ? wrapper.setAttribute("active", "")
                    : wrapper.removeAttribute("active");
            }
        }, {threshold});

        observer.observe(wrapper);

        return () => observer.disconnect();
    }, []);
    
    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const _width = width ?? size;
        const _height = height ?? size;

        const observer = new ResizeObserver(() => {
            // Avoid calling the computedStyle function if a intrinsic size of
            // a explicitly unique child element is already provided.
            if (_width != null && _height != null) {
                wrapper.style.width = _width;
                wrapper.style.height = _height;
            } else {
                const intrinsicSize = ElementUtil.intrinsicSizeOf(wrapper.firstElementChild);
                wrapper.style.width = `${_width ?? intrinsicSize.width}px`;
                wrapper.style.height = `${_height ?? intrinsicSize.height}px`;
            }
        });

        observer.observe(wrapper.firstElementChild, {box: "border-box"});

        return () => {
            observer.disconnect();
        }
    }, [size, width, height]);

    return (
        <widget-invisible ref={wrapperRef} children={children} />
    );
}