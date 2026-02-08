---
icon: filter
description: 'Filter : Compare (Numeric) - Compares two numeric attribute values.'
---

# Filter : Compare (Numeric)

(double) A == (double) B

## Overview

This filter compares a numeric attribute value against either a constant or another attribute value. It reads Operand A from a point attribute, converts it to a double, and compares it against Operand B using configurable comparison operators including equality, inequality, greater/less than, and near-equality with tolerance.

## How It Works

1. **Value Reading**: Reads Operand A from the specified attribute, converting to double.
2. **Comparison Value**: Gets Operand B from either a constant or another attribute.
3. **Numeric Comparison**: Performs the selected comparison between the two values.
4. **Result**: Returns pass if the comparison succeeds, fail otherwise.

#### Usage Notes

- **Type Conversion**: Any numeric attribute type is converted to double for comparison.
- **Near-Equality**: Use Nearly Equal/Not Equal for floating-point comparisons where exact equality is unreliable.

## Behavior

**Numeric Comparison:**
```
Operand A: $Density attribute
Operand B: 0.5 (constant)
Comparison: >=

Point A: Density = 0.8  → 0.8 >= 0.5: Pass
Point B: Density = 0.5  → 0.5 >= 0.5: Pass
Point C: Density = 0.2  → 0.2 >= 0.5: Fail
```

## Settings

<details>
<summary><strong>Operand A</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read as Operand A. Value is converted to double.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

The comparison operator to use.

| Option | Description |
|--------|-------------|
| **==** | Strictly equal |
| **!=** | Strictly not equal |
| **>=** | Equal or greater |
| **<=** | Equal or smaller |
| **>** | Strictly greater |
| **<** | Strictly smaller |
| **~=** | Nearly equal (within tolerance) |
| **!~=** | Nearly not equal (outside tolerance) |

Default: `Nearly Equal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>EPCGExInputValueType</code></summary>

Whether to use a constant value or read from an attribute for Operand B.

| Option | Description |
|--------|-------------|
| **Constant** | Use the specified constant value |
| **Attribute** | Read from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read as Operand B. Value is converted to double.

⚡ PCG Overridable

📋 *Visible when Compare Against = Attribute*

</details>

<details>
<summary><strong>Operand B</strong> <code>double</code></summary>

The constant value to compare against.

Default: `0`

⚡ PCG Overridable

📋 *Visible when Compare Against = Constant*

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance for the comparison.

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

📋 *Visible when Comparison is Nearly Equal or Nearly Not Equal*

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExFilters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExNumericCompareFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExNumericCompareFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExNumericCompareFilterConfig):
- OperandA (FPCGAttributePropertyInputSelector, PCG_Overridable)
- Comparison (EPCGExComparison, default NearlyEqual, PCG_Overridable)
- CompareAgainst (EPCGExInputValueType, default Constant, PCG_Overridable)
- OperandB (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- OperandBConstant (double, default 0, conditional, PCG_Overridable)
- Tolerance (double, conditional, PCG_Overridable)
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExNumericCompareFilterFactory
- UPCGExNumericCompareFilterProviderSettings (display: "Filter : Compare (Numeric)")
Namespace: PCGExPointFilter::FNumericCompareFilter
-->
