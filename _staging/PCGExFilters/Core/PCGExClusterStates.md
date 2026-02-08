---
icon: flag
description: 'State : Cluster - Filter-driven state flags for cluster vertices.'
---

# State : Cluster

A single, filter-driven vertex state for cluster graphs.

## Overview

This node defines a named state that can be applied to cluster vertices based on filter conditions. States are evaluated using connected filters and apply bitmask flags to vertices that pass or fail the filter criteria. Multiple state nodes can be combined to build complex flagging systems where each vertex accumulates flags based on which states it matches.

## How It Works

1. **Filter Evaluation**: Connected filters test each vertex in the cluster graph.
2. **Pass/Fail Determination**: Vertices are categorized based on whether they satisfy the filter conditions.
3. **Flag Application**: Pass flags are applied to matching vertices; fail flags are applied to non-matching vertices.
4. **Bitmask Accumulation**: Flags are combined with existing vertex flags using the specified bitwise operation.

#### Usage Notes

- **Cluster-Aware Filters**: This state node accepts cluster filters (vertex filters), allowing filter conditions that consider graph topology.
- **Priority Order**: When multiple states are processed, Priority determines evaluation order, which affects how flags accumulate.
- **Bitmask Output**: Optionally outputs separate bitmask attributes for pass and fail results.

## Behavior

**Flag Application Example:**
```
Vertex A: Passes filter → PassStateFlags applied
Vertex B: Fails filter  → FailStateFlags applied
Vertex C: Passes filter → PassStateFlags applied

Final flags combine with existing flags via bitwise operation
```

**Bitwise Operations:**
```
Set:    Flags = NewFlags           (replaces)
OR:     Flags = Flags | NewFlags   (adds bits)
AND:    Flags = Flags & NewFlags   (keeps common bits)
XOR:    Flags = Flags ^ NewFlags   (toggles bits)
NOT:    Flags = ~NewFlags          (inverts then applies)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filters** | Vtx Filter | Cluster vertex filters that determine pass/fail for each vertex |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Name</strong> <code>FName</code></summary>

The name identifier for this state. Used for organizing and referencing states.

Default: `Flag`

⚡ PCG Overridable

</details>

<details>
<summary><strong>On Test Pass</strong> <code>bool</code></summary>

Whether to apply flags when a vertex passes the filter conditions.

Default: `true`

</details>

<details>
<summary><strong>Pass State Flags</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply to vertices that pass the filter test. The operation determines how these flags combine with existing vertex flags.

⚡ PCG Overridable

📋 *Visible when On Test Pass = true*

</details>

<details>
<summary><strong>On Test Fail</strong> <code>bool</code></summary>

Whether to apply flags when a vertex fails the filter conditions.

Default: `true`

</details>

<details>
<summary><strong>Fail State Flags</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply to vertices that fail the filter test. The operation determines how these flags combine with existing vertex flags.

⚡ PCG Overridable

📋 *Visible when On Test Fail = true*

</details>

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Evaluation priority when multiple states are processed. Higher priority states are evaluated first.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Bitmasks</strong> <code>bool</code></summary>

Whether to output separate bitmask attributes for pass and fail results.

Default: `true`

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **State** | PCGEx \| State : Cluster | The configured state factory for use in state processing nodes |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExFilters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Core/PCGExClusterStates.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Core/PCGExClusterStates.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: Config struct (FPCGExClusterStateConfigBase inherits FPCGExStateConfigBase)
- bOnTestPass, PassStateFlags, bOnTestFail, FailStateFlags (from base)
Provider Properties: Name, Priority, bOutputBitmasks
Inherited Properties: Referenced to UPCGExStateFactoryProviderSettings
Inputs: Filters (cluster vertex filters)
Outputs: State pin
Classes Documented:
- UPCGExClusterStateFactoryData
- UPCGExClusterStateFactoryProviderSettings (display name: "State : Cluster")
- FPCGExClusterStateConfigBase (config struct)
Namespace Classes: FState, FStateManager
-->
