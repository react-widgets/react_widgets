import { Column } from "../../src/Column";
import { Row } from "../../src/Row";
import { Grid } from "../../src/Grid";
import { Box } from "../../src/Box";
import { Scrollable } from "../../src/Scrollable";
import { Constraint, ConstraintBuilder } from "../../src/ConstraintBuilder";
import { createRoot } from "react-dom/client";
import { SizeBuilder } from "../../src/SizeBuilder"
import { Text, TextType } from "../../src/Text"

export default function RootPage() {
    return (
        <ConstraintBuilder<number>
            constraints={[
                new Constraint(600, Infinity, 2),
                new Constraint(-Infinity, 600, 1)
            ]}
            builder={(value: number) => {
                return (
                    <Grid rowCount={value}>
                        <Text type={TextType.h1} maxLine={1}>1</Text>
                        <Text type={TextType.h2} maxLine={2}>2</Text>
                        <Text type={TextType.h3} maxLine={3}>3</Text>
                    </Grid>
                )
            }
        } />
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