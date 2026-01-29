---
icon: list-check
description: 'In editor :: PCGEx | Data Filter : Attribute Check'
---

# Attribute Check

Tests whether a collection has a specific attribute, optionally validating its type.

## Overview

The Attribute Check filter evaluates entire point collections based on attribute existence. This identifies collections that have (or lack) required attributes before processing—useful for conditional branching or validation in complex graphs.

## How It Works

For each collection:

1. **Search metadata** for attributes matching the name pattern
2. **Check domain** if domain filtering is enabled
3. **Check type** if type validation is enabled
4. **Return result**: pass if attribute exists (and type matches, if required)

## Settings

### Attribute Selection

<details>
<summary><strong>Attribute Name</strong> <code>string</code></summary>

The attribute name or pattern to search for.

Default: `"Name"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Domain</strong> <code>EPCGExAttribtueDomainCheck</code></summary>

Filter by attribute domain (where the attribute is stored).

| Option | Meaning |
|--------|---------|
| **Any** | Ignore domain, match any attribute |
| **Data** | Only match data-level attributes |
| **Elements** | Only match element-level (per-point) attributes |
| **Match** | Domain must match the one specified in attribute name |

Default: `Any`

</details>

<details>
<summary><strong>Match</strong> <code>EPCGExStringMatchMode</code></summary>

How to match attribute names.

| Option | Meaning |
|--------|---------|
| **Equals** | Exact attribute name match |
| **Contains** | Attribute name contains the pattern |
| **Starts With** | Attribute name begins with the pattern |
| **Ends With** | Attribute name ends with the pattern |

Default: `Equals`

</details>

### Type Validation

<details>
<summary><strong>Check Type</strong> <code>bool</code></summary>

Enable type validation for matched attributes. Uses inline toggle.

Default: `false`

</details>

<details>
<summary><strong>Type</strong> <code>EPCGMetadataTypes</code></summary>

The expected attribute type.

*Visible when Check Type is enabled*

Common types:
- `Float` / `Double`
- `Integer32` / `Integer64`
- `Vector` / `Vector4`
- `Rotator` / `Quaternion`
- `Transform`
- `String` / `Name`
- `Boolean`

Default: `Unknown`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: `false`

</details>

## Examples

**Keep collections that have a "Health" attribute**:
- Attribute Name: `Health`
- Match: `Equals`
- Check Type: `false`

**Keep collections with a float "Weight" attribute**:
- Attribute Name: `Weight`
- Match: `Equals`
- Check Type: `true`
- Type: `Float`

**Filter out collections missing required attributes**:
- Attribute Name: `RequiredData`
- Match: `Equals`
- Invert: `true` (passes collections WITHOUT the attribute)

**Find collections with any "Team" prefixed attribute**:
- Attribute Name: `Team`
- Match: `Starts With`
- Check Type: `false`

## Use Cases

- **Validation**: Ensure required attributes exist before processing
- **Conditional branching**: Route data based on attribute availability
- **Type safety**: Verify attribute types before operations that depend on them
- **Discovery**: Find collections with specific attribute patterns

## Related

### Collection Filters
- [Tag Check](./tag-check.md) - Check for tags instead of attributes
- [Data Bounds](./data-bounds.md) - Check spatial properties

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExAttributeCheckFilter.cpp)
