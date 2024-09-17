import { AnimatedFoldable, AnimatedTransition, Box, Column, ReactWidgets, Row } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [toggle, setToggle] = useState(true);

    return (
        <Row>
            <button onClick={() => setToggle(!toggle)}>Update Toggle</button>
            <AnimatedFoldable.Horizontal visible={toggle} duration="0.5s">
                <button>Hello World!</button>
            </AnimatedFoldable.Horizontal>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);