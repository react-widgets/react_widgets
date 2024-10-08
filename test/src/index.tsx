import { AnimatedSize, AnimatedTransition, Box, Column, ReactWidgets, Row } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <Column>
            <button onClick={() => setCount(count + 1)}>count up</button>
            <AnimatedSize duration="0.5s">
                <Box padding="15px" backgroundColor="red">
                    <h1>{Array.from({length: count}).map(() => "Hello, World!")}</h1>
                </Box>
            </AnimatedSize>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);