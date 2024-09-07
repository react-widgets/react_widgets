import { Box, Column, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true
}

export default function App() {
    return (
        <Row>
            <Box>hello world</Box>
            <Scrollable.Horizontal>
                <Row gap="10px">
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                    <h1>1sdfsdfs</h1>
                </Row>
            </Scrollable.Horizontal>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);