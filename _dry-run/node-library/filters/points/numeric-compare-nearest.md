---
icon: magnifying-glass-location
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
---

# Numeric Compare Nearest

Compares an attribute on the nearest target point against a threshold.

## Overview

The Numeric Compare Nearest filter evaluates each point by finding its nearest neighbor in a target dataset, reading an attribute from that neighbor, and comparing it against a threshold. This enables filtering based on proximity-weighted attributes—keeping points near high-value targets, away from flagged areas, or matching neighbor properties.

This filter requires **target point data** to search for nearest neighbors.

## How It Works

For each point:

1. **Find nearest point** in the target dataset
2. **Read attribute** from the nearest point
3. **Compare against threshold** using selected operator
4. **Return result**: pass if comparison is true

## Settings

### Distance Configuration

<details>
<summary><strong>Distance Details</strong> <code>Distance Settings</code></summary>

How to measure distance when finding the nearest point.

- **Distance Type** - Euclidean, Manhattan, or Chebyshev
- **Source/Target** - Which positions to measure from/to

See [Distance & Proximity](../../shared-concepts/distance-and-proximity.md) for details.

</details>

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to read from the nearest target point.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the attribute value against the threshold.

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or an attribute on the source point.

Default: `Constant`

</details>

<details>
<summary><strong>Operand B</strong> <code>double | Attribute Selector</code></summary>

The threshold value to compare against.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Behavior

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Exclude the point itself from the nearest neighbor search (useful when filtering against the same dataset).

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Targets** | Points | Points to search for nearest neighbors |

## Examples

**Keep points near high-priority targets** (Priority > 5):
- Operand A: `Priority`
- Comparison: `>`
- Operand B: `5`

**Keep points where nearest target has matching team**:
- Operand A: `TeamID`
- Comparison: `==`
- Compare Against: `Attribute`
- Operand B: `TeamID` (from source point)

**Filter based on nearest target's danger level**:
- Operand A: `DangerLevel`
- Comparison: `<=`
- Operand B: `3`

## Use Cases

- **Proximity-based classification**: Inherit properties from nearest reference points
- **Spatial filtering**: Keep points near targets with specific attributes
- **Influence zones**: Filter by attributes of controlling/nearest entities

## Related

### Filters
- [Distance](./distance.md) - Filter by distance to targets (not attributes)
- [Numeric Compare](./numeric-compare.md) - Compare own attributes
- [Bounds](./bounds.md) - Spatial containment testing

### See Also
- [Distance & Proximity](../../shared-concepts/distance-and-proximity.md) - Understanding distance measurements

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExNumericCompareNearestFilter.cpp)
