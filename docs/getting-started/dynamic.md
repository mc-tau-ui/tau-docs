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
    private Layout layout;

    @Override
    public void tick() {
        t++;
        if (layout == null) return;
        rebuild(layout);
    }

    @Override
    public UIComponent build(Layout layout) {
        this.layout = layout;
        return new Align.Builder()
                .withVertical(LayoutSetting.START)
                .withHorizontal(LayoutSetting.END)
                .build(new Padding(new Pad.Builder().withRight(10).withTop(10).build(), new Text.Builder(String.valueOf(t))));
    }
}
```

So here, you can see `DynamicUIComponent` has a method called `tick` that you can override. In this case, a value `t` is being incremented
every tick, and if the layout is ready, which it should be when `tick` is called, it will rebuild this widget to reflect the change of 
`t` as the value of it is used by `Text`.

:::danger

Note that `DynamicUIComponent` is an abstract class, and it has fields used to update the UI when rebuilt, DO NOT touch those unless
you absolutely know what you are doing.

:::
