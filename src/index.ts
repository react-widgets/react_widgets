import { ReactWidgetsBinding } from "./modules/ReactWidgetsBinding";

export { ReactWidgets } from "./types";
export { AnimatedPage } from "./widgets/AnimatedPage";
export { AnimatedSize } from "./widgets/AnimatedSize";
export { Box, BoxProperties } from "./widgets/Box";
export { ClipBox, ClipBoxProperties }  from "./widgets/ClipBox";
export { Column, ColumnProperties } from "./widgets/Column";
export { Row, RowProperties } from "./widgets/Row";
export { ConstraintBuilder, Constraint, ConstraintsBuilder } from "./widgets/ConstraintBuilder";
export { Expanded } from "./widgets/Expanded";
export { Grid, GridProperties } from "./widgets/Grid";
export { Ignore } from "./widgets/Ignore";
export { Scrollable } from "./widgets/Scrollable";
export { SizeBuilder, SizedBuilder } from "./widgets/SizeBuilder";
export { TabNavigation } from "./widgets/TabNavigation";
export { Text, TextProperties, TextAlignment } from "./widgets/Text";

addEventListener("DOMContentLoaded", ReactWidgetsBinding.instance.initialize);