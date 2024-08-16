import { AnimatedSize, Box, Canvas, CanvasController, Column } from "react-widgets";
import { useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    const [count, setCount] = useState(1);
    const controllerRef = useRef(new CanvasController());
    const controller = controllerRef.current;

    useLayoutEffect(() => {
        setInterval(() => controller.redraw(), 0.0000001);
    }, []);

    return (
        <Column center>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <Canvas.Context2D width="100%" height="100px" controller={controller} onDraw={context => {
                context.fillRect(0, 0, 100, 100);
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