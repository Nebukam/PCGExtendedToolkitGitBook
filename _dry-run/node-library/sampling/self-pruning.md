---
icon: crosshairs
description: 'In editor :: PCGEx | Self Pruning'
---

# Self Pruning

Remove **overlapping points** within the same data set using precise bounds testing.

## Overview

This node detects and removes points that overlap with other points in the same data set. Unlike native PCG pruning which uses simple radius-based tests, this node uses oriented bounding boxes (OBB) for more precise overlap detection.

## Key Behavior

```
    Before Pruning          After Pruning

    ●  ●                     ●
     ╲╱  (overlapping)        ╲
     ╱╲                        ╲
    ●  ●                        ●

    - Overlapping points are removed
    - Sort order determines which point "wins"
```

## Modes

| Mode | Behavior |
|------|----------|
| **Prune** | Remove overlapping points from output |
| **Write Result** | Keep all points, write overlap count to attribute |

## Use Cases

- **Dense scatter cleanup**: Remove overlapping scatter points
- **Collision prevention**: Ensure placed objects don't overlap
- **Density analysis**: Identify high-overlap areas
- **Quality control**: Find placement conflicts

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Points to check for self-overlap |
| **Filters** | Filters | No | Filter which points can be considered overlapping |
| **Sorting Rules** | Sorting Rules | No | Rules for determining pruning priority |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Pruned points (or points with overlap counts) |

## Settings

### Mode

<details>
<summary><strong>Mode</strong> <code>EPCGExSelfPruningMode</code></summary>

What to do with overlapping points.

| Option | Behavior |
|--------|----------|
| **Prune** | Remove overlapping points |
| **Write Result** | Keep all points, write overlap count to attribute |

Default: `Prune`

</details>

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Which points "win" during pruning.

| Option | Behavior |
|--------|----------|
| **Ascending** | Lower sort values survive |
| **Descending** | Higher sort values survive |

Default: `Ascending`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Randomize</strong> <code>bool</code></summary>

Add random jitter to sort values for varied results.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Mode == Prune`

</details>

<details>
<summary><strong>Random Range</strong> <code>double</code></summary>

Amount of randomization to apply (0-1).

Default: `0.05`

⚡ PCG Overridable
📋 Visible when: `Randomize == true AND Mode == Prune`

</details>

### Write Result Options

<details>
<summary><strong>Output to</strong> <code>FName</code></summary>

Attribute name to write overlap count.

Default: `NumOverlaps`

⚡ PCG Overridable
📋 Visible when: `Mode == Write Result`

</details>

<details>
<summary><strong>Units</strong> <code>EPCGExMeanMeasure</code></summary>

How to output the overlap count.

| Option | Behavior |
|--------|----------|
| **Discrete** | Raw overlap count |
| **Relative** | Normalized 0-1 based on max overlaps |

Default: `Discrete`

⚡ PCG Overridable
📋 Visible when: `Mode == Write Result`

</details>

<details>
<summary><strong>OneMinus</strong> <code>bool</code></summary>

Invert the normalized overlap value.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Mode == Write Result AND Units == Relative`

</details>

### Expansion

<details>
<summary><strong>Precise Test</strong> <code>bool</code></summary>

Enable precise OBB intersection tests. More accurate but more expensive.

Default: `false`

</details>

<details>
<summary><strong>Primary Mode</strong> <code>EPCGExSelfPruningExpandOrder</code></summary>

If and how to expand the primary bounds (the point being tested).

| Option | Behavior |
|--------|----------|
| **None** | No expansion |
| **Before Transform** | Expand in local space before world transform |
| **After Transform** | Expand in world space after transform |

Default: `None`

</details>

<details>
<summary><strong>Primary Expansion</strong></summary>

Amount to expand primary bounds.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable
📋 Visible when: `Primary Mode != None`

</details>

<details>
<summary><strong>Secondary Mode</strong> <code>EPCGExSelfPruningExpandOrder</code></summary>

If and how to expand the secondary bounds (neighbor points being tested against).

Default: `None`

</details>

<details>
<summary><strong>Secondary Expansion</strong></summary>

Amount to expand secondary bounds.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable
📋 Visible when: `Secondary Mode != None`

</details>

## Example: Clean Up Dense Scatter

**Goal**: Remove overlapping points from a dense scatter.

1. Generate dense scatter points
2. Use Self Pruning with:
   - Mode: `Prune`
   - Randomize: `true`
3. Overlapping points are removed, keeping only non-overlapping ones

## Comparison with Related Nodes

| Node | Purpose |
|------|---------|
| **Self Pruning** | Remove self-overlapping points in same set |
| **Discard By Overlap** | Remove entire data sets based on overlap |
| **Sample Overlap Stats** | Analyze overlaps without removing |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSelfPruning.h)
