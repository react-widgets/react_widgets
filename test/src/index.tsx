import { Column } from "../../ts/Column";
import { Row } from "../../ts/Row";
import { Grid } from "../../ts/Grid";
import { Box } from "../../ts/Box";
import { Scrollable } from "../../ts/Scrollable";
import { Constraint, ConstraintBuilder } from "../../ts/ConstraintBuilder";
import { createRoot } from "react-dom/client";

export default function RootPage() {
    return (
        <Scrollable.Horizontal>
            <Row gap="15px">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </Row>
        </Scrollable.Horizontal>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);