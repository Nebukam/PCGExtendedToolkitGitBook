---
icon: tag
description: 'In editor :: PCGEx | Data Filter : Tag Check'
---

# Tag Check

Checks whether a collection has a specific tag.

## Overview

The Tag Check filter evaluates collections by looking for the presence (or absence) of a tag. This is a simple existence check—use Tag Value filter if you need to compare tag values.

## How It Works

For each collection:

1. **Search for tag** using the configured match mode
2. **Return result**: collection passes if tag is found (or not found, if inverted)

## Settings

<details>
<summary><strong>Tag Name</strong> <code>string</code></summary>

The tag name to search for.

Default: `"Tag"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Match</strong> <code>EPCGExStringMatchMode</code></summary>

How to match the tag name.

| Mode | Meaning |
|------|---------|
| **Equals** | Exact match |
| **Contains** | Tag name contains the search string |
| **Starts With** | Tag name begins with search string |
| **Ends With** | Tag name ends with search string |

Default: `Equals`

</details>

<details>
<summary><strong>Strict</strong> <code>bool</code></summary>

In strict mode, only check the tag prefix and ignore values for tags formatted as `Tag:Value`. Useful when tags follow a `Name:Value` convention.

Default: `false`

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Pass collections that **don't** have the tag.

Default: `false`

</details>

## Examples

**Keep collections tagged "ClosedLoop"**:
- Tag Name: `ClosedLoop`
- Match: `Equals`

**Keep collections with any "Debug" tag**:
- Tag Name: `Debug`
- Match: `Contains`

**Exclude collections tagged "Skip"**:
- Tag Name: `Skip`
- Invert: `true`

## Related

### Collection Filters
- [Tag Value](./tag-value.md) - Compare tag values, not just existence
- [Attribute Check](./attribute-check.md) - Check attribute existence

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Collections/PCGExTagCheckFilter.cpp)
