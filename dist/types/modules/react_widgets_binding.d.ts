import { ReactWidgets } from "../types";
export declare class ReactWidgetsBinding {
    private static _instance;
    private constructor();
    static get instance(): ReactWidgetsBinding;
    /** A global default value has been defined for this package. */
    static default: ReactWidgets.Option;
    /** Sets the current react-widgets option values. */
    set currentOption(value: Partial<ReactWidgets.Option>);
    private ids;
    getElementIdByTag(key: keyof JSX.IntrinsicElements): string;
    optionValueOf(name: keyof ReactWidgets.Option): boolean;
    initialize(): void;
    /** Initializes a required style sheet on the document. */
    initializeStyleSheet(sheet: CSSStyleSheet): void;
}
