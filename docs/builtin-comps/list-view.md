# List View

## What it does
- Creates a scrollable list of given children

## Builder Parameters
1. `spacing` (Optional):
    - The spacing between each child of the list
    - Default: 0
2. `alignment` (Optional):
    - Where to align the children
    - Default: Center
3. `children`:
    - The children to create a scrollable list from

## Size Behaviour
- Maximum

## Example
```java
public class TestListView implements UIComponent {
    @Override
    public UIComponent build(Layout layout) {
        return new Center(
            new Sized(
                Size.staticSize(new Vector2i(200, 100)),
                new Container.Builder()
                    .withColor(new Color(0x88000000))
                    .withChild(
                        new ListView.Builder()
                            .withAlignment(LayoutSetting.CENTER)
                            .build(
                                new Text.Builder("Hello"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Text.Builder("Hello Again"),
                                new Sized(
                                    Size.staticSize(new Vector2i(60, 20)),
                                    new Button.Builder()
                                        .withOnPress(() -> {})
                                        .build(new Center(new Text.Builder("A Button")))
                                )
                            ))
                    ));
    }
}
```

## What it looks like
TODO
