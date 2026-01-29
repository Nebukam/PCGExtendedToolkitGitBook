---
description: 'In editor :: PCGEx | Match : Tags × Attributes'
---

# Tag to Attribute

**Compares attribute values on targets against tags on candidate inputs.**

This rule bridges two different data systems: it reads a tag from candidate data and compares it against an attribute value on the target point.

---

## How It Works

```
Target Point                    Candidate Data
┌──────────────┐               ┌──────────────────┐
│ Attributes:  │               │ Tags:            │
│  Zone = "A"  │◄─── match? ──►│  Zone:A          │
│              │               │                  │
└──────────────┘               └──────────────────┘
```

The rule extracts the tag name from the candidate and compares it against the specified attribute on the target point.

---

## Settings

<details>
<summary><strong>Tag Name Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the tag name to look for.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed tag name |
| **Attribute** | Read tag name from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tag Name (Attr)</strong> <code>FName</code></summary>

Attribute to read the tag name from.

*Visible when Tag Name Input = Attribute*

Default: `ReadTagFrom`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tag Name</strong> <code>FString</code></summary>

The constant tag name to look for on candidates.

*Visible when Tag Name Input = Constant*

Default: `TagOnInput`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Match</strong> <code>EPCGExStringMatchMode</code></summary>

How to match the tag name.

| Value | Behavior |
|-------|----------|
| **Equals** | Exact string match |
| **Contains** | Tag contains the string |
| **StartsWith** | Tag starts with the string |
| **EndsWith** | Tag ends with the string |

Default: `Equals`

</details>

---

## Value Matching (Optional)

<details>
<summary><strong>Do Value Match</strong> <code>bool</code></summary>

Enable to also compare the tag's value against an attribute.

When enabled, both the tag name must match AND the value comparison must pass.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Value Type</strong> <code>EPCGExComparisonDataType</code></summary>

Expected type for the value comparison.

| Value | Behavior |
|-------|----------|
| **Numeric** | Treat as number, use numeric comparison |
| **String** | Treat as text, use string comparison |

*Visible when Do Value Match = true*

Default: `Numeric`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Value Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute on the target to compare against the tag's value.

*Visible when Do Value Match = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison (Numeric)</strong> <code>EPCGExComparison</code></summary>

Comparison operator for numeric values.

| Value | Behavior |
|-------|----------|
| **StrictlyEqual** | == |
| **StrictlyNotEqual** | != |
| **EqualOrGreater** | >= |
| **EqualOrSmaller** | <= |
| **StrictlyGreater** | > |
| **StrictlySmaller** | < |
| **NearlyEqual** | ≈ (within tolerance) |
| **NearlyNotEqual** | !≈ |

*Visible when Do Value Match = true and Value Type = Numeric*

Default: `NearlyEqual`

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

*Visible when using NearlyEqual or NearlyNotEqual*

Default: `DBL_COMPARE_TOLERANCE`

</details>

<details>
<summary><strong>Comparison (String)</strong> <code>EPCGExStringComparison</code></summary>

Comparison operator for string values.

| Value | Behavior |
|-------|----------|
| **StrictlyEqual** | Exact match |
| **StrictlyNotEqual** | Not exact match |
| **Contains** | Value contains string |
| **StartsWith** | Value starts with string |
| **EndsWith** | Value ends with string |

*Visible when Do Value Match = true and Value Type = String*

Default: `Contains`

</details>

---

## Example Use Cases

### Zone Assignment
Match targets to candidates tagged with matching zone identifiers:
- Target has `ZoneID = "Industrial"`
- Candidate has tag `ZoneID:Industrial`
- Rule matches when tag value equals attribute

### Level-Based Spawning
Match spawn points to prefabs based on difficulty:
- Targets have `Difficulty` attribute (1, 2, 3...)
- Candidates tagged with `Level:1`, `Level:2`, etc.
- Rule matches appropriate prefabs to spawn points

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchTagToAttr.h)
