---
icon: puzzle-piece
description: 'Fill Control : Length - Stops diffusion based on spatial distance'
---

# Fill Control : Length

Stop diffusion when path length or edge length exceeds a maximum.

## Overview

This fill control sub-node limits diffusion based on spatial distance rather than hop count. It can track either the total accumulated path length from the seed or individual edge lengths. When the distance limit is exceeded, expansion stops in that direction.

## How It Works

1. **Measure Distance**: For each candidate, computes either the total path length or the current edge length.
2. **Compare to Limit**: Tests the distance against the maximum length threshold.
3. **Stop When Exceeded**: If the limit is exceeded, the candidate is rejected.

#### Usage Notes

- **Path Length vs Edge Length**: Path length is the cumulative distance from seed to candidate. Edge length is just the current edge being traversed.
- **Spatial Boundaries**: Unlike Depth which counts hops, Length creates distance-based boundaries that respect actual geometry.
- **Validates All Steps**: This control validates captures, probes, and candidates.

## Behavior

```
Length Control (MaxLength = 100, Path Length mode):

Path with edge lengths:
  Seed ──[30]──> [Vtx] ──[40]──> [Vtx] ──[35]──> [Vtx] ──[20]──> STOP
         30            70            105 (exceeds 100)

Path Length vs Edge Length:
  Path Length: Total distance from seed (30 → 70 → 105...)
  Edge Length: Each edge checked individually (30, 40, 35...)
```

## Settings

<details>
<summary><strong>Use Path Length</strong> <code>bool</code></summary>

When enabled, tracks the accumulated total distance from seed to candidate. When disabled, only checks individual edge lengths.

Default: `true`

</details>

<details>
<summary><strong>Max Length Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the maximum length comes from a constant or attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use a fixed length limit |
| **Attribute** | Read length limit from an attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Max Length (Attr)</strong> <code>FName</code></summary>

Attribute name to read the length limit from.

Default: `MaxLength`

📋 *Visible when Max Length Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Length</strong> <code>double</code></summary>

Maximum allowed distance before diffusion stops.

Default: `10`

Minimum: 1

📋 *Visible when Max Length Input = Constant*

⚡ PCG Overridable

</details>

### Inherited Settings

→ See [Fill Controls Base](../Core/PCGExFillControlsFactoryProvider.md) for: Source, Steps

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlLength.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented
Inherited Properties: Referenced to FPCGExFillControlConfigBase (Source, Steps)
Inputs: N/A (sub-node)
Outputs: Fill Controls
Nested Types: EPCGExInputValueType
-->
