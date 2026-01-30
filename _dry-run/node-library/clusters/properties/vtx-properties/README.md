---
icon: tag
description: 'In editor :: PCGEx | Cluster : Vtx Properties'
---

# Cluster : Vtx Properties

Extract and write per-vertex attributes based on graph topology. Analyzes each vertex's connections to compute properties like edge count, normal direction, and oriented bounding boxes.

## Overview

This node processes cluster vertices and their connected edges to derive topological properties. It can mutate vertex transforms into oriented bounding boxes fitted to neighbor positions, compute surface normals from edge directions, and count connections.

```
Cluster:                    With Properties:
    ●───●───●                   ●───●───●
    │   │   │                   │   │   │
    ●───●───●      →            ●───●───●

                            Each ● now has:
                            - EdgeCount = N
                            - Normal = computed direction
                            - OOB transform (optional)
```

## How It Works

### OOB Calculation

```
Step 1: Collect Neighbors     Step 2: Compute Best-Fit Box
        B                              ┌─────┐
        │                              │  B  │
    A───●───C          →               │A ● C│
        │                              │  D  │
        D                              └─────┘

                              Box aligned to principal directions
```

1. Gather all neighbor positions
2. Compute the best-fit plane and orientation
3. Build an axis-aligned box in that orientation
4. Optionally mutate the vertex transform to match

### Normal Derivation

```
Neighbors:                  Normal = selected axis of OOB
    B                           ↑ Normal
    │                           │
A───●───C      →                ●
    │                         (plane fit to A,B,C,D)
    D
```

The normal represents the selected axis direction of the best-fit orientation through the vertex's neighbors.

### Edge Count

```
    B
    │
A───●───C    EdgeCount = 4
    │
    D
```

Counts the number of edges connected to each vertex.

## Settings

### OOB Mutation

<details>
<summary><strong>Mutate Vtx to OOB</strong> <code>bool</code></summary>

Transform vertices into oriented bounding boxes that encompass their connected neighbors.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Precise Fit</strong> <code>bool</code></summary>

Use min-box fit algorithm for more accurate OOB calculation.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Mutate Vtx to OOB = true`

</details>

<details>
<summary><strong>Axis Order</strong> <code>EPCGExAxisOrder</code></summary>

Axis priority for OOB calculation.

| Option | Behavior |
|--------|----------|
| **XYZ** | X-axis priority |
| **XZY** | X then Z priority |
| **YXZ** | Y-axis priority |
| **YZX** | Y then Z priority |
| **ZXY** | Z-axis priority |
| **ZYX** | Z then Y priority |

Default: `XYZ`

📋 Visible when: `Mutate Vtx to OOB = true`

</details>

### Outputs

<details>
<summary><strong>Write Vtx Edge Count</strong> <code>bool</code></summary>

Enable writing the number of edges connected to each vertex.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>EdgeCount</strong> <code>FName</code></summary>

Attribute name for the edge count value.

Default: `EdgeCount`

⚡ PCG Overridable
📋 Visible when: `Write Vtx Edge Count = true`

</details>

<details>
<summary><strong>Write Vtx Normal</strong> <code>bool</code></summary>

Enable writing the normal direction computed from connected edges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normal</strong> <code>FName</code></summary>

Attribute name for the normal vector.

Default: `Normal`

⚡ PCG Overridable
📋 Visible when: `Write Vtx Normal = true`

</details>

<details>
<summary><strong>Axis</strong> <code>EPCGExMinimalAxis</code></summary>

Which axis of the computed OOB to use as the normal direction.

| Option | Behavior |
|--------|----------|
| **X** | OOB X-axis as normal |
| **Y** | OOB Y-axis as normal |
| **Z** | OOB Z-axis as normal |

Default: `Z`

⚡ PCG Overridable
📋 Visible when: `Write Vtx Normal = true`

</details>

<details>
<summary><strong>Include Vtx in OOB</strong> <code>bool</code></summary>

Include the vertex position itself in the oriented bounding box calculation.

Default: `false`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Properties** | Vtx Property | (Optional) Additional property factory nodes |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertices with written properties |
| **Edges** | Points | Edges (forwarded) |

## Property Sub-Nodes

Additional vertex properties can be computed by connecting factory nodes to the **Properties** input:

| Sub-Node | Description |
|----------|-------------|
| [Special Edges](./special-edges.md) | Find shortest, longest, and average edges per vertex |
| [Special Neighbors](./special-neighbors.md) | Find largest and smallest neighbors by bounds |
| [Amplitude](./amplitude.md) | Compute vertex amplitude based on neighbor positions |
| [Edge Match](./edge-match.md) | Find edges that best match a direction |

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/PCGExWriteVtxProperties.h)
