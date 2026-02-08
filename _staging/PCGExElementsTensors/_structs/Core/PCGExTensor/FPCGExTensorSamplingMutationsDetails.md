---
icon: arrows-spin
description: 'Tensor Sampling Mutations Details - Modify tensor direction and magnitude'
---

# Tensor Sampling Mutations Details

Configures mutations applied to tensor samples during sampling operations.

## Overview

This settings block controls post-sampling modifications to tensor vectors. After a tensor is sampled, these mutations can invert the direction, make it bidirectional (affecting both forward and backward movement), and scale the vector components. These modifications allow fine-tuning of tensor field behavior without changing the underlying tensor definition.

## How It Works

1. **Sample Tensor**: Get the base tensor vector at a position
2. **Apply Inversion**: Optionally flip the vector direction
3. **Apply Bidirectionality**: Optionally mirror around reference axis
4. **Apply Scale**: Optionally scale the vector components
5. **Output Result**: Modified tensor vector for use in operations

## Behavior

```
Tensor Mutations:

Original Tensor: → (pointing right)

Invert = true:   ← (pointing left)

Bidirectional = true:
  ←→ (affects movement in both directions)

Scale = (2, 1, 1):
  →→ (stretched along X axis)

Combined:
  Invert + Scale = ←←
```

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

When enabled, reverses the tensor direction (multiplies by -1).

Default: `false`

</details>

<details>
<summary><strong>Bidirectional</strong> <code>bool</code></summary>

When enabled, the tensor affects movement in both directions along the reference axis, creating symmetric behavior.

Default: `false`

</details>

<details>
<summary><strong>Reference Axis</strong> <code>EPCGExAxis</code></summary>

The axis used as reference for bidirectional behavior.

| Option | Description |
|--------|-------------|
| **Forward** | +X axis |
| **Backward** | -X axis |
| **Right** | +Y axis |
| **Left** | -Y axis |
| **Up** | +Z axis |
| **Down** | -Z axis |

Default: `Forward`

📋 *Visible when Bidirectional = true*

</details>

<details>
<summary><strong>Scale Direction And Size</strong> <code>bool</code></summary>

When enabled, applies a scale multiplier to the tensor vector components.

Default: `false`

</details>

<details>
<summary><strong>Scale</strong> <code>FVector</code></summary>

Scale multiplier applied to tensor vector components (X, Y, Z).

Default: `(1, 1, 1)`

📋 *Visible when Scale Direction And Size = true*

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsTensors-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Core/PCGExTensor.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Core/PCGExTensor.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 5 documented (bInvert, bBidirectional, ReferenceAxis, bScaleDirectionAndSize, Scale)
Inherited Properties: None
Nested Types: EPCGExAxis
Used By: Tensor Constant, Tensor Noise
-->
