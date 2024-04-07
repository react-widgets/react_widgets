import { SizeBuilder } from "../../ts/SizeBuilder";
import { Row } from "../../ts/Row";
import { Constraint, ConstraintBuilder } from "../../ts/ConstraintBuilder";
import { createRoot } from "react-dom/client";

export default function RootPage() {
    return (
        <Row gap="15px" wrap>
            <ConstraintBuilder<number>
                constraints={[
                    new Constraint(1000, Infinity, 3),
                    new Constraint(500, 1000, 2),
                    new Constraint(-Infinity, 500, 1),
                ]}
                builder={(value: number) => {
                    return (<>{value}</>);
                }
            } />
        </Row>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);