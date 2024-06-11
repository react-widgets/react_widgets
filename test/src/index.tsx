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
            <button onClick={() => setItems([...items, items.length + 1])}>Add item</button> 
            <AnimatedSize duration="1s">
                <Column>
                    {items.map((value, i) => {
                        return <h1 key={i}>Item {value}</h1>
                    })}
                </Column>
            </AnimatedSize>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);