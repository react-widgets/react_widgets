import { Box, Column, Invisible, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    return (
        <Scrollable.Horizontal scrollbar={false}>
            <Column>
                {Array.from({length: 100}).map((_, index) => {
                    return <Invisible><h1 key={index}>Hello, World!</h1></Invisible>
                })}
            </Column>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);