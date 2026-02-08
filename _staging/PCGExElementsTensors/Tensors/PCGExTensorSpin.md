---
icon: puzzle-piece
description: 'Tensor : Spin - A tensor that represents a spin around a given axis.'
---

# Tensor : Spin

A tensor that represents a spin around a given axis.

## Overview

The Spin Tensor creates rotational/vortex fields around input points. Each effector point defines a spin axis, and the tensor provides directions that rotate around this axis, creating swirling or spiral flow patterns. The spin direction is always perpendicular to both the axis and the direction from the axis to the sample point.

## How It Works

1. **Axis Setup**: Determines the spin axis for each effector point from transform or attribute.
2. **Tangent Calculation**: For each sample, calculates the tangent direction perpendicular to the axis and the radial direction.
3. **Spin Direction**: Returns the tangent direction, creating rotation around the axis.
4. **Falloff Application**: Applies distance-based falloff from the spin axis.

#### Usage Notes

- **Vortex Creation**: Creates swirling patterns around effector points, useful for spiral extrusions.
- **Axis Orientation**: The spin axis can be per-point using attributes, or constant for all points.
- **Spin Direction**: Use the Sampling Mutations invert option to reverse the spin direction (clockwise vs counter-clockwise).

## Behavior

```
Spin Tensor (axis pointing up):

    Top view:
        ↑
      ← ● →     ● = Spin effector
        ↓

    ╭───→───╮
    │       │
    ↑   ●   ↓   Directions form a vortex
    │       │   around the axis
    ╰───←───╯

Spin creates rotational flow around the axis.
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Point Data | Points defining spin effector positions and axes |

## Settings

<details>
<summary><strong>Axis Input</strong> <code>EPCGExInputValueType</code></summary>

How to determine the spin axis for each effector point.

| Option | Description |
|--------|-------------|
| **Constant** | Use a transform axis from each point's rotation |
| **Attribute** | Read axis from a vector attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Axis (Constant)</strong> <code>EPCGExAxis</code></summary>

Which axis of the point transform to use as the spin axis.

| Option | Description |
|--------|-------------|
| **Forward** | Spin around local X axis |
| **Backward** | Spin around negative local X axis |
| **Right** | Spin around local Y axis |
| **Left** | Spin around negative local Y axis |
| **Up** | Spin around local Z axis (typical vortex) |
| **Down** | Spin around negative local Z axis |

Default: `Up`

📋 *Visible when Axis Input = Constant*

</details>

<details>
<summary><strong>Axis (Attribute)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute selector for the spin axis vector.

📋 *Visible when Axis Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Axis Transform</strong> <code>EPCGExTransformMode</code></summary>

Whether the axis is in world space or should be transformed by the point's rotation.

| Option | Description |
|--------|-------------|
| **Absolute** | Axis is in world space |
| **Relative** | Axis is transformed by point rotation |

Default: `Relative`

📋 *Visible when Axis Input = Attribute*

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits from the tensor point factory provider base, which includes weight, potency, and falloff curve settings.

→ See [Tensor Factory](../Core/PCGExTensorFactoryProvider.md) for common tensor options including Weight, Potency, and Falloff Curves.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Tensor** | Tensor Factory | Tensor definition for use with tensor-consuming nodes |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsTensors-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSpin.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSpin.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (AxisInput, AxisAttribute, AxisConstant, AxisTransform)
Inherited Properties: Referenced to UPCGExTensorPointFactoryProviderSettings
Inputs: In (Point Data)
Outputs: Tensor (Tensor Factory)
Nested Types: FPCGExTensorSpinConfig, EPCGExInputValueType, EPCGExAxis, EPCGExTransformMode
-->
