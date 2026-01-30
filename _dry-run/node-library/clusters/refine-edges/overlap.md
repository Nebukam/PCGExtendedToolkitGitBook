---
icon: diagram-project
description: 'Refine : Overlap'
---

# Refine : Overlap

Remove edges that **spatially overlap** with other edges, keeping the longest or shortest of overlapping pairs.

## Overview

Overlap refinement detects edges that pass too close to each other (within tolerance) and removes one of them. This helps clean up graphs where multiple edges occupy similar space, keeping only the most relevant connection.

## Key Behavior

```
Before:                     After (Keep Longest):
    ●───────────●               ●───────────●
    │           │               │
    │   ●───●   │      →        │   ●   ●   │
    │           │               │
    ●───────────●               ●───────────●

Overlapping edges           Short edge removed
```

## How It Works

1. **For each edge**: Find other edges within tolerance distance
2. **Filter by angle** (optional): Only consider edges within angle range
3. **Compare lengths**: Keep longest or shortest edge of overlapping pair
4. **Remove loser**: Mark the non-preferred edge as invalid

## Settings

<details>
<summary><strong>Keep</strong> <code>EPCGExEdgeOverlapPick</code></summary>

Which edge to keep when two edges overlap.

| Option | Behavior |
|--------|----------|
| **Longest** | Keep the longer edge, remove shorter |
| **Shortest** | Keep the shorter edge, remove longer |

Default: `Longest`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance between edges to consider them overlapping.

Default: `0.0001` (DBL_INTERSECTION_TOLERANCE)

⚡ PCG Overridable

</details>

### Angle Filtering

<details>
<summary><strong>Use Min Angle</strong> <code>bool</code></summary>

Only consider overlaps where edges cross at minimum angle.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Angle</strong> <code>double</code></summary>

Minimum angle (degrees) between edges for overlap detection.

Range: `0` to `90`
Default: `0`

⚡ PCG Overridable
📋 Visible when: `Use Min Angle = true`

</details>

<details>
<summary><strong>Use Max Angle</strong> <code>bool</code></summary>

Only consider overlaps where edges cross at maximum angle.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Angle</strong> <code>double</code></summary>

Maximum angle (degrees) between edges for overlap detection.

Range: `0` to `90`
Default: `90`

⚡ PCG Overridable
📋 Visible when: `Use Max Angle = true`

</details>

## Examples

**Remove parallel duplicates**:
- **Use Max Angle**: `true`, **Max Angle**: `10`
- Only removes nearly-parallel overlapping edges

**Clean crossing edges**:
- **Keep**: `Longest`
- Remove short edges that cross longer connections

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveOverlap.h)
