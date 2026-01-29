---
icon: hashtag
description: 'In editor :: PCGEx | Filter : Value Hash'
---

# Value Hash

Tests whether an attribute value exists in a pre-computed hash set.

## Overview

The Value Hash filter evaluates each point by hashing an attribute value and checking if it exists in one or more sets of pre-hashed values. This enables fast set membership testing—keeping points whose values appear in a reference list, excluding duplicates, or finding matches across datasets.

This filter requires **hash set input data** that defines the valid/invalid values.

## How It Works

1. **Preparation phase**: Build hash sets from input data attributes
2. **For each point**: Hash the attribute value and check set membership
3. **Return result**: pass if value is found (or not found, depending on settings)

## Settings

### Hash Mode

<details>
<summary><strong>Mode</strong> <code>Merged | Individual</code></summary>

How to combine multiple input hash sets.

| Option | Meaning |
|--------|---------|
| **Merged** | Combine all inputs into a single hash set |
| **Individual** | Treat each input as a separate set |

Default: `Merged`

</details>

<details>
<summary><strong>Inclusion</strong> <code>Any | All</code></summary>

When using Individual mode, how to evaluate across multiple sets.

| Option | Meaning |
|--------|---------|
| **Any** | Value must exist in at least one set |
| **All** | Value must exist in all sets |

Only visible when Mode is `Individual`.

Default: `Any`

</details>

### Attribute

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The attribute to hash and look up in the sets.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Set Attribute Name</strong> <code>string</code></summary>

The attribute name to read from input sets when building hash sets.

Default: Same as Operand A

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result—pass if value is NOT in the set.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Sets** | Points | Points whose attribute values define the hash sets |

## Type Sensitivity

{% hint style="warning" %}
Hash comparisons are **type-sensitive**. A float value of `0.0` will not match a double value of `0.0` or an integer `0`. Ensure attribute types match between source and set data.
{% endhint %}

## Examples

**Keep points with IDs in a whitelist**:
- Operand A: `ID`
- Connect whitelist points to Sets input

**Remove points with duplicate values**:
- Operand A: `UniqueKey`
- Connect reference points to Sets input
- Invert: Enabled

**Keep points matching any of multiple sets**:
- Mode: `Individual`
- Inclusion: `Any`
- Connect multiple point datasets to Sets input

**Keep points matching all sets** (intersection):
- Mode: `Individual`
- Inclusion: `All`

## Use Cases

- **Whitelist/blacklist filtering**: Keep or remove points based on value lists
- **Cross-dataset matching**: Find points that exist in reference data
- **Duplicate detection**: Identify values that appear in other datasets

## Related

### Filters
- [Numeric Compare](./numeric-compare.md) - Direct value comparisons
- [String Compare](./string-compare.md) - String-based filtering

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExValueHashFilter.cpp)
