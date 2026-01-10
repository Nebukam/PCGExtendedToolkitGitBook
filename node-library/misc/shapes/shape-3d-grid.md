---
icon: circle-dashed
---

# Shape : 3D Grid

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create points in a 3D grid shape.

#### How It Works

This node generates a structured set of points arranged in a regular 3D grid pattern. It calculates how many points fit along each axis (X, Y, Z) based on the selected resolution mode and spacing settings. The grid is built by placing points at regular intervals within the defined bounds.

When the **Adjust Fit** option is enabled, the node modifies the grid's dimensions so that it fills the selected axis completely. For example, if you set the X-axis to fill the space, the grid will stretch along X to match the specified dimension while adjusting Y and Z accordingly.

The resolution settings control how many points are placed per unit distance or as a fixed count per axis. Truncation options (Round, Ceil, Floor) determine how fractional point counts are handled when using distance-based resolution.

#### Configuration

<details>

<summary><strong>Adjust Fit</strong><br><em>Adjust extents so they fill the selected axis.</em></summary>

When enabled, this setting modifies the grid's dimensions so that it fills the selected axis completely. For example, if you select X, the grid will stretch along the X-axis to match the specified extent while adjusting Y and Z accordingly.

</details>

<details>

<summary><strong>X - Round</strong><br><em>How points are rounded along the X-axis.</em></summary>

Controls how fractional point counts along the X-axis are handled when using distance-based resolution. Options include:

* **None**: No rounding.
* **Round**: Rounds to the nearest integer.
* **Ceil**: Rounds up to the next integer.
* **Floor**: Rounds down to the previous integer.

</details>

<details>

<summary><strong>X - Clamp Count</strong><br><em>Clamp the number of points along the X-axis.</em></summary>

Limits the maximum number of points generated along the X-axis. This is useful for preventing overly dense grids in large areas.

</details>

<details>

<summary><strong>Y - Round</strong><br><em>How points are rounded along the Y-axis.</em></summary>

Controls how fractional point counts along the Y-axis are handled when using distance-based resolution. Options include:

* **None**: No rounding.
* **Round**: Rounds to the nearest integer.
* **Ceil**: Rounds up to the next integer.
* **Floor**: Rounds down to the previous integer.

</details>

<details>

<summary><strong>Y - Clamp Count</strong><br><em>Clamp the number of points along the Y-axis.</em></summary>

Limits the maximum number of points generated along the Y-axis. This is useful for preventing overly dense grids in large areas.

</details>

<details>

<summary><strong>Z - Round</strong><br><em>How points are rounded along the Z-axis.</em></summary>

Controls how fractional point counts along the Z-axis are handled when using distance-based resolution. Options include:

* **None**: No rounding.
* **Round**: Rounds to the nearest integer.
* **Ceil**: Rounds up to the next integer.
* **Floor**: Rounds down to the previous integer.

</details>

<details>

<summary><strong>Z - Clamp Count</strong><br><em>Clamp the number of points along the Z-axis.</em></summary>

Limits the maximum number of points generated along the Z-axis. This is useful for preventing overly dense grids in large areas.

</details>

#### Usage Example

Use this node to generate a grid of points that can be used as a base for placing objects like trees or buildings. For instance, you could define a 10x10x5 grid with 2 units spacing per axis, resulting in 1000 points forming a cube-like structure. You might then use these points to spawn assets or apply transformations.

#### Notes

* The node supports both fixed point count and distance-based resolution modes.
* Adjusting fit can be useful when you want the grid to completely fill a space along one axis.
* Clamp settings help manage performance by limiting the number of generated points.
