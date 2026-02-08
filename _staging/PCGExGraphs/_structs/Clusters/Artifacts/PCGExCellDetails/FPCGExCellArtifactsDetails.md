---
icon: box-archive
description: 'Cell Artifacts Details - Configure cell output data and metadata'
---

# Cell Artifacts Details

Configures what data and metadata are generated for discovered cells.

## Overview

This settings block controls the outputs produced by cell-finding operations. Beyond the cell paths themselves, you can output cell bounds, write various metrics as attributes (area, compactness, node count), tag cells by their convexity, and forward tags from source data. This enables rich annotation of cell data for downstream processing.

## How It Works

1. **Discover Cells**: Cell-finding operations identify closed regions
2. **Compute Metrics**: Calculate area, compactness, node count for each cell
3. **Write Attributes**: Store selected metrics as point attributes
4. **Apply Tags**: Tag cells as convex/concave if enabled
5. **Output Results**: Generate paths and/or bounds with full metadata

## Behavior

```
Cell Artifacts Output:

Discovered Cell → Artifacts Generation

Outputs:
├── Path Data (points forming cell boundary)
├── Cell Bounds (oriented bounding box)
└── Attributes written to each point:
    ├── CellHash: unique identifier
    ├── Area: cell area measurement
    ├── Compactness: shape efficiency ratio
    ├── NumNodes: vertex count
    ├── VtxId: source vertex index
    └── IsTerminal: marks endpoints
```

## Settings

### Output Selection

<details>
<summary><strong>Output Paths</strong> <code>bool</code></summary>

When enabled, outputs cell boundaries as path point data.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Cell Bounds</strong> <code>bool</code></summary>

When enabled, outputs oriented bounding boxes for each cell as additional point data.

Default: `false`

⚡ PCG Overridable

</details>

### Cell Attributes

<details>
<summary><strong>Write Cell Hash</strong> <code>bool</code></summary>

Write a unique hash identifier for each cell.

Default: `false` · Attribute: `CellHash`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Area</strong> <code>bool</code></summary>

Write the cell's calculated 2D area.

Default: `false` · Attribute: `Area`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Compactness</strong> <code>bool</code></summary>

Write the cell's compactness ratio (0-1, where 1 is a perfect circle).

Default: `false` · Attribute: `Compactness`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Num Nodes</strong> <code>bool</code></summary>

Write the number of vertices in the cell boundary.

Default: `false` · Attribute: `NumNodes`

⚡ PCG Overridable

</details>

### Point Attributes

<details>
<summary><strong>Write Vtx ID</strong> <code>bool</code></summary>

Write the source cluster vertex index to each cell point.

Default: `false` · Attribute: `VtxId`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flag Terminal Point</strong> <code>bool</code></summary>

Mark points that are terminal (endpoints) in the cell path.

Default: `false` · Attribute: `IsTerminal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Num Repeat</strong> <code>bool</code></summary>

Write how many times each vertex appears across all cells (useful for identifying shared edges).

Default: `false` · Attribute: `Repeat`

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>Tag Concave</strong> <code>bool</code></summary>

Add a tag to concave cell outputs.

Default: `false` · Tag: `Concave`

</details>

<details>
<summary><strong>Tag Convex</strong> <code>bool</code></summary>

Add a tag to convex cell outputs.

Default: `false` · Tag: `Convex`

</details>

<details>
<summary><strong>Tag Forwarding</strong> <code>FPCGExNameFiltersDetails</code></summary>

Controls which tags from source data are forwarded to cell outputs.

→ See [Name Filters Details](../../PCGExCore/FPCGExNameFiltersDetails.md)

📋 *Visible when Output Paths = true*

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExGraphs-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExGraphs/Public/Clusters/Artifacts/PCGExCellDetails.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExGraphs/Public/Clusters/Artifacts/PCGExCellDetails.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 18+ documented (output options, cell attributes, point attributes, tagging)
Inherited Properties: None
Nested Types: FPCGExCellOBBAttributesDetails, FPCGExNameFiltersDetails (referenced)
Used By: Find All Cells, Find Cells, Find Cluster Hull
-->
