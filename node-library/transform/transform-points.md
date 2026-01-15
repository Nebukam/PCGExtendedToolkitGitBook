---
description: 'In editor :: PCGEx | Transform Points'
icon: circle
---

# Transform Points

A Transform points with the same settings found in Asset Collection variations, with attribute override support.

**How It Works**

> AI-Generated, needs proofreading

* The Transform Points node applies transformations to input points using settings similar to those found in Asset Collection variations.
* It adjusts point positions based on Offset Min and Offset Max values, which are vectors selected via PCGExInputShorthandSelectorVector.
* Scaling is applied uniformly to both the Offset Min and Offset Max vectors, affecting the overall range of transformation.
* Snap Position setting, defined by PCGExVariationSnapping, determines if and how point positions snap to predefined locations or grids during transformation.
* The node supports attribute overrides, allowing for modifications to specific attributes of points as they undergo transformation.

#### Configuration

**Extras**

<details>

<summary><strong>Apply Scale To Bounds</strong> <code>bool</code></summary>

Controls apply scale to bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reset Point Center</strong> <code>bool</code></summary>

Controls reset point center.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Point Center Location</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Bounds-relative coordinate used for the new center

⚡ PCG Overridable

</details>

**Position**

<details>

<summary><strong>Offset Min</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls offset min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset Max</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls offset max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scaling</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Scale applied to both Offset Min & Offset Max

⚡ PCG Overridable

</details>

<details>

<summary><strong>Snap Position</strong> <code>PCGExVariationSnapping</code></summary>

Controls snap position.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset Snap</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls offset snap.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Offset</strong> <code>PCGExInputShorthandSelectorBoolean</code></summary>

Controls absolute offset.

⚡ PCG Overridable

</details>

**Rotation**

<details>

<summary><strong>Reset Rotation</strong> <code>bool</code></summary>

If enabled will first reset rotation to 0, then apply variation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Min</strong> <code>PCGExInputShorthandSelectorRotator</code></summary>

Controls rotation min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Max</strong> <code>PCGExInputShorthandSelectorRotator</code></summary>

Controls rotation max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scaling</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Scale applied to both Rotation Min & Rotation Max

⚡ PCG Overridable

</details>

<details>

<summary><strong>Snap Rotation</strong> <code>PCGExVariationSnapping</code></summary>

Controls snap rotation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Snap</strong> <code>PCGExInputShorthandSelectorRotator</code></summary>

Controls rotation snap.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Rotation</strong> <code>uint8</code></summary>

Controls absolute rotation.

</details>

**Scale**

<details>

<summary><strong>Reset Scale</strong> <code>bool</code></summary>

If enabled will first reset scale to 1, then apply variation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale Min</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls scale min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale Max</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls scale max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scaling</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Scale applied to both Scale Min & Scale Max

⚡ PCG Overridable

</details>

<details>

<summary><strong>Uniform Scale</strong> <code>PCGExInputShorthandSelectorBoolean</code></summary>

Controls uniform scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Snap Scale</strong> <code>PCGExVariationSnapping</code></summary>

Controls snap scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale Snap</strong> <code>PCGExInputShorthandSelectorVector</code></summary>

Controls scale snap.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\PCGExTransformPoints.h`
