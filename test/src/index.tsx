import { AnimatedFoldable, Box, Column, ReactWidgets, Row, Scrollable, SizedConnection, SizedMaster, SizedSlaver } from "react-widgets";
import { createRoot } from "react-dom/client";
import { useLayoutEffect, useRef, useState } from "react";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
    useWillChange: true,
}

export default function App() {
    const [visible, setVisible] = useState(true);

    return (
        <Row size="100%">
            <SizedConnection>
                <SizedMaster height="100%">
                    <Row height="100%" flexShrink="0" padding="15px" backgroundColor="red">
                        <button onClick={() => setVisible(!visible)}>Toggle</button>
                        <Scrollable.Vertical>
                            <Column>
                                {Array.from({length: 100}).map((_, index) => {
                                    return (
                                        <AnimatedFoldable.Horizontal key={index} visible={visible} duration="0.3s">
                                            <button>Hello, World {index}</button>
                                        </AnimatedFoldable.Horizontal>
                                    )
                                })}
                            </Column>
                        </Scrollable.Vertical>
                    </Row>
                </SizedMaster>
                <SizedSlaver onLayout={(master, element) => {
                    element.style.marginLeft = `${master.width}px`;
                }}>
                    <Scrollable.Vertical>
                        <Column size="100%">
                            {Array.from({length: 100}).map((_, index) => {
                                return (
                                    <h1 key={index}>Hello, World {index}</h1>
                                )
                            })}
                        </Column>
                    </Scrollable.Vertical>
                </SizedSlaver>
            </SizedConnection>
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);