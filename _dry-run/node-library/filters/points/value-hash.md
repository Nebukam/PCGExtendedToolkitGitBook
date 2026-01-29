---
icon: hashtag
description: 'In editor :: PCGEx | Filter : Contains (Hash)'
---

# Value Hash

Tests whether an attribute value exists in a pre-computed hash set.

{% hint style="warning" %}
Hash comparisons are **type-sensitive**. A float `0.0` will not match a double `0.0` or an integer `0`. Ensure attribute types match between source and set data.
{% endhint %}

## How It Works

1. **Preparation phase**: Build hash sets from input data attributes
2. **For each point**: Hash the attribute value and check set membership
3. **Return result**: pass if value is found (or not found, depending on settings)

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Sets** | Points | Points whose attribute values define the hash sets |

## Settings

### Hash Mode

<details>
<summary><strong>Mode</strong> <code>EPCGExValueHashMode</code></summary>

How to combine multiple input hash sets.

| Option | Meaning |
|--------|---------|
| Merged | Combine all inputs into a single hash set |
| Individual | Treat each input as a separate set |

Default: `Merged`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Inclusion</strong> <code>EPCGExValueHashSetInclusionMode</code></summary>

When using Individual mode, how to evaluate across multiple sets.

| Option | Meaning |
|--------|---------|
| Any | Value must exist in at least one set |
| All | Value must exist in all sets |

Default: `Any`

*Visible when Mode = Individual*

⚡ PCG Overridable

</details>

### Attribute

<details>
<summary><strong>Operand A</strong> <code>FName</code></summary>

The attribute to hash and look up in the sets.

Default: `"Value"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Set Attribute Name</strong> <code>FName</code></summary>

The attribute name to read from input sets when building hash sets. Use `None` to use the same attribute name as Operand A.

Default: `None`

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result—pass if value is NOT in the set.

Default: `false`

⚡ PCG Overridable

</details>

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

## Related

- [Numeric Compare](./numeric-compare.md) - Direct value comparisons
- [String Compare](./string-compare.md) - String-based filtering

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExValueHashFilter.cpp)
