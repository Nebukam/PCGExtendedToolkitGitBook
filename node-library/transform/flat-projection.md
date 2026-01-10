---
description: 'In editor :: PCGEx | Flat Projection'
icon: circle
---

# Flat Projection

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

\> Project points from their position in space to the XY plane.

#### Overview

The Flat Projection node maps 3D point positions onto a 2D XY plane. This is useful for creating flat representations of 3D data, such as top-down views, map projections, or simplifying complex geometries for visualization or further processing. It can either perform a new projection or restore an existing one using saved transform data.

This node modifies the position of points in your dataset, effectively flattening them along the Z-axis while optionally preserving or restoring their original transforms. It's commonly used in scenarios where you want to simplify spatial data or prepare it for 2D operations.

{% hint style="info" %}
Connects to **Points** pins.
{% endhint %}

#### How It Works

The node performs a projection of 3D points onto the XY plane by setting their Z-component to zero. Optionally, it can save or restore transform data associated with each point to allow for reversing the operation later.

If **bRestorePreviousProjection** is disabled (default), the node:

1. Projects all points to the XY plane.
2. Optionally saves the original transform data into an attribute named using the **AttributePrefix** setting.
3. Optionally aligns the local transform of each point with the projection.

If **bRestorePreviousProjection** is enabled, the node:

1. Reads the saved transform data from the attribute.
2. Applies that transform to each point, effectively restoring its original 3D position.
3. Optionally applies additional transform components (position, rotation, scale) based on the bitmask settings.

The node supports applying only specific components of a transform when restoring projection, allowing for fine-grained control over how the point's local space is adjusted.

#### Configuration

<details>

<summary><strong>bRestorePreviousProjection</strong><br><em>Whether this is a new projection or an old one.</em></summary>

When enabled, the node reads saved transform data from the point attributes and applies it to restore the original 3D positions. When disabled, it performs a new projection onto the XY plane.

</details>

<details>

<summary><strong>AttributePrefix</strong><br><em>The name of the attribute to write its index to.</em></summary>

Defines the base name for the transform attribute that stores the original point transforms when performing a new projection. The actual attribute names will be constructed as `AttributePrefix + "_Transform"`.

</details>

<details>

<summary><strong>TransformPosition</strong><br><em>Which position components from the stored transform should be applied to the point.</em></summary>

Bitmask setting that controls which components of the saved position are applied when restoring a projection. Only used when **bRestorePreviousProjection** is enabled.

</details>

<details>

<summary><strong>TransformRotation</strong><br><em>Which rotation components from the stored transform should be applied to the point.</em></summary>

Bitmask setting that controls which components of the saved rotation are applied when restoring a projection. Only used when **bRestorePreviousProjection** is enabled.

</details>

<details>

<summary><strong>TransformScale</strong><br><em>Which scale components from the stored transform should be applied to the point.</em></summary>

Bitmask setting that controls which components of the saved scale are applied when restoring a projection. Only used when **bRestorePreviousProjection** is enabled.

</details>

<details>

<summary><strong>bSaveAttributeForRestore</strong><br><em>Whether to save transform data for later restoration.</em></summary>

When enabled, saves the original transform data into an attribute for later restoration. Only used when **bRestorePreviousProjection** is disabled.

</details>

<details>

<summary><strong>bAlignLocalTransform</strong><br><em>Whether to align the local transform with the projection plane.</em></summary>

When enabled, aligns the local transform of each point to match the projection plane. Only used when **bRestorePreviousProjection** is disabled.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings for the operation.</em></summary>

Configuration options for how the 3D-to-2D projection is performed, including any necessary parameters or transformations.

</details>

#### Usage Example

1. Take a set of scattered points in 3D space.
2. Connect them to a Flat Projection node.
3. Leave **bRestorePreviousProjection** disabled to project them onto the XY plane.
4. Enable **bSaveAttributeForRestore** to save their original transforms for later restoration.
5. Later, connect the same point data to another Flat Projection node with **bRestorePreviousProjection** enabled to restore the 3D positions.

#### Notes

* This node is useful for creating top-down views or simplifying complex 3D geometries for 2D rendering or analysis.
* When restoring a projection, ensure that the attribute names match exactly what was saved during the initial projection.
* The bitmask settings allow precise control over which transform components are applied during restoration.
