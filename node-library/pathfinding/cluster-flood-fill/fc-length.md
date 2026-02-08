---
icon: circle-dashed
---

# FC : Length

Stop diffusion when path length or edge length exceeds a maximum.

### Overview

This fill control sub-node limits diffusion based on spatial distance rather than hop count. It can track either the total accumulated path length from the seed or individual edge lengths. When the distance limit is exceeded, expansion stops in that direction.

### How It Works

1. **Measure Distance**: For each candidate, computes either the total path length or the current edge length.
2. **Compare to Limit**: Tests the distance against the maximum length threshold.
3. **Stop When Exceeded**: If the limit is exceeded, the candidate is rejected.

**Usage Notes**

* **Path Length vs Edge Length**: Path length is the cumulative distance from seed to candidate. Edge length is just the current edge being traversed.
* **Spatial Boundaries**: Unlike Depth which counts hops, Length creates distance-based boundaries that respect actual geometry.
* **Validates All Steps**: This control validates captures, probes, and candidates.

### Behavior

```
Length Control (MaxLength = 100, Path Length mode):

Path with edge lengths:
  Seed ──[30]──> [Vtx] ──[40]──> [Vtx] ──[35]──> [Vtx] ──[20]──> STOP
         30            70            105 (exceeds 100)

Path Length vs Edge Length:
  Path Length: Total distance from seed (30 → 70 → 105...)
  Edge Length: Each edge checked individually (30, 40, 35...)
```

### Settings

<details>

<summary><strong>Use Path Length</strong> <code>bool</code></summary>

When enabled, tracks the accumulated total distance from seed to candidate. When disabled, only checks individual edge lengths.

Default: `true`

</details>

<details>

<summary><strong>Max Length Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the maximum length comes from a constant or attribute.

| Option        | Description                         |
| ------------- | ----------------------------------- |
| **Constant**  | Use a fixed length limit            |
| **Attribute** | Read length limit from an attribute |

Default: `Constant`

</details>

<details>

<summary><strong>Max Length (Attr)</strong> <code>FName</code></summary>

Attribute name to read the length limit from.

Default: `MaxLength`

📋 _Visible when Max Length Input = Attribute_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Length</strong> <code>double</code></summary>

Maximum allowed distance before diffusion stops.

Default: `10`

Minimum: 1

📋 _Visible when Max Length Input = Constant_

⚡ PCG Overridable

</details>

#### Inherited Settings

→ See Fill Controls Base for: Source, Steps

***

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsFloodFill-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlLength.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlLength.h -->
