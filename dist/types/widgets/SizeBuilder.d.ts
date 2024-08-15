import { ReactNode } from "react";
/** Signature for a factory function of a react-node about display size. */
export type SizedBuilder = (width: number, height: number) => ReactNode;
export declare namespace SizeBuilder {
    /**
     * Signature for the object that is defining required properties
     * in about `SizeBuilder` foundation.
     */
    type Properties = {
        builder: SizedBuilder;
    };
    /**
     * Based on and measuring browser viewport of the user.
     *
     * See Also, this widget is not an issue for building a flexible responsive UI unless
     * it is a specific situation.
     */
    function Viewport({ builder }: Properties): import("react/jsx-runtime").JSX.Element;
    function Parent({ builder }: Properties): void;
}
