import { AnimatedSize, AnimatedTransition, Box, Column, ReactWidgets, Row } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [count, setCount] = useState(3);

    return (
        <Column>
            <button onClick={() => setCount(count - 1)}>count up</button>
            <Column display="flex" width="max-content" padding="15px" backgroundColor="red">
                <h1>{Array.from({length: count}).map(() => "Hello, World!").join(" ")}</h1>
                <AnimatedSize duration="10s">
                    <input style={{width: "100%", boxSizing: "border-box"}} />
                </AnimatedSize>
            </Column>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);