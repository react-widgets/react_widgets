import { Box, Column, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const targetRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        console.log(targetRef.current);
    });

    return (
        <Scrollable.Horizontal scrollbar={false}>
            <Row ref={targetRef}>
                {Array.from({length: 100}).map((_, index) => {
                    return <h1 key={index}>Hello, World!</h1>
                })}
            </Row>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);