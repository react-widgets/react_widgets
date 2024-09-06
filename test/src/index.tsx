import { AnimatedFoldable, Column, Grid, Row } from "react-widgets";
import { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    const [visible, setVisible] = useState(true);

    return (
        <Grid rowCount={3}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </Grid>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);