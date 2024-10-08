import { AnimatedTransition, Column, ReactWidgets, Row } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [count, setCount] = useState(0);

    console.log(count);

    return (
        <Column size="100%">
            <button onClick={() => setCount(count + 1)}>Count Up</button>
            <Row padding="30px">
                <AnimatedTransition value={count} animation={{
                    duration: "0.3s",
                    fadeIn:  {from: {opacity: 0, transform: "translateY(100%)"}, to: {opacity: 1, transform: ""}},
                    fadeOut: {from: {opacity: 1, transform: ""}, to: {opacity: 0, transform: "translateY(-100%)"}}
                }}>
                    <h1 style={{pointerEvents: "none", userSelect: "none"}}>Count {count}</h1>
                </AnimatedTransition>
            </Row>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);