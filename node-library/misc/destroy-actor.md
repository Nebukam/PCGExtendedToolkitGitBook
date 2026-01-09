---
description: 'In editor :: PCGEx | Destroy Actor'
icon: circle
---

# Destroy Actor

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Destroys actor references that were previously spawned by the PCG component this node is currently executing on.

### Overview

This node allows you to clean up actors that were created during a previous step in your procedural generation graph. It's particularly useful when you've used a "Spawn Actor" node to create temporary objects and now want to destroy them before continuing with further processing or exporting results.

The node works by looking for actor references stored in point data, typically from a spawn operation, and destroying those actors in the game world. It ensures that only actors spawned by the current PCG component are destroyed, preventing accidental deletion of other actors in your scene.

{% hint style="info" %}
This node only destroys actors that were created during the same PCG execution context. It will not affect actors created by other systems or components.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Default): Points containing actor references to destroy

</details>

<details>

<summary>Outputs</summary>

* **Points** (Default): Points with actor references removed from the data

</details>

### Properties Overview

Controls how the node identifies and destroys actors.

***

#### Settings

Specifies which attribute contains the actor references to destroy.

**Actor Reference Attribute**

_The name of the point attribute that stores the actor reference to destroy._

* This should match the attribute name used when spawning the actors
* Points without this attribute will be skipped
* Common values include "ActorReference" or custom names like "SpawnedActor"

### Notes

* Use this node after a "Spawn Actor" operation to clean up generated content
* The actor references must have been created by the same PCG component for destruction to work properly
* This node does not modify point data beyond removing the reference attribute; it only destroys the actual actors in the world
* Consider using this in combination with a "Clear Data" node if you want to remove all spawned data from your points after destruction
