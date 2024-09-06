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
            sheet.insertRule('* { flex-shrink: 0; boxSizing: border-box; }');

            document.adoptedStyleSheets = [sheet];
        }

        this.initializeStyleSheet();
    }

    /** Initializes a required style sheet on the document. */
    initializeStyleSheet() {
        const sheet = new CSSStyleSheet();
        sheet.insertRule('widget-row { display: flex; flex-direction: row; }');
        sheet.insertRule('widget-column { display: flex; flex-direction: column; }');
        sheet.insertRule('widget-grid { display: grid; }');

        document.adoptedStyleSheets = [sheet];
    }
}