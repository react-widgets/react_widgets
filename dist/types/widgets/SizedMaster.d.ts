import { BoxProperties } from "./Box";
import { DeepOmit } from "../types";
/**
 * This widget is used to resolve the issue where one element's size change causes another
 * element to undergo reflow, leading to delays in operations such as animations,
 * due to the strong dependency between two elements with high reflow costs.
 *
 * Used with `SizedConnection` and `SizedSlaver` widgets.
 */
export declare function SizedMaster(props: DeepOmit<BoxProperties, "ref" | "position">): import("react/jsx-runtime").JSX.Element;
