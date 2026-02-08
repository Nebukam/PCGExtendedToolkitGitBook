---
icon: flag
description: 'State : Point - Filter-driven state flags for individual points.'
---

# State : Point

Base class for filter-driven point state definitions.

## Overview

This node defines a named state that can be applied to individual points based on filter conditions. States are evaluated using connected filters and apply bitmask flags to points that pass or fail the filter criteria. Multiple state nodes can be combined to build complex flagging systems where each point accumulates flags based on which states it matches.

## How It Works

1. **Filter Evaluation**: Connected filters test each point in the data set.
2. **Pass/Fail Determination**: Points are categorized based on whether they satisfy the filter conditions.
3. **Flag Application**: Pass flags are applied to matching points; fail flags are applied to non-matching points.
4. **Bitmask Accumulation**: Flags are combined with existing point flags using the specified bitwise operation.

#### Usage Notes

- **Filter Requirements**: States require at least one connected filter to function; otherwise they pass all points.
- **Priority Order**: When multiple states are processed, Priority determines evaluation order.
- **Bitmask Output**: Optionally outputs separate bitmask attributes for pass and fail results.

## Behavior

**Flag Application Example:**
```
Point A: Passes filter → PassStateFlags applied
Point B: Fails filter  → FailStateFlags applied
Point C: Passes filter → PassStateFlags applied

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
| **Filters** | Point Filter | Point filters that determine pass/fail for each point |

## Settings

### Core Settings

<details>
<summary><strong>Name</strong> <code>FName</code></summary>

The name identifier for this state. Used for organizing and referencing states.

Default: `Flag`

⚡ PCG Overridable

</details>

<details>
<summary><strong>On Test Pass</strong> <code>bool</code></summary>

Whether to apply flags when a point passes the filter conditions.

Default: `true`

</details>

<details>
<summary><strong>Pass State Flags</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply to points that pass the filter test. The operation determines how these flags combine with existing point flags.

⚡ PCG Overridable

📋 *Visible when On Test Pass = true*

</details>

<details>
<summary><strong>On Test Fail</strong> <code>bool</code></summary>

Whether to apply flags when a point fails the filter conditions.

Default: `true`

</details>

<details>
<summary><strong>Fail State Flags</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply to points that fail the filter test. The operation determines how these flags combine with existing point flags.

⚡ PCG Overridable

📋 *Visible when On Test Fail = true*

</details>

### Advanced Settings

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
| **State** | PCGEx \| State : Point | The configured state factory for use in state processing nodes |
| **BitmaskPass** | Bitmask | Pass result bitmask (when Output Bitmasks enabled) |
| **BitmaskFail** | Bitmask | Fail result bitmask (when Output Bitmasks enabled) |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExFilters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Core/PCGExPointStates.h)



<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExStateConfigBase):
- bOnTestPass (bool, default true)
- PassStateFlags (FPCGExBitmaskWithOperation, PCG_Overridable)
- bOnTestFail (bool, default true)
- FailStateFlags (FPCGExBitmaskWithOperation, PCG_Overridable)
Provider Properties:
- Name (FName, default "Flag", PCG_Overridable)
- Priority (int32, default 0, advanced, PCG_Overridable)
- bOutputBitmasks (bool, default true, advanced)
Classes Documented:
- UPCGExPointStateFactoryData
- UPCGExStateFactoryProviderSettings (display name: "Abstract Point State Definition")
- FPCGExStateConfigBase (config struct)
Namespace Classes: FState, FStateManager
Namespace Labels: OutputOnPassBitmaskLabel, OutputOnFailBitmaskLabel, OutputStateLabel, SourceStatesLabel
-->
