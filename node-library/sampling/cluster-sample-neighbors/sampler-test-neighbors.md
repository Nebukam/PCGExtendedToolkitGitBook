---
icon: circle-dashed
---

# Sampler : Test Neighbors

Writes the number of neighbors that pass the provided filters.

### Overview

This sub-node creates a sampler that tests neighbors against connected filters and outputs statistics about how many pass or fail. Rather than blending attribute values, this sampler counts and weighs filter results, enabling analysis of neighborhood characteristics. Results can be written as raw counts, normalized ratios, or weighted sums.

### How It Works

1. **Connect Filters**: Attach filter sub-nodes defining the test criteria
2. **Configure Outputs**: Choose which statistics to write (inside/outside counts, weights)
3. **Execute Sampling**: Each neighbor is tested against filters during traversal
4. **Accumulate Results**: Track pass/fail counts and weights per vertex
5. **Write Attributes**: Output final statistics to vertex attributes

**Usage Notes**

* **Normalization**: Normalized values divide by total count or weight, giving ratios between 0-1 regardless of neighbor count.
* **Weighted Results**: Weight-based outputs account for distance or index-based weighting from the sampling configuration.

### Behavior

```
Filter Testing Example:

Vertex A with neighbors B, C, D, E:
  Filter: "Health > 50"

  B.Health = 80 → PASS (weight 1.0)
  C.Health = 30 → FAIL (weight 0.8)
  D.Health = 60 → PASS (weight 0.6)
  E.Health = 40 → FAIL (weight 0.4)

Results written to A:
  InsideNum = 2        (B, D passed)
  OutsideNum = 2       (C, E failed)
  TotalNum = 4

  InsideWeight = 1.6   (1.0 + 0.6)
  OutsideWeight = 1.2  (0.8 + 0.4)
  TotalWeight = 2.8

Normalized versions:
  InsideNum (normalized) = 0.5    (2/4)
  InsideWeight (normalized) = 0.57 (1.6/2.8)
```

### Inputs

| Pin              | Type                   | Description                      |
| ---------------- | ---------------------- | -------------------------------- |
| **Vtx Filters**  | Point Filter Factories | Filters to test vertex neighbors |
| **Edge Filters** | Point Filter Factories | Filters to test edge neighbors   |

### Settings

#### Count Outputs

<details>

<summary><strong>Write Inside Num</strong> <code>bool</code></summary>

When enabled, writes the count of neighbors that passed all filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inside Num</strong> <code>FName</code></summary>

Name of the attribute storing the count of neighbors that passed filters.

Default: `InsideNum`

📋 _Visible when Write Inside Num = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize (Inside Num)</strong> <code>bool</code></summary>

When enabled, outputs the value divided by total number of samples, giving a ratio between 0-1.

Default: `false`

📋 _Visible when Write Inside Num = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Outside Num</strong> <code>bool</code></summary>

When enabled, writes the count of neighbors that failed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Outside Num</strong> <code>FName</code></summary>

Name of the attribute storing the count of neighbors that failed filters.

Default: `OutsideNum`

📋 _Visible when Write Outside Num = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize (Outside Num)</strong> <code>bool</code></summary>

When enabled, outputs the value divided by total number of samples.

Default: `false`

📋 _Visible when Write Outside Num = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Total Num</strong> <code>bool</code></summary>

When enabled, writes the total number of neighbors tested.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Total Num</strong> <code>FName</code></summary>

Name of the attribute storing the total neighbor count.

Default: `TotalNum`

📋 _Visible when Write Total Num = true_

⚡ PCG Overridable

</details>

#### Weight Outputs

<details>

<summary><strong>Write Inside Weight</strong> <code>bool</code></summary>

When enabled, writes the weighted sum of neighbors that passed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inside Weight</strong> <code>FName</code></summary>

Name of the attribute storing the weighted sum of passing neighbors.

Default: `InsideWeight`

📋 _Visible when Write Inside Weight = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize (Inside Weight)</strong> <code>bool</code></summary>

When enabled, outputs the value divided by total weight of all samples.

Default: `false`

📋 _Visible when Write Inside Weight = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Outside Weight</strong> <code>bool</code></summary>

When enabled, writes the weighted sum of neighbors that failed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Outside Weight</strong> <code>FName</code></summary>

Name of the attribute storing the weighted sum of failing neighbors.

Default: `OutsideWeight`

📋 _Visible when Write Outside Weight = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize (Outside Weight)</strong> <code>bool</code></summary>

When enabled, outputs the value divided by total weight of all samples.

Default: `false`

📋 _Visible when Write Outside Weight = true_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Total Weight</strong> <code>bool</code></summary>

When enabled, writes the total weight of all neighbors tested.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Total Weight</strong> <code>FName</code></summary>

Name of the attribute storing the total weight.

Default: `TotalWeight`

📋 _Visible when Write Total Weight = true_

⚡ PCG Overridable

</details>

#### Inherited Settings

This node inherits sampling configuration from its base class.

→ See Neighbor Sampler Base for: Priority, Max Depth, Blend Over, Weight Curve, etc.

### Outputs

| Pin     | Type    | Description                                            |
| ------- | ------- | ------------------------------------------------------ |
| **Out** | Sampler | Neighbor sampler factory for use with Sample Neighbors |

***

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleFilters.h)
