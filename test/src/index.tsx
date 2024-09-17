import { AnimatedFoldable, AnimatedTransition, Box, Column, ReactWidgets, Row, Scrollable, TabNavigation } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [index, setIndex] = useState(2);

    return (
        <Scrollable.Horizontal>
            <TabNavigation.Horizontal index={index} duration="0.3s">
                <Box onClick={() => setIndex(0)} backgroundColor="red">Hello World 0</Box>
                <Box onClick={() => setIndex(1)} backgroundColor="blue">World 1</Box>
                <Box onClick={() => setIndex(2)} backgroundColor="red">Hello World 2</Box>
                <Box onClick={() => setIndex(3)} backgroundColor="blue">World 3</Box>
                <Box onClick={() => setIndex(4)} backgroundColor="red">Hello World 4</Box>
            </TabNavigation.Horizontal>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);