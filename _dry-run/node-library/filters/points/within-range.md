---
icon: arrows-left-right-to-line
description: 'In editor :: PCGEx | Filter : Within Range'
---

# Within Range

Tests whether a numeric value falls within a min/max range.

## How It Works

For each point:

1. Read **Operand A** from the specified attribute
2. Compare against range (min ≤ value ≤ max, or exclusive)
3. Return result: pass if within range (or outside, if inverted)

## Settings

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The numeric attribute to test. Converted to double internally.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Source</strong> <code>EPCGExRangeSource</code></summary>

Where the range bounds come from.

| Option | Description |
|--------|-------------|
| Constant | Use fixed Min/Max values |
| Attribute Set | Read ranges from FVector2 attributes (X=min, Y=max) |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Attributes</strong> <code>Attribute Selector Array</code></summary>

List of FVector2 attributes to read ranges from. A point passes if its value falls within **any** of the specified ranges.

*Visible when Source = Attribute Set*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Min</strong> <code>double</code></summary>

Minimum bound (inclusive or exclusive based on setting).

Default: `-100`

*Visible when Source = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong> <code>double</code></summary>

Maximum bound (inclusive or exclusive based on setting).

Default: `100`

*Visible when Source = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Inclusive</strong> <code>bool</code></summary>

Whether boundary values pass the test.

- **Enabled**: min ≤ value ≤ max
- **Disabled**: min < value < max

Default: `false` (exclusive)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip to test for values **outside** the range instead.

Default: `false`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Ranges** | Attribute Set | Optional ranges from external attribute set (when Source = Attribute Set) |

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

- [Numeric Compare](./numeric-compare.md) - Single threshold comparison
- [Mean](./mean.md) - Compare against statistical mean

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExWithinRangeFilter.cpp)
