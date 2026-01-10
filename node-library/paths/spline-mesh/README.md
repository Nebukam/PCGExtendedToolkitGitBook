---
description: 'In editor :: PCGEx | Path : Spline Mesh'
icon: circle
---

# Spline Mesh

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create spline mesh components from paths.

#### How It Works

This node processes each path by breaking it into segments and generating spline mesh components along those segments. For each segment, it:

1. Selects an asset from the configured collection (or uses a default descriptor)
2. Applies scaling and orientation based on the path's shape
3. Sets up spline mesh component properties like material, up vector, and transform
4. Optionally outputs asset path or weight information as attributes

It supports both uniform and distribution-based asset selection across paths. If enabled, it can scale components to fit within their bounds or apply custom tangents for smoother curves.

#### Configuration

<details>

<summary><strong>Collection Source</strong><br><em>How to source the collection of assets used for spline meshes.</em></summary>

Controls whether to use a predefined asset collection or an attribute-based collection.

**Values**:

* **Asset**: Use a predefined mesh collection asset.
* **Attribute Set**: Use a collection defined by point attributes.

</details>

<details>

<summary><strong>Asset Collection</strong><br><em>The mesh collection asset to use when Collection Source is set to Asset.</em></summary>

The soft object reference to the mesh collection used for spline mesh generation. Only visible when Collection Source is Asset.

</details>

<details>

<summary><strong>Attribute Set Details</strong><br><em>Settings for how to read a roaming asset collection from point attributes.</em></summary>

Controls how to extract or define a mesh collection from point attributes. Only visible when Collection Source is AttributeSet.

</details>

<details>

<summary><strong>Distribution Settings</strong><br><em>Distribution details</em></summary>

Controls how assets are selected across paths, using distribution logic for randomization or weighting.

</details>

<details>

<summary><strong>Material Distribution Settings</strong><br><em>How should materials be distributed and picked.</em></summary>

Controls how materials are assigned to spline mesh components, including distribution methods and picking logic.

</details>

<details>

<summary><strong>Tangents</strong><br><em>Per-point tangent settings. Can't be set if the spline is linear.</em></summary>

Defines how tangents are calculated or read from attributes for smoother curve orientation. Only available when the path is not linear.

</details>

<details>

<summary><strong>Mutation Details</strong><br><em>Push details</em></summary>

Controls how the spline mesh components are expanded or modified during creation, such as scaling or offsetting.

</details>

<details>

<summary><strong>Spline Mesh Up Mode</strong><br><em>How to determine the up vector for spline meshes.</em></summary>

Determines how the up vector of each spline mesh is calculated.

**Values**:

* **Constant**: Use a fixed vector.
* **Attribute**: Read up vector from a point attribute.
* **From Tangents (Gimbal fix)**: Automatically compute an up vector based on tangents to avoid gimbal lock.

</details>

<details>

<summary><strong>Spline Mesh Up Vector (Attr)</strong><br><em>Per-point attribute value for up vector when Up Mode is Attribute.</em></summary>

The name of the point attribute that contains the up vector values. Only visible when Spline Mesh Up Mode is set to Attribute.

</details>

<details>

<summary><strong>Spline Mesh Up Vector</strong><br><em>Fixed up vector when Up Mode is Constant.</em></summary>

The fixed vector used for the up direction of spline meshes. Only visible when Spline Mesh Up Mode is set to Constant.

</details>

<details>

<summary><strong>Default Descriptor</strong><br><em>Default static mesh config applied to spline mesh components.</em></summary>

Defines default settings for spline mesh components, such as material and transform properties.

</details>

<details>

<summary><strong>Force Default Descriptor</strong><br><em>If enabled, override collection settings with the default descriptor settings.</em></summary>

When enabled, forces all spline mesh components to use the values defined in Default Descriptor, ignoring any settings from the collection.

</details>

<details>

<summary><strong>Target Actor</strong><br><em>The actor to which generated components are added.</em></summary>

The target actor where the spline mesh components will be created. If left empty, components are added to the default world or a parent actor.

</details>

<details>

<summary><strong>Post Process Function Names</strong><br><em>Specify a list of functions to be called on the target actor after spline mesh creation.</em></summary>

A list of function names to call on the target actor after components are created. Functions must be parameter-less and have the "CallInEditor" flag enabled.

</details>

<details>

<summary><strong>Scale To Fit</strong><br><em>If enabled, will break scaling interpolation across the spline.</em></summary>

When enabled, scales spline mesh components to fit within their bounds along the path, rather than interpolating smoothly.

</details>

<details>

<summary><strong>Justification</strong><br><em>How to align or justify components along the path.</em></summary>

Controls how components are aligned or positioned along the path, such as centering or offsetting.

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong><br><em>The name of the attribute to write asset path to.</em></summary>

The name of the point attribute where the selected asset's path will be written. Only used when outputting asset paths.

</details>

<details>

<summary><strong>Tagging Details</strong><br><em>Tagging details</em></summary>

Controls how tags are applied to generated components, for filtering or selection later in the graph.

</details>

<details>

<summary><strong>Weight To Attribute</strong><br><em>Update point scale so staged asset fits within its bounds</em></summary>

Controls whether to output weight information as an attribute on points. Weight can be raw, normalized, or inverted.

**Values**:

* **No Output**: Do not write weight.
* **Raw**: Write raw integer weights.
* **Normalized**: Write normalized weights (weight / total weight).
* **Normalized (Inverted)**: Write 1 - (weight / total weight).
* **Normalized to Density**: Same as Normalized.
* **Normalized (Inverted) to Density**: Same as Normalized (Inverted).

</details>

<details>

<summary><strong>Weight Attribute Name</strong><br><em>The name of the attribute to write asset weight to.</em></summary>

The name of the point attribute where the selected asset's weight will be written. Only visible when Weight To Attribute is not No Output.

</details>

#### Usage Example

1. Create a path using a Path Generator node.
2. Connect it to a Path : Spline Mesh node.
3. Set up a mesh collection with various road or fence assets.
4. Configure the node to use the collection and specify how components should be distributed along the path.
5. Optionally, set a Target Actor to place components in a specific actor.

This setup can generate realistic roads or fences that follow terrain paths.

#### Notes

* Spline mesh components are created using Unreal's USplineMeshComponent.
* Tangents are only used if the path is not linear.
* The node supports both uniform and distribution-based asset selection.
* When using Attribute Set, ensure point attributes are properly defined before this node runs.
