---
icon: puzzle-piece
description: 'Tensor : Constant - A tensor that has a constant value in the field.'
---

# Tensor : Constant

A tensor that has a constant value in the field. Note that this tensor will prevent sampling from failing.

## Overview

The Constant Tensor provides a uniform direction throughout the entire field. Unlike other tensors that vary based on position or distance to sources, this tensor returns the same direction vector everywhere. It serves as a baseline or fallback direction and ensures that tensor sampling always succeeds, even in regions where other tensors have no influence.

## How It Works

1. **Direction Setup**: Stores the configured constant direction vector.
2. **Uniform Sampling**: Returns the same direction for all sample positions regardless of location.
3. **Weight Application**: Applies the tensor weight and potency to control its influence when combined with other tensors.
4. **Fallback Guarantee**: Ensures sampling never fails, providing a default direction when other tensors contribute zero influence.

#### Usage Notes

- **Fallback Direction**: When combined with spatial tensors, provides a default direction in regions where other tensors have no effect.
- **Sampling Safety**: This tensor guarantees that sampling will never fail due to zero tensor influence, which can prevent extrusion from stopping unexpectedly.
- **Combination**: Often used as a background field that other tensors modify locally.

## Behavior

#### Constant Tensor Field:
```
  → → → → → → → → →
  → → → → → → → → →
  → → → → → → → → →
  → → → → → → → → →
  → → → → → → → → →

Direction = ForwardVector (default)

Same direction everywhere in the field,
regardless of sample position.
```

## Settings

<details>
<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Base weight multiplier for this tensor. Controls how much this tensor contributes relative to others when multiple tensors are combined.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

The constant direction vector for this tensor. This direction is returned for all sample positions in the field.

Default: `ForwardVector` (1, 0, 0)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Potency</strong> <code>double</code></summary>

Base potency multiplier for this tensor. Scales the magnitude of the tensor's influence.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sampling Mutations</strong> <code>FPCGExTensorSamplingMutationsDetails</code></summary>

Tensor mutations settings that modify the sampled result.

| Property | Type | Description |
|----------|------|-------------|
| **Invert** | `bool` | Flip the tensor direction |
| **Absolute** | `bool` | Use absolute values for direction components |
| **Noise** | `bool` | Add noise to the sampled direction |

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits from the tensor factory provider base.

→ See [Tensor Factory](../Core/PCGExTensorFactoryProvider.md) for common tensor options.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Tensor** | Tensor Factory | Tensor definition for use with tensor-consuming nodes |

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorConstant.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (TensorWeight, Direction, Potency, Mutations)
Inherited Properties: Referenced to UPCGExTensorFactoryProviderSettings
Inputs: None
Outputs: Tensor (Tensor Factory)
Nested Types: FPCGExTensorConstantConfig, FPCGExTensorSamplingMutationsDetails
-->
