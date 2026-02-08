---
icon: filter
description: 'Filter : Picker - Tests whether point or collection indices match picker selections.'
---

# Filter : Picker

Checks if the point or collection index is picked using connected pickers.

## Overview

This filter evaluates points by checking whether their index (or their collection's index) is selected by one or more connected picker factories. Pickers define sets of indices through various selection strategies, and this filter passes for points whose indices appear in the combined picker output. It supports both per-point and collection-level evaluation.

## How It Works

1. **Picker Resolution**: Gathers all connected picker factories from the input pin.
2. **Index Selection**: Each picker contributes a set of selected indices.
3. **Point Evaluation**: For each point, checks whether its index appears in the selected set.
4. **Result**: Returns pass if the index is picked, fail otherwise (or inverted).

#### Usage Notes

- **Pickers Input**: Requires connected picker factories that define the selection criteria.
- **Collection Mode**: When used as a collection filter, tests the collection index rather than point indices.
- **Per-Point Override**: Can force per-point evaluation even when used in collection-only contexts.

## Behavior

**Picker Selection:**
```
Picker output: indices [0, 2, 5, 7]

Point 0: Index in picks → Pass
Point 1: Index not in picks → Fail
Point 2: Index in picks → Pass
Point 3: Index not in picks → Fail

With Invert:
Point 0: Index in picks → Fail
Point 1: Index not in picks → Pass
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Pickers** | PCGEx \| Picker | Picker factories that define the index selection |

## Settings

<details>
<summary><strong>Force Per-Point Evaluation</strong> <code>bool</code></summary>

When enabled, forces per-point evaluation even when the filter is used in a collection-only context.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Inverts the filter result.

Default: `false`

⚡ PCG Overridable

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExPickerFilter.h)

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExPickerFilterConfig):
- bForcePerPointEvaluation (bool, default false, PCG_Overridable)
- bInvert (bool, default false, PCG_Overridable)
Inputs: Pickers pin (accepts UPCGExPickerFactoryData)
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExPickerFilterFactory
- UPCGExPickerFilterProviderSettings (display: "Filter : Picker")
Namespace: PCGExPointFilter::FPickerFilter
Note: Supports collection evaluation
-->
