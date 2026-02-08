---
icon: route
description: 'Path : Stitch - Stitch paths together by their endpoints.'
---

# Path : Stitch

Stitch paths together by their endpoints.

## Overview

This node connects separate paths by linking their endpoints that are within a specified tolerance distance. Paths can be connected with a new segment or fused at their meeting points, creating longer continuous paths from separate segments.

## How It Works

1. **Identify Endpoints**: Find start and end points of all input paths.
2. **Find Candidates**: Search for endpoint pairs within the tolerance distance.
3. **Check Alignment**: Optionally verify paths are aligned within an angular threshold.
4. **Apply Stitching**: Connect or fuse endpoints based on the selected method.
5. **Merge Paths**: Combine stitched paths into continuous paths.

#### Usage Notes

- **Start/End Matching**: Enable "Only Match Start And Ends" to ensure paths connect in a logical chain (end of one path to start of another). When disabled, any endpoint pair within tolerance can connect.
- **Alignment Check**: Use alignment requirements to prevent stitching paths that meet at sharp angles.
- **Connect vs Fuse**: Connect preserves all points and adds a linking segment. Fuse reduces point count by merging overlapping endpoints.
- **Line Intersection**: When fusing, "Line Intersection" places the merged point at the geometric intersection of the two path directions.

## Behavior

```
Two separate paths with nearby endpoints:

Before:     ●───●───●───○    ○───●───●───●
                        ↑    ↑
                 (endpoints within tolerance)

After Connect:
            ●───●───●───●────●───●───●───●
                          ↑
                  (new connecting segment)

After Fuse (Keep Start):
            ●───●───●─────●──────●───●───●
                          ↑
                 (endpoints merged)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Paths to stitch together |
| **Labels** | Points | Optional labeling data |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Method</strong> <code>EPCGExStitchMethod</code></summary>

How paths are connected at their endpoints.

| Option | Description |
|--------|-------------|
| **Connect** | Add a new segment between endpoints, preserving all original points. |
| **Fuse** | Merge endpoint pairs into a single point, reducing total point count. |

Default: `Connect`

</details>

<details>
<summary><strong>Fuse Method</strong> <code>EPCGExStitchFuseMethod</code></summary>

When fusing, which endpoint to keep.

| Option | Description |
|--------|-------------|
| **Keep Start** | Keep the start point of the connection. |
| **Keep End** | Keep the end point of the connection. |

Default: `Keep Start`

📋 *Visible when Method = Fuse*

</details>

<details>
<summary><strong>Operation</strong> <code>EPCGExStitchFuseOperation</code></summary>

How to compute the fused point's position.

| Option | Description |
|--------|-------------|
| **None** | Keep the chosen point's position unchanged. |
| **Average** | Place at the average position of both endpoints. |
| **Line Intersection** | Place at the intersection of the two path direction lines. |

Default: `None`

📋 *Visible when Method = Fuse*

</details>

---

### Matching Settings

<details>
<summary><strong>Only Match Start And Ends</strong> <code>bool</code></summary>

When enabled, stitching only occurs between the end of one path and the start of another. When disabled, any pair of endpoints within tolerance can be stitched.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Requires Alignment</strong> <code>bool</code></summary>

Enable to require paths to be aligned within an angular threshold before stitching.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Alignment Details</strong> <code>FPCGExStaticDotComparisonDetails</code></summary>

Angular alignment requirements for stitching.

| Property | Description |
|----------|-------------|
| **Domain** | Compare as scalar dot product or degrees. |
| **Comparison** | Comparison operator (≥, ≤, etc.). |
| **Unsigned Comparison** | Ignore direction sign (allows opposite-facing paths). |
| **Degrees/Scalar** | Threshold value. |

📋 *Visible when Requires Alignment = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum distance between endpoints for stitching to occur.

Default: `10`

⚡ PCG Overridable

</details>

---

### Processing

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Order in which paths are processed for stitching. Can affect which paths connect first when multiple candidates exist.

| Option | Description |
|--------|-------------|
| **Ascending** | Process in ascending order. |
| **Descending** | Process in descending order. |

Default: `Ascending`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes and tags are preserved when merging paths.

//→ See TODO FPCGExCarryOverDetails

</details>

### Inherited Settings

This node inherits path processing settings from its base class.

→ See [Path Processor Settings](../Core/PCGExPathProcessor.md) for: Path handling options.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsPaths-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/PCGExPathStitch.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 9 documented (Method, FuseMethod, MergeOperation, bOnlyMatchStartAndEnds, bDoRequireAlignment, DotComparisonDetails, Tolerance, SortDirection, CarryOverDetails)
Inherited Properties: Referenced to UPCGExPathProcessorSettings
Inputs: Points, Labels
Outputs: Points (inherited)
Nested Types: EPCGExStitchMethod, EPCGExStitchFuseMethod, EPCGExStitchFuseOperation, FPCGExStaticDotComparisonDetails, EPCGExSortDirection, FPCGExCarryOverDetails
-->
