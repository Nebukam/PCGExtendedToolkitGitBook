---
description: 'In editor :: PCGEx | Path : Spline Mesh (Simple)'
icon: circle
---

# Spline Mesh (Simple)

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Create spline mesh components from paths.

### Overview

This node generates spline mesh components along paths, allowing you to create continuous meshes like roads, rivers, or trails that follow the shape of your input paths. It's ideal for building dynamic geometry that adapts to path shapes without manual mesh creation.

{% hint style="info" %}
The output is a collection of spline mesh components that can be used directly in the level or as part of more complex spawning operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths (Point data with path information)
* **Optional Filters**: Point filters to control which paths are processed

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Point data with spline mesh components attached
* **Optional**: Additional outputs for filtering or processing

</details>

### Properties Overview

Controls how the spline meshes are generated, including asset selection, material handling, and mesh configuration.

***

#### General Settings

Controls how assets are selected and applied to the generated spline meshes.

**Asset Type**

_Controls whether a constant static mesh is used or one read from an attribute._

* When set to **Constant**, the mesh specified in "Asset" will be used for all spline meshes.
* When set to **Attribute**, the node reads a mesh path from the attribute named in "Asset (Attr)".

**Values**:

* **Constant**: Use a single static mesh asset
* **Attribute**: Read mesh paths from an attribute

**Asset (Attr)**

_The name of the attribute containing static mesh paths when Asset Type is set to Attribute._

* This attribute should contain valid paths to static mesh assets.
* The node will load and apply these meshes dynamically.

**Asset**

_The constant static mesh to use for all generated spline meshes when Asset Type is set to Constant._

* This is the default mesh used if no attribute-based mesh is specified.
* Must be a valid static mesh asset reference.

**Read Material From Attribute**

_When enabled, materials are read from an attribute instead of using the default material._

* Useful for creating varied appearances along paths.
* If disabled, the default material from Static Mesh Descriptor will be used.

**Material (Attr)**

_The name of the attribute to read material paths from when "Read Material From Attribute" is enabled._

* This attribute should contain valid paths to material assets.
* Materials are applied to the first slot by default unless specified otherwise.

**Material Slot**

_The index of the material slot to apply the loaded material to._

* Only relevant when reading materials from an attribute.
* Defaults to slot 0 (first material slot).

**Target Actor**

_The actor that will contain the generated spline mesh components._

* If set, all generated components will be attached to this actor.
* Useful for organizing spawned geometry in the level.

***

#### Tangents

Controls how tangents are calculated and applied to the spline meshes.

**Use Tangents**

_When enabled, tangent information from point data is used to orient the spline mesh up vector._

* This helps maintain consistent orientation along curves.
* Requires that your input paths have valid tangent attributes.

**Arrive Scale (Attr)**

_The name of the attribute to read arrive scale values from._

* Controls how much the spline mesh scales at the start of each segment.

**Leave Scale (Attr)**

_The name of the attribute to read leave scale values from._

* Controls how much the spline mesh scales at the end of each segment.

**Arrive Scale**

_The constant value used for arrive scaling when "Arrive Scale Input" is set to Constant._

* Affects the width of the spline mesh at the start of segments.

**Leave Scale**

_The constant value used for leave scaling when "Leave Scale Input" is set to Constant._

* Affects the width of the spline mesh at the end of segments.

***

#### Offsets

Controls how the start and end points of each segment are offset, allowing for fine-tuning of mesh placement.

**Start Offset (Attr)**

_The name of the attribute containing start offset values._

* Values should be 2D vectors representing X/Y offsets.
* Applied to the beginning of each path segment.

**Start Offset**

_The constant vector used as the start offset when "Start Offset Input" is set to Constant._

* Offsets the starting point of each spline mesh segment.

**End Offset (Attr)**

_The name of the attribute containing end offset values._

* Values should be 2D vectors representing X/Y offsets.
* Applied to the end of each path segment.

**End Offset**

_The constant vector used as the end offset when "End Offset Input" is set to Constant._

* Offsets the ending point of each spline mesh segment.

***

#### Mutations

Controls how segments are expanded or contracted along their length.

**Expansion**

_Configures how segments are pushed inward or outward from their original positions._

* Includes options for pushing start and end points.
* Can be relative to segment size or absolute values.

**Push Start**

_When enabled, the start of each segment is pushed inward or outward._

* Useful for creating overlapping or non-overlapping segments.

**Push End**

_When enabled, the end of each segment is pushed inward or outward._

* Allows fine control over how segments connect or overlap.

***

#### Spline Mesh Up Vector

Controls how the up vector of each spline mesh is calculated and applied.

**Spline Mesh Up Mode**

_Determines how the up vector for each spline mesh is computed._

**Values**:

* **Constant**: Use a fixed vector defined in "Spline Mesh Up Vector"
* **Attribute**: Read up vector from an attribute
* **From Tangents (Gimbal fix)**: Automatically compute up vector using tangents to prevent gimbal lock

**Spline Mesh Up Vector (Attr)**

_The name of the attribute containing up vectors when "Spline Mesh Up Mode" is set to Attribute._

* Should contain 3D vectors representing up directions.
* Used to orient each spline mesh component.

**Spline Mesh Up Vector**

_The constant vector used as the up direction when "Spline Mesh Up Mode" is set to Constant._

* Defines the default orientation of all spline meshes.
* Typically set to FVector::UpVector (0, 0, 1).

***

#### Static Mesh Descriptor

Controls rendering and behavior properties for generated spline mesh components.

**Visibility**

_Whether the generated spline mesh components are visible in the level._

* When disabled, components won't appear in the viewport or game.

**Min Draw Distance**

_The minimum distance at which the component is rendered._

* Components closer than this value won't be drawn.
* Helps with performance by reducing unnecessary rendering.

**Max Draw Distance**

_The maximum distance at which the component is rendered._

* Components farther than this value won't be drawn.
* Useful for controlling LOD and performance.

**Indirect Lighting Cache Quality**

_Determines how much indirect lighting affects the mesh._

* Higher values improve lighting quality but increase cache update times.
* Affects movable primitives only.

**Lightmap Type**

_Controls how lightmaps are applied to the mesh._

**Values**:

* **Default**: Use default lightmap settings
* **Static**: Static lightmaps for performance
* **Dynamic**: Dynamic lightmaps for real-time lighting

**Cast Shadow**

_Whether the component casts shadows._

* Enables or disables shadow casting from this component.

**Receive Shadows**

_Whether the component receives shadows._

* Controls if the mesh can be affected by other objects' shadows.

***

#### Post Processing

Controls functions to call after spline mesh creation.

**Post Process Function Names**

_A list of function names to call on the target actor after spline mesh creation._

* Functions must be parameter-less and have the "CallInEditor" flag enabled.
* Useful for custom logic or post-processing after component generation.
