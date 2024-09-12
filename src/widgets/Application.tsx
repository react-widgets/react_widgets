import { FunctionComponent, ReactElement, ReactNode } from "react";

export interface ScaffoldProperties {
    element?: ReactElement,
    children?: ReactNode,
    component?: FunctionComponent,
}

export function Scaffold({element, component, children}: ScaffoldProperties) {
    console.assert(element != null && component == null);
    console.assert(element != null && children == null);
    console.assert(component != null && element == null);
    console.assert(component != null && children == null);
    console.assert(children != null && element == null);
    console.assert(children != null && component == null);
    return element ?? component ?? children;
}