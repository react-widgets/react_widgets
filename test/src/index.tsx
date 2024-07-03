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
import { TabNavigation } from "../../src/TabNavigation";
import { Ignore } from "../../src/Ignore";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";

/*
export default function RootPage() {
    const [message, setMessage] = useState("hello world");
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const element = ref2.current;
        element.style.animation = "test 1s";
    }, []);

    return (
        <Column centerLeft>
            <button onClick={() => setMessage(p => p + " hello world")}>Expand</button>
            <div ref={ref2}>
                <Box refer={ref1} backgroundColor="red" maxWidth="400px" padding="15px">
                    <AnimatedSize duration="0.5s">
                        <div>{message}</div>
                    </AnimatedSize>
                </Box>
            </div>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);
*/







/*
export default function RootPage() {
    const [index, setIndex] = useState(0);

    return (
        <TabNavigation.Horizontal index={index} duration="0.3s" style={{width: "100%"}}>
            <div onClick={() => setIndex(0)} style={{padding: "15px"}}>Navigate 1</div>
            <div onClick={() => setIndex(1)} style={{padding: "15px"}}>Navigate 2</div>
            <div onClick={() => setIndex(2)} style={{padding: "15px"}}>Navigate 3</div>
            <div onClick={() => setIndex(3)} style={{padding: "15px"}}>Navigate 4</div>
            <Ignore><div>Ignore</div></Ignore>
            <div onClick={() => setIndex(4)} style={{padding: "15px"}}>Navigate 5</div>
            <div onClick={() => setIndex(5)} style={{padding: "15px"}}>Navigate 6</div>
            <div onClick={() => setIndex(6)} style={{padding: "15px"}}>Navigate 7</div>
            <div onClick={() => setIndex(null)} style={{padding: "15px"}}>Null</div>
        </TabNavigation.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);
*/







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
                ));
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










/*
import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { SizeBuilder } from "../../src/SizeBuilder";
import { Text, TextType } from "../../src/Text";
import { Expanded } from "../../src/Expanded";
import { AnimatedSize } from "../../src/AnimatedSize";
import { AnimatedPage, AnimatedPageController } from "../../src/AnimatedPage";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";

export default function RootPage() {
    return (
        <Row height="100%">
            <Box width="300px" height="100%" backgroundColor="red" />
            <Expanded>
                <Box display="flex" justifyContent="center" justifyItems="center">
                    <Box backgroundColor="red" padding="15px" borderRadius="15px">
                        <Scrollable.VerticalConnection>
                            <Column>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                                <button>hello world</button>
                            </Column>
                        </Scrollable.VerticalConnection>
                    </Box>
                </Box>
            </Expanded>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);
*/