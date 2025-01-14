<div align="center">
    <img src="https://github.com/user-attachments/assets/f576cb2c-a1e1-4f54-af04-64cd17284282">
    <h1>React Widgets</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-beta10</th>
          </tr>
        </tbody>
    </table>
    You need to learn more about the <a href="https://github.com/react-widgets/react_widgets-router">react-widgets-router</a> package that is the extension of this package!
</div>

# Introduction
This package provides templates that significantly reduce CSS development work in a React environment, while enhancing readability and maintainability by consolidating style definitions. It fosters a more suitable development environment for Declarative UI. Additionally, it includes widgets designed to improve performance.

> [!NOTE]
> Other widgets will be added sequentially in the README.md, and detailed usage will be covered through the related website once this package is officially released.

> Consider integrating not only business logic but also design logic into script code, See Also, If you want the change-log by version for this package. refer to [Change Log](CHANGELOG.md) for details.

```tsx
return <Box backgroundColor="red">Hello, World</Box>
```

```tsx
return (
    <Scrollable.Horizontal>
        <Row gap="5px" padding="15px">...[children]</Row>
    </Scrollable.Horizontal>
)
```

# Preview
The image below is a simple use gif of [Quark Icons](https://quarkicons.com/) and a website created using @web-package/react-widgets and its extension, @web-package/react-widgets-router.

![preview](https://github.com/user-attachments/assets/cd1b147b-3043-496f-9ebc-e76b634d468c)

# Usage

## How to make responsive animated size?
Interestingly, even when wrapped with this widget, it does not impact the layout calculations of existing child elements. This is because the React widget package is designed to assist with layout calculations while striving to minimize any impact on the existing layout.

```tsx
return (
    <AnimatedSize duration="0.3s">
        <Box>Hello, World 1</Box>
        <Box>Hello, World 2</Box> <!-- Dynamic inserted -->
        <Box>Hello, World 3</Box> <!-- Dynamic inserted -->
    </AnimatedSize>
)
```

### Simple Preview
![preview](https://github.com/user-attachments/assets/c0a87919-9703-4ead-9025-e6d43d1e57e3)

## How to make responsive folding animation?
You can be using the `AnimatedFoldable.Vertical` or `AnimatedFoldable.Horizontal` widgets to resolve it.

```tsx
function ExampleComponent() {
    const [visible, setVisible] = useState(true);

    return (<>
        <button onClick={() => setVisible(!visible)}>Fold</button>
        { /* or using AnimatedFoldable.Vertical widget */ }
        <AnimatedFoldable.Horizontal visible={visible} duration="0.3s">
            <Row>
                <Box>Hello, World 1</Box>
                <Box>Hello, World 2</Box>
                <Box>Hello, World 3</Box>
            </Row>
        </AnimatedFoldable.Horizontal>
    </>)
}
```

### Simple Preview
![preview](https://github.com/user-attachments/assets/d3959d24-37f5-44b0-b659-08b4428e5092)

## How to animate child component changes?
If you want to animate dynamic changes in a child component (e.g. when transitioning out of a loading screen or in other similar cases), you can easily achieve this by simply using the `AnimatedTransition` widget.

> See Also, You don't need to forward the `value` property value by unconditionally, but it helps define more clearly whether the child component state has changed.

```tsx
export default function ExampleComponent() {
    const [count, setCount] = useState(0);

    // You can be using like this:
    // 
    // { // when using CSS animation
    //     fadeIn: "keyframe-name"
    //     fadeOut: "keyframe-name"
    // }
    return (
        <Column size="100%">
            <button onClick={() => setCount(count + 1)}>Count Up</button>
            <AnimatedTransition value={count} animation={{
                duration: "0.3s",
                fadeIn:  {from: {opacity: 0}, to: {opacity: 1}},
                fadeOut: {from: {opacity: 1}, to: {opacity: 0}}
            }}>
                <Box>Hello, World! {count}</Box>
            </AnimatedTransition>
        </Column>
    )
}
```

### Simple Preview
> fadeIn:  {from: {opacity: 0, transform: "translateY(100%)"}, to: {opacity: 1, transform: ""}},<br>
> fadeOut: {from: {opacity: 1, transform: ""}, to: {opacity: 0, transform: "translateY(-100%)"}}

![ezgif-5-0d105f42bd](https://github.com/user-attachments/assets/c8696a97-adb1-4e24-a9f7-e3b7d52a7c0b)

## How to make Tab Navigation?
You can be using the `TabNavigation.Vertical` or `TabNavigation.Horizontal` widgets to resolve it.

```tsx
export default function ExampleComponent() {
    const [index, setIndex] = useState(0);

    return (
        <TabNavigation.Horizontal index={index}  gap="15px" duration="0.5s">
            <h1 onClick={() => setIndex(0)}>Item 1</h1>
            <h1 onClick={() => setIndex(1)}>Item 2</h1>
            <h1 onClick={() => setIndex(2)}>Item 3</h1>
        </TabNavigation.Horizontal>
    )
}
```

### Simple Preview
![ezgif-6-50460d4d25](https://github.com/user-attachments/assets/7312ac10-0ca2-404b-acb7-3437c89d8f82)

## How to make responsive grid?
You can be using the `ConstraintBuilder` with `Grid` widgets to resolve it.

```tsx
return (
    <ConstraintBuilder<number>
        constraints={[
            new Constraint(1000, Infinity, 3),
            new Constraint(600, 1000, 2),
            new Constraint(-Infinity, 600, 1)
        ]}
        /* You need to set this option accordingly according to the situation. */
        usememo={true}
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
