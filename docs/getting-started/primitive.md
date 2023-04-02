---
sidebar_position: 5
description: All about PrimitiveUIComponent
---

# Primitive UI
Wanna know how most of the built-in components are made? Well, they are using this.
`PrimitiveUIComponent` provides lower level API to how the Tau UIs are rendered. So you can do all kinds of
funky things with it.

For example, this is the code for the built-in [Sized](/docs/builtin-comps/sized) component
```java
public final class Sized implements PrimitiveUIComponent {

    // ... code here are omitted to reduce complexity

    @Override
    // These the renderables, dynamicUIComponents and eventListeners are just lists of each type that exist within the UI that 
    // Tau is trying to build right now. You can interact with them directly if you'd like. But make sure you know what you are doing.
    public Vector2i build(Layout layout, List<IRenderable> renderables, List<DynamicUIComponent> dynamicUIComponents, List<IGuiEventListener> eventListeners) {
        // this acquires the size specified by the caller
        Vector2i componentSize = size.get(layout.getSize());
    
        // if the wanted size is bigger than the size we have, we log an error and do not render anything.
        if (componentSize.outside(layout.getSize())) {
            Tau.LOGGER.error("Sized UIComponent has a size greater than the amount of size available");
            return layout.getSize();
        }
        
        // if the size is valid, then we create a new Layout for the child that restricts its size to the given size specified by the caller
        Layout childLayout = new Layout(
                componentSize.x, 
                componentSize.y,
                layout.getPosition(Axis.HORIZONTAL, componentSize.x),
                layout.getPosition(Axis.VERTICAL, componentSize.y)
        );

        // finally, we build the child with the new layout
        UIBuilder.build(childLayout, child, renderables, dynamicUIComponents, eventListeners);
        return componentSize;
    }
}
```
