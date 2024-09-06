import { ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true
}

export default function App() {
    return (
        <Scrollable.Horizontal>
            <Row align="center">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </Row>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);