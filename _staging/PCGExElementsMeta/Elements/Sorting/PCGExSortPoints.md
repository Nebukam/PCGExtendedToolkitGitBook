---
icon: arrow-down-a-z
description: 'Sort Points - Reorder points according to attribute-based rules'
---

# Sort Points

Sort the source points according to specific rules.

## Overview

This node reorders points within each input collection based on one or more sorting rules. Each rule specifies an attribute to sort by, and multiple rules are applied in priority order — when two points have equal values for the first rule, the second rule determines their order, and so on. This is essential for operations that depend on point order, such as path creation or sequential processing.

## How It Works

1. **Read Attributes**: Extract values from specified attributes for each point
2. **Apply Rules**: Compare points using rules in priority order
3. **Sort Points**: Reorder points according to the comparison results
4. **Output Sorted**: Return points in their new order

## Behavior

```
Sorting Example:

Input Points (unsorted):
  [C: Height=10, Name="Beta"]
  [A: Height=5,  Name="Alpha"]
  [B: Height=10, Name="Alpha"]

Rules: 1. Height (Ascending), 2. Name (Ascending)

Output Points (sorted):
  [A: Height=5,  Name="Alpha"]  ← Lowest height
  [B: Height=10, Name="Alpha"]  ← Same height, Alpha < Beta
  [C: Height=10, Name="Beta"]   ← Same height, Beta after Alpha
```

## Settings

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Controls the overall ordering direction for the sort operation.

| Option | Description |
|--------|-------------|
| **Ascending** | Smallest values first (A→Z, 0→9) |
| **Descending** | Largest values first (Z→A, 9→0) |

Default: `Ascending`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Rules</strong> <code>TArray&lt;FPCGExSortRuleConfig&gt;</code></summary>

Ordered list of sorting rules applied in priority order. Each rule specifies:
- **Attribute**: Which attribute to compare
- **Direction**: Per-rule ascending or descending override
- **Tolerance**: Numeric tolerance for equality comparison

When two points are equal according to the first rule, subsequent rules determine their relative order.

⚡ PCG Overridable

</details>

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsMeta-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Sorting/PCGExSortPoints.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Sorting/PCGExSortPoints.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (SortDirection, Rules)
Inherited Properties: UPCGExPointsProcessorSettings base
Nested Types: EPCGExSortDirection, FPCGExSortRuleConfig
-->
