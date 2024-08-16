import { ReactWidgets } from "../types";

export class ReactWidgetsBinding {
    private static _instance: ReactWidgetsBinding;
    private constructor() {}

    static get instance(): ReactWidgetsBinding {
        return this._instance ?? (this._instance = new ReactWidgetsBinding());
    }

    static default: ReactWidgets.Option = {
        useStrict: true,
    }

    /** Sets the current react-widgets option values. */
    set currentOption(value: Partial<ReactWidgets.Option>) {
        ReactWidgets.REACT_WIDGETS_OPTION = value;
    }

    optionValueOf(name: keyof ReactWidgets.Option) {
        return ReactWidgets.REACT_WIDGETS_OPTION[name] ?? ReactWidgetsBinding.default[name];
    }

    initialize() {
        if (this.optionValueOf("useStrict")) {
            const sheet = new CSSStyleSheet();
            sheet.insertRule("div { flex-shrink: 0; }");
    
            document.adoptedStyleSheets = [sheet];
        }
    }
}