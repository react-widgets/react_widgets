import { FunctionComponent, Ref } from "react";
export declare namespace Scrollable {
    interface Properties {
        ref?: Ref<HTMLElement>;
        children: JSX.Element;
        scrollbar?: boolean;
    }
    const Vertical: FunctionComponent<Properties>;
    const Horizontal: FunctionComponent<Properties>;
}
