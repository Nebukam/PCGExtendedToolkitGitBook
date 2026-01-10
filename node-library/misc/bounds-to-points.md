---
description: 'In editor :: PCGEx | Bounds to Points'
icon: circle
---

# Bounds to Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generate points positioned on the surface of input bounds.

#### Overview

The Bounds To Points node creates new points located on the surface of input bounds. It's useful for placing objects or markers at specific locations relative to existing geometry, such as generating spawn points along the edges of a bounding box or distributing points across a volume's surface.

This node operates by taking the bounds of input data and placing one or more points based on parameters like UVW coordinates, symmetry settings, and scale. It can also generate per-point data collections if needed.

{% hint style="info" %}
Connects to **Point** processing pins.
{% endhint %}

#### How It Works

The node first calculates the bounding volume of all input points. Then, it generates new points positioned on the surface of that volume using UVW coordinates, which define a position within the bounds (0 = min, 1 = max). If symmetry is enabled, it creates mirrored points along the specified axis.

If "Set Extents" is enabled, the node modifies the bounds size before placing points. It can either set a fixed extent or multiply the existing bounds by a multiplier. The scale setting allows further adjustment of point placement relative to the bounds.

When "Generate Per Point Data" is enabled, each output point gets its own data collection that can be used for downstream processing.

#### Configuration

<details>

<summary><strong>Generate Per Point Data</strong><br><em>Generates a point collections per generated point.</em></summary>

When enabled, each output point will have its own data collection for further processing.

</details>

<details>

<summary><strong>Symmetry Axis</strong><br><em>Generate points in symmetry.</em></summary>

Defines the axis along which mirrored points are generated. Options are:

* **None**: No symmetry
* **X**: Mirror along X-axis
* **Y**: Mirror along Y-axis
* **Z**: Mirror along Z-axis

</details>

<details>

<summary><strong>UVW</strong><br><em>Controls where on the surface of the bounds each generated point is placed.</em></summary>

Controls where on the surface of the bounds each generated point is placed. Each component (U, V, W) ranges from 0 to 1, defining a position within the bounds.

</details>

<details>

<summary><strong>Set Extents</strong><br><em>Modifies the size of the bounds before generating points.</em></summary>

When enabled, modifies the size of the bounds before generating points. This allows for fine-tuning the spacing or positioning of output points.

</details>

<details>

<summary><strong>Extents</strong><br><em>Defines the size of the bounds when "Set Extents" is enabled.</em></summary>

Defines the size of the bounds when "Set Extents" is enabled. Values are in world units.

</details>

<details>

<summary><strong>Multiply Extents</strong><br><em>Multiplies the existing bounds instead of replacing them.</em></summary>

When enabled, the current bounds are multiplied by the Extents value instead of replacing them entirely.

</details>

<details>

<summary><strong>Set Scale</strong><br><em>Scales the generated points using the Scale value.</em></summary>

When enabled, scales the generated points using the Scale value. This affects how far apart or close together the output points appear.

</details>

<details>

<summary><strong>Scale</strong><br><em>Defines the scale factor applied to the bounds when "Set Scale" is enabled.</em></summary>

Defines the scale factor applied to the bounds when "Set Scale" is enabled. Values are in world units.

</details>

#### Usage Example

To place a point at each corner of a bounding box:

1. Set UVW to (0, 0, 0) for one corner
2. Set UVW to (1, 1, 1) for the opposite corner
3. Enable symmetry along all axes to generate additional points

#### Notes

* The node works best with point inputs that define a clear bounding volume.
* Symmetry can significantly increase output point count depending on axis selection.
* Extents and scale settings allow precise control over point distribution.
