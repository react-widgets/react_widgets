import { ReactWidgetsBinding } from "./modules/react_widgets_binding";

/** About related the modules. */
export { ApplicationBinding, App } from "./modules/application_binding";
export { ApplicationListener, AppListener } from "./modules/application_listener";
export { ApplicationEvent, AppEvent } from "./modules/application_event";
export { ReactWidgetsBinding } from "./modules/react_widgets_binding";

/** About related the widgets. */
export { ReactWidgets } from "./types";
export { AnimatedFoldable } from "./widgets/AnimatedFoldable";
export { AnimatedReplace } from "./widgets/AnimatedReplace";
export { AnimatedPage } from "./widgets/AnimatedPage";
export { AnimatedSize } from "./widgets/AnimatedSize";
export { Box, BoxProperties } from "./widgets/Box";
export { Canvas, CanvasController, CanvasDrawCallback } from "./widgets/Canvas";
export { Column, ColumnProperties } from "./widgets/Column";
export { Row, RowProperties } from "./widgets/Row";
export { ConditionalRender } from "./widgets/ConditionalRender";
export { ConstraintBuilder, Constraint, ConstraintsBuilder } from "./widgets/ConstraintBuilder";
export { Expanded } from "./widgets/Expanded";
export { Grid, GridProperties } from "./widgets/Grid";
export { Ignore } from "./widgets/Ignore";
export { Layout } from "./widgets/Layout";
export { Scrollable } from "./widgets/Scrollable";
export { SizeBuilder, SizedBuilder } from "./widgets/SizeBuilder";
export { SizedConnection, SizedConnectionBinding, SizedConnectionContext } from "./widgets/SizedConnection";
export { SizedMaster } from "./widgets/SizedMaster";
export { SizedSlaver } from "./widgets/SizedSlaver";
export { TabNavigation } from "./widgets/TabNavigation";
export { Text, TextProperties, TextAlignment } from "./widgets/Text";

addEventListener("DOMContentLoaded", () => ReactWidgetsBinding.instance.initialize());