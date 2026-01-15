---
icon: list-tree
---

# Axis Deform

#### Settings

<details>

<summary><strong>Usage</strong> <code>EPCGExTransformAlphaUsage</code></summary>

Controls usage.

**Values:**

* **Start & End**: First alpha is to be used as start % along the axis, and second alpha is the end % along that same axis.
* **Start & Size**: First alpha is to be used as start % along the axis, and second alpha is a % of the axis length, from first alpha.
* **Center & Size**: First alpha is to be used as center % along the axis, and second alpha is a % of the axis length, before and after the center.

⚡ PCG Overridable

</details>

<details>

<summary><strong>First Alpha Input</strong> <code>EPCGExSampleSource</code></summary>

Controls first alpha input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>First Alpha (Attr)</strong> <code>FName</code></summary>

Attribute to read start value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>First Alpha</strong> <code>double</code></summary>

Constant start value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Second Alpha Input</strong> <code>EPCGExSampleSource</code></summary>

Controls second alpha input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Second Alpha (Attr)</strong> <code>FName</code></summary>

Attribute to read end value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Second Alpha</strong> <code>double</code></summary>

Constant end value.

⚡ PCG Overridable

</details>

#### Used In

* CopyToPaths

***

Defined in: `Source\PCGExFoundations\Public\Details\PCGExAxisDeformDetails.h`
