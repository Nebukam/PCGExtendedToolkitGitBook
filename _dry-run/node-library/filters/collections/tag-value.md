---
icon: tag
description: 'In editor :: PCGEx | Data Filter : Tag Value'
---

# Tag Value

Compares a collection tag's value against a threshold.

## Overview

The Tag Value filter evaluates entire point collections by reading the value portion of tagged data (in `Tag:Value` format) and comparing it numerically or as text. Unlike Tag Check which tests for tag presence, this filter examines what the tag contains.

## How It Works

For each collection:

1. **Find matching tags** based on name pattern
2. **Extract tag values** from the matched tags
3. **Compare values** against threshold
4. **Apply multi-match logic** if multiple tags match
5. **Return result**: pass if comparison succeeds

## Settings

### Tag Selection

<details>
<summary><strong>Tag Name</strong> <code>string</code></summary>

The tag name pattern to search for. This matches the portion before the colon in `Tag:Value` format.

Default: `"Tag"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Match</strong> <code>EPCGExStringMatchMode</code></summary>

How to match tag names.

| Option | Meaning |
|--------|---------|
| **Equals** | Exact tag name match |
| **Contains** | Tag name contains the pattern |
| **Starts With** | Tag name begins with the pattern |
| **Ends With** | Tag name ends with the pattern |

Default: `Equals`

</details>

### Value Comparison

<details>
<summary><strong>Value Type</strong> <code>EPCGExComparisonDataType</code></summary>

How to interpret and compare the tag value.

| Option | Meaning |
|--------|---------|
| **Numeric** | Parse and compare as number |
| **String** | Compare as text |

Default: `Numeric`

</details>

#### Numeric Settings

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare numeric tag values.

*Visible when Value Type = Numeric*

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Operand B (Numeric)</strong> <code>double</code></summary>

The numeric threshold to compare against.

*Visible when Value Type = Numeric*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

*Visible when Value Type = Numeric and Comparison = ~= or !~=*

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

</details>

#### String Settings

<details>
<summary><strong>Comparison</strong> <code>EPCGExStringComparison</code></summary>

How to compare string tag values.

*Visible when Value Type = String*

Default: `Contains`

</details>

<details>
<summary><strong>Operand B (String)</strong> <code>string</code></summary>

The string to compare against.

*Visible when Value Type = String*

Default: `"Tag"`

⚡ PCG Overridable

</details>

### Multi-Match Behavior

<details>
<summary><strong>Multi Match</strong> <code>EPCGExFilterGroupMode</code></summary>

How to combine results when multiple tags match the name pattern.

| Option | Meaning |
|--------|---------|
| **AND** | All matching tags must satisfy the comparison |
| **OR** | At least one matching tag must satisfy the comparison |

Default: `AND`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: `false`

</details>

## Tag Value Format

PCG data can have tags in `Name:Value` format:
- `Priority:5` → Name is "Priority", Value is "5"
- `Category:Enemy` → Name is "Category", Value is "Enemy"
- `Level:Hard` → Name is "Level", Value is "Hard"

## Examples

**Keep collections with Priority > 3**:
- Tag Name: `Priority`
- Match: `Equals`
- Value Type: `Numeric`
- Comparison: `>`
- Operand B (Numeric): `3`

**Keep collections with Category containing "Spawn"**:
- Tag Name: `Category`
- Match: `Equals`
- Value Type: `String`
- Comparison: `Contains`
- Operand B (String): `Spawn`

**Keep collections where all Level tags equal "Hard"**:
- Tag Name: `Level`
- Match: `Equals`
- Value Type: `String`
- Comparison: `Equals`
- Operand B (String): `Hard`
- Multi Match: `AND`

## Related

### Collection Filters
- [Tag Check](./tag-check.md) - Test for tag presence (ignores value)
- [Entry Count](./entry-count.md) - Filter by point count

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExTagValueFilter.cpp)
