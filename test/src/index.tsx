import { AnimatedSize, AnimatedSlider, Box, Column, ReactWidgets, Row } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [index, setIndex] = useState(1);

    return (
        <Column padding="15px">
            <Row paddingAndGap="5px">
                <button onClick={() => setIndex(index - 1)}>To {index - 1}</button>
                <button onClick={() => setIndex(index + 1)}>To {index + 1}</button>
            </Row>
            <Box backgroundColor="red">
                <AnimatedSize duration="0.5s">
                    <Column>{Array.from({length: index}).map((e, i) => <h1 key={i}>{`Hello, World ${i}`}</h1>)}</Column>
                </AnimatedSize>
            </Box>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);