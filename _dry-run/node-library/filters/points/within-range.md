---
icon: arrows-left-right-to-line
description: 'In editor :: PCGEx | Filter : Within Range'
---

# Within Range

Tests whether a numeric value falls within a min/max range.

## Overview

The Within Range filter evaluates each point by checking if an attribute value falls between minimum and maximum bounds. This is more convenient than chaining two Numeric Compare filters for range checks.

## How It Works

For each point:

1. **Read the value** from the specified attribute
2. **Compare against range** (min ≤ value ≤ max, or exclusive)
3. **Return result**: pass if within range (or outside, if inverted)

## Settings

### Value

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to test.

⚡ PCG Overridable

</details>

### Range

<details>
<summary><strong>Source</strong> <code>Constant | Attribute Set</code></summary>

Where the range bounds come from.

- **Constant** - Use fixed Min/Max values
- **Attribute Set** - Read range from FVector2 attributes (X=min, Y=max)

Default: `Constant`

</details>

<details>
<summary><strong>Range Min</strong> <code>double</code></summary>

Minimum bound (inclusive or exclusive based on setting).

Default: `-100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong> <code>double</code></summary>

Maximum bound (inclusive or exclusive based on setting).

Default: `100`

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Inclusive</strong> <code>bool</code></summary>

Whether boundary values pass the test.

- **Enabled**: min ≤ value ≤ max
- **Disabled**: min < value < max

Default: Disabled (exclusive)

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip to test for values **outside** the range instead.

Default: Disabled

</details>

## Examples

**Keep points with values between 0 and 100**:
- Operand A: `Value`
- Range Min: `0`
- Range Max: `100`
- Inclusive: Enabled

**Exclude points in the "dead zone"**:
- Operand A: `Distance`
- Range Min: `10`
- Range Max: `50`
- Invert: Enabled (keeps values outside 10-50)

## Related

### Filters
- [Numeric Compare](./numeric-compare.md) - Single threshold comparison
- [Mean](./mean.md) - Compare against statistical mean

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExWithinRangeFilter.cpp)
