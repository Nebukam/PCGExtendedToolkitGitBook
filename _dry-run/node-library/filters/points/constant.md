---
icon: circle-check
description: 'In editor :: PCGEx | Filter : Constant'
---

# Constant

A filter that always returns the same result.

## How It Works

For each point:

1. Return the configured value (pass or fail)

That's it. No conditions, no attributes, just a constant result.

## Settings

<details>
<summary><strong>Value</strong> <code>bool</code></summary>

The constant result to return.

- `true` = all points pass
- `false` = all points fail

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the result.

Default: `false`

⚡ PCG Overridable

</details>

## Use Cases

**Testing node behavior**:
- Set to `true` to see what happens when all points pass
- Set to `false` to see what happens when all points fail

**Placeholder during development**:
- Use while building a graph, replace with real filter later

**Fallback in OR groups**:
- In an OR filter group, a Constant(true) ensures at least one filter passes
- In an AND filter group, a Constant(false) forces all points to fail

**Disabling filtering temporarily**:
- Replace a complex filter with Constant(true) to bypass filtering without disconnecting

## Related

- [Filter Group](./filter-group.md) - Combine filters with AND/OR logic

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExConstantFilter.cpp)
