import { Box, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
}

export default function App() {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        console.log(ref.current);
    });

    return (
        <Scrollable.Horizontal>
            <Row gap="30px" padding="15px">
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
                <h1>5</h1>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
                <h1>5</h1>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
                <h1>5</h1>
                <Box ref={ref} tagName="button">Hello, World!</Box>
            </Row>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);