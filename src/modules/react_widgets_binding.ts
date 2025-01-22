import { ReactWidgets } from "../types";

export class ReactWidgetsBinding {
    private static _instance: ReactWidgetsBinding;
    private constructor() {}

    static get instance(): ReactWidgetsBinding {
        return this._instance ?? (this._instance = new ReactWidgetsBinding());
    }

    /** A global default value has been defined for this package. */
    static default: ReactWidgets.Option = {
        useStrict: true,
        useDefaultMemo: true,
        useWillChange: true,
    }

    /** Sets the current react-widgets option values. */
    set currentOption(value: Partial<ReactWidgets.Option>) {
        ReactWidgets.REACT_WIDGETS_OPTION = value;
    }

    private ids = new Map<string, number>();

    getElementIdByTag(key: keyof JSX.IntrinsicElements) {
        const id = (this.ids.get(key) ?? 0) + 1;

        // Returned as div1~div999
        return key + this.ids.set(key, id).get(key);
    }

    optionValueOf(name: keyof ReactWidgets.Option) {
        return ReactWidgets.REACT_WIDGETS_OPTION[name] ?? ReactWidgetsBinding.default[name];
    }

    initialize() {
        const sheet = new CSSStyleSheet();

        if (this.optionValueOf("useStrict")) {
            sheet.insertRule('div { flex-shrink: 0; boxSizing: border-box; }');
        }

        this.initializeStyleSheet(sheet);
    }

    /** Initializes a required style sheet on the document. */
    initializeStyleSheet(sheet: CSSStyleSheet) {
        sheet.insertRule('widget-row { display: flex; flex-direction: row; }');
        sheet.insertRule('widget-column { display: flex; flex-direction: column; }');
        sheet.insertRule('widget-grid { display: grid; }');
        sheet.insertRule(`*.ignore { display: contents; }`);

        { // About an <scrollable-vertical> element.
            sheet.insertRule(`
                scrollable-vertical {
                    display: block;
                    height: 100%;
                    overflow-y: auto;
                    overflow-x: clip;
                }
            `);

            sheet.insertRule('scrollable-vertical > * { height: max-content }');
            sheet.insertRule('scrollable-vertical[scrollbar-none]::-webkit-scrollbar { display: none !important; }');
        }

        { // About an <scrollable-horizontal> element.
            sheet.insertRule(`
                scrollable-horizontal {
                    display: block;
                    width: 100%;
                    overflow-x: auto;
                    overflow-y: clip;
                }
            `);

            sheet.insertRule('scrollable-horizontal > * { width: max-content; }');
            sheet.insertRule('scrollable-horizontal[scrollbar-none]::-webkit-scrollbar { display: none !important; }');
        }

        { // About an <widget-invisible>
            sheet.insertRule(`
                widget-invisible[active] > * { display: none !important; }
            `);
        }

        // Defines the style rules that apply to the children of this element.
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }
}