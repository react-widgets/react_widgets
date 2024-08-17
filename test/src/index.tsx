import { AnimatedFoldable, Column } from "react-widgets";
import { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    const [visible, setVisible] = useState(true);

    return (
        <Column center>
            <button onClick={() => setVisible(!visible)}>change</button>
            <AnimatedFoldable.Horizontal visible={visible} duration="0.3s">
                <h1 style={{background: "red"}}>hello world</h1>
            </AnimatedFoldable.Horizontal>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);