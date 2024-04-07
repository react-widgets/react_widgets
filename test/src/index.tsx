import { Column } from "../../ts/Column";
import { Row } from "../../ts/Row";
import { Grid } from "../../ts/Grid";
import { Constraint, ConstraintBuilder } from "../../ts/ConstraintBuilder";
import { createRoot } from "react-dom/client";

export default function RootPage() {
    return (
        <ConstraintBuilder<number>
            constraints={[
                new Constraint(1000, Infinity, 3),
                new Constraint(600, 1000, 2),
                new Constraint(-Infinity, 600, 1)
            ]}
            builder={(value: number) => {
                return (
                    <Grid gap="5px" rowCount={value}>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </Grid>
                );
            }
        } />
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);