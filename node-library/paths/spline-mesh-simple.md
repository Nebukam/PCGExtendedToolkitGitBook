---
description: 'In editor :: PCGEx | Path : Spline Mesh (Simple)'
icon: circle
---

# Spline Mesh (Simple)

Create spline mesh components from paths.

**How It Works**

> AI-Generated, needs proofreading

* The node creates spline mesh components based on input paths provided to it.
* It uses an asset type setting to determine how assets are selected for these spline meshes; if "Asset (Attr)" is chosen, the attribute specified writes the asset path, otherwise a constant static mesh defined in the "Asset" setting is used.
* If "Read Material From Attribute" is enabled, the node reads material information from the attribute named in "Material Attribute Name".

#### Configuration

<details>

<summary><strong>Asset Type</strong> <code>PCGExInputValueType</code></summary>

How the asset gets selected

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Asset (Attr)</strong> <code>Name</code></summary>

The name of the attribute to write asset path to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Asset</strong> <code>StaticMesh</code></summary>

Constant static mesh .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Read Material From Attribute</strong> <code>bool</code></summary>

Controls read material from attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Material Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write material path to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Slot</strong> <code>int32</code></summary>

The index of the slot to set the material to, if found.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tangents</strong> <code>PCGExTangentsDetails</code></summary>

Per-point tangent settings. Can't be set if the spline is linear.

📦 See: Tangents configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spline Mesh Up Mode</strong> <code>PCGExSplineMeshUpMode</code></summary>

Controls spline mesh up mode.

</details>

<details>

<summary><strong>Spline Mesh Up Vector (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls spline mesh up vector (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spline Mesh Up Vector</strong> <code>Vector</code></summary>

Controls spline mesh up vector.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Static Mesh Descriptor</strong> <code>PCGExStaticMeshComponentDescriptor</code></summary>

Default static mesh config applied to spline mesh components.

</details>

<details>

<summary><strong>Property Override Descriptions</strong> <code>Array of FPCGObjectPropertyOverrideDescription</code></summary>

Controls property override descriptions.

</details>

<details>

<summary><strong>Post Process Function Names</strong> <code>Array of FName</code></summary>

Specify a list of functions to be called on the target actor after spline mesh creation. Functions need to be parameter-less and with "CallInEditor" flag enabled.

</details>

**Mutations**

<details>

<summary><strong>Expansion</strong> <code>PCGExSplineMeshMutationDetails</code></summary>

Push details

📦 See: SplineMeshMutation configuration

⚡ PCG Overridable

</details>

**Mutations > Offsets**

<details>

<summary><strong>Start Offset Input</strong> <code>PCGExInputValueType</code></summary>

Type of Start Offset

</details>

<details>

<summary><strong>Start Offset (Attr)</strong> <code>Name</code></summary>

Start Offset Attribute (Vector 2 expected)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Start Offset</strong> <code>Vector2D</code></summary>

Start Offset Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Offset Input</strong> <code>PCGExInputValueType</code></summary>

Type of End Offset

</details>

<details>

<summary><strong>End Offset (Attr)</strong> <code>Name</code></summary>

End Offset Attribute (Vector 2 expected)

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Offset</strong> <code>Vector2D</code></summary>

End Offset Constant

⚡ PCG Overridable

</details>

**Target Actor**

<details>

<summary><strong>Target Actor</strong> <code>AActor</code></summary>

Controls target actor.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathSplineMeshSimple.h`
