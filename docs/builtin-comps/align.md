# Align

## What it does
- Align have one child, and it aligns the child based on the optional parameters given.

## Builder Parameters
1. `horizontal` (Optional)
    - How the child component should be aligned horizontally.
    - Default: Start (Left)
2. `vertical` (Optional)
    - How the child component should be aligned vertically.
    - Default: Start (Top)
3. `child`
    - The child component to align.

## Space Behaviour
- Minimum

## Example
```java
public class TestAlign implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Align.Builder()
                .withVertical(LayoutSetting.END)
                .withHorizontal(LayoutSetting.CENTER)
                .build(new Text.Builder("Whats up?"));
    }
}
```

## What it looks like
![An image of align in effect](./img/align.png)
