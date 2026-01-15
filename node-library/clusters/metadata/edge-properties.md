---
description: 'In editor :: PCGEx | Cluster : Edge Properties'
icon: circle
---

# Edge Properties

Extract & write extra edge informations to the point representing the edge.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Edge Properties node extracts additional edge properties and writes them to the point that represents the edge.
* It orders points based on the specified direction settings to form final paths.
* If "Write Edge Length" is enabled, the node outputs the edge length as a boolean attribute named according to the setting for "EdgeLength".
* When "Write Edge Direction" is selected, the node outputs the edge direction as a boolean attribute with the name defined by the "EdgeDirection" setting.

#### Configuration

<details>

<summary><strong>Direction Settings</strong> <code>PCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

</details>

**Blending**

<details>

<summary><strong>Blending Interface</strong> <code>PCGExBlendingInterface</code></summary>

How to blend data from sampled points

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Edge Length</strong> <code>bool</code></summary>

Output Edge Length.

⚡ PCG Overridable

</details>

<details>

<summary><strong>EdgeLength</strong> <code>Name</code></summary>

Name of the 'boolean' attribute to write sampling success to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Edge Direction</strong> <code>bool</code></summary>

Output Edge Direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>EdgeDirection</strong> <code>Name</code></summary>

Name of the 'boolean' attribute to write sampling success to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Endpoints Blending</strong> <code>bool</code></summary>

Edges will inherit point attributes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Endpoints Weights</strong> <code>double</code></summary>

Balance between start/end point ( When enabled, this value will be overriden by EdgePositionLerp, and Solidification, in that order. )

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending Settings</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together.

📦 See: Blending configuration

</details>

<details>

<summary><strong>Write Heuristics</strong> <code>bool</code></summary>

Output Edge Heuristics.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Heuristics</strong> <code>Name</code></summary>

Name of the 'double' attribute to write heuristics to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Heuristics Mode</strong> <code>PCGExHeuristicsWriteMode</code></summary>

Heuristic write mode.

**Values:**

* **Endpoints Order**: Use endpoint order heuristics.
* **Smallest Score**: Compute heuristics both ways a keep smallest score
* **Highest Score**: Compute heuristics both ways a keep highest score.

⚡ PCG Overridable

</details>

**Solidification**

<details>

<summary><strong>Write Edge Position</strong> <code>bool</code></summary>

Update Edge position as a lerp between endpoints (according to the direction method selected above)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Position Lerp</strong> <code>double</code></summary>

Position position lerp between start & end points

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Axis</strong> <code>PCGExMinimalAxis</code></summary>

Align the edge point to the edge direction over the selected axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp Input</strong> <code>PCGExInputValueType</code></summary>

Controls solidification lerp input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Solidification Lerp attribute (read from Edge).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp</strong> <code>double</code></summary>

Solidification Lerp constant.

⚡ PCG Overridable

</details>

**Solidification > Radiuses**

<details>

<summary><strong>Write Radius X</strong> <code>bool</code></summary>

Whether or not to write the edge extents over the local X axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius XInput</strong> <code>PCGExInputValueType</code></summary>

Type of Radius X value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius XSource</strong> <code>PCGExClusterElement</code></summary>

Source from which to fetch the Radius X value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius X (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute read on edge endpoints

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius X</strong> <code>double</code></summary>

Radius X Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Radius Y</strong> <code>bool</code></summary>

Controls write radius y.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius YInput</strong> <code>PCGExInputValueType</code></summary>

Type of Radius Y value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius YSource</strong> <code>PCGExClusterElement</code></summary>

Source from which to fetch the Radius Y value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Y (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute read on edge endpoints

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Y</strong> <code>double</code></summary>

Radius Y Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Radius Z</strong> <code>bool</code></summary>

Controls write radius z.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius ZInput</strong> <code>PCGExInputValueType</code></summary>

Type of Radius Z value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius ZSource</strong> <code>PCGExClusterElement</code></summary>

Source from which to fetch the Radius Z value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Z (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute read on edge endpoints

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Z</strong> <code>double</code></summary>

Radius Z Constant

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Meta\PCGExWriteEdgeProperties.h`
