import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { SizeBuilder } from "../../src/SizeBuilder"
import { Text, TextType } from "../../src/Text"
import { AnimatedSize } from "../../src/AnimatedSize";
import { createRoot } from "react-dom/client";
import { useState } from "react";

export default function RootPage() {
    const [items, setItems] = useState([1]);

    return (
        <Column center>
            <button onClick={() => setItems([...items, items.length * 1000])}>Add item</button> 
            <button onClick={() => setItems(items.splice(0, 1))}>Remove item</button> 
            <Box backgroundColor="red" padding="15px" borderRadius="15px" overflow="hidden">
                <AnimatedSize duration="0.5s">
                    <Column>
                        {items.map((value, i) => {
                            return <h1 key={i}>Item {value}</h1>
                        })}
                    </Column>
                </AnimatedSize>
            </Box>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);