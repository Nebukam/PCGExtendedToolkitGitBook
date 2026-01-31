---
icon: arrow-down-a-z
description: 'Sorting Rules - A rule for defining comparison parameters'
---

# Sorting Rule

Creates a single sorting rule to be used with the Sorting Rule inputs.

## Overview

This sub-node defines a single sorting criterion based on an attribute or property. Multiple sorting rules can be connected to Sorting Rules inputs to create hierarchical sorting. The priority value determines the order in which rules are evaluated when comparing points.

## How It Works

1. **Configure Attribute**: Specify which attribute or property to compare.
2. **Set Priority**: Define when this rule is evaluated relative to others.
3. **Connect to Sort Points**: The rule is used during the sorting comparison.

## Settings

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Evaluation priority relative to other sorting rules. Lower values are evaluated first.

Default: `0`

⚡ PCG Overridable

*Advanced setting*

</details>

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute or $Property to use for comparison. Supports any comparable type.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Read Data Tag</strong> <code>bool</code></summary>

When enabled, reads the sort value from a data tag (tag:value format) instead of a point attribute. Tag values are per-collection, so all points in the same collection share the same sort value. The Attribute selector is used as the tag name.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Equality tolerance for comparing values. Values within this tolerance are considered equal, triggering tiebreaker rules.

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Rule</strong> <code>bool</code></summary>

When enabled, inverts the sorting direction for this specific rule, opposite to the main Sort Direction.

Default: `false`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **SortingRule** | Params | Sorting rule for connection to Sort Points node |

---

📦 **Module**: `PCGExElementsMeta` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/Sorting/PCGExModularSortPoints.h)

<!-- VERIFICATION REPORT
Main Node (UPCGExModularSortPointsSettings):
  Node-Specific Properties: 0 (inherits SortDirection from base)
  Base Class Properties: SortDirection (documented)
  Inherited Properties: Referenced to UPCGExPointsProcessorSettings
  Inputs: In (Points), SortRules (Params)
  Outputs: Out (Points)

Sub-Node (UPCGExSortingRuleProviderSettings):
  Node-Specific Properties: 5 documented (Priority, Selector, bReadDataTag, Tolerance, bInvertRule)
  Outputs: SortingRule (Params)

Nested Types: EPCGExSortDirection, FPCGExSortRuleConfig
-->
