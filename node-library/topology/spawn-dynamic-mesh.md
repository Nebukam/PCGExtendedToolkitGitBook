---
description: 'In editor :: PCGEx | Spawn Dynamic Mesh'
icon: circle
---

# Spawn Dynamic Mesh

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A more flexible alternative to the native Spawn Dynamic Mesh.

### Overview

This node allows you to spawn dynamic mesh components from procedural data points, giving you fine-grained control over how each instance is created and configured. It's particularly useful for generating complex, varied geometry that needs to be dynamically placed and customized based on point attributes or other procedural inputs.

The node works by taking input points and using them as spawn locations for dynamic mesh instances. You can define a base mesh template, configure rendering and collision settings, and even specify how the spawned meshes should be attached to each other or to parent objects.

{% hint style="info" %}
This node requires a valid mesh template to function properly. Make sure your mesh is set up correctly in the **Template Descriptor** before using this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Default)**: Points that define spawn locations and attributes for each dynamic mesh instance.
* **Point Filter**: Optional input to filter which points should be processed.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Default)**: The resulting dynamic mesh components spawned at the point locations.

</details>

### Properties Overview

Controls how the dynamic meshes are created and configured.

***

#### General Settings

Configures the core behavior of the node, including the mesh template, target actor, and attachment rules.

**Template Descriptor**

_The base mesh configuration used for spawning instances._

* Defines rendering settings, collision properties, and other component behaviors
* Supports overridable properties from point attributes
* Must contain a valid mesh asset to function properly

**Target Actor**

_The actor that will be used as the template for spawned meshes._

* If specified, this actor's components will be used as a base for spawning new dynamic meshes
* Useful when you want to replicate an existing actor's structure and properties
* Can be left empty to use the mesh directly from the descriptor

**Property Override Descriptions**

_Describes how point attributes should override component properties._

* Allows mapping point data to mesh properties (e.g., scale, material index)
* Each override defines which attribute to read from and what property to update
* Supports multiple overrides per mesh component

**Attachment Rules**

_How spawned meshes are attached to their parent or other objects._

* Controls location, rotation, and scale attachment behavior
* Can be set to keep relative positions or align with world space
* Includes option to weld simulated bodies together when attaching

**Post Process Function Names**

_List of function names to call on the target actor after spawning._

* Functions must be parameter-less and have the "CallInEditor" flag enabled
* Useful for triggering custom logic or updates after mesh generation
* Can be used to refresh lighting, physics, or other systems

### Notes

* This node is designed to work with point data that defines spawn locations and optional attributes.
* For best performance, ensure your mesh assets are optimized and use appropriate LOD settings.
* The **Target Actor** setting is useful when you want to replicate an existing actor's structure, but it's not required if you're using the descriptor directly.
* When using property overrides, make sure that the point data contains attributes with matching names and types.
* Consider using this node in combination with other processing nodes like filters or transformers to control which points are used for spawning.
