---
icon: sliders-simple
---

# Filter Result Details

Configuration struct for writing filter pass/fail results to point attributes.

### Overview

This struct controls how filter evaluation results are persisted to point data. It supports three output modes: boolean values, counters, and bitmask operations. Used by nodes that need to record filter outcomes for downstream processing or debugging.

### Properties

<details>

<summary><strong>Enabled</strong> <code>bool</code></summary>

Enable or disable result writing. When disabled, no attribute is written.

Default: `true`

⚡ PCG Overridable

📋 _Visible when configured as optional_

</details>

<details>

<summary><strong>Action</strong> <code>EPCGExResultWriteAction</code></summary>

How the filter result should be written to the attribute.

| Option      | Description                                              |
| ----------- | -------------------------------------------------------- |
| **Boolean** | Writes `true` for pass, `false` for fail                 |
| **Counter** | Increments/decrements a numeric value based on pass/fail |
| **Bitmask** | Applies bitwise operations to flag values                |

Default: `Boolean`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Result Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to write the result to. The attribute type depends on the selected Action mode.

Default: `Result`

⚡ PCG Overridable

</details>

#### Counter Mode Settings

<details>

<summary><strong>Pass Increment</strong> <code>double</code></summary>

Value added to the counter when filters pass. Use negative values to decrement.

Default: `1`

⚡ PCG Overridable

📋 _Visible when Action = Counter_

</details>

<details>

<summary><strong>Fail Increment</strong> <code>double</code></summary>

Value added to the counter when filters fail. Use negative values to decrement.

Default: `0`

⚡ PCG Overridable

📋 _Visible when Action = Counter_

</details>

#### Bitmask Mode Settings

<details>

<summary><strong>Do Bitmask Op On Pass</strong> <code>bool</code></summary>

Whether to apply bitmask operations when filters pass.

Default: `true`

⚡ PCG Overridable

📋 _Visible when Action = Bitmask_

</details>

<details>

<summary><strong>Pass Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply when filters pass.

⚡ PCG Overridable

📋 _Visible when Do Bitmask Op On Pass = true and Action = Bitmask_

</details>

<details>

<summary><strong>Do Bitmask Op On Fail</strong> <code>bool</code></summary>

Whether to apply bitmask operations when filters fail.

Default: `true`

⚡ PCG Overridable

📋 _Visible when Action = Bitmask_

</details>

<details>

<summary><strong>Fail Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask and operation to apply when filters fail.

⚡ PCG Overridable

📋 _Visible when Do Bitmask Op On Fail = true and Action = Bitmask_

</details>

### Behavior

**Boolean Mode:**

```
Point passes filter → Result = true
Point fails filter  → Result = false
```

**Counter Mode:**

```
Point passes filter → Result += PassIncrement (default: +1)
Point fails filter  → Result += FailIncrement (default: +0)
```

**Bitmask Mode:**

```
Point passes filter → Result = Result [operation] PassBitmask
Point fails filter  → Result = Result [operation] FailBitmask
```

### Used By

This struct appears in the following nodes:

| Node                     | Property                               | Context                |
| ------------------------ | -------------------------------------- | ---------------------- |
| **Cluster : Filter Vtx** | `ResultOutputVtx`                      | Vertex filter results  |
| **Cluster : Refine**     | `ResultOutputVtx`, `ResultOutputEdges` | Refinement results     |
| **Uber Filter**          | `ResultDetails`                        | General filter results |

***

![Static Badge](https://img.shields.io/badge/Module-PCGExFilters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Details/PCGExFilterDetails.h)
