---
icon: puzzle-piece
description: 'Tensor : Null - A tensor that represents a Null field.'
---

# Tensor : Null

A tensor that represents a Null field.

## Overview

The Null Tensor creates regions where tensor influence is neutralized. Input points define effector positions that cancel out or reduce the influence of other tensors, creating "dead zones" in the field. This is useful for carving out areas where extrusions should stop or lose direction, or for creating barriers that block tensor flow.

## How It Works

1. **Effector Setup**: Builds an array of null effectors from input points.
2. **Influence Zones**: Each effector creates a region where tensor sampling returns zero or reduced influence.
3. **Falloff Application**: The weight and potency falloff curves control how quickly the null effect diminishes with distance.
4. **Combination**: When combined with other tensors, null regions reduce or eliminate directional influence.

#### Usage Notes

- **Dead Zones**: Use null tensors to create areas where extrusions lose momentum and stop.
- **Barriers**: Place null effector points to block or redirect flow around obstacles.
- **Falloff Control**: The falloff curves determine whether the null zone has hard or soft edges.

## Behavior

```
Null Tensor Field:

  → → → ┌─────┐ → → →
  → → → │     │ → → →
  → → → │  ○  │ → → →   ○ = Null effector
  → → → │     │ → → →
  → → → └─────┘ → → →

Within the null zone, tensor influence
is reduced or eliminated.
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Point Data | Points defining null effector positions |

## Settings

This node uses inherited settings from the tensor point factory base for controlling effector influence.

### Inherited Settings

→ See [Tensor Factory](../Core/PCGExTensorFactoryProvider.md) for common tensor options including Weight, Potency, and Falloff Curves.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Tensor** | Tensor Factory | Tensor definition for use with tensor-consuming nodes |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsTensors-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorNull.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorNull.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (uses only inherited settings from FPCGExTensorConfigBase)
Inherited Properties: Referenced to UPCGExTensorPointFactoryProviderSettings
Inputs: In (Point Data)
Outputs: Tensor (Tensor Factory)
Nested Types: FPCGExTensorNullConfig
-->
