---
description: 'In editor :: PCGEx | Find Point on Bounds'
icon: circle
---

# Find Point on Bounds

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find the closest point on the dataset bounds.

#### Overview

This node identifies the closest point on the bounding volume of a dataset and outputs that point. It's useful for positioning objects relative to the edges or surface of a collection of points, such as placing a character at the edge of a terrain or aligning assets to the boundary of a structure.

It can output either a single merged point or one point per input dataset, depending on the output mode selected. The position within the bounds is controlled by UVW coordinates, which define how far along each axis the point should be placed. An optional offset can push the point away from the center of the bounds.

{% hint style="info" %}
This node has a **Point** input and outputs **Points**.
{% endhint %}

#### How It Works

The node calculates the bounding volume of all input points, either using the standard axis-aligned bounding box or a best-fit plane-based approach if enabled. For each dataset, it then finds the closest point on that bounds surface based on UVW coordinates.

It determines which axis to prioritize for the search by considering the axis order setting, and uses this to compute a position along the bounds' surface. If an offset is specified, it adjusts the final point away from the center of the bounds in the direction of the surface normal.

The node supports two output modes:

* **Merged Points**: Outputs a single point that represents the closest point on the combined bounds of all datasets.
* **Per-point dataset**: Outputs one point per input dataset, each representing the closest point on that dataset's bounds.

#### Configuration

<details>

<summary><strong>Output Mode</strong><br><em>Data output mode.</em></summary>

Controls whether the node outputs a single merged point or individual points per input dataset.

**Values**:

* **Merged**: Outputs one point representing the closest point on the combined bounds of all datasets.
* **Per-point dataset**: Outputs one point per input dataset, each positioned on that dataset's bounds.

</details>

<details>

<summary><strong>Use Best Fit Bounds Axis</strong><br><em>Whether to use best fit plane bounds, and which axis ordering should be used.</em></summary>

When enabled, the node computes a best-fit bounding volume instead of an axis-aligned box. The axis order determines how the axes are prioritized for this computation.

**Values**:

* **X > Y > Z**: Prioritizes X, then Y, then Z.
* **Y > Z > X**: Prioritizes Y, then Z, then X.
* **Z > X > Y**: Prioritizes Z, then X, then Y.
* **Y > X > Z**: Prioritizes Y, then X, then Z.
* **Z > Y > X**: Prioritizes Z, then Y, then X.
* **X > Z > Y**: Prioritizes X, then Z, then Y.

</details>

<details>

<summary><strong>UVW Input</strong><br><em>Type of UVW value source.</em></summary>

Determines whether to use a constant or attribute-based UVW value for positioning the output point.

**Values**:

* **Constant**: Uses the manually set UVW value.
* **Attribute**: Reads the UVW value from an input attribute.

</details>

<details>

<summary><strong>UVW</strong><br><em>Fetch the UVW value from a @Data attribute.</em></summary>

The UVW coordinates define where along each axis of the bounds the output point should be placed. Each component is in the range \[0, 1], where:

* U: Position along the X-axis.
* V: Position along the Y-axis.
* W: Position along the Z-axis.

This setting is only active when UVW Input is set to **Constant**.

</details>

<details>

<summary><strong>Offset</strong><br><em>Offset to apply to the closest point, away from the bounds center.</em></summary>

A scalar value that offsets the resulting point away from the center of the bounds along the surface normal. Positive values move the point outward, and negative values inward.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls how attributes from input points are carried over to the output points.

</details>

#### Usage Example

1. Create a set of scattered points representing a terrain or structure.
2. Connect this node to the point data.
3. Set UVW coordinates to (0.5, 0.5, 0.5) to place the output point at the center of the bounds.
4. Use an offset of 2 to push the point outward from the center by 2 units along the surface normal.
5. The result is a point positioned on the surface of the bounds, offset from its center.

#### Notes

* If you're using **Per-point dataset** output mode, each input dataset will produce one output point.
* The node works with both axis-aligned and best-fit bounds depending on the settings.
* UVW values outside \[0, 1] may place the point outside the bounds, but still on its surface.
* When using attribute-based UVW, ensure the attribute exists and is properly typed to avoid warnings.
