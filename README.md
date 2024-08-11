<div align="center">
    <img src="https://github.com/user-attachments/assets/f576cb2c-a1e1-4f54-af04-64cd17284282">
    <h1>React Widgets</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v0.0.0-dev1</th>
          </tr>
        </tbody>
    </table>
</div>

This package provides templates that significantly reduce CSS development work in a React environment, while enhancing readability and maintainability by consolidating style definitions. It fosters a more suitable development environment for Declarative UI.

> Consider integrating not only business logic but also design logic into script code.

```tsx
return <Box backgroundColor="red">hello world</Box>
```

```tsx
return <Row scrollable gap="15px">...</Row>
// OR
// <Scrollable.Horizontal>
//     <Row gap="15px">...</Row>
// </Scrollable.Horizontal>
```

## How to make responsive grid?
```tsx
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
                    <Text>1</Text>
                    <Text maxLine={1}>2</Text>
                    <Text type={TextType.h1} maxLine={1}>3</Text>
                    <Text type={TextType.h2} maxLine={2}>4</Text>
                    <Text type={TextType.h3} maxLine={3}>5</Text>
                </Grid>
            );
        }
    } />
)
```
