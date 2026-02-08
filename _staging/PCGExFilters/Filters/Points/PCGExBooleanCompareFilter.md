---
icon: filter
description: 'Filter : Bool Compare - Compares boolean attribute values.'
---

# Filter : Bool Compare

(bool) A == (bool) B

## Overview

This filter compares boolean attribute values at each point. It reads a boolean attribute (Operand A) and compares it against either a constant boolean value or another boolean attribute (Operand B). The filter supports both equality and inequality comparisons.

## How It Works

1. **Value Reading**: Reads the boolean value from Operand A attribute for each point.
2. **Comparison Value**: Gets the comparison value from either a constant or Operand B attribute.
3. **Boolean Comparison**: Performs equality or inequality test between the two values.
4. **Result**: Returns pass if the comparison succeeds, fail otherwise.

#### Usage Notes

- **Type Conversion**: Non-boolean attributes are converted to bool (0 = false, non-zero = true).
- **Simple Logic**: For straightforward boolean attribute filtering without complex conditions.

## Behavior

**Boolean Comparison:**
```
Point A: Operand A = true,  Operand B = true   → Equal: Pass, Not Equal: Fail
Point B: Operand A = true,  Operand B = false  → Equal: Fail, Not Equal: Pass
Point C: Operand A = false, Operand B = false  → Equal: Pass, Not Equal: Fail
Point D: Operand A = false, Operand B = true   → Equal: Fail, Not Equal: Pass
```

## Settings

<details>
<summary><strong>Operand A</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read as Operand A. Value is converted to boolean.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExEquality</code></summary>

The comparison operator to use.

| Option | Description |
|--------|-------------|
| **Equal** | Pass if A equals B |
| **Not Equal** | Pass if A does not equal B |

Default: `Equal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compare Against</strong> <code>EPCGExInputValueType</code></summary>

Whether to use a constant value or read from an attribute for Operand B.

| Option | Description |
|--------|-------------|
| **Constant** | Use the specified constant boolean |
| **Attribute** | Read from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read as Operand B. Value is converted to boolean.

⚡ PCG Overridable

📋 *Visible when Compare Against = Attribute*

</details>

<details>
<summary><strong>Operand B</strong> <code>bool</code></summary>

The constant boolean value to compare against.

Default: `true`

⚡ PCG Overridable

📋 *Visible when Compare Against = Constant*

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExBooleanCompareFilter.h)

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExBooleanCompareFilterConfig):
- OperandA (FPCGAttributePropertyInputSelector, PCG_Overridable)
- Comparison (EPCGExEquality, default Equal, PCG_Overridable)
- CompareAgainst (EPCGExInputValueType, default Constant, PCG_Overridable)
- OperandB (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- OperandBConstant (bool, default true, conditional, PCG_Overridable)
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExBooleanCompareFilterFactory
- UPCGExBooleanCompareFilterProviderSettings (display: "Filter : Bool Compare")
Namespace: PCGExPointFilter::FBooleanCompareFilter
-->
