---
description: 'In editor :: PCGEx | Path : Blend'
icon: circle
---

# Blend

Blend path individual points between its start and end points.

⚙️ **Behavior** — Instanced value blender.

**How It Works**

> AI-Generated, needs proofreading

* The Path : Blend node interpolates individual points along a path between its start and end points based on specified blending settings.
* It uses the PCGExBlendOver setting to determine how the blend occurs over the path's length.
* The Lerp Input (PCGExInputValueType) specifies whether the interpolation is based on an attribute or a constant direction defined by Lerp (Attr).
* Blending Settings are applied to smooth transitions of attributes along the interpolated points.

#### Configuration

<details>

<summary><strong>Blend Over</strong> <code>PCGExBlendOver</code></summary>

Controls blend over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lerp Input</strong> <code>PCGExInputValueType</code></summary>

Controls lerp input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lerp (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read the direction from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lerp</strong> <code>double</code></summary>

Constant direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending Settings</strong> <code>PCGExBlendingDetails</code></summary>

Blending settings used to smooth attributes.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend First Point</strong> <code>bool</code></summary>

If enabled, will apply blending to othe first point. Can be useful with some blendmodes.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend Last Point</strong> <code>bool</code></summary>

If enabled, will apply blending to the last point. Can be useful with some blendmodes.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExBlendPath.h`
