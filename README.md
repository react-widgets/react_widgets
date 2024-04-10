# React Widgets
This is package that provides templates that can significantly reduce CSS development works in a react development environment.

> Consider integrating not only business logic but also design logic into script code.

```tsx
<Box backgroundColor="red">hello world</Box>
```

```tsx
<Row gap="15px">...</Row>
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
```