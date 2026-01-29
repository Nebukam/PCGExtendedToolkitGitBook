---
icon: binary
description: 'In editor :: PCGEx | Filter : Bitmask'
---

# Bitmask

Filters points based on bit flag comparisons.

## Overview

The Bitmask filter evaluates each point by reading a flags attribute and comparing it against a bitmask using various matching modes. This enables efficient multi-state filtering using bitwise operations.

## How It Works

For each point:

1. **Read flags** from the specified attribute
2. **Get mask** from constant, attribute, or composed references
3. **Apply comparison** using selected match mode
4. **Return result**: pass if comparison succeeds

## Settings

### Flags

<details>
<summary><strong>Flags Attribute</strong> <code>Attribute Name</code></summary>

The attribute containing the bit flags to test.

Default: `"Flags"`

⚡ PCG Overridable

</details>

### Mask

<details>
<summary><strong>Mask Input</strong> <code>Constant | Attribute</code></summary>

Where the test mask comes from.

Default: `Constant`

</details>

<details>
<summary><strong>Bitmask</strong> <code>int64</code></summary>

The constant bitmask value when using Constant mode.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bitmask Attribute</strong> <code>Attribute Name</code></summary>

Attribute containing per-point mask values.

Default: `"Mask"`

</details>

<details>
<summary><strong>Compositions</strong> <code>Bitmask References</code></summary>

Additional bitmask references from collections to compose into the final mask.

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Match Mode</code></summary>

How to compare flags against the mask.

| Mode | Meaning |
|------|---------|
| **Match (any)** | At least one flag in mask is set |
| **Match (all)** | All flags in mask are set |
| **Match (strict)** | Flags exactly equal mask |
| **No Match (any)** | None of the mask flags are set |
| **No Match (all)** | Not all mask flags are set |

Default: `Match (any)`

See [Bitmask Operations](../../shared-concepts/bitmask-operations.md) for detailed explanation.

</details>

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Flip pass/fail results.

Default: Disabled

</details>

## Examples

**Points with flag 0 OR flag 1 set** (mask = 3 = 0b11):
- Bitmask: `3`
- Comparison: `Match (any)`

**Points with exactly flags 0 and 2 set** (mask = 5 = 0b101):
- Bitmask: `5`
- Comparison: `Match (strict)`

**Points without any "excluded" flags**:
- Bitmask: (your exclusion flags)
- Comparison: `No Match (any)`

## Related

### Filters
- [Boolean Compare](./boolean-compare.md) - Single flag comparison

### See Also
- [Bitmask Operations](../../shared-concepts/bitmask-operations.md) - Understanding bitmasks

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExBitmaskFilter.cpp)
