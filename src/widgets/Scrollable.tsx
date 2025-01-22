import { forwardRef, FunctionComponent, Ref } from "react";

export namespace Scrollable {
    export interface Properties {
        ref?: Ref<HTMLElement>;
        children: JSX.Element;
        scrollbar?: boolean;
    }

    export const Vertical = forwardRef<HTMLElement, Properties>((p, ref) => {
        const scrollbar = !(p.scrollbar ?? true);
        return <scrollable-vertical ref={ref as React.LegacyRef<HTMLDivElement>} children={p.children} {...(scrollbar && {"scrollbar-none": ""})} />;
    }) as FunctionComponent<Properties>;

    export const Horizontal = forwardRef<HTMLElement, Properties>((p, ref) => {
        const scrollbar = !(p.scrollbar ?? true);
        return <scrollable-horizontal ref={ref as React.LegacyRef<HTMLDivElement>} children={p.children} {...(scrollbar && {"scrollbar-none": ""})} />;
    }) as FunctionComponent<Properties>;
}