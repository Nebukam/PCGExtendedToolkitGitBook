---
icon: minus
description: 'In editor :: PCGEx | Cluster : Edge Properties'
---

# Cluster : Edge Properties

Extract and write edge information from endpoints to edge point attributes.

## Overview

This node computes properties from edge endpoints (length, direction, heuristics) and writes them to edge point attributes. It can also **solidify** edges by transforming edge points into oriented boxes that span between endpoints.

```
Edge points:                Solidified edges:
    ●         ●                ┌─────────────┐
    │         │                │             │
    ●    →    ●       →        ├─────────────┤
    │         │                │             │
    ●         ●                └─────────────┘

Edge has Length, Direction   Edge is now a 3D box
```

## How It Works

1. **Determine direction**: Establish start/end endpoints based on Direction Settings
2. **Compute properties**: Calculate length, direction vector, and heuristics
3. **Blend endpoints**: Optionally blend vertex attributes to edge points
4. **Solidify**: Optionally transform edge points into oriented boxes
5. **Write attributes**: Output computed values to edge point attributes

## Settings

### Direction

<details>
<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Controls which endpoint is considered "start" vs "end" for direction computation.

⚡ PCG Overridable

</details>

### Outputs

<details>
<summary><strong>Write Edge Length</strong> <code>bool</code></summary>

Write the distance between endpoints.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Length</strong> <code>FName</code></summary>

Attribute name for edge length.

Default: `EdgeLength`

⚡ PCG Overridable
📋 Visible when: `Write Edge Length = true`

</details>

<details>
<summary><strong>Write Edge Direction</strong> <code>bool</code></summary>

Write the normalized direction vector from start to end.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Direction</strong> <code>FName</code></summary>

Attribute name for edge direction.

Default: `EdgeDirection`

⚡ PCG Overridable
📋 Visible when: `Write Edge Direction = true`

</details>

<details>
<summary><strong>Endpoints Blending</strong> <code>bool</code></summary>

Blend attributes from start/end vertices to the edge point.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Endpoints Weights</strong> <code>double</code></summary>

Balance between start (0) and end (1) point attributes.

Default: `0.5`

⚡ PCG Overridable
📋 Visible when: `Endpoints Blending = true` and solidification disabled

</details>

<details>
<summary><strong>Blending Interface</strong> <code>EPCGExBlendingInterface</code></summary>

How to configure blending operations.

| Option | Behavior |
|--------|----------|
| **Individual** | Use individual blend operation sub-nodes |
| **Monolithic** | Use unified blending settings |

Default: `Individual`

⚡ PCG Overridable
📋 Visible when: `Endpoints Blending = true`

</details>

<details>
<summary><strong>Blending Settings</strong> <code>FPCGExBlendingDetails</code></summary>

Monolithic blending configuration for all attributes.

📋 Visible when: `Blending Interface = Monolithic`

</details>

### Heuristics

<details>
<summary><strong>Write Heuristics</strong> <code>bool</code></summary>

Compute and write heuristic scores to edges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Heuristics</strong> <code>FName</code></summary>

Attribute name for heuristics score.

Default: `Heuristics`

⚡ PCG Overridable
📋 Visible when: `Write Heuristics = true`

</details>

<details>
<summary><strong>Heuristics Mode</strong> <code>EPCGExHeuristicsWriteMode</code></summary>

How to compute directional heuristics.

| Option | Behavior |
|--------|----------|
| **Endpoints Order** | Use endpoint direction ordering |
| **Smallest Score** | Compute both directions, keep minimum |
| **Highest Score** | Compute both directions, keep maximum |

Default: `Endpoints Order`

⚡ PCG Overridable
📋 Visible when: `Write Heuristics = true`

</details>

<details>
<summary><strong>Heuristics Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine multiple heuristics.

Default: `Weighted Average`

⚡ PCG Overridable
📋 Visible when: `Write Heuristics = true`

</details>

### Solidification

<details>
<summary><strong>Write Edge Position</strong> <code>bool</code></summary>

Update edge position to lerp between endpoints.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Position Lerp</strong> <code>double</code></summary>

Position along edge (0 = start, 1 = end).

Default: `0.5`

⚡ PCG Overridable
📋 Visible when: `Write Edge Position = true`

</details>

<details>
<summary><strong>Solidification Axis</strong> <code>EPCGExMinimalAxis</code></summary>

Axis to align with edge direction. None disables solidification.

| Option | Behavior |
|--------|----------|
| **None** | Solidification disabled |
| **X** | X-axis aligned to edge direction |
| **Y** | Y-axis aligned to edge direction |
| **Z** | Z-axis aligned to edge direction |

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Solidification Lerp Input</strong> <code>EPCGExInputValueType</code></summary>

Source for solidification lerp value.

| Option | Behavior |
|--------|----------|
| **Constant** | Use constant value |
| **Attribute** | Read from edge attribute |

Default: `Constant`

⚡ PCG Overridable
📋 Visible when: `Solidification Axis != None`

</details>

<details>
<summary><strong>Solidification Lerp</strong> <code>double</code></summary>

Bounds center position along edge (0 = start, 1 = end).

Default: `0.5`

⚡ PCG Overridable
📋 Visible when: `Solidification Lerp Input = Constant`

</details>

<details>
<summary><strong>Solidification Lerp (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read solidification lerp from.

⚡ PCG Overridable
📋 Visible when: `Solidification Lerp Input = Attribute`

</details>

### Solidification Radiuses

<details>
<summary><strong>Write Radius X</strong> <code>bool</code></summary>

Enable radius on the X axis (when X is not the solidification axis).

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Solidification Axis = Y or Z`

</details>

<details>
<summary><strong>Radius X Input</strong> <code>EPCGExInputValueType</code></summary>

Source for X radius value.

Default: `Constant`

⚡ PCG Overridable
📋 Visible when: `Write Radius X = true`

</details>

<details>
<summary><strong>Radius X Source</strong> <code>EPCGExClusterElement</code></summary>

Read radius from Vtx (blended between endpoints) or Edge.

| Option | Behavior |
|--------|----------|
| **Point** | Read from vertices, blend between endpoints |
| **Edge** | Read directly from edge |

Default: `Point`

⚡ PCG Overridable
📋 Visible when: `Radius X Input = Attribute`

</details>

<details>
<summary><strong>Radius X</strong> <code>double</code></summary>

Constant radius value.

Default: `1`

⚡ PCG Overridable
📋 Visible when: `Radius X Input = Constant`

</details>

<details>
<summary><strong>Radius X (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read radius from.

⚡ PCG Overridable
📋 Visible when: `Radius X Input = Attribute`

</details>

{% hint style="info" %}
Radius Y and Radius Z follow the same pattern as Radius X, each visible when their axis is not the solidification axis.
{% endhint %}

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Heuristics** | Heuristics | (Optional) Heuristics factories for score computation |
| **Blending** | Blend Op | (Optional) Blend operation factories for endpoint blending |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertices (forwarded) |
| **Edges** | Points | Edges with written properties |

## Output Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `EdgeLength` | double | Distance between endpoints |
| `EdgeDirection` | FVector | Normalized direction from start to end |
| `Heuristics` | double | Computed heuristic score |

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/PCGExWriteEdgeProperties.h)
