---
icon: route
description: 'Path : Write Tangents - Compute and write arrive/leave tangent vectors to path points.'
---

# Path : Write Tangents

Computes & writes points tangents.

## Overview

This node computes tangent vectors for each path point and writes them to attributes. Tangents define the direction and curvature at each point, used by spline mesh components and other curve-based operations. Different tangent computation methods are available, with optional overrides for start and end points.

## How It Works

1. **Select Method**: Use the configured tangent computation algorithm.
2. **Compute Tangents**: For each point, calculate arrive (incoming) and leave (outgoing) tangent vectors.
3. **Apply Overrides**: Optionally use different methods for start and end points.
4. **Scale Tangents**: Apply scaling factors to adjust tangent magnitudes.
5. **Write Attributes**: Store tangent vectors as FVector attributes.

#### Usage Notes

- **Arrive vs Leave**: Arrive tangent is the incoming direction (from previous point), leave tangent is the outgoing direction (toward next point). For smooth curves, these typically align.
- **Endpoint Overrides**: Start and end points often need special treatment since they lack a previous or next neighbor. Use the override settings for different tangent behavior at endpoints.
- **Tangent Scaling**: Scale factors adjust tangent magnitude, affecting curve tightness. Larger tangents create wider curves, smaller tangents create tighter curves.
- **Spline Mesh Use**: These tangent attributes are directly usable by the Spline Mesh nodes for smooth curve interpolation.

## Behavior

```
Tangent vectors at path points:

    ←arrive    leave→
         ↘    ↗
          ●───────●───────●
                  ↑
            (tangent vectors define
             curve direction at point)

Catmull-Rom tangents (symmetric):
         ←─────●─────→
         arrive = -leave

From Neighbors tangents:
         ←prev  next→
             ●
         arrive points from prev
         leave points to next
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to compute tangents for |
| **Overrides : Tangents** | Tangent Factories | Override tangent settings per-point |
| **Overrides : Tangents Start** | Tangent Factories | Override settings for start points |
| **Overrides : Tangents End** | Tangent Factories | Override settings for end points |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Arrive Name</strong> <code>FName</code></summary>

Attribute name for the arrive (incoming) tangent vector.

Default: `ArriveTangent`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Name</strong> <code>FName</code></summary>

Attribute name for the leave (outgoing) tangent vector.

Default: `LeaveTangent`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tangents</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

The algorithm used to compute tangent vectors.

| Option | Description |
|--------|-------------|
| **[Auto](./Tangents/PCGExAutoTangents.md)** | Automatically determine tangents based on path geometry. |
| **[Catmull-Rom](./Tangents/PCGExCatmullRomTangents.md)** | Catmull-Rom spline tangents (smooth, symmetric). |
| **[From Neighbors](./Tangents/PCGExFromNeighborsTangents.md)** | Tangents point directly toward/from neighboring points. |
| **[From Transform](./Tangents/PCGExFromTransformTangents.md)** | Derive tangents from point transforms. |
| **[Zero](./Tangents/PCGExZeroTangents.md)** | Zero-length tangents (sharp corners). |

⚡ PCG Overridable

</details>

<details>
<summary><strong>Start Override</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

Optional tangent method for the path's start point. If not set, uses the main Tangents method.

⚡ PCG Overridable

</details>

<details>
<summary><strong>End Override</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

Optional tangent method for the path's end point. If not set, uses the main Tangents method.

⚡ PCG Overridable

</details>

---

### Scaling

<details>
<summary><strong>Arrive Scale Input</strong> <code>EPCGExInputValueType</code></summary>

Source for the arrive tangent scale factor.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant Arrive Scale value. |
| **Attribute** | Read scale from a point attribute. |

Default: `Constant`

</details>

<details>
<summary><strong>Arrive Scale</strong> <code>double</code></summary>

Scale factor for arrive tangent magnitude. Larger values create wider incoming curves.

Default: `1`

📋 *Visible when Arrive Scale Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Scale Input</strong> <code>EPCGExInputValueType</code></summary>

Source for the leave tangent scale factor.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant Leave Scale value. |
| **Attribute** | Read scale from a point attribute. |

Default: `Constant`

</details>

<details>
<summary><strong>Leave Scale</strong> <code>double</code></summary>

Scale factor for leave tangent magnitude. Larger values create wider outgoing curves.

Default: `1`

📋 *Visible when Leave Scale Input = Constant*

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits path processing settings from its base class.

→ See [Path Processor Settings](../Core/PCGExPathProcessor.md) for: Path handling options.

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsPaths-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/PCGExWriteTangents.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/PCGExWriteTangents.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 10 documented (ArriveName, LeaveName, Tangents, StartTangents, EndTangents, ArriveScaleInput, ArriveScaleConstant, LeaveScaleInput, LeaveScaleConstant)
Inherited Properties: Referenced to UPCGExPathProcessorSettings
Inputs: Points, Overrides (Tangent Factories) x3
Outputs: Points (inherited)
Nested Types: EPCGExInputValueType, UPCGExTangentsInstancedFactory
-->
