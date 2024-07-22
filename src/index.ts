import { ReactWidgets } from "./types";

export { ReactWidgets } from "./types";
export { AnimatedPage, AnimatedPageController, AnimatedPageStatus, AnimatedPageListener, AnimatedPageEvent } from "./widgets/AnimatedPage";
export { AnimatedSize } from "./widgets/AnimatedSize";
export { Box, BoxProperties } from "./widgets/Box";
export { ClipBox, ClipBoxProperties }  from "./widgets/ClipBox";
export { Column, ColumnProperties } from "./widgets/Column";
export { Row, RowProperties } from "./widgets/Row";
export { ConstraintBuilder, Constraint, ConstraintsBuilder } from "./widgets/ConstraintBuilder";
export { Expanded } from "./widgets/Expanded";
export { Grid, GridProperties } from "./widgets/Grid";
export { Ignore } from "./widgets/Ignore";
export { Image, ImageProperties } from "./widgets/Image";
export { Scrollable } from "./widgets/Scrollable";
export { SizeBuilder, SizedBuilder } from "./widgets/SizeBuilder";
export { TabNavigation } from "./widgets/TabNavigation";
export { Text, TextProperties, TextAlignment } from "./widgets/Text";

addEventListener("DOMContentLoaded", () => {
    let defult: ReactWidgets.Option = {useStrict: true}; // default
    let option: ReactWidgets.Option = ReactWidgets.REACT_WIDGETS_OPTION;

    if (option == null) {
        option = {...defult, ...option};
    }

    if (option.useStrict) {
        const sheet = new CSSStyleSheet();
        sheet.insertRule("div { flex-shrink: 0; }");

        document.adoptedStyleSheets = [sheet];
    }
});