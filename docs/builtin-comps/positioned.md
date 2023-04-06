# Positioned 

## What it does
- This UI component positions a child component at a specified location.

## Parameters
1. `position`
   - A `Vector2i` object that specifies the position of the child component.
2. `child`
   - The child UI component that will be positioned.

## Size Behaviour
- Minimum

## Example
```java
public class TestPositioned implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Positioned(
            new Vector2i(100, 20),
            new Text.Builder("Positioned")
        );
    }
}
```

## What it looks like
![An image of positioned in effect](./img/positioned.png)
