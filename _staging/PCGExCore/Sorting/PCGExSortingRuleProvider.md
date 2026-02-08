---
icon: puzzle-piece
description: 'Sorting Rule - Creates sorting rule configurations for ordering point collections.'
---

# Sorting Rule

Creates sorting rule configurations for ordering point collections.

**Note that the sorting rules are broadly used in PCGEx to act as comparators between points or data**

## Overview

The Sorting Rule provider creates factory data that defines how point collections should be ordered. Sorting rules specify an attribute to sort by, the sort direction (ascending or descending), and a priority for multi-rule sorting scenarios. Multiple sorting rules can be combined to create complex ordering criteria, where higher-priority rules take precedence over lower-priority ones when values are equal.

## How It Works

1. **Rule Configuration**: Configure which attribute to sort by and the sort direction
2. **Priority Assignment**: Set rule priority for multi-rule sorting hierarchies
3. **Factory Creation**: Provider creates sorting rule factory data
4. **Factory Output**: Rule factory flows to Sort Points node via param pin
5. **Sort Execution**: Sort Points uses rule(s) to order point collections
6. **Multi-Rule Resolution**: When multiple rules present, higher priority determines order first

#### Usage Notes

- **Single vs Multi-Rule**: Use one rule for simple sorting, multiple rules for hierarchical ordering
- **Priority Matters**: When values are equal in higher-priority rule, next rule determines order
- **Attribute Types**: Rule works with numeric attributes (int, float, double) for sorting
- **Direction Control**: Ascending (lowest first) or Descending (highest first)
- **Consumable Attributes**: Registers the sort attribute as consumable if needed

## Settings

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Execution priority for this sorting rule.

When multiple rules are used together, higher priority rules are evaluated first. If values are equal in a higher-priority rule, the next rule determines the order.

Examples:
- Priority 0 + Priority 1: Rule with priority 1 evaluated first
- All equal priorities: Evaluation order undefined

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Config</strong> <code>FPCGExSortRuleConfig</code></summary>

Sorting rule configuration.

Defines which attribute to sort by and in which direction.

**Selector**: Attribute to use for sorting
**Sort Direction**: Ascending or Descending

⚡ PCG Overridable

</details>

## Behavior

#### Single Rule Sorting:
```
Points with "Height" attribute:
  Point A: Height = 5.0
  Point B: Height = 2.0
  Point C: Height = 8.0

Rule: Sort by Height, Ascending

Result: [B (2.0), A (5.0), C (8.0)]
```

#### Multi-Rule Sorting:
```
Points with "Priority" and "Distance" attributes:
  Point A: Priority = 1, Distance = 10
  Point B: Priority = 2, Distance = 5
  Point C: Priority = 1, Distance = 8

Rule 1 (Priority 1): Sort by Priority, Descending
Rule 2 (Priority 0): Sort by Distance, Ascending

Evaluation:
  First by Priority (descending): B (2), A (1), C (1)
  A and C have same Priority, use Distance (ascending): C (8), A (10)

Result: [B (Priority 2), C (Priority 1, Distance 8), A (Priority 1, Distance 10)]
```

#### Priority Hierarchy:
```
Rule A (Priority 10): Sort by Category
Rule B (Priority 5): Sort by Size
Rule C (Priority 0): Sort by Name

Evaluation order: A → B → C
  - Sort by Category first
  - If Category equal, sort by Size
  - If Category and Size equal, sort by Name
```

#### Ascending vs Descending:
```
Values: [5, 2, 8, 1, 9]

Ascending: [1, 2, 5, 8, 9] (lowest to highest)
Descending: [9, 8, 5, 2, 1] (highest to lowest)
```

## Practical Examples

**Sort by Distance:**
```
[Sorting Rule] Config: Distance, Ascending
  ↓ (SortingRule pin)
[Sort Points]
  ↓
[Points ordered nearest to farthest]
```

**Multi-Level Sort:**
```
[Sorting Rule A] Priority: 1, Config: Type, Ascending
[Sorting Rule B] Priority: 0, Config: Size, Descending
  ↓ (SortingRule pin)
[Sort Points]
  ↓
[Points grouped by Type, then by Size within each type]
```

**Priority-Based Ordering:**
```
[Sorting Rule] Config: Priority, Descending
  ↓
[Sort Points]
  ↓
[Highest priority points first]
```

## Factory Data

**UPCGExSortingRule** (Factory Data):
- Type: `PCGExFactories::EType::RuleSort`
- Display Name: "PCGEx | Sort Rule"
- Stores: Priority, Config (FPCGExSortRuleConfig)
- Consumable Attributes: Registers sort attribute

## Inputs

This is a provider node with no spatial input pins.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **SortingRule** | Param Data | Sorting rule factory for Sort Points node |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Sorting/PCGExSortingRuleProvider.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Sorting/PCGExSortingRuleProvider.h -->

<!-- VERIFICATION REPORT
Node Type: Factory Provider (Sorting Rule)
Own Properties: 2 documented (Priority, Config)
Factory Data: UPCGExSortingRule (PCGExFactories::EType::RuleSort)
Factory Config: FPCGExSortRuleConfig (attribute selector, sort direction)
Priority System: Higher priority rules evaluated first, ties resolved by next rule
Sort Directions: Ascending (lowest first), Descending (highest first)
Use Cases: Single-attribute sorting, multi-level hierarchical sorting, priority ordering
Output: SortingRule param pin to Sort Points node
Consumable Attributes: Registers sort attribute
-->
