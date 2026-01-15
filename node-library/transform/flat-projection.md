---
description: 'In editor :: PCGEx | Flat Projection'
icon: circle
---

# Flat Projection

Project points from their position in space to the XY plane.

**How It Works**

> AI-Generated, needs proofreading

* Projects input points from their original spatial coordinates to the XY plane by discarding the Z coordinate.
* Applies stored transform components (position, rotation, scale) selectively based on settings to each point before projection.
* Optionally restores a previous projection state if "Restore Previous Projection" is enabled.
* Writes an index attribute prefixed with the specified "Attribute Prefix" to each projected point.

#### Configuration

<details>

<summary><strong>Restore Previous Projection</strong> <code>bool</code></summary>

Whether this is a new projection or an old one

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Prefix</strong> <code>Name</code></summary>

The name of the attribute to write its index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Position</strong> <code>uint8</code></summary>

Which position components from the stored transform should be applied to the point.

</details>

<details>

<summary><strong>├─ Rotation</strong> <code>uint8</code></summary>

Which rotation components from the stored transform should be applied to the point.

</details>

<details>

<summary><strong>└─ Scale</strong> <code>uint8</code></summary>

Which scale components from the stored transform should be applied to the point.

</details>

<details>

<summary><strong>Save Attribute For Restore</strong> <code>bool</code></summary>

Whether this is a new projection or an old one

⚡ PCG Overridable

</details>

<details>

<summary><strong>Align Local Transform</strong> <code>bool</code></summary>

Whether this is a new projection or an old one

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Controls projection.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExFlatProjection.h`
