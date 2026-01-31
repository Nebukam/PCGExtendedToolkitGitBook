---
icon: dice
description: 'Refresh Seed - Regenerates point seeds based on their positions'
---

# Refresh Seed

Refresh point seed based on position.

## Overview

This node regenerates the seed value for each point based on its world position. This ensures that points at the same location will have the same seed, providing deterministic randomization that is stable when points move or the graph regenerates. A base seed value can be added to offset all generated seeds.

## How It Works

1. **Read Position**: Gets the world position of each point.
2. **Compute Seed**: Generates a deterministic seed value from the position coordinates.
3. **Apply Base**: Adds the base seed offset to the computed value.
4. **Write Seed**: Updates each point's seed property.

#### Usage Notes

- **Position-Based**: Seeds are computed from position, so points at identical positions get identical seeds.
- **Deterministic**: The same position with the same base seed always produces the same result.
- **Base Offset**: Use different base values to get different seed distributions for the same point positions.

## Behavior

```
Seed Refresh:

Input Points:
   Point A at (100, 200, 0): Seed = 12345
   Point B at (300, 400, 0): Seed = 67890
   Point C at (100, 200, 0): Seed = 11111

After Refresh (Base = 0):
   Point A: Seed = hash(100, 200, 0) = 98765
   Point B: Seed = hash(300, 400, 0) = 43210
   Point C: Seed = hash(100, 200, 0) = 98765  ← Same as A (same position)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input point collections to refresh seeds |

## Settings

<details>
<summary><strong>Base</strong> <code>int32</code></summary>

Base seed value added to the position-derived seed. Use different values to get different seed distributions.

Default: `0`

⚡ PCG Overridable

</details>

### Inherited Settings

→ See [Points Processor Settings](../Core/PCGExPointsProcessor.md) for common point processing settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Points with refreshed seed values |

---

📦 **Module**: `PCGExElementsMeta` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/PCGExRefreshSeed.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (Base)
Inherited Properties: Referenced to UPCGExPointsProcessorSettings
Inputs: In (Points)
Outputs: Out (Points)
Nested Types: None
-->
