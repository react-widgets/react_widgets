import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { SizeBuilder } from "../../src/SizeBuilder"
import { Text, TextType } from "../../src/Text"
import { AnimatedSize } from "../../src/AnimatedSize";
import { AnimatedPage, AnimatedPageBehavior, AnimatedPageController } from "../../src/AnimatedPage";
import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";

export default function RootPage() {
    const [items, setItems] = useState([1]);
    const controllerRef = useRef(new AnimatedPageController());
    const controller = controllerRef.current;
    const behavior: AnimatedPageBehavior = {
        duration: "0.5s",
        fadeInKeyframeName: "fade-in",
        fadeOutKeyframeName: "fade-out",
    }

    return (
        <Column center>
            <button onClick={() => setItems([...items, items.length * 1000])}>Add Item</button> 
            <button onClick={() => setItems(items.splice(0, 1))}>Clear Items</button>
            <button onClick={() => {
                controller.push(<h1>hello world</h1>)
            }}>Push Page</button>
            <button onClick={() => controller.pop()}>Pop Page</button>
            <Box backgroundColor="red" padding="15px" borderRadius="15px" overflow="hidden">
                <AnimatedPage controller={controller} behavior={behavior}>
                    <Column>
                        {items.map((value, i) => {
                            return <h1 key={i}>Item {value}</h1>
                        })}
                    </Column>
                </AnimatedPage>
            </Box>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);