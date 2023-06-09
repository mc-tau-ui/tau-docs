# Text Field

## What it does
- This is a basic text field that allows players to enter text into.

## Builder Parameters
1. `message` (Optional)
    - The narration message.
    - Default: null
2. `hintText` (Optional) 
    - The text that will be displayed in gray when there are no input.
    - Default: null
3. `onChange` (Optional)
    - A callback that will be triggered when the input text changes.
    - Default: null
4. `validator` (Optional)
    - A predicate that will be called when new text is entered to validate input.
    - Default: null
5. `formatter` (Optional)
    - A BiFunction that is called when text is changed to format the text.
    - Default: null

## Space Behaviour
- Maximum

## Example
```java
public class TestTextField implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Center(
            new Sized(
                Size.staticSize(200, 20),
                new TextField.Builder()
                    .withHintText(new StringTextComponent("hint text"))
                    .withOnChange(Tau.LOGGER::info)
            )
        );
    }
}
```

## What it looks like
![An example of textfield in effect](./img/textfield.png)
