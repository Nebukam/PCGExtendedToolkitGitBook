---
icon: users
description: 'In editor :: PCGEx | Cluster : Sample Neighbors'
---

# Cluster : Sample Neighbors

Sample and blend attribute values from connected neighbors in a cluster graph.

## Overview

This node samples attribute values from each vertex's connected neighbors and blends them together. The sampling behavior is defined by sampler factory nodes connected to the Samplers input.

```
Before:                     After (with averaging):
    B=10                        B=10
     │                           │
     │                           │
 A=5─●─C=15      →           A=5─●─C=15
     │                           │
     │                   Center  ● = 10
    D=20                       D=20

Center samples neighbors A,B,C,D and blends their values
```

## How It Works

1. **Collect neighbors**: For each vertex, find all connected neighbors up to Max Depth
2. **Filter neighbors**: Apply Vtx and Edge filters to exclude certain neighbors
3. **Compute weights**: Calculate blend weight for each neighbor based on Blend Over mode
4. **Sample values**: Read attribute values from each valid neighbor
5. **Blend results**: Combine sampled values using the specified blending operation
6. **Write output**: Store blended result on the source vertex

## Settings

This node has no direct settings. All sampling configuration is done through the connected **Sampler** nodes.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Samplers** | Neighbor Sampler | Sampler factory nodes defining what and how to sample |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Vertices with sampled attributes |
| **Edges** | Points | Edges (forwarded) |

## Sampler Sub-Nodes

| Sub-Node | Description |
|----------|-------------|
| [Vtx Blend](./vtx-blend.md) | Blend neighbor attributes using blend operation factories |
| [Test Neighbors](./test-neighbors.md) | Count neighbors that pass or fail filter tests |

{% hint style="info" %}
Additional hidden samplers exist (Vtx Attributes, Vtx Properties) but are not typically used directly.
{% endhint %}

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/PCGExSampleNeighbors.h)
