---
icon: not-equal
---

# Comparison Operators

How PCGEx compares values in filters and conditional logic.

## When You'll See This

Comparison operators appear throughout PCGEx whenever a node needs to evaluate conditions:

- **Filters**: Numeric Compare, String Compare, Distance, etc.
- **Conditional logic**: Attribute-based branching
- **Matching**: Data correlation rules

---

## Numeric Comparisons

The standard comparison operators for numbers and numeric types:

| Operator | Display | Meaning |
|----------|---------|---------|
| **Strictly Equal** | ` == ` | A equals B exactly |
| **Strictly Not Equal** | ` != ` | A does not equal B |
| **Equal or Greater** | ` >= ` | A is greater than or equal to B |
| **Equal or Smaller** | ` <= ` | A is less than or equal to B |
| **Strictly Greater** | ` > ` | A is greater than B |
| **Strictly Smaller** | ` < ` | A is less than B |
| **Nearly Equal** | ` ~= ` | A is approximately equal to B (within tolerance) |
| **Nearly Not Equal** | ` !~= ` | A is not approximately equal to B |

---

## Tolerance for Near-Equality

**Nearly Equal** and **Nearly Not Equal** use a tolerance value to handle floating-point imprecision.

Two values are "nearly equal" when: `|A - B| ≤ Tolerance`

The default tolerance is `0.01`. Many nodes let you configure this.

**When to use**:
- Comparing computed values that may have floating-point drift
- Checking if values are "close enough" rather than exact
- Avoiding false negatives from precision issues

---

## String Comparisons

String-specific operators handle text matching:

| Operator | Display | Meaning |
|----------|---------|---------|
| **Strictly Equal** | ` == ` | Strings match exactly |
| **Strictly Not Equal** | ` != ` | Strings differ |
| **Contains** | ` Contains ` | A contains B as substring |
| **Starts With** | ` Starts With ` | A begins with B |
| **Ends With** | ` Ends With ` | A ends with B |

### Length-Based String Comparisons

Compare strings by their character count:

| Operator | Display | Meaning |
|----------|---------|---------|
| **Length Strictly Equal** | ` == (Length) ` | Same length |
| **Length Strictly Unequal** | ` != (Length) ` | Different lengths |
| **Length Equal or Greater** | ` >= (Length) ` | A at least as long as B |
| **Length Equal or Smaller** | ` <= (Length) ` | A no longer than B |
| **Length Greater** | ` > (Length) ` | A longer than B |
| **Length Smaller** | ` < (Length) ` | A shorter than B |

### Locale-Aware String Comparisons

For culture-sensitive ordering:

| Operator | Display | Meaning |
|----------|---------|---------|
| **Locale Greater** | ` > (Locale) ` | A sorts after B |
| **Locale Smaller** | ` < (Locale) ` | A sorts before B |

---

## How Different Types Compare

Comparison operators adapt their behavior based on data type:

### Scalars (Float, Double, Integer)
Direct numeric comparison. Straightforward.

### Booleans
- `true` is treated as "greater than" `false`
- `>=` means "A is true OR A equals B"
- `>` means "A is true AND B is false"

### Vectors
Comparison uses **magnitude** (length), not individual components:
```
A = (3, 4, 0)  → magnitude = 5
B = (2, 0, 0)  → magnitude = 2

A > B  → TRUE (5 > 2)
```

This means a vector pointing in any direction can be "greater" than another based purely on how long it is.

### Rotators and Quaternions
Converted to Euler angles as a vector, then compared by magnitude.

### Transforms
All three components (Location, Rotation, Scale) must satisfy the condition. For `A >= B`:
- A.Location magnitude >= B.Location magnitude, AND
- A.Rotation magnitude >= B.Rotation magnitude, AND
- A.Scale magnitude >= B.Scale magnitude

---

## Simple Equality

Some contexts only need equal/not-equal:

| Operator | Display |
|----------|---------|
| **Equal** | ` == ` |
| **Not Equal** | ` != ` |

This simplified set appears where range comparisons don't make sense.

---

## Tips

{% hint style="info" %}
**Near-equality for computed values**: When comparing distances, angles, or other computed results, prefer `~=` over `==` to avoid precision issues.
{% endhint %}

{% hint style="info" %}
**String contains is case-sensitive**: "Hello" does not contain "hello". Normalize case in your data if you need case-insensitive matching.
{% endhint %}

{% hint style="warning" %}
**Vector comparison is magnitude-based**: `(1, 0, 0) == (-1, 0, 0)` because both have magnitude 1. If you need directional comparison, use the Dot filter instead.
{% endhint %}
