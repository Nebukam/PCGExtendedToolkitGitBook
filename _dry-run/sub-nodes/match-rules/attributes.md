---
description: 'In editor :: PCGEx | Match : Match : Attributes'
---

# Attributes

Compares **attribute values** between target and candidate data. Supports both numeric and string comparisons.

```
Candidate @Data.Key = "ABC"
           ↓ compare
Target attribute Key = "ABC"  → Match!
```

---

## Settings

<details>
<summary><strong>Candidate Attribute Name</strong> <code>FName</code></summary>

Attribute to read from the candidate's `@Data` domain.

Only reads from the data domain (first point's value).

Default: `Key`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Attribute Name</strong> <code>FName</code></summary>

Attribute to read from the target. Can read from:
- `@Data.AttributeName` — Data domain (first point value)
- `AttributeName` — Point domain (per-point, depending on context)

Default: `@Data.Value`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Check</strong> <code>EPCGExComparisonDataType</code></summary>

Data type for comparison.

| Value | Behavior |
|-------|----------|
| **Numeric** | Compare as numbers |
| **String** | Compare as text |

Default: `Numeric`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code> (Numeric)</summary>

Numeric comparison operator.

| Value | Behavior |
|-------|----------|
| **Strictly Equal** | `a == b` |
| **Strictly Not Equal** | `a != b` |
| **Equal or Greater** | `a >= b` |
| **Equal or Smaller** | `a <= b` |
| **Strictly Greater** | `a > b` |
| **Strictly Smaller** | `a < b` |
| **Nearly Equal** | `|a - b| < tolerance` |
| **Nearly Not Equal** | `|a - b| >= tolerance` |

Default: `Strictly Equal`

*Visible when Check = Numeric*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for "Nearly" comparisons.

Default: `0.0001`

*Visible when Comparison = Nearly Equal or Nearly Not Equal*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExStringComparison</code> (String)</summary>

String comparison operator.

| Value | Behavior |
|-------|----------|
| **Strictly Equal** | Exact match |
| **Strictly Not Equal** | Not exact match |
| **Contains** | Target contains candidate |
| **Starts With** | Target starts with candidate |
| **Ends With** | Target ends with candidate |

Default: `Strictly Equal`

*Visible when Check = String*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Swap Operands</strong> <code>bool</code></summary>

Swap the order of operands in the comparison.

By default: `Candidate Comparison Target`
With swap: `Target Comparison Candidate`

Useful for directional comparisons like "greater than".

Default: `false`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Candidate attribute is always read from `@Data` domain (collection-level)
- Target attribute can be `@Data.` prefixed or point-level depending on consuming node
- String comparisons are case-sensitive
- Numeric comparisons convert attribute to double

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchAttrToAttr.h)
