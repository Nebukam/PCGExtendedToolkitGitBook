---
icon: link
description: 'In editor :: PCGEx | Path : Stitch'
---

# Stitch

Connects multiple paths together at their endpoints.

## Overview

Stitch joins separate paths into longer continuous paths by connecting endpoints that are close together. This is the inverse of Split—where Split breaks paths apart, Stitch welds them back together.

## Settings

### Connection Method

<details>
<summary><strong>Method</strong> <code>Connect | Fuse</code></summary>

How paths are connected:

| Option | Behavior |
|--------|----------|
| **Connect** | Connect existing points with a segment (preserves all input points) |
| **Fuse** | Merge points that should be connected, leaving only a single point |

Default: `Connect`

</details>

### Fuse Settings (when Method is Fuse)

<details>
<summary><strong>Fuse Method</strong> <code>Keep Start | Keep End</code></summary>

Which point to keep during the merge.

Default: `Keep Start`

</details>

<details>
<summary><strong>Merge Operation</strong> <code>None | Average | Line Intersection</code></summary>

How to position the merged point:

| Option | Behavior |
|--------|----------|
| **None** | Keep the chosen point as-is |
| **Average** | Average the connected point positions |
| **Line Intersection** | Position at line/line intersection |

Default: `None`

</details>

### Matching

<details>
<summary><strong>Only Match Start and Ends</strong> <code>bool</code></summary>

Only stitch between a path's end point and another path's start point. Otherwise, stitching is based on spatial proximity alone.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Requires Alignment</strong> <code>bool</code></summary>

Require paths to be aligned within an angular threshold before stitching.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExStaticDotComparisonDetails</code></summary>

Angular threshold settings for alignment requirement.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance between endpoints for stitching to occur.

Default: `10`

⚡ PCG Overridable

</details>

### Sorting

<details>
<summary><strong>Sort Direction</strong> <code>Ascending | Descending</code></summary>

Controls the order in which data will be sorted for stitching priority.

Default: `Ascending`

⚡ PCG Overridable

</details>

### Carry Over

<details>
<summary><strong>Carry Over Details</strong> <code>FPCGExCarryOverDetails</code></summary>

Meta filter settings for attribute and tag carry-over during stitching.

⚡ PCG Overridable

</details>

## Examples

**Join fragmented paths** (tolerance for imprecise endpoints):
- Method: `Connect`
- Tolerance: `50`

**Fuse overlapping endpoints**:
- Method: `Fuse`
- Fuse Method: `Keep Start`
- Merge Operation: `Average`

**Strict directional stitching**:
- Only Match Start and Ends: Enabled
- Requires Alignment: Enabled
- Tolerance: `10`

## Use Cases

- **Path repair**: Reconnect paths broken by other operations
- **Route assembly**: Build longer routes from segments
- **Network building**: Combine path fragments into connected networks

## Related

### Path Connectivity
- [Split](./split.md) - Divide paths (inverse operation)
- [Path Crossings](./path-crossings.md) - Find where paths intersect

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathStitch.cpp)
