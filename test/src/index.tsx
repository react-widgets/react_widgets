import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { SizeBuilder } from "../../src/SizeBuilder"
import { Text, TextType } from "../../src/Text"
import { AnimatedSize } from "../../src/AnimatedSize";
import { AnimatedPage, AnimatedPageController } from "../../src/AnimatedPage";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";

export default function RootPage() {
    const [message, setMessage] = useState("hello world");

    return (
        <Column centerLeft>
            <button onClick={() => setMessage(p => p + " hello world")}>Expand</button>
            <Box backgroundColor="red" padding="15px" maxWidth="400px">
                <AnimatedSize duration="0.5s">
                    <div>{message}</div>
                </AnimatedSize>
            </Box>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);














/*
import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { SizeBuilder } from "../../src/SizeBuilder"
import { Text, TextType } from "../../src/Text"
import { AnimatedSize } from "../../src/AnimatedSize";
import { AnimatedPage, AnimatedPageController } from "../../src/AnimatedPage";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";

export default function RootPage() {
    const controllerRef = useRef(new AnimatedPageController());
    const controller = controllerRef.current;

    return (
        <Column center>
            <button onClick={() => {
                controller.push((
                    <Column padding="15px">
                        <h1>hello 1</h1>
                        <h1>hello 2</h1>
                        <h1>hello 3</h1>
                    </Column>
                ))
            }}>Push Page</button>
            <button onClick={() => controller.pop()}>Pop Page</button>
            <Box backgroundColor="red" borderRadius="15px" overflow="hidden">
                <AnimatedPage
                    controller={controller}
                    duration="0.5s"
                    children={<Items />}
                />
            </Box>
        </Column>
    )
}

function Items() {
    const [items, setItems] = useState([1, 2, 3]);

    return (
        <Column padding="15px">
            <button onClick={() => setItems([...items, items.length + 1])}>Add Item</button> 
            <button onClick={() => setItems(items.splice(0, 1))}>Clear Item</button>
            {
                items.map((value, i) => <h1 key={i}>Hello world {value}</h1>)
            }
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);
*/