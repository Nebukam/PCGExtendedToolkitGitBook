---
description: 'In editor :: PCGEx | Bounds to Points'
icon: circle
---

# Bounds to Points

Generate a point on the surface of the bounds.

**How It Works**

> AI-Generated, needs proofreading

* Generates a point on the surface of defined bounds based on provided extents.
* Utilizes symmetry axis settings to generate points symmetrically if enabled.
* Creates a collection of point data for each generated point when "Generate Per Point Data" is selected.
* Uses UVW coordinates as part of the PCGExUVW system to influence point generation.
* Adjusts the range or area where points can be generated through the "Set Extents" and "Extents" vector settings.

#### Configuration

<details>

<summary><strong>Generate Per Point Data</strong> <code>bool</code></summary>

Generates a point collections per generated point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Symmetry Axis</strong> <code>PCGExMinimalAxis</code></summary>

Generate points in symmetry

⚡ PCG Overridable

</details>

<details>

<summary><strong>UVW</strong> <code>PCGExUVW</code></summary>

Controls uvw.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Extents</strong> <code>bool</code></summary>

The extents of the generate point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Extents</strong> <code>Vector</code></summary>

Controls extents.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ As multiplier</strong> <code>bool</code></summary>

Multiplies the existing bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Scale</strong> <code>bool</code></summary>

Controls set scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale</strong> <code>Vector</code></summary>

Controls scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Attributes To Output Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\Bounds\PCGExBoundsToPoints.h`
