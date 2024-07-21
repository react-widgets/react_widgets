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
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";

export default function RootPage() {
    const [ visible, setVisible ] = useState(true);

    return (
        <Row size="100%">
            <Column height="100%" backgroundColor="gray" padding="15px" boxSizing="border-box">
                <Row>
                    <button onClick={() => setVisible(!visible)}>Close/Open</button>
                    <AnimatedFoldable.Horizontal visible={visible} duration="0.5s">
                        <button onClick={() => setVisible(!visible)}>
                            <h1>AnimatedFoldable</h1>
                        </button>
                    </AnimatedFoldable.Horizontal>
                </Row>
            </Column>
            <Column size="100%">
                <Box width="100%" height="100px" backgroundColor="red" />
                <Column scrollable>
                    <Box height="150px" backgroundColor="orange">AppBar</Box>
                    <Box position="sticky" top="0px" padding="15px" backgroundColor="blue">Sticky</Box>
                    <Column>
                        {Array.from({length: 100}).map((_, i) => <Text key={i}>sdfsdfsd</Text>)}
                    </Column>
                </Column>
            </Column>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);