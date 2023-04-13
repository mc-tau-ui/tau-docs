---
sidebar_position: 3
description: Once you have a UI, render it onto the screen!
---

# Render the UI
Now you have a UI, time to render it onto the screen to see it.
Currently, you have 2 options when it comes to rendering a Tau UI.

## Option One: `ScreenUIRenderer`
The `ScreenUIRenderer` will render the UI onto the screen as a Minecraft Screen. The second parameter determines whether or not it should render a translucent gray background that all minecraft screens have. This screen will pause the game when you open the screen.

You can open the screen with 
```java
Minecraft.getInstance().setScreen(new ScreenUIRenderer(new ExampleUI(), true));
```

`ScreenUIRenderer` just extends the Minecraft `Screen` class. You can extend `ScreenUIRenderer` and override `shouldPauseGame` or anything
else you want to change if you'd like.

## Option Two: `HudUIRenderer`
The `HudUIRenderer` have a `render` method that takes in a `MainWindow`, `MatrixStack` and `partialTicks`. This will directly render the
UI onto the screen. Here is an example of how you would do it.

```java
@SubscribeEvent
public static void onRenderOverlay(RenderGameOverlayEvent.Post e) {
    if (e.getType() == RenderGameOverlayEvent.ElementType.HOTBAR) {
        new HudUIRenderer(new ExampleUI()).render(e.getWindow(), e.getMatrixStack(), e.getPartialTicks());
    }
}
```

You can create the instance of `HudUIRenderer` and store it instead of creating it every time it's rendered. 
But that is not the focus of this documentation.
