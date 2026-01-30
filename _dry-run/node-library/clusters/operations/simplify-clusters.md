---
icon: minimize
description: 'In editor :: PCGEx | Cluster : Simplify'
---

# Cluster : Simplify

Simplify connections by **operating on isolated chains of nodes** (vertices with only two neighbors), reducing complexity while preserving overall structure.

## Overview

Simplify Clusters identifies chains of degree-2 vertices (nodes with exactly two edges) and collapses them, replacing the chain with a single edge between the endpoints. This reduces vertex and edge count while maintaining the essential graph topology.

This is particularly useful for path simplification, reducing complexity in road networks, or cleaning up over-detailed generated graphs.

## Key Behavior

```
Before:                     After Simplify:
●───●───●───●───●             ●───────────●
    ↑   ↑   ↑                      │
   chain of                   Single edge replaces
   degree-2 nodes             the entire chain
```

## How It Works

1. **Find Chains**: Identify sequences of degree-2 vertices
2. **Apply Filters**: Check angular threshold and filter conditions
3. **Collapse Chains**: Replace chains with single edges
4. **Blend Attributes**: Merge attributes from collapsed edges
5. **Prune Leaves** (optional): Remove dead-end vertices

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Keep Condition** | Point Filters | (Optional) Prevent specific vertices from being pruned |
| **Edge Filters** | Edge Filters | (Optional) Control which edges trigger preservation/collapse |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Simplified vertices |
| **Edges** | Points | Simplified edges |

## Settings

### Basic Settings

<details>
<summary><strong>Operate On Leaves Only</strong> <code>bool</code></summary>

If enabled, only check for dead ends (degree-1 vertices) rather than full chains.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Filter Role</strong> <code>EPCGExSimplifyClusterEdgeFilterRole</code></summary>

Defines how edge filters affect simplification.

| Option | Behavior |
|--------|----------|
| **Preserve** | Preserve endpoints of edges that pass the filters |
| **Collapse** | Collapse endpoints of edges that pass the filters |

Default: `Preserve`

⚡ PCG Overridable

</details>

### Angular Threshold

<details>
<summary><strong>Merge Above Angular Threshold</strong> <code>bool</code></summary>

Enable angular threshold filtering for chain simplification.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Angular Threshold</strong> <code>double</code></summary>

Angle (in degrees) below which nodes are merged. Nodes forming angles larger than this threshold are preserved.

Range: `0` to `180`
Default: `10`

⚡ PCG Overridable
📋 Visible when: `Merge Above Angular Threshold = true`

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Removes hard angles instead of collinear ones.

Default: `false`

📋 Visible when: `Merge Above Angular Threshold = true`

</details>

<details>
<summary><strong>Fuse Collocated</strong> <code>bool</code></summary>

Consider collocated binary nodes for collocation and remove them as part of simplification.

Default: `true`

📋 Visible when: `Merge Above Angular Threshold = true`

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Distance used to consider points as overlapping.

Default: `0.001`

⚡ PCG Overridable
📋 Visible when: `Merge Above Angular Threshold = true AND Fuse Collocated = true`

</details>

### Leaf Pruning

<details>
<summary><strong>Prune Leaves</strong> <code>bool</code></summary>

If enabled, prune dead ends (degree-1 vertices) after simplification.

Default: `false`

⚡ PCG Overridable

</details>

### Data Blending

<details>
<summary><strong>Edge Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

Defines how edge attributes are merged when edges are combined during simplification.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which edge attributes are carried over.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Edge Union Data</strong> <code>FPCGExEdgeUnionMetadataDetails</code></summary>

Metadata settings for merged edges.

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how the output cluster is constructed.

⚡ PCG Overridable

</details>

## Examples

**Basic path simplification**:
```
Merge Above Angular Threshold: true
Angular Threshold: 5
```
Removes nearly-collinear points while preserving corners.

**Aggressive simplification**:
```
Merge Above Angular Threshold: true
Angular Threshold: 30
Prune Leaves: true
```
Removes most intermediate points and dead ends.

**Preserve important nodes**:
- Use **Keep Condition** filter to mark important vertices
- Marked vertices won't be collapsed even in chains

## Use Cases

### Road Network Simplification
Reduce detail in generated road graphs while keeping intersections.

### Path Optimization
Simplify paths after pathfinding to reduce waypoint count.

### LOD Generation
Create simplified versions of graphs for distant rendering.

## Related

- [Refine Edges](../refine-edges/) - Remove edges based on criteria
- [Sanitize Clusters](./sanitize-clusters.md) - Clean up graph structure

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExSimplifyClusters.h)
