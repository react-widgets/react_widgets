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
                if (entry.intersectionRatio == 0) {
                    const _width = width ?? size;
                    const _height = height ?? size;

                    // Avoid calling the computedStyle function if a intrinsic size of
                    // a explicitly unique child element is already provided.
                    if (_width != null && _height != null) {
                        wrapper.style.width = _width;
                        wrapper.style.height = _height;
                    } else {
                        const intrinsicSize = ElementUtil.intrinsicSizeOf(wrapper.firstElementChild);
                        wrapper.style.width = `${intrinsicSize.width}px`;
                        wrapper.style.height = `${intrinsicSize.height}px`;
                    }

                    wrapper.setAttribute("active", "");
                } else {
                    // If the wrapper becomes visible, restore the child element display.
                    wrapper.removeAttribute("active");
                }
            }
        }, {threshold});

        observer.observe(wrapper);

        return () => observer.disconnect();
    }, []);

    return (
        <widget-invisible ref={wrapperRef} children={children} />
    );
}