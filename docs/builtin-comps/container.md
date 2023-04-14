# Container

## What it does
- A container that can hold a single child UIComponent, with an optional background color.

## Builder Parameters
1. `child` (Optional)
    - The child `UIComponent` to add to the container. Set to `null` or do not call `withChild` to create an empty container.
    - Default: null (No Child)
2. `color` (Optional)
    - The background color of the container. Set to `null` or do not call `withColor` to have no background.
    - Default: null (Transparent)
3. `sizeBehaviour` (Optional)
    - Defines the size behaviour, max to fill all available space, min to use child size. If child is not defined min will not have an effect.

## Space Behaviour
- Defined by `sizeBehaviour`

## Example
```java
public class TestContainer implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Container.Builder()
            .withColor(Color.BLUE)
            .withChild(new Center(new Text.Builder("Blue!!")));
    }
}
```

## What it looks like
![An image of container in effect](./img/container.png)
