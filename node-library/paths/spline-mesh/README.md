---
description: 'In editor :: PCGEx | Path : Spline Mesh'
icon: circle
---

# Spline Mesh

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create spline mesh components from paths.

### Overview

This node converts path data into spline mesh components, allowing you to generate 3D geometry along paths. It's particularly useful for creating roads, rivers, fences, or any linear structure that should follow a defined route. The node supports multiple mesh assets and can apply scaling, fitting, and material distribution based on your settings.

{% hint style="info" %}
This node requires input paths to be processed by a path-finding or path-generation system before it can create spline meshes.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths (Point data with path information)
* **Optional Point Filters**: Additional filters to apply to points before processing

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Point data with modified or added spline mesh components
* **Optional Asset Path Attribute**: Writes the asset path used for each segment
* **Optional Weight Attribute**: Writes the weight assigned to each segment

</details>

### Properties Overview

Controls how paths are converted into spline meshes, including mesh selection, distribution, and component properties.

***

#### General Settings

Controls the source of mesh assets and general behavior for spline mesh creation.

**Collection Source**

_Selects where to get the mesh assets from._

* Determines whether to use a static asset collection or read from an attribute.
* **Asset**: Use a single mesh collection asset.
* **Attribute Set**: Read mesh collections from point attributes.

**Asset Collection**

_The mesh collection asset to use when "Collection Source" is set to "Asset"._

* Specifies the collection of meshes that will be used for spline mesh generation.
* Each entry in the collection can have different materials and properties.

**Attribute Set Details**

_Configuration for reading mesh collections from point attributes._

* When "Collection Source" is set to "Attribute Set", this defines how to read the collection from a point attribute.
* Allows dynamic selection of mesh collections per point.

**Distribution Settings**

_How to distribute assets along the path._

* Controls how many instances of each asset are created and how they're spaced.
* Supports randomization, uniform distribution, and weighted selection.

**Material Distribution Settings**

_How materials are applied to spline meshes._

* Defines how materials from the mesh collection are selected and applied.
* Can use weights or random selection for material variation.

***

#### Tangent Settings

Controls how tangents are calculated and used for spline mesh orientation.

**Tangents**

_Configuration for tangent handling._

* Defines how to compute or read tangents for each point along the path.
* Tangents affect the direction and orientation of the spline mesh components.

**Scale To Fit**

_Scaling behavior to fit the spline mesh to the path._

* Controls whether and how to scale the mesh to match the path's length.
* **None**: No scaling applied.
* **Uniform**: Uniform scaling along the entire path.
* **Individual**: Per-segment scaling.

**Justification**

_How to align the spline mesh components along the path._

* Determines how the mesh is positioned relative to the path points.
* Useful for creating consistent spacing or alignment across segments.

**Mutation Details**

_Settings for modifying spline mesh properties during creation._

* Allows you to adjust expansion, rotation, and other transformations applied to each segment.
* Can be used to add variation or offset components along the path.

***

#### Output Settings

Controls how attributes are written and what data is output from the node.

**Asset Path Attribute Name**

_Name of the attribute to write asset paths to._

* When enabled, this attribute will contain the path to the mesh used for each segment.
* Useful for debugging or referencing the assets later in the graph.

**Tagging Details**

_Configuration for tagging generated components._

* Allows you to assign tags to the created spline mesh components.
* Tags can be used for filtering or identifying specific parts of your scene.

**Weight To Attribute**

_Output weight values as an attribute._

* When enabled, writes the weight assigned to each segment to an attribute.
* **No Output**: Do not output weight.
* **Raw**: Output raw integer weights.
* **Normalized**: Output normalized weights (Weight / WeightSum).
* **Normalized (Inverted)**: Output one minus normalized weight (1 - (Weight / WeightSum)).
* **Normalized to Density**: Same as Normalized, but with a different interpretation for density-based workflows.
* **Normalized (Inverted) to Density**: Same as Normalized (Inverted), but with a different interpretation for density-based workflows.

**Weight Attribute Name**

_Name of the attribute to write weights to._

* Specifies the name of the output attribute when weight output is enabled.
* Only visible when "Weight To Attribute" is set to a value other than "No Output".

***

#### Spline Mesh Settings

Controls how spline mesh components are created and oriented.

**Spline Mesh Up Mode**

_How to determine the up vector for each spline mesh._

* **Constant**: Use a fixed vector for all meshes.
* **Attribute**: Read the up vector from a point attribute.
* **From Tangents (Gimbal fix)**: Automatically compute an up vector based on tangents to prevent gimbal lock.

**Spline Mesh Up Vector Attribute**

_Point attribute to read the up vector from._

* Only visible when "Spline Mesh Up Mode" is set to "Attribute".
* Specifies which point attribute contains the up vector data.

**Spline Mesh Up Vector**

_Fixed up vector for all spline meshes._

* Only visible when "Spline Mesh Up Mode" is set to "Constant".
* Defines the fixed vector used as the up direction for all generated components.

***

#### Component Settings

Controls how the final spline mesh components are configured and rendered.

**Default Descriptor**

_Default settings for static mesh components._

* Specifies default properties for all created spline mesh components.
* Includes visibility, draw distance, lighting settings, etc.

**Force Default Descriptor**

_Override collection settings with default descriptor._

* When enabled, forces all components to use the default descriptor settings regardless of collection settings.
* Useful when you want consistent component properties across all generated meshes.

**Property Override Descriptions**

_List of property overrides for spline mesh components._

* Allows you to override specific properties on each component.
* Can be used to customize individual aspects like materials or lighting.

**Target Actor**

_Target actor to call functions on after creation._

* Specifies an actor that will have its functions called after spline mesh creation.
* Useful for post-processing or custom logic after generation.

**Post Process Function Names**

_List of function names to call on the target actor._

* Only visible when a "Target Actor" is specified.
* Defines which functions (with "CallInEditor" flag) should be invoked on the target actor.
