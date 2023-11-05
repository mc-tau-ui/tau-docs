# Basics of Theming

There are some theming capabilities built into Tau.
You can take a look at the implementation of the default theme [here](https://github.com/mc-tau-ui/Tau/blob/1.16-dev/src/main/java/com/github/wintersteve25/tau/theme/MinecraftTheme.java)

Basically, all you need to do is create a class that implements the interface `Theme`, implement the methods however you'd like, and pass it into the renderer when creating an UI.
