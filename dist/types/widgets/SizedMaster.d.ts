import { BoxProperties } from "./Box";
import { DeepOmit } from "../types";
/**
 * This widget is used to imperatively resolve situations where, due to the lack of
 * dependencies, size changes and reflows do not occur based on certain elements
 * that perform independent layout calculations.
 *
 * Used with `SizedConnection` and `SizedSlaver` widgets.
 */
export declare function SizedMaster(props: DeepOmit<BoxProperties, "ref">): import("react/jsx-runtime").JSX.Element;
