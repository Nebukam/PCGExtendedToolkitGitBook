---
icon: filter
description: 'Attribute Gather Details - Filter which attributes to collect or transfer'
---

# Attribute Gather Details

Configures which attributes should be gathered, collected, or transferred during operations.

## Overview

This settings block extends name-based filtering specifically for attribute gathering scenarios. It determines which attributes are selected for collection, copying, or transfer operations based on name patterns. The filtering ensures only relevant attributes are processed while preserving internal PCGEx data.

## How It Works

1. **Select Mode**: Choose to gather all attributes, exclude specific ones, or include only matching ones
2. **Define Patterns**: Specify attribute name patterns and matching rules
3. **Gather Attributes**: Only attributes passing the filter are collected for the operation

## Behavior

```
Attribute Gathering Example:

Source Attributes: [Position] [Color] [temp_debug] [pcgex_id] [Scale]

Filter Mode: Exclude
Pattern: "temp" (StartsWith)

Gathered: [Position] [Color] [pcgex_id] [Scale]
          (temp_debug excluded by pattern)
```

## Inherited Settings

This struct inherits all settings from Name Filters Details.

→ See [Name Filters Details](./FPCGExNameFiltersDetails.md) for: Filter Mode, Matches, Comma Separated Names, Comma Separated Name Filter, Preserve PCGEx Data

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Data/Utils/PCGExDataFilterDetails.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Data/Utils/PCGExDataFilterDetails.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (no additional properties)
Inherited Properties: Referenced to FPCGExNameFiltersDetails
Nested Types: EPCGExAttributeFilter (enum), EPCGExStringMatchMode (enum) - inherited
Used By: Action Write Attributes, Batch Actions
-->
