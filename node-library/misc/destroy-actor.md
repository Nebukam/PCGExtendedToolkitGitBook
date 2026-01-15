---
description: 'In editor :: PCGEx | Destroy Actor'
icon: circle
---

# Destroy Actor

Destroy target actor references that have been previously spawned by the PCG component this note is currently executing on.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies target actors based on the provided Actor Reference Attribute named "Actor reference".
* It then proceeds to destroy these identified actor references that were previously spawned by the PCG component executing this node.
* Destruction involves removing the specified actors from the game world and releasing associated resources.

#### Configuration

<details>

<summary><strong>Actor Reference Attribute</strong> <code>Name</code></summary>

Actor reference

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExDestroyActor.h`
