---
icon: share
description: 'Forward Details - Configure attribute forwarding from source to target data'
---

# Forward Details

Configures how attributes are forwarded from source data to target points during operations.

## Overview

This settings block controls attribute forwarding — the process of copying attribute values from one data set to another. When operations like sampling, copying, or pathfinding need to transfer metadata from source points to results, these settings determine which attributes are forwarded and how missing values are handled.

## How It Works

1. **Enable Forwarding**: Toggle whether forwarding occurs at all
2. **Filter Attributes**: Use name patterns to include or exclude specific attributes
3. **Transfer Values**: Matching attributes are copied from source to target points

## Behavior

```
Source Points:          Target Points (after forwarding):

[A] Color=Red           [X] ← receives Color=Red
[B] Color=Blue          [Y] ← receives Color=Blue
[C] Color=Green         [Z] ← receives Color=Green

With Forwarding Disabled:
[X] [Y] [Z] ← no attributes transferred
```

## Settings

<details>
<summary><strong>Enabled</strong> <code>bool</code></summary>

Master toggle for attribute forwarding. When disabled, no attributes are transferred regardless of other settings.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve Attributes Default Value</strong> <code>bool</code></summary>

When enabled, attributes that don't have a matching source value retain their default values rather than being left uninitialized.

Default: `false`

📋 *Visible when Enabled = true*

⚡ PCG Overridable

</details>

### Inherited Settings

This struct inherits attribute filtering settings from Name Filters Details.

→ See [Name Filters Details](../PCGExDataFilterDetails/FPCGExNameFiltersDetails.md) for: Filter Mode, Matches, Comma Separated Names, Comma Separated Name Filter, Preserve PCGEx Data

---

![Static Badge](https://img.shields.io/badge/Module-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Data/Utils/PCGExDataForwardDetails.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (bEnabled, bPreserveAttributesDefaultValue)
Inherited Properties: Referenced to FPCGExNameFiltersDetails
Nested Types: EPCGExAttributeFilter, EPCGExStringMatchMode (inherited)
Used By: 14 nodes including Load PCGData, Copy to Points, Pathfinding nodes, Sample nodes
-->
