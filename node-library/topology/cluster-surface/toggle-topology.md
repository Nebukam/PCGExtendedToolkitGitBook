---
description: 'Topology : Toggle'
icon: circle
---

# Toggle Topology

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

## <mark style="color:orange;">\[DEPRECATED]</mark>

> Registers/unregisters or removes PCGEx spawned dynamic meshes. Use OutputMode : Dynamic Mesh to use the mesh with the PCG Geometry Script interop stack from now on.

### Overview

This node controls the visibility and registration state of dynamic meshes that were previously created by PCGEx nodes. It allows you to toggle their visibility, unregister them from the scene, or completely remove them. This is useful when working with procedural geometry that needs to be dynamically shown or hidden based on conditions in your graph.

{% hint style="warning" %}
This node is deprecated. Use OutputMode : Dynamic Mesh instead for better integration with Unreal's geometry script interop stack.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Optional): Points or data to process. The node will operate on dynamic meshes associated with these points.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified points or data, with updated topology state for dynamic meshes.

</details>

### Properties Overview

Controls how the node interacts with dynamic meshes and their registration in the scene.

***

#### Action

Specifies what operation to perform on the dynamic meshes.

**Action**

_What action to take on the dynamic meshes._

* Controls whether to toggle visibility, unregister, or remove the meshes
* When set to **Toggle**, the mesh visibility is switched on/off
* When set to **Remove**, the mesh is completely removed from the scene

**Values**:

* **Toggle**: Toggle the visibility of registered dynamic meshes
* **Remove**: Remove dynamic meshes from the scene entirely

**Toggle State**

_Controls the target visibility state when toggling._

* Only relevant when Action is set to **Toggle**
* When enabled, meshes are made visible; when disabled, they are hidden

**Filter by Tag**

_Limit which dynamic meshes are affected by tag filtering._

* When enabled, only meshes tagged with specific names are targeted
* Useful for managing multiple dynamic meshes in a single graph

**Tag Filters**

_List of comma-separated tags to filter dynamic meshes._

* Only applies when **Filter by Tag** is enabled
* Example: "PCGExTopology,MyCustomTag" will target meshes with either tag

**Target Actor**

_Specific actor to target for mesh operations._

* When set, only meshes belonging to this actor are affected
* Useful for isolating operations to a specific part of the scene
