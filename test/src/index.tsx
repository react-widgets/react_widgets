import { AnimatedSlider, Box, Column, ReactWidgets, TabNavigation } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [index, setIndex] = useState<number>(0);

    return (
        <Column paddingAndGap="15px">
            <TabNavigation.Horizontal index={index} duration="0.3s">
                <Box padding="15px" onClick={() => setIndex(0)}>Red</Box>
                <Box padding="15px" onClick={() => setIndex(1)}>Green</Box>
                <Box padding="15px" onClick={() => setIndex(2)}>Blue</Box>
            </TabNavigation.Horizontal>
            <AnimatedSlider.Horizontal index={index} duration="0.3s">
                <Box width="50%" height="200px" backgroundColor="red" />
                <Box width="25%" height="400px" backgroundColor="green" />
                <Box width="75%" height="300px" backgroundColor="blue" />
            </AnimatedSlider.Horizontal>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);