---
icon: chart-bar
description: 'Attribute Stats - Computes statistical analysis of attribute values'
---

# Attribute Stats

Output attribute statistics.

## Overview

This node analyzes attributes across point collections and outputs comprehensive statistics including min/max values, averages, unique value counts, and distribution information. Statistics are output to a separate param data collection and can optionally be written back to point attributes or tags. The node supports filtering which attributes to analyze and can generate per-unique-value breakdowns.

## How It Works

1. **Filter Attributes**: Selects which attributes to analyze based on name filters.
2. **Compute Statistics**: For each attribute, computes min, max, average, unique counts, and other metrics.
3. **Output Stats**: Writes statistics to param data, and optionally to point attributes or tags.
4. **Unique Values (Optional)**: Outputs a separate collection listing each unique value and its occurrence count.

#### Usage Notes

- **Attribute Filtering**: Use name filters to analyze specific attributes or all attributes.
- **Default Value Handling**: Statistics distinguish between "set" values (non-default) and all values.
- **Non-Numeric Types**: For strings and names, "average" returns the most frequently occurring value.
- **Feedback Prevention**: Enable the failsafe to prevent loops when using stats output as input.

## Behavior

```
Statistics Computation:

Input Points with "Health" attribute:
   Values: [100, 50, 100, 75, 100, 50]

Output Stats:
   Min: 50
   Max: 100
   Average: 79.17
   DifferentValues: 3     (50, 75, 100)
   UniqueValues: 1        (75 appears once)
   Samples: 6

Per-Unique-Value Output (optional):
   Value: 50,  Count: 2
   Value: 75,  Count: 1
   Value: 100, Count: 3
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input point collections to analyze |
| **Filters** | Params | Optional point filters to limit which points are included in stats |

## Settings

### Filter Settings

<details>
<summary><strong>Filters</strong> <code>FPCGExNameFiltersDetails</code></summary>

Controls which attributes to include in statistics computation.

//→ See TODO FPCGExNameFiltersDetails

</details>

### Output Mode Settings

<details>
<summary><strong>Output Per Unique Values Stats</strong> <code>bool</code></summary>

When enabled, outputs a separate data collection listing each unique value and its occurrence count.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output To Points</strong> <code>EPCGExStatsOutputToPoints</code></summary>

How to write statistics to point attributes.

| Option | Description |
|--------|-------------|
| **None** | Don't write to point attributes |
| **Prefix** | Write as prefix + attribute name |
| **Suffix** | Write as attribute name + suffix |

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output To Tags</strong> <code>EPCGExStatsOutputToPoints</code></summary>

How to write statistics to data tags.

| Option | Description |
|--------|-------------|
| **None** | Don't write to tags |
| **Prefix** | Write as prefix + attribute name |
| **Suffix** | Write as attribute name + suffix |

Default: `None`

⚡ PCG Overridable

</details>

### Output Attribute Settings

Each statistic can be individually enabled and given a custom attribute name.

<details>
<summary><strong>Output Identifier</strong> <code>bool</code></summary>

Write a unique identifier for the source data.

Default: `true` · Attribute: `Identifier`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Default Value</strong> <code>bool</code></summary>

Write the attribute's default value.

Default: `true` · Attribute: `Default`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Min Value</strong> <code>bool</code></summary>

Write the minimum value found across all points.

Default: `true` · Attribute: `Min`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Max Value</strong> <code>bool</code></summary>

Write the maximum value found across all points.

Default: `true` · Attribute: `Max`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Set Min Value</strong> <code>bool</code></summary>

Write the minimum value excluding points with the default value.

Default: `true` · Attribute: `SetMin`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Set Max Value</strong> <code>bool</code></summary>

Write the maximum value excluding points with the default value.

Default: `true` · Attribute: `SetMax`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Average Value</strong> <code>bool</code></summary>

Write the average value. For non-numeric types, outputs the most frequent value.

Default: `true` · Attribute: `Average`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Unique Values Num</strong> <code>bool</code></summary>

Write the count of values that appear exactly once.

Default: `true` · Attribute: `UniqueValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Different Values Num</strong> <code>bool</code></summary>

Write the total number of distinct values found.

Default: `true` · Attribute: `DifferentValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Default Values Num</strong> <code>bool</code></summary>

Write the count of points with the default value.

Default: `true` · Attribute: `DefaultValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Has Only Default Values</strong> <code>bool</code></summary>

Write whether all points have the default value.

Default: `true` · Attribute: `HasOnlyDefaultValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Has Only Set Values</strong> <code>bool</code></summary>

Write whether no points have the default value.

Default: `true` · Attribute: `HasOnlySetValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Has Only Unique Values</strong> <code>bool</code></summary>

Write whether every point has a unique value.

Default: `true` · Attribute: `HasOnlyUniqueValues`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Samples</strong> <code>bool</code></summary>

Write the total number of sampled points.

Default: `true` · Attribute: `Samples`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Is Valid</strong> <code>bool</code></summary>

Write whether the attribute was valid for stats computation.

Default: `true` · Attribute: `IsValid`

⚡ PCG Overridable

</details>

### Unique Values Output Settings

<details>
<summary><strong>Value Column</strong> <code>FName</code></summary>

Attribute name for the unique value in per-value stats output.

Default: `Value`

📋 *Visible when Output Per Unique Values Stats is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Default Value</strong> <code>bool</code></summary>

Exclude the default value from unique values output.

Default: `false`

📋 *Visible when Output Per Unique Values Stats is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Value Count</strong> <code>FName</code></summary>

Attribute name for the occurrence count in per-value stats output.

Default: `Count`

📋 *Visible when Output Per Unique Values Stats is enabled*

⚡ PCG Overridable

</details>

### Warning Settings

<details>
<summary><strong>Quiet Type Mismatch Warning</strong> <code>bool</code></summary>

Suppress warnings when attribute type doesn't support stats computation.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Feedback Loop Failsafe</strong> <code>bool</code></summary>

Prevent feedback loops when stats output is used as input.

Default: `true`

</details>

### Inherited Settings

→ See [Points Processor Settings](../Core/PCGExPointsProcessor.md) for common point processing settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Pass-through of input points (with optional stats attributes) |
| **Stats** | Params | Param data containing computed statistics per attribute |
| **UniqueValues** | Params | Per-unique-value breakdown with counts (when enabled) |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsMeta-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/PCGExAttributeStats.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 40+ documented (filter settings, output mode, individual stat outputs)
Inherited Properties: Referenced to UPCGExPointsProcessorSettings
Inputs: In (Points), Filters (Params)
Outputs: Out (Points), Stats (Params), UniqueValues (Params)
Nested Types: FPCGExNameFiltersDetails, EPCGExStatsOutputToPoints
-->
