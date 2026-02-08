---
icon: circle-dashed
---

# Edge Filter : Edge Direction

Filters edges by comparing their direction against a reference direction using dot product or hash comparison.

### Overview

This edge filter computes the direction of each edge and compares it against a reference direction. The comparison can be performed using either dot product (for angular similarity) or hash (for exact direction matching). This allows you to filter edges based on orientation — for example, keeping only edges that point upward, removing horizontal connections, or selecting edges aligned with a specific axis.

> This is a [filter-definition](../common-settings/filter-definition/ "mention")

### How It Works

1. **Direction Computation**: Computes the direction vector of each edge from start to end vertex.
2. **Reference Direction**: Gets the comparison direction from either a constant or a vertex attribute.
3. **Direction Comparison**: Compares the edge direction against the reference using either dot product or hash comparison.
4. **Result**: The edge passes or fails based on the comparison result and invert setting.

**Usage Notes**

* **Dot Comparison**: Uses the dot product to measure angular similarity between directions.
* **Hash Comparison**: Uses vector hashing for faster but exact direction matching.
* **Transform Direction**: Optionally transforms the reference direction by the vertex's local transform.
* **Invert Direction**: Can flip the reference direction before comparison.

### Behavior

```
Direction Examples (Reference = Up Vector):

Dot Product Mode:
  Edge pointing up    → High dot (≈1.0) → PASS
  Edge pointing down  → Low dot (≈-1.0) → FAIL
  Edge horizontal     → Zero dot (≈0.0) → depends on threshold

Hash Mode:
  Edge exactly up     → Hash matches → PASS
  Edge slightly off   → Hash differs → FAIL
```

### Settings

<details>

<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Settings that control how edge direction is computed and interpreted.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison Quality</strong> <code>EPCGExDirectionCheckMode</code></summary>

The type of comparison to use for direction checking.

| Option   | Description                                       |
| -------- | ------------------------------------------------- |
| **Dot**  | Use dot product comparison for angular similarity |
| **Hash** | Use vector hash comparison for exact matching     |

Default: `Dot`

</details>

<details>

<summary><strong>Compare Against</strong> <code>EPCGExInputValueType</code></summary>

Where to read the reference direction from.

| Option        | Description                            |
| ------------- | -------------------------------------- |
| **Constant**  | Use a constant direction vector        |
| **Attribute** | Read direction from a vertex attribute |

Default: `Constant`

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the reference direction from.

📋 _Visible when Compare Against = Attribute_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Flip the reference direction vector before comparison.

Default: `false`

📋 _Visible when Compare Against = Attribute_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>FVector</code></summary>

The constant direction vector to compare edge directions against.

Default: `(0, 0, 1)` (Up Vector)

📋 _Visible when Compare Against = Constant_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the reference direction by the local vertex transform before comparison.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Settings for dot product comparison mode, including threshold and comparison operator.

📋 _Visible when Comparison Quality = Dot_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hash Comparison Details</strong> <code>FPCGExVectorHashComparisonDetails</code></summary>

Settings for vector hash comparison mode.

📋 _Visible when Comparison Quality = Hash_

⚡ PCG Overridable

</details>

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Filters/Edges/PCGExIsoEdgeDirectionFilter.h)


