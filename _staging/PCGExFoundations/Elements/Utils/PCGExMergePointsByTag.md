---
icon: object-group
description: 'Merge Points by Tag - Combine point collections based on shared tags'
---

# Merge Points by Tag

Merge points based on shared tags.

## Overview

This node merges multiple point collections into combined outputs based on their tags. Collections sharing the same tag(s) are merged together into a single output. Different resolution modes control how overlapping tags are handled — whether strictly per-tag, with overlap merging, or flattened into unique identifiers.

## How It Works

1. **Collect Tags**: Gather tags from all input collections
2. **Filter Tags**: Apply tag filters to determine which tags participate
3. **Resolve Overlaps**: Handle collections with multiple tags based on mode
4. **Merge Collections**: Combine point data for each tag group
5. **Output Results**: Generate merged collections with carried-over metadata

## Behavior

```
Tag-Based Merging Example:

Input Collections:
  [A] tags: "Red", "Large"      (100 points)
  [B] tags: "Red"               (50 points)
  [C] tags: "Blue"              (75 points)
  [D] tags: "Large"             (60 points)

Mode: Strict, Priority: ["Red", "Large", "Blue"]

Output:
  "Red"   → [A] + [B] = 150 points
  "Large" → [D] = 60 points        (A already used by Red)
  "Blue"  → [C] = 75 points
```

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExMergeByTagOverlapResolutionMode</code></summary>

Determines how collections with multiple tags are handled.

| Option | Description |
|--------|-------------|
| **Strict** | Merge per-tag; higher priority tags claim collections exclusively |
| **Overlap** | Merge per-tag; overlapping data is merged entirely into all matching groups |
| **Flatten** | Combine all tags into unique identifiers and merge based on exact matches |

Default: `Strict`

</details>

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Controls priority ordering when resolving overlaps.

| Option | Description |
|--------|-------------|
| **Ascending** | Lower priority values processed first |
| **Descending** | Higher priority values processed first |

Default: `Descending`

📋 *Visible when Mode ≠ Flatten*

</details>

<details>
<summary><strong>Fallback Behavior</strong> <code>EPCGExMergeByTagFallbackBehavior</code></summary>

How to handle data that doesn't pass tag filters.

| Option | Description |
|--------|-------------|
| **Omit** | Do not output unfiltered data |
| **Merge** | Merge all unfiltered data into a single output |
| **Forward** | Pass through unfiltered data without merging |

Default: `Omit`

📋 *Visible when Mode = Flatten*

</details>

<details>
<summary><strong>Tag Filters</strong> <code>FPCGExNameFiltersDetails</code></summary>

Filters which tags are processed or ignored. Use include/exclude patterns to control which tags participate in merging.

→ See [Name Filters Details](../../../PCGExCore/FPCGExNameFiltersDetails.md)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Resolution Priorities</strong> <code>TArray&lt;FString&gt;</code></summary>

Ordered list of tags defining merge priority. Tags earlier in the list have higher priority and claim collections first in Strict mode.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes and tags are carried over during merging.

→ See [Carry Over Details](../../../PCGExCore/FPCGExCarryOverDetails.md)

⚡ PCG Overridable

</details>

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExFoundations-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Utils/PCGExMergePointsByTag.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Utils/PCGExMergePointsByTag.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 6 documented (Mode, SortDirection, FallbackBehavior, TagFilters, ResolutionPriorities, CarryOverDetails)
Inherited Properties: UPCGExPointsProcessorSettings base
Nested Types: EPCGExMergeByTagOverlapResolutionMode, EPCGExSortDirection, EPCGExMergeByTagFallbackBehavior
-->
