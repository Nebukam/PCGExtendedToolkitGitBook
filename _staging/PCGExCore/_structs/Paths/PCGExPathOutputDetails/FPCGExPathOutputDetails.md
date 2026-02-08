---
icon: route
description: 'Path Output Details - Filter output paths by point count'
---

# Path Output Details

Configures filtering of output paths based on their point count.

## Overview

This settings block controls which paths are included in the output based on their size. Paths with too few points (degenerate paths) or too many points (excessively complex paths) can be automatically filtered out. This is useful for cleaning up pathfinding results or removing edge cases that don't meet requirements.

## How It Works

1. **Count Points**: Each output path's point count is evaluated
2. **Check Minimum**: If enabled, paths below the minimum threshold are discarded
3. **Check Maximum**: If enabled, paths above the maximum threshold are discarded
4. **Output Valid Paths**: Only paths passing both checks are included in output

## Behavior

```
Path Filtering Example:

Input Paths:
  Path A: 2 points   ──┐
  Path B: 5 points     │
  Path C: 150 points   ├── Filter ──→ Output
  Path D: 800 points   │
  Path E: 10 points  ──┘

Settings: Min = 3, Max = 500

Output Paths:
  Path B: 5 points    ✓ (above min)
  Path C: 150 points  ✓ (within range)
  Path E: 10 points   ✓ (within range)

Filtered Out:
  Path A: 2 points    ✗ (below min)
  Path D: 800 points  ✗ (above max)
```

## Settings

<details>
<summary><strong>Remove Small Paths</strong> <code>bool</code></summary>

When enabled, paths with fewer points than the minimum threshold are excluded from output.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Point Count</strong> <code>int32</code></summary>

The minimum number of points a path must have to be included in output. Paths with fewer points are discarded.

Default: `3`

📋 *Visible when Remove Small Paths = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Remove Large Paths</strong> <code>bool</code></summary>

When enabled, paths with more points than the maximum threshold are excluded from output.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Point Count</strong> <code>int32</code></summary>

The maximum number of points a path can have to be included in output. Paths with more points are discarded.

Default: `500`

📋 *Visible when Remove Large Paths = true*

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Paths/PCGExPathOutputDetails.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Paths/PCGExPathOutputDetails.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (bRemoveSmallPaths, MinPointCount, bRemoveLargePaths, MaxPointCount)
Inherited Properties: None
Nested Types: None
Used By: Pathfinding Edges, Pathfinding Plot Edges
-->
