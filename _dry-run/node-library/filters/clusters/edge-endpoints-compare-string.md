---
icon: font
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (String)'
---

# Edge Endpoints Compare (String)

Compares string attribute values between an edge's endpoints.

## Overview

The Edge Endpoints Compare (String) filter evaluates cluster edges by reading a string attribute from both endpoints and comparing them. This identifies edges connecting nodes with matching names, edges crossing tag boundaries, or edges with specific text relationships.

## How It Works

For each edge:

1. **Read string attribute** from start endpoint
2. **Read string attribute** from end endpoint
3. **Compare strings** using selected operator
4. **Return result**: pass if comparison is true

## Settings

### Attribute

<details>
<summary><strong>Attribute</strong> <code>Attribute Selector</code></summary>

The string attribute to read from both endpoints. The same attribute name is used for both start and end nodes.

⚡ PCG Overridable

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>String Comparison Operator</code></summary>

How to compare start endpoint string against end endpoint string.

| Option | Meaning |
|--------|---------|
| **==** | Strings are exactly equal |
| **!=** | Strings are not equal |
| **== (Length)** | String lengths are equal |
| **!= (Length)** | String lengths differ |
| **>= (Length)** | Start length ≥ end length |
| **<= (Length)** | Start length ≤ end length |
| **> (Length)** | Start length > end length |
| **< (Length)** | Start length < end length |
| **> (Locale)** | Start sorts after end (locale-aware) |
| **< (Locale)** | Start sorts before end (locale-aware) |
| **Contains** | Start contains end as substring |
| **Starts With** | Start begins with end |
| **Ends With** | Start ends with end |

Default: `==`

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for detailed string comparison behavior.

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Find edges where endpoints have the same name**:
- Attribute: `Name`
- Comparison: `==`

**Find edges crossing between different zones**:
- Attribute: `ZoneName`
- Comparison: `!=`

**Find edges where start node's tag contains end node's tag**:
- Attribute: `Tag`
- Comparison: `Contains`

**Find edges between nodes with the same tag prefix**:
- Attribute: `Category`
- Comparison: `==`

## Related

### Edge Filters
- [Endpoints Compare (Numeric)](./edge-endpoints-compare-numeric.md) - Compare numeric attributes
- [Endpoints Check](./edge-endpoints-check.md) - Apply vertex filters to endpoints

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md) - String comparison behavior

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeEndpointsCompareStrFilter.cpp)
