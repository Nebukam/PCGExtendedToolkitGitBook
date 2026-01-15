---
description: 'In editor :: PCGEx | Path : Spline Mesh'
icon: circle
---

# Spline Mesh

Create spline mesh components from paths.

**How It Works**

> AI-Generated, needs proofreading

* The node creates spline mesh components by utilizing paths as input guides.
* It uses the PCGExCollectionSource to specify where to source assets for generating these spline meshes.
* Assets for the spline are selected from the specified PCGExMeshCollection, adhering to details outlined in PCGExRoamingAssetCollectionDetails.
* Distribution settings dictate how these mesh components are placed along the path.
* Material distribution settings determine the method by which materials are assigned to the generated spline mesh components.

#### Configuration

<details>

<summary><strong>Collection Source</strong> <code>PCGExCollectionSource</code></summary>

Controls collection source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Asset Collection</strong> <code>PCGExMeshCollection</code></summary>

Controls asset collection.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Set Details</strong> <code>PCGExRoamingAssetCollectionDetails</code></summary>

Controls attribute set details.

📦 See: RoamingAssetCollection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distribution Settings</strong> <code>PCGExAssetDistributionDetails</code></summary>

Distribution details

📦 See: AssetDistribution configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Material Distribution Settings</strong> <code>PCGExMicroCacheDistributionDetails</code></summary>

How should materials be distributed and picked.

📦 See: MicroCacheDistribution configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tangents</strong> <code>PCGExTangentsDetails</code></summary>

Per-point tangent settings. Can't be set if the spline is linear.

📦 See: Tangents configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>PCGExSplineMeshMutationDetails</code></summary>

Push details

📦 See: SplineMeshMutation configuration

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

<summary><strong>Default Descriptor</strong> <code>PCGExStaticMeshComponentDescriptor</code></summary>

Default static mesh config applied to spline mesh components.

</details>

<details>

<summary><strong>└─ Force Default Descriptor</strong> <code>bool</code></summary>

If enabled, override collection settings with the default descriptor settings

⚡ PCG Overridable

</details>

<details>

<summary><strong>Property Override Descriptions</strong> <code>Array of FPCGObjectPropertyOverrideDescription</code></summary>

Controls property override descriptions.

</details>

<details>

<summary><strong>Target Actor</strong> <code>AActor</code></summary>

Controls target actor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Post Process Function Names</strong> <code>Array of FName</code></summary>

Specify a list of functions to be called on the target actor after spline mesh creation. Functions need to be parameter-less and with "CallInEditor" flag enabled.

</details>

**Fitting**

<details>

<summary><strong>Scale To Fit</strong> <code>PCGExScaleToFitDetails</code></summary>

If enabled, will break scaling interpolation across the spline.

📦 See: ScaleToFit configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Justification</strong> <code>PCGExJustificationDetails</code></summary>

Controls justification.

📦 See: Justification configuration

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Asset Path Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write asset path to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tagging Details</strong> <code>PCGExAssetTaggingDetails</code></summary>

Tagging details

📦 See: AssetTagging configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight To Attribute</strong> <code>PCGExWeightOutputMode</code></summary>

Update point scale so staged asset fits within its bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write asset weight to.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExCollections\Public\Elements\Paths\PCGExPathSplineMesh.h`
