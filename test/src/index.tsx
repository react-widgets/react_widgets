import { Box, Column, Constraint, ConstraintBuilder, Expanded, ReactWidgets, Row, Scrollable } from "react-widgets";
import { createRoot } from "react-dom/client";

ReactWidgets.REACT_WIDGETS_OPTION = {
    useStrict: true
}

export default function App() {
    return (
        <ConstraintBuilder
            constraints={[
                new Constraint(1000, Infinity, 1),
                new Constraint(-Infinity, 1000, 0),
            ]}
            builder={value => {
                return <Box padding="15px"><h1>{value}</h1></Box>;
            }}
        />
    )
}

export function Boo() {
    console.log("sdfdfsdfsd");
    return <h1>Hello, World!</h1>;
}

createRoot(document.getElementById("renderer")).render(<App />);