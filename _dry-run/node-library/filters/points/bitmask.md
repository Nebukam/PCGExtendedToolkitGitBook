---
icon: binary
description: 'In editor :: PCGEx | Filter : Bitmask'
---

# Bitmask

Filters points based on bit flag comparisons.

## How It Works

For each point:

1. Read **flags** from the specified attribute
2. Get **mask** from constant, attribute, or composed references
3. Apply comparison using selected match mode
4. Return result: pass if comparison succeeds

## Settings

### Flags

<details>
<summary><strong>Flags Attribute</strong> <code>FName</code></summary>

The attribute containing the bit flags to test. Must be int64.

Default: `"Flags"`

⚡ PCG Overridable

</details>

### Mask

<details>
<summary><strong>Comparison</strong> <code>EPCGExBitflagComparison</code></summary>

How to compare flags against the mask.

| Mode | Meaning |
|------|---------|
| Match Partial | At least one flag in mask is set |
| Match All | All flags in mask are set |
| Match Strict | Flags exactly equal mask |
| No Match Any | None of the mask flags are set |
| No Match All | Not all mask flags are set |

Default: `Match Partial`

</details>

<details>
<summary><strong>Mask Input</strong> <code>Constant | Attribute</code></summary>

Where the test mask comes from.

Default: `Constant`

</details>

<details>
<summary><strong>Bitmask (Attr)</strong> <code>FName</code></summary>

Attribute containing per-point mask values. Must be int64.

Default: `"Mask"`

*Visible when Mask Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bitmask</strong> <code>int64</code></summary>

The constant bitmask value when using Constant mode.

Default: `0`

*Visible when Mask Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compositions</strong> <code>Bitmask Reference Array</code></summary>

External bitmask references to compose into the final mask (applied to Operand B).

</details>

### Output

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Flip pass/fail results.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Points with flag 0 OR flag 1 set** (mask = 3 = 0b11):
- Bitmask: `3`
- Comparison: `Match Partial`

**Points with exactly flags 0 and 2 set** (mask = 5 = 0b101):
- Bitmask: `5`
- Comparison: `Match Strict`

**Points without any "excluded" flags**:
- Bitmask: (your exclusion flags)
- Comparison: `No Match Any`

## Related

- [Boolean Compare](./boolean-compare.md) - Single flag comparison

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExBitmaskFilter.cpp)
