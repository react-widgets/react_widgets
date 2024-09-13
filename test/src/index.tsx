import { ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
}

export default function App() {
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
            </Row>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<App />);