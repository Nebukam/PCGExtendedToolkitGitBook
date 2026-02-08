---
icon: puzzle-piece
description: 'Tensor Spline Factory - Base factory for spline-based tensor field definitions.'
---

# Tensor Spline Factory

Base factory for spline-based tensor field definitions.

## Overview

Tensor Spline Factory is the abstract base class for tensor fields that derive their influence from spline data. These tensors use spline geometry to create directional fields that follow or interact with curved paths. Spline-based tensors can create flow fields along paths, pole fields around splines, and other curve-driven effects.

## How It Works

1. **Spline Input**: Accepts spline data from connected input pins.
2. **Spline Processing**: Converts input splines into internal representation based on point type settings.
3. **Factory Creation**: Creates the tensor factory data with processed spline information.
4. **Field Generation**: Derived classes use the spline data to generate specific field types.

#### Usage Notes

- **Abstract Base**: This class cannot be used directly — use specific spline tensor types like Tensor Spline Flow or Tensor Spline Pole.
- **Spline Sources**: Can accept both native spline data and path point data converted to splines.
- **Point Type**: Controls spline interpolation (Linear, Curve, Constant).

## Inheritance

This is a base class. Specific spline tensor types include:

- **Tensor Spline Flow** - Creates flow fields along spline tangents
- **Tensor Spline Pole** - Creates radial fields around spline curves

## Internal Properties

The following properties are configured by derived classes:

| Property | Type | Description |
|----------|------|-------------|
| **Point Type** | `EPCGExSplinePointTypeRedux` | Spline interpolation mode (Linear, Curve, Constant) |
| **Smooth Linear** | `bool` | Smooth linear spline segments |
| **Build From Paths** | `bool` | Convert path points to splines |
| **Sample Inputs** | `EPCGExSplineSamplingIncludeMode` | Which spline inputs to include |

### Inherited Settings

Spline tensor factories inherit from the base tensor factory.

→ See [Tensor Factory](./PCGExTensorFactoryProvider.md) for common tensor options including Priority.

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Public/Core/PCGExTensorSplineFactoryProvider.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (abstract base class, properties set by derived classes)
Inherited Properties: Referenced to UPCGExTensorFactoryData
Inputs: Spline data (configured by derived classes)
Outputs: Tensor (inherited)
Nested Types: None exposed
-->
