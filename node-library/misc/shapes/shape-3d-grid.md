---
icon: circle-dashed
---

# Shape : 3D Grid

Create points in a 3D grid shape.

📌 **Subnode** — Connects to **Shape Builders** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates points arranged in a three-dimensional grid structure.
* It adjusts the extents of the grid to fit along selected axes based on the "Adjust Fit" setting.
* For the X-axis, the node applies rounding according to the specified mode and clamps the count using the provided details.
* On the Y-axis, it truncates values as defined by the given mode and also clamps the count with specific details.

#### Configuration

<details>

<summary><strong>Config</strong> <code>PCGExShapeGridConfig</code></summary>

Shape properties

📦 See: ShapeGrid configuration

⚡ PCG Overridable

</details>

**Resolution**

<details>

<summary><strong>Adjust Fit</strong> <code>uint8</code></summary>

Adjust extents so they fill the selected axis.

</details>

<details>

<summary><strong>X - Round</strong> <code>PCGExTruncateMode</code></summary>

How

</details>

<details>

<summary><strong>X - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls x - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Y - Round</strong> <code>PCGExTruncateMode</code></summary>

Controls y - round.

</details>

<details>

<summary><strong>Y - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls y - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Z - Round</strong> <code>PCGExTruncateMode</code></summary>

Controls z - round.

</details>

<details>

<summary><strong>Z - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls z - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Adjust Fit</strong> <code>uint8</code></summary>

Adjust extents so they fill the selected axis.

</details>

<details>

<summary><strong>X - Round</strong> <code>PCGExTruncateMode</code></summary>

How

</details>

<details>

<summary><strong>X - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls x - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Y - Round</strong> <code>PCGExTruncateMode</code></summary>

Controls y - round.

</details>

<details>

<summary><strong>Y - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls y - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Z - Round</strong> <code>PCGExTruncateMode</code></summary>

Controls z - round.

</details>

<details>

<summary><strong>Z - Clamp Count</strong> <code>PCGExClampDetails</code></summary>

Controls z - clamp count.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsShapes\Public\Shapes\PCGExShapeGrid.h`
