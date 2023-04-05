---
sidebar_position: 4
description: All about DynamicUIComponent
---
# Dynamic UI

Besides regular `UIComponents`, there are also `DynamicUIComponent`. This is a UI component that can be updated and rebuilt on demand.
This is similar to Flutter's `StatefulWidget`.

This is an example of a `DynamicUIComponent`

```java
public class ExampleDynamic extends DynamicUIComponent {
    private int t;

    @Override
    public void tick() {
        t++;
        rebuild();
    }

    @Override
    public UIComponent build(Layout layout) {
        return new Align.Builder()
                .withVertical(LayoutSetting.START)
                .withHorizontal(LayoutSetting.END)
                .build(new Padding(new Pad.Builder().withRight(10).withTop(10).build(), new Text.Builder(String.valueOf(t))));
    }
}
```

So here, you can see `DynamicUIComponent` has a method called `tick` that you can override. In this case, a value `t` is being incremented
every tick, and the UI is being rebuilt.

:::warning

Note that `DynamicUIComponent` is an abstract class, and it has fields used to update the UI when rebuilt, DO NOT touch those unless
you absolutely know what you are doing.

:::
