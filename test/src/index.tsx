import { AnimatedSize, Box, Canvas, Column } from "react-widgets";
import { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    const [count, setCount] = useState(1);

    return (
        <Column center>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <Canvas.Context2D width="100%" height="100px" onDraw={context => {

            }} />
            <Box backgroundColor="red">
                <AnimatedSize duration="0.5s">
                    <Column>{
                        Array.from({length: count}).map((_, index) => {
                            return (<div>hello world {index}</div>);
                        })
                    }</Column>
                </AnimatedSize>
            </Box>
        </Column>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);