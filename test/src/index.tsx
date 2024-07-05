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
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";

export default function RootPage() {
    return (
        <Row width="100%" height="100%">
            <Box width="200px" height="100%" backgroundColor="gray">Sidebar</Box>
            <Column width="100%" height="100%">
                <Box width="100%" height="100px" backgroundColor="red" />
                <Scrollable.Vertical>
                    <Column>
                        <Box height="150px" backgroundColor="orange">AppBar</Box>
                        <Box position="sticky" top="0px" padding="15px" backgroundColor="blue">Sticky</Box>
                        <Column>
                            {Array.from({length: 100}).map(i => <Text>sdfsdfsd</Text>)}
                        </Column>
                    </Column>
                </Scrollable.Vertical>
            </Column>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);