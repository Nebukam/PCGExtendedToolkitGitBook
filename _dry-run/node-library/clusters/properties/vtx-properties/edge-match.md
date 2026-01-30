---
icon: compass
description: 'In editor :: PCGEx | Vtx : Edge Match'
---

# Vtx : Edge Match

Find the edge that best matches a specified direction.

## Overview

For each vertex, this property node computes the dot product between each edge direction and a target direction, then selects the edge with the best alignment. It outputs the matching edge's direction, length, and indices.

```
Direction: →              Matching edge:
                              B
      B                       │
      │                       │
  A───●───C   →           A───●───C ← Best match
      │                       │
      D                       D

Edge to C best matches → direction
```

## How It Works

1. **Get target direction**: Read direction from constant or attribute
2. **Compute dot products**: For each edge, calculate alignment with target
3. **Compare results**: Use comparison settings to find best match
4. **Write outputs**: Store matching edge's properties as attributes

## Settings

<details>
<summary><strong>Origin</strong> <code>EPCGExAdjacencyDirectionOrigin</code></summary>

Direction orientation for edge comparison.

| Option | Behavior |
|--------|----------|
| **From Node to Neighbor** | Direction points from vertex toward neighbor |
| **From Neighbor to Node** | Direction points from neighbor toward vertex |

Default: `From Node to Neighbor`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Input</strong> <code>EPCGExInputValueType</code></summary>

Source for the target direction to match against.

| Option | Behavior |
|--------|----------|
| **Constant** | Use fixed direction value |
| **Attribute** | Read from point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read target direction from.

⚡ PCG Overridable
📋 Visible when: `Direction Input = Attribute`

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the direction vector before comparison.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Direction Input = Attribute`

</details>

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

Constant target direction for matching.

Default: `(1, 0, 0)`

⚡ PCG Overridable
📋 Visible when: `Direction Input = Constant`

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction by the vertex's transform.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Settings for comparing dot product values.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Domain** | EPCGExAngularDomain | `Scalar` | Interpret threshold as scalar (-1 to 1) or degrees (0-180) |
| **Comparison** | EPCGExComparison | `>=` | Comparison operator |
| **Unsigned Comparison** | bool | `false` | Use absolute dot value (treats opposite as equivalent) |
| **Threshold Input** | EPCGExInputValueType | `Constant` | Source for threshold value |
| **Scalar** | double | `0.5` | Constant threshold in scalar domain |
| **Degrees** | double | `90` | Constant threshold in degrees domain |

</details>

<details>
<summary><strong>Output</strong> <code>FPCGExEdgeOutputWithIndexSettings</code></summary>

Output settings for the matching edge.

⚡ PCG Overridable

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Write Direction** | bool | `false` | Write direction vector toward matching edge |
| **Direction** | FName | `MatchingDir` | Attribute name for direction |
| **Invert** | bool | `false` | Invert the direction vector |
| **Write Length** | bool | `false` | Write distance to matching edge |
| **Length** | FName | `MatchingLen` | Attribute name for length |
| **Write Edge Index** | bool | `false` | Write edge index |
| **Edge Index** | FName | `MatchingEdgeIndex` | Attribute name for edge index |
| **Write Vtx Index** | bool | `false` | Write neighbor vertex index |
| **Vtx Index** | FName | `MatchingVtxIndex` | Attribute name for vertex index |
| **Write Neighbor Count** | bool | `false` | Write total neighbor count |
| **Neighbor Count** | FName | `MatchingNeighborCount` | Attribute name for count |

</details>

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertyEdgeMatch.h)
