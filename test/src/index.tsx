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
                <button onClick={() => setVisible(!visible)}>접기</button>
                <AnimatedFoldable.Horizontal visible={visible} duration="0.5s">
                    <button onClick={() => setVisible(!visible)}>나는냐 애니메이션 접이식 박스다</button>
                </AnimatedFoldable.Horizontal>
                <AnimatedFoldable.Vertical visible={visible} duration="0.5s">
                    <button onClick={() => setVisible(!visible)}>나는냐 애니메이션 접이식 박스다</button>
                </AnimatedFoldable.Vertical>
            </Column>
            <Column size="100%">
                <Box width="100%" height="100px" backgroundColor="red" />
                <Scrollable.Vertical>
                    <Column>
                        <Box height="150px" backgroundColor="orange">AppBar</Box>
                        <Box position="sticky" top="0px" padding="15px" backgroundColor="blue">Sticky</Box>
                        <Column>
                            {Array.from({length: 100}).map((_, i) => <Text key={i}>sdfsdfsd</Text>)}
                        </Column>
                    </Column>
                </Scrollable.Vertical>
            </Column>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);