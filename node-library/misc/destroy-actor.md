---
description: 'In editor :: PCGEx | Destroy Actor'
icon: circle
---

# Destroy Actor

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Removes references to actors that were previously spawned by the PCG component this node is currently executing on.

#### How It Works

This node cleans up actor references that were created during earlier stages of procedural generation. It scans point data for a specific attribute containing actor references, then checks if those actors were spawned by the current PCG component. If so, it clears the reference from the point's data. This ensures that old actor associations are removed before new ones are created, preventing conflicts or duplicate references during repeated procedural runs.

The node works by:

1. Reading the specified attribute from each input point
2. Validating whether that attribute contains a valid actor reference
3. Checking if that actor was spawned by the current PCG component
4. Clearing the reference in the point's data

This process helps maintain clean state management during repeated procedural generation runs, especially when actors are created and destroyed multiple times.

{% hint style="info" %}
Connects to **Points** processing pins.
{% endhint %}

#### Configuration

<details>

<summary><strong>ActorReferenceAttribute</strong><br><em>Actor reference</em></summary>

Specifies the name of the attribute that holds the actor references to be cleared. This should match the attribute used by the "Spawn Actor" subnode to store references.

</details>

#### Usage Example

Use this node at the end of a PCG graph that spawns actors, especially when you want to regenerate content multiple times. For example, if your graph spawns buildings and then runs again, use this node to clear old building references before spawning new ones.

#### Notes

* This node only clears attribute references, not actual actor destruction in the game world.
* Ensure the attribute name matches what was used during actor spawning.
* Useful for preventing memory leaks or duplicate references in repeated PCG executions.
