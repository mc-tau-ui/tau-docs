# Tips & Tricks
Here are some tips and tricks when using Tau

## 1. Nest your components
- Tau is very powerful when it comes to writing clean and maintainable code. A big part of that is the ability to separate code into reusable components. If you haven't seen, check the [example](../builtin-comps/transform#example) of Transform. There you can see a `TestTexture` is being transformed, thats the [example](../builtin-comps/texture#example) `Texture`.

## 2. Hot reload your code
- If you are using an IDE like IntelliJ, it's very possible that you can hot reload your code if there was no significant change such as creating classes or changing class structures. This will allow you to iterate and create UIs a lot faster without having to restart your game to see the changes! In IntelliJ, the default keystroke to reload your code is `Ctrl+Shift+F9`. 

:::warning
Note, if you changed a lamdba function which involved changing the usage of outside parameters, you will need to make sure the lambda function is not being called when the reload happens, or else it will crash the game. As far as I know this will not cause corruption or something but it's always good to not your game crash, yea?
:::

## 3. Ask questions!
- If you don't understand something or need help, feel free to join our discord and ask your question there. I will be happy to answer them to the best of my ability. You can find the link to the discord by scrolling down, under the Community section, or just use the link [here](https://discord.com/invite/FatHApd)
