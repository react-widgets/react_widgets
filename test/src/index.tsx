import { Box, Column, Expanded, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true
}

export default function App() {
    return (
        <Row size="100%">
            <Box>hello world</Box>
            <Column size="100%">
                <h1>Header</h1>
                <Expanded direction="vertical">
                    <Row size="100%">
                        <Scrollable.Vertical>
                            <Column gap="15px">
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                            </Column>
                        </Scrollable.Vertical>
                        <Scrollable.Vertical>
                            <Column gap="15px">
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                                <h1>Hello, World!</h1>
                            </Column>
                        </Scrollable.Vertical>
                    </Row>
                </Expanded>
            </Column>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);