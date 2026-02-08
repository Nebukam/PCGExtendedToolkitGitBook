---
icon: filter
description: 'Staging : Type Filter - Filter staged points by their collection entry type'
---

# Staging : Type Filter

Filter staged points by their collection entry type.

## Overview

This node filters staged points based on the type of collection entry they reference (Mesh, Actor, PCG Data Asset). It's particularly useful when working with per-point collections that contain mixed asset types, allowing you to separate or remove specific types for targeted processing.

## How It Works

1. **Entry Type Detection**: Reads collection map references from staged points to identify entry types
2. **Type Matching**: Compares each point's entry type against the configured filter
3. **Filter Application**: Keeps or removes points based on filter mode (include/exclude)
4. **Optional Output**: Optionally outputs filtered-out points to a separate pin

#### Usage Notes

- **Staging Dependency**: Requires points to be staged first using Asset Staging node with Collection Map output mode
- **Mixed Collections**: Most useful with per-point collections where different points reference different collection types
- **Invalid Entries**: Can optionally include or exclude points with invalid/missing entry references
- **Dual Output**: Use Output Discarded to split point sets by type rather than just filtering

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Point Data | Staged points with collection map references |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Point Data | Points that pass the type filter |
| **Discarded** | Point Data | Points that were filtered out (if Output Discarded is enabled) |

## Settings

### Filter Configuration

<details>
<summary><strong>Filter Mode</strong> <code>EPCGExStagedTypeFilterMode</code></summary>

Controls whether the type filter includes or excludes matching types.

| Option | Description |
|--------|-------------|
| **Include** | Keep only points that match selected types |
| **Exclude** | Remove points that match selected types |

Default: `Include`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Type Config</strong> <code>FPCGExStagedTypeFilterDetails</code></summary>

Configuration for which entry types to filter. Contains:

**Type Filter** `TMap<FName, bool>`: Map of entry type names to enabled/disabled state. Available types are populated from the collection type registry (typically Mesh, Actor, PCGDataAsset).

**Include Invalid** `bool`: Whether to include points with invalid or missing entry references.

Default: All types enabled, invalid excluded

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Discarded</strong> <code>bool</code></summary>

Output filtered-out points to a separate "Discarded" pin instead of removing them completely. Useful for splitting point sets by type.

Default: `false`

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCollections-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/Elements/PCGExStagingTypeFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/Elements/PCGExStagingTypeFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 3 documented (FilterMode, TypeConfig with 2 inner properties, bOutputDiscarded)
Inherited Properties: None specific to document
Inputs: Point Data (In)
Outputs: Point Data (Out, Discarded if enabled)
Nested Types: EPCGExStagedTypeFilterMode, FPCGExStagedTypeFilterDetails documented
-->
