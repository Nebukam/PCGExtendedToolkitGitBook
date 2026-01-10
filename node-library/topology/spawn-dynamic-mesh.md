---
description: 'In editor :: PCGEx | Spawn Dynamic Mesh'
icon: circle
---

# Spawn Dynamic Mesh

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Spawns dynamic mesh instances from point data using a template actor and optional property overrides.

#### Overview

This node creates instances of a specified actor template at each input point, effectively spawning dynamic meshes in the level. It's a more flexible alternative to Unreal's native Spawn Dynamic Mesh node, allowing for complex actor setups with custom properties and behaviors.

It transforms point data into spawned actors, making it useful for creating procedural environments, object placement, or dynamic scene elements that require individualized properties per instance. This is particularly valuable when working with clusters or surfaces where you want to place unique objects at each point.

{% hint style="info" %}
Connects to **Points** input pin and outputs **Actors**.
{% endhint %}

#### How It Works

This node iterates through all input points and spawns a copy of the specified target actor at each point's location. For each spawned instance, it applies any configured property overrides and attachment rules. If post-process functions are defined, they are executed on each spawned actor after creation.

The process involves:

1. Reading input points
2. Creating an instance of the target actor at each point's location and rotation
3. Applying property overrides to customize each instance
4. Attaching instances according to specified attachment rules (location, rotation, scale)
5. Calling any defined post-process functions on the spawned actors

Each spawned actor inherits the template's default properties but can be customized per instance through property overrides.

<details>

<summary>Inputs</summary>

* **Points** (Default): Input point data that defines where to spawn actors.
* **(Optional)** Additional inputs may be used for filtering or additional metadata, depending on node configuration.

</details>

<details>

<summary>Outputs</summary>

* **Actors** (Default): Output of spawned actor instances. Each instance corresponds to an input point and is positioned at that point's location.

</details>

#### Configuration

<details>

<summary><strong>Template Descriptor</strong><br><em>Defines the mesh and component properties to use for spawning.</em></summary>

Controls how the dynamic mesh is created from the template actor. Allows specifying which components or meshes to use for instance generation.

</details>

<details>

<summary><strong>Target Actor</strong><br><em>The actor template to spawn at each point.</em></summary>

Specifies the actor blueprint or asset that will be duplicated and spawned at each input point location. This defines what type of object is created.

</details>

<details>

<summary><strong>Property Override Descriptions</strong><br><em>List of properties to override on each spawned instance.</em></summary>

Allows defining which properties from the target actor should be modified per instance. These overrides can reference point data or use constant values.

</details>

<details>

<summary><strong>Attachment Rules</strong><br><em>How to attach spawned actors to their source points.</em></summary>

Controls how the spawned actors are positioned relative to the input points. Options include keeping relative position, snapping to the point, or applying custom offsets.

</details>

<details>

<summary><strong>Post Process Function Names</strong><br><em>List of function names to call on each spawned actor after creation.</em></summary>

Specifies functions defined in the target actor that should be executed after an instance is created. These functions must be parameter-less and marked with "CallInEditor".

</details>

#### Usage Example

1. Create a simple actor blueprint with a mesh component and some custom properties
2. Set this blueprint as the **Target Actor**
3. Add property overrides to customize scale or material per instance using point data
4. Connect input points from a cluster or surface node
5. Optionally define post-process functions to trigger additional logic on each spawned actor

This setup allows you to generate complex, varied scenes with minimal effort while maintaining control over individual instance properties.

#### Notes

* The node requires the target actor to be a valid blueprint or asset that can be instantiated.
* Property overrides must reference valid properties in the target actor.
* Post-process functions are only called if they exist and are properly marked for editor execution.
* Performance may vary depending on the complexity of the target actor and number of spawned instances.
