---
icon: route
description: 'In editor :: PCGEx | Pathfinding : Grow Paths'
---

# Pathfinding : Grow Paths

Grow paths from seeds through cluster graphs using iterative expansion.

## Overview

This node grows paths from seed points by iteratively expanding through the cluster graph. Unlike standard pathfinding which seeks specific goal points, Grow Paths explores outward from seeds based on growth direction, iteration limits, and distance constraints. This is useful for generating organic-looking paths, river networks, or tree-like structures.

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Vtx** | Points | Yes | Cluster vertices (inherited from base) |
| **Edges** | Points | Yes | Cluster edges (inherited from base) |
| **Seeds** | Points | Yes | Starting points for path growth |
| **Heuristics** | Heuristics | Yes | Heuristic factories for growth scoring |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Output grown paths as point collections |

## Settings

### Seed Picking

<details>
<summary><strong>Seed Picking</strong> <code>FPCGExNodeSelectionDetails</code></summary>

Controls how seed points select their starting node in the cluster.

**Picking Method** (`EPCGExClusterClosestSearchMode`):

| Option | Behavior |
|--------|----------|
| **Closest vtx** | Find nearest vertex by position |
| **Closest edge** | Find nearest edge, then use closest endpoint |

**Max Distance** (`double`): Maximum distance to search. Use ≤ 0 to ignore distance check.

Default Picking Method: `Closest edge`
Default Max Distance: `200`

⚡ PCG Overridable

</details>

### Heuristics

<details>
<summary><strong>Heuristic Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine scores from multiple heuristics.

| Option | Behavior |
|--------|----------|
| **Weighted Average** | Average weighted by each heuristic's weight |
| **Sum** | Add all scores together |
| **Min** | Use lowest score |
| **Max** | Use highest score |

Default: `Weighted Average`

</details>

### Growth Mode

<details>
<summary><strong>Growth Mode</strong> <code>EPCGExGrowthIterationMode</code></summary>

Controls how iterative growth is managed across multiple seeds.

| Option | Behavior |
|--------|----------|
| **Parallel** | Does one growth iteration on each seed until none remain |
| **Sequence** | Grow a seed to its end, then move to the next seed |

Default: `Parallel`

</details>

### Number of Iterations

<details>
<summary><strong>Num Iterations</strong> <code>EPCGExGrowthValueSource</code></summary>

Source for the maximum number of growth iterations per seed.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single constant for all seeds |
| **Seed Attribute** | Read from an attribute on the seed point |
| **Vtx Attribute** | Read from an attribute on the current vertex |

Default: `Constant`

</details>

<details>
<summary><strong>Num Iterations Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read iteration count from (when Num Iterations is not Constant). Value is converted to int32.

⚡ PCG Overridable
📋 Visible when: `Num Iterations != Constant`

</details>

<details>
<summary><strong>Num Iterations Constant</strong> <code>int32</code></summary>

Constant number of iterations when using Constant mode.

Default: `3`

⚡ PCG Overridable
📋 Visible when: `Num Iterations == Constant`

</details>

<details>
<summary><strong>Num Iterations Update Mode</strong> <code>EPCGExGrowthUpdateMode</code></summary>

How to update the iteration count during growth. Only applies when reading from Vtx Attribute.

| Option | Behavior |
|--------|----------|
| **Once** | Read once at the beginning |
| **Set Each Iteration** | Set the remaining iterations after each step |
| **Add Each Iteration** | Add to remaining iterations after each step |

Note: Will never exceed the maximum iteration limit.

Default: `Once`

⚡ PCG Overridable
📋 Visible when: `Num Iterations == Vtx Attribute`

</details>

### Number of Branches

<details>
<summary><strong>Seed Num Branches</strong> <code>EPCGExGrowthValueSource</code></summary>

Source for the number of growth branches started by each seed.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single constant for all seeds |
| **Seed Attribute** | Read from an attribute on the seed point |
| **Vtx Attribute** | Read from an attribute on the current vertex |

Default: `Constant`

</details>

<details>
<summary><strong>Seed Num Branches Mean</strong> <code>EPCGExMeanMeasure</code></summary>

How the NumBranches value is interpreted against the actual number of neighbors.

| Option | Behavior |
|--------|----------|
| **Relative** | Value is normalized between 0..1, used as a factor |
| **Discrete** | Raw value is used as absolute count |

Default: `Discrete`

</details>

<details>
<summary><strong>Num Branches Constant</strong> <code>int32</code></summary>

Constant number of branches when using Constant mode.

Default: `1`

⚡ PCG Overridable
📋 Visible when: `Seed Num Branches == Constant`

</details>

<details>
<summary><strong>Num Branches Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read branch count from (when Seed Num Branches is not Constant). Value is converted to int32.

⚡ PCG Overridable
📋 Visible when: `Seed Num Branches != Constant`

</details>

### Growth Direction

<details>
<summary><strong>Growth Direction</strong> <code>EPCGExGrowthValueSource</code></summary>

Source for the preferred growth direction.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single constant direction for all seeds |
| **Seed Attribute** | Read direction from an attribute on the seed point |
| **Vtx Attribute** | Read direction from an attribute on the current vertex |

Default: `Constant`

</details>

<details>
<summary><strong>Growth Direction Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read growth direction from (when not Constant). Value is converted to FVector.

⚡ PCG Overridable
📋 Visible when: `Growth Direction != Constant`

</details>

<details>
<summary><strong>Growth Direction Constant</strong> <code>FVector</code></summary>

Constant growth direction when using Constant mode.

Default: `(0, 0, 1)` (Up)

⚡ PCG Overridable
📋 Visible when: `Growth Direction == Constant`

</details>

<details>
<summary><strong>Growth Direction Update Mode</strong> <code>EPCGExGrowthUpdateMode</code></summary>

How to update the growth direction during iteration.

| Option | Behavior |
|--------|----------|
| **Once** | Read once at the beginning |
| **Set Each Iteration** | Set direction after each iteration |
| **Add Each Iteration** | Add to direction after each iteration |

Default: `Once`

</details>

### Growth Max Distance

<details>
<summary><strong>Growth Max Distance</strong> <code>EPCGExGrowthValueSource</code></summary>

Source for the maximum growth distance per seed.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single constant for all seeds |
| **Seed Attribute** | Read from an attribute on the seed point |
| **Vtx Attribute** | Read from an attribute on the current vertex |

Default: `Constant`

</details>

<details>
<summary><strong>Growth Max Distance Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read max distance from (when not Constant). Value is converted to double.

⚡ PCG Overridable
📋 Visible when: `Growth Max Distance != Constant`

</details>

<details>
<summary><strong>Growth Max Distance Constant</strong> <code>double</code></summary>

Constant maximum growth distance when using Constant mode.

Default: `500`

⚡ PCG Overridable
📋 Visible when: `Growth Max Distance == Constant`

</details>

### Limits

<details>
<summary><strong>Use Growth Stop</strong> <code>bool</code></summary>

Enable growth stop points that terminate paths when reached.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Growth Stop Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute read on Vtx as boolean. If true and this node is used in a path, the path stops there.

⚡ PCG Overridable
📋 Visible when: `Use Growth Stop == true`

</details>

<details>
<summary><strong>Invert Growth Stop</strong> <code>bool</code></summary>

Inverse the growth stop behavior (stop when attribute is false instead of true).

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Use Growth Stop == true`

</details>

<details>
<summary><strong>Use No Growth</strong> <code>bool</code></summary>

Enable no-growth points that paths cannot traverse (but can be used as seeds).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>No Growth Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute read on Vtx as boolean. If true, this point will never be grown on, but may still be used as seed.

⚡ PCG Overridable
📋 Visible when: `Use No Growth == true`

</details>

<details>
<summary><strong>Invert No Growth</strong> <code>bool</code></summary>

Inverse the no-growth behavior.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Use No Growth == true`

</details>

### Tagging & Forwarding

<details>
<summary><strong>Seed Attributes to Path Tags</strong> <code>FPCGExAttributeToTagDetails</code></summary>

Copy seed point attributes as tags on output paths.

- **Add Index Tag**: Add seed point index as a tag
- **Index Tag Prefix**: Prefix for the index tag (default: `IndexTag`)
- **Prefix with Attribute Name**: Include attribute name in tag
- **Attributes**: List of attributes to convert to tags
- **Comma Separated Attribute Selectors**: Quick attribute list input

</details>

<details>
<summary><strong>Seed Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Which seed attributes to forward onto output paths.

- **Enabled**: Enable/disable forwarding
- **Preserve Attributes Default Value**: Keep original default values
- **Filter Mode**: All/Exclude/Include
- **Matches**: Attribute name patterns to match

</details>

### Advanced

<details>
<summary><strong>Statistics</strong> <code>FPCGExPathStatistics</code></summary>

Output various pathfinding statistics to attributes.

- **Write Point Use Count**: Write how many paths use each vertex
- **Point Use Count Attribute Name**: Attribute name for point use count (default: `PointUseCount`)
- **Write Edge Use Count**: Write how many paths use each edge
- **Edge Use Count Attribute Name**: Attribute name for edge use count (default: `EdgeUseCount`)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Search for closest node using an octree. Depending on your dataset, this may be faster or slightly slower.

Default: `false`

</details>

## Related

- [Pathfinding : Edges](./pathfinding-edges.md) - Standard seed-to-goal pathfinding
- [Pathfinding : Plot Edges](./pathfinding-plot-edges.md) - Plot paths through waypoints
- [Heuristics](../../sub-nodes/heuristics/README.md) - Scoring functions for pathfinding

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingGrowPaths.h)
