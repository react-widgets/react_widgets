import { Column } from "../../src/widgets/Column";
import { Row } from "../../src/widgets/Row";
import { Grid } from "../../src/widgets/Grid";
import { Box } from "../../src/widgets/Box";
import { Scrollable } from "../../src/widgets/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/widgets/ConstraintBuilder";
import { SizeBuilder } from "../../src/widgets/SizeBuilder"
import { Text, TextType } from "../../src/widgets/Text"
import { AnimatedSize } from "../../src/widgets/AnimatedSize";
import { AnimatedPage, AnimatedPageController } from "../../src/widgets/AnimatedPage";
import { TabNavigation } from "../../src/widgets/TabNavigation";
import { Expanded } from "../../src/widgets/Expanded";
import { Ignore } from "../../src/widgets/Ignore";
import { AnimatedFoldable } from "../../src/widgets/AnimatedFoldable";
import { MeasuredSizeConnection } from "../../src/widgets/MeasuredSizeConnection";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function App() {
    const [ items, setItems ] = useState([1, 2, 3]);

    return (
        <Row>
            <button onClick={() => setItems(it => [...it, 3])}></button>
            <MeasuredSizeConnection>
                <Box backgroundColor="red">
                    <AnimatedSize duration="0.5s">
                        <div>{items.map((_, i) => <h3 key={i}>hello world {i}</h3>)}</div>
                    </AnimatedSize>
                </Box>
            </MeasuredSizeConnection>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);