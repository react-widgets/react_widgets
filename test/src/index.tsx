import { Column } from "../../ts/Column";
import { Row } from "../../ts/Row";
import { Grid } from "../../ts/Grid";
import { Box } from "../../ts/Box";
import { Scrollable } from "../../ts/Scrollable";
import { Constraint, ConstraintBuilder } from "../../ts/ConstraintBuilder";
import { createRoot } from "react-dom/client";

class Colors {
    static text: string = "black";
}

export default function RootPage() {
    return (
        <Column padding="15px" gap="15px">
            <Column gap="5px">
                <h1>Header</h1>
                <p>description</p>
                <Row gap="15px">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </Row>
            </Column>
            <ConstraintBuilder<number>
                constraints={[
                    new Constraint(1000, Infinity, 3),
                    new Constraint(600, 1000, 2),
                    new Constraint(-Infinity, 600, 1)
                ]}
                builder={(value: number) => {
                    return (
                        <Grid gap="15px" rowCount={value}>
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                            <Item>Item 4</Item>
                            <Item>Item 5</Item>
                            <Item>Item 6</Item>
                        </Grid>
                    );
                }
            } />
        </Column>
    )
}

export function Item({children}: {children?: React.ReactNode}) {
    return (
        <Box padding="15px" border="1px solid red">
            {children}
        </Box>
    )
}

createRoot(document.getElementById("renderer")).render(<RootPage />);