---
description: 'In editor :: PCGEx | Spawn Dynamic Mesh'
icon: circle
---

# Spawn Dynamic Mesh

A more flexible alternative to the native Spawn Dynamic Mesh

**How It Works**

> AI-Generated, needs proofreading

* The node spawns dynamic mesh instances based on the provided `Template Descriptor` of type `PCGExDynamicMeshDescriptor`.
* It targets actors of class `AActor`, applying any specified property overrides from an array of `FPCGObjectPropertyOverrideDescription`.
* Attachment rules defined by `PCGExAttachmentRules` dictate how spawned meshes attach to existing actors in the scene.
* After spawning, the node calls a list of post-process functions on the target actor, provided these functions are parameter-less and marked with the "CallInEditor" flag.

#### Configuration

<details>

<summary><strong>Template Descriptor</strong> <code>PCGExDynamicMeshDescriptor</code></summary>

Controls template descriptor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Actor</strong> <code>AActor</code></summary>

Controls target actor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Property Override Descriptions</strong> <code>Array of FPCGObjectPropertyOverrideDescription</code></summary>

Controls property override descriptions.

</details>

<details>

<summary><strong>Attachment Rules</strong> <code>PCGExAttachmentRules</code></summary>

Controls attachment rules.

</details>

<details>

<summary><strong>Post Process Function Names</strong> <code>Array of FName</code></summary>

Specify a list of functions to be called on the target actor after instances are spawned. Functions need to be parameter-less and with "CallInEditor" flag enabled.

</details>

***

Source: `Source\PCGExElementsTopology\Public\Elements\PCGExSpawnDynamicMesh.h`
