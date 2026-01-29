---
icon: magnifying-glass-location
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
---

# Numeric Compare Nearest

Compares an attribute on the nearest target point against a threshold.

## How It Works

For each point:

1. Find **nearest point** in the target dataset
2. Read **Operand A** attribute from the nearest point
3. Compare against **Operand B** threshold using selected operator
4. Return result: pass if comparison is true

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Targets** | Points | Points to search for nearest neighbors |

## Settings

### Distance Configuration

<details>
<summary><strong>Distance Details</strong> <code>FPCGExDistanceDetails</code></summary>

How to measure distance when finding the nearest point.

⚡ PCG Overridable

</details>

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to read from the nearest target point. Converted to double.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the attribute value against the threshold.

Default: `~=` (Nearly Equal)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether Operand B comes from a fixed value or an attribute on the source point.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>Attribute Selector</code></summary>

The attribute on the source point to compare against.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B</strong> <code>double</code></summary>

The threshold value to compare against.

Default: `0`

*Visible when Compare Against = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: `DBL_COMPARE_TOLERANCE`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Exclude the point itself from the nearest neighbor search (useful when filtering against the same dataset).

Default: `true`

⚡ PCG Overridable

</details>

## Examples

**Keep points near high-priority targets** (Priority > 5):
- Operand A: `Priority`
- Comparison: `>`
- Operand B: `5`

**Keep points where nearest target has matching team**:
- Operand A: `TeamID`
- Comparison: `==`
- Compare Against: `Attribute`
- Operand B (Attr): `TeamID` (from source point)

**Filter based on nearest target's danger level**:
- Operand A: `DangerLevel`
- Comparison: `<=`
- Operand B: `3`

## Related

- [Distance](./distance.md) - Filter by distance to targets (not attributes)
- [Numeric Compare](./numeric-compare.md) - Compare own attributes

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExNumericCompareNearestFilter.cpp)
