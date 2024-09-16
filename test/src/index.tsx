import { AnimatedTransition, Box, Column, ReactWidgets } from "react-widgets";
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
        <Column size="100%">
            <button onClick={() => setCount(count + 1)}>Count Up</button>
            <AnimatedTransition value={count} animation={{duration: "0.3s", fadeIn: {from: {opacity: 0}, to: {opacity: 1}}, fadeOut: {to: {opacity: 0}}}}>
                <Box backgroundColor="red">Hello, World! {count}</Box>
            </AnimatedTransition>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);