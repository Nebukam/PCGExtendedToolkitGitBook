---
icon: rectangles-mixed
---

# Mesh Collection

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a collection of static meshes with optional material overrides and component descriptors for use in procedural generation.

#### How It Works

A Mesh Collection manages a list of mesh assets that can be used in procedural generation workflows. Each entry in the collection can define:

* A static mesh asset
* Material overrides for specific slots or multiple slots
* Component descriptor settings (ISM or SM) to control how the mesh is instantiated

When another node references this collection, it randomly selects an entry based on assigned weights. For entries with material variants:

* If using **Single Slot**, it picks one material from a list for a specific slot index
* If using **Multi Slots**, it assigns multiple materials to different slots

The collection also supports subcollections, where an entry can reference another mesh collection, enabling hierarchical organization of assets.

Each entry can have its own descriptor settings (ISM or SM) or inherit global settings based on the `GlobalDescriptorMode` setting. This allows fine-grained control over how each mesh is instantiated in the final output.

#### Configuration

<details>

<summary><strong>Global Descriptor Mode</strong><br><em>Controls how component descriptors are applied across entries.</em></summary>

Determines whether each entry can define its own descriptor settings or if global settings should be enforced.

**Values**:

* **Per Entry**: Each entry defines its own descriptor settings.
* **Overrule**: Global settings override individual entry settings.

</details>

<details>

<summary><strong>Global ISM Settings</strong><br><em>Default ISM component descriptor for all entries.</em></summary>

Sets default settings for ISM (Instanced Static Mesh) components used when generating instances from this collection. Applies only when `GlobalDescriptorMode` is set to "Overrule".

</details>

<details>

<summary><strong>Global SM Settings</strong><br><em>Default Static Mesh component descriptor for all entries.</em></summary>

Sets default settings for Static Mesh components used when generating instances from this collection. Applies only when `GlobalDescriptorMode` is set to "Overrule".

</details>

<details>

<summary><strong>Entries</strong><br><em>List of mesh entries in the collection.</em></summary>

An array of mesh entries, each defining a static mesh asset and its associated properties like material overrides and component descriptors.

</details>

#### Usage Example

Create a Mesh Collection containing several tree meshes with different material variants. Assign weights to favor certain trees over others. Use this collection as input for a mesh spawner node to generate a forest where each tree instance randomly selects from the collection, applying different materials based on the entry's settings.

#### Notes

* Material overrides are applied per-slot, allowing fine-grained control over which materials are used.
* Subcollections enable hierarchical grouping of assets for complex collections.
* Descriptor settings can be defined globally or per-entry, offering flexibility in how instances are generated.
* When using material variants, ensure that the slot indices match the number of material slots in your static mesh to avoid errors during runtime.
