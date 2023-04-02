---
sidebar_position: 1
description: Getting started with Tau is easy. Here is how you install it to your project.
---

# Installation

Add the Saps maven repository to your repositories list:
```
maven { url = "https://maven.saps.dev/minecraft" }
```


Add Tau to your dependencies list:
```
implementation fg.deobf("TODO")
```


Refresh your Gradle project:
- If you are using IntelliJ, there should be a floating button that you can click to refresh your Gradle project. Or you can use the fresh button in the Gradle tab on the right.
- Or you can run `gradle build`


Voilà! You have Tau in your project!
