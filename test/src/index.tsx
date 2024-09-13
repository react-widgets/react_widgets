import { Box, Constraint, ConstraintBuilder, ReactWidgets } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true,
    useDefaultMemo: true,
}

export default function App() {
    return (
        <ConstraintBuilder
            constraints={[
                new Constraint(1000, Infinity, 1),
                new Constraint(-Infinity, 1000, 0),
            ]}
            builder={value => {
                console.log(value);
                return <Box padding="15px"></Box>;
            }}
        />
    )
}

export function Boo() {
    console.log("boo");
    return <h1>Hello, World!</h1>;
}

createRoot(document.getElementById("renderer")).render(<App />);