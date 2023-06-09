# Text 

## What it does
- This displays text. It is that simple.

## Builder Parameters 
1. `text` 
    - An `ITextComponent` object that represents the text string to be displayed. It can be constructed using a `String` object with the `StringTextComponent` class.
2. `color` (Optional) 
    - Color of the text.
    - Default: White
3. `overflowBehaviour` (Optional)
    - Defines how the text is displayed when it exceeds the available space. If not provided, it defaults to `OverflowBehaviour.OVERFLOW`.
    - Default: Overflow

## Size Behaviour
- Minimum

## Example
```java
public class TestText implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Center(
            new Text.Builder("Wow hello a lot of textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
                    .withOverflowBehaviour(Text.OverflowBehaviour.ELLIPSIS)
        );
    }
}
```

## What it looks like
![An image of text in effect](./img/text.png)
