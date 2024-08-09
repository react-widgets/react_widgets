import { Column } from "../../src/widgets/Column";
import { Row } from "../../src/widgets/Row";
import { Grid } from "../../src/widgets/Grid";
import { Box } from "../../src/widgets/Box";
import { Scrollable } from "../../src/widgets/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/widgets/ConstraintBuilder";
import { SizeBuilder } from "../../src/widgets/SizeBuilder"
import { Text, TextType } from "../../src/widgets/Text"
import { AnimatedSize } from "../../src/widgets/AnimatedSize";
import { AnimatedPage } from "../../src/widgets/AnimatedPage";
import { AnimatedReplace } from "../../src/widgets/AnimatedReplace";
import { TabNavigation } from "../../src/widgets/TabNavigation";
import { Expanded } from "../../src/widgets/Expanded";
import { Ignore } from "../../src/widgets/Ignore";
import { AnimatedFoldable } from "../../src/widgets/AnimatedFoldable";
import { MeasuredSizeConnection } from "../../src/widgets/MeasuredSizeConnection";
import { AppBar, AppBarAlignment, AppBarConnection } from "../../src/widgets/AppBar";
import { Layout } from "../../src/widgets/Layout";
import { ReactWidgets } from "../../src/types";
import { ReactWidgetsBinding } from "../../src/modules/ReactWidgetsBinding";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function App() {
    const [index, setIndex] = useState(0);

    return (
        <Layout before={(size, element) => console.log(size, element)}>
            <div>hello world</div>
        </Layout>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);