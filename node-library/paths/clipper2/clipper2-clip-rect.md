---
icon: circle
---

# Clipper2 : Clip Rect

Fast rectangle clipping using optimized Clipper2 algorithm.

**How It Works**

> AI-Generated, needs proofreading

* Computes rectangle clipping by applying an optimized Clipper2 algorithm to input geometries.
* Utilizes specified projection settings from "Projection Details" for coordinate transformations if necessary.
* Applies bounds defined either through the "Bounds Source" or manually set in "Manual Bounds", adjusting them with "Bounds Padding" and "Bounds Padding Scale" for axis-specific adjustments.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

**Clip Bounds**

<details>

<summary><strong>Bounds Source</strong> <code>PCGExRectClipBoundsSource</code></summary>

Source for the clipping rectangle bounds

**Values:**

* **Operand Bounds**: Use the combined bounds of all operand spatial data in the group
* **Manual**: Use manually specified rectangle bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Manual Bounds</strong> <code>Box</code></summary>

Controls manual bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Padding</strong> <code>double</code></summary>

Uniform padding to apply to the bounds (can be negative to shrink)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Padding Scale</strong> <code>Vector2D</code></summary>

Axis-specific padding multipliers

⚡ PCG Overridable

</details>

**Tweaks**

<details>

<summary><strong>Clip Open Paths As Lines</strong> <code>bool</code></summary>

Controls clip open paths as lines.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Clip As Lines</strong> <code>bool</code></summary>

Controls clip as lines.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Clip</strong> <code>bool</code></summary>

If enabled, inverts the clip region (uses boolean difference with the rectangle instead)

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClipper2\Public\Elements\PCGExClipper2RectClip.h`
