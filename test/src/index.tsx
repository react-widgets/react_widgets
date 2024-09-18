import { AnimatedFoldable, AnimatedSize, AnimatedSlider, Box, Column, ReactWidgets, Row, TabNavigation } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [index, setIndex] = useState(0);

    return (
        <Box padding="15px">
            <TabNavigation.Horizontal index={index}  gap="15px" duration="0.5s">
                <h1 onClick={() => setIndex(0)} style={{backgroundColor: "red"}}>Item 1</h1>
                <h1 onClick={() => setIndex(1)} style={{backgroundColor: "red"}}>Item 2</h1>
                <h1 onClick={() => setIndex(2)} style={{backgroundColor: "red"}}>Item 3</h1>
            </TabNavigation.Horizontal>
        </Box>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);