---
description: 'In editor :: PCGEx | Path : Spline Mesh (Simple)'
icon: circle
---

# Spline Mesh (Simple)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create spline mesh components from paths.

#### How It Works

This node processes input paths and generates spline mesh components along each segment of those paths. For every path segment, it calculates start and end positions based on offset settings, then places a spline mesh component between those points.

The node supports multiple ways to select which mesh asset to use:

* Use a single static mesh for all segments
* Read mesh paths from a point attribute
* Apply different meshes per point

It also allows you to control how the mesh is oriented along the path using either a fixed up vector or by reading up vectors from an attribute. If tangents are defined, it can compute an up vector that avoids gimbal lock.

You can apply materials either from a constant or from a point attribute, and specify which material slot to use. The generated meshes can be placed in a specific actor or added to the default world. You can also configure post-processing functions to run on the target actor after mesh creation.

#### Configuration

<details>

<summary><strong>Asset Type</strong><br><em>How the asset gets selected.</em></summary>

Controls whether to use a constant static mesh or read mesh paths from an attribute.

**Values**:

* **Constant**: Use the Static Mesh setting as the asset
* **Attribute**: Read asset path from the point attribute named Asset Path Attribute

</details>

<details>

<summary><strong>Asset Path Attribute</strong><br><em>The name of the attribute to write asset path to.</em></summary>

The name of the attribute containing static mesh paths when Asset Type is set to "Attribute".

</details>

<details>

<summary><strong>Static Mesh</strong><br><em>Constant static mesh .</em></summary>

The static mesh to use when Asset Type is set to "Constant".

</details>

<details>

<summary><strong>Read Material From Attribute</strong><br><em>When enabled, read material from an attribute.</em></summary>

When enabled, the node reads material paths from a point attribute instead of using a constant material.

</details>

<details>

<summary><strong>Material Attribute Name</strong><br><em>The name of the attribute to write material path to.</em></summary>

The name of the attribute containing material paths when Read Material From Attribute is enabled.

</details>

<details>

<summary><strong>Material Slot Constant</strong><br><em>The index of the slot to set the material to, if found.</em></summary>

The material slot index to apply the material to when Read Material From Attribute is enabled.

</details>

<details>

<summary><strong>Target Actor</strong><br><em>Target actor to place spline meshes in.</em></summary>

The actor where generated spline mesh components will be placed. If none is specified, they are added to the default world.

</details>

<details>

<summary><strong>Start Offset Input</strong><br><em>Type of Start Offset</em></summary>

Controls whether to use a constant or attribute-based start offset.

**Values**:

* **Constant**: Use the Start Offset setting
* **Attribute**: Read offset from the point attribute named Start Offset Attribute

</details>

<details>

<summary><strong>Start Offset Attribute</strong><br><em>Start Offset Attribute (Vector 2 expected)</em></summary>

The name of the attribute containing start offsets when Start Offset Input is set to "Attribute".

</details>

<details>

<summary><strong>Start Offset</strong><br><em>Start Offset Constant</em></summary>

The constant start offset value used when Start Offset Input is set to "Constant".

</details>

<details>

<summary><strong>End Offset Input</strong><br><em>Type of End Offset</em></summary>

Controls whether to use a constant or attribute-based end offset.

**Values**:

* **Constant**: Use the End Offset setting
* **Attribute**: Read offset from the point attribute named End Offset Attribute

</details>

<details>

<summary><strong>End Offset Attribute</strong><br><em>End Offset Attribute (Vector 2 expected)</em></summary>

The name of the attribute containing end offsets when End Offset Input is set to "Attribute".

</details>

<details>

<summary><strong>End Offset</strong><br><em>End Offset Constant</em></summary>

The constant end offset value used when End Offset Input is set to "Constant".

</details>

<details>

<summary><strong>Mutation Details</strong><br><em>Push details</em></summary>

Controls how the spline mesh components are expanded or mutated along the path.

</details>

<details>

<summary><strong>Spline Mesh Up Mode</strong><br><em>How to determine the up vector for the spline mesh.</em></summary>

Controls how the up vector is calculated for each spline mesh component.

**Values**:

* **Constant**: Use a fixed up vector
* **Attribute**: Read up vector from an attribute
* **From Tangents (Gimbal fix)**: Automatically compute up vector from tangents to avoid gimbal lock

</details>

<details>

<summary><strong>Spline Mesh Up Vector Attribute</strong><br><em>Spline Mesh Up Vector (Attr)</em></summary>

The name of the attribute containing up vectors when Spline Mesh Up Mode is set to "Attribute".

</details>

<details>

<summary><strong>Spline Mesh Up Vector</strong><br><em>Spline Mesh Up Vector</em></summary>

The fixed up vector used when Spline Mesh Up Mode is set to "Constant".

</details>

<details>

<summary><strong>Static Mesh Descriptor</strong><br><em>Default static mesh config applied to spline mesh components.</em></summary>

Defines default properties for created spline mesh components, such as scale, rotation, and other component settings.

</details>

<details>

<summary><strong>Property Override Descriptions</strong><br><em>List of property overrides for the generated components.</em></summary>

Allows you to override specific properties of the generated spline mesh components.

</details>

<details>

<summary><strong>Post Process Function Names</strong><br><em>Specify a list of functions to be called on the target actor after spline mesh creation. Functions need to be parameter-less and with "CallInEditor" flag enabled.</em></summary>

List of function names to call on the target actor after spline mesh components are created.

</details>

#### Usage Example

1. Create a path using a Path Generator node
2. Connect it to this Path : Spline Mesh (Simple) node
3. Set the Static Mesh to a road or fence asset
4. Optionally set a Target Actor to place the meshes in a specific location
5. Add point filters if you want to only generate meshes on certain points
6. Run the graph - you'll now have spline mesh components along your path

#### Notes

* The node supports both closed and open paths
* When using attribute-based asset or material selection, make sure the attributes exist and contain valid paths
* If tangents are used for up vector calculation, ensure that tangent data is present in the input points
* For performance reasons, avoid using many different mesh assets per path segment
* Post-process functions must be defined on the target actor with the "CallInEditor" flag enabled
