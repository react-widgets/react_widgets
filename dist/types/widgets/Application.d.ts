import { FunctionComponent, ReactElement, ReactNode } from "react";
export interface ScaffoldProperties {
    element?: ReactElement;
    children?: ReactNode;
    component?: FunctionComponent;
}
export declare function Scaffold({ element, component, children }: ScaffoldProperties): string | number | boolean | ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | FunctionComponent<{}>;
