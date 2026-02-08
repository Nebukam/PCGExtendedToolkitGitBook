---
icon: sliders-simple
---

# UVW

Configures a position within bounds using normalized UVW coordinates.

### Overview

This settings block defines a position within a bounding box using normalized coordinates (0-1 range). U, V, and W correspond to the X, Y, and Z axes respectively. A value of 0 represents the minimum extent, 0.5 the center, and 1 the maximum extent. Each axis can use a constant value or read from an attribute for per-point variation.

### How It Works

1. **Select Bounds Source**: Choose which bounds representation to use
2. **Set UVW Values**: Define position along each axis (0-1 normalized)
3. **Compute Position**: The final world position is calculated from bounds and UVW

### Behavior

```
Bounds: Min(-50, -50, 0) to Max(50, 50, 100)

UVW Coordinates → World Position:
┌─────────────────────────────────────────┐
│ (0, 0, 0)      → (-50, -50, 0)   Min    │
│ (0.5, 0.5, 0.5)→ (0, 0, 50)     Center  │
│ (1, 1, 1)      → (50, 50, 100)   Max    │
│ (0.5, 0.5, 0)  → (0, 0, 0)      Bottom  │
│ (0, 0.5, 0.5)  → (-50, 0, 50)   Left    │
└─────────────────────────────────────────┘

        W (Z)
        ↑    (1,1,1)
        │   ╱
        │  ╱
        │ ╱
(0,0,0) └─────→ U (X)
       ╱
      ╱
     V (Y)
```

### Settings

<details>

<summary><strong>Bounds Reference</strong> <code>EPCGExPointBoundsSource</code></summary>

Determines which bounds representation is used for UVW calculations.

| Option             | Description                                    |
| ------------------ | ---------------------------------------------- |
| **Scaled Bounds**  | Uses bounds multiplied by point scale          |
| **Density Bounds** | Uses bounds derived from point density         |
| **Bounds**         | Uses raw, unmodified bounds                    |
| **Center**         | Uses only the center point (UVW has no effect) |

Default: `ScaledBounds`

⚡ PCG Overridable

</details>

<details>

<summary><strong>U Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the U (X-axis) value is a constant or read from an attribute.

Default: `Constant`

</details>

<details>

<summary><strong>U</strong> <code>double</code></summary>

The normalized position along the X axis. 0 = min, 0.5 = center, 1 = max.

Default: `0`

📋 _Visible when U Input = Constant_

⚡ PCG Overridable

</details>

<details>

<summary><strong>V Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the V (Y-axis) value is a constant or read from an attribute.

Default: `Constant`

</details>

<details>

<summary><strong>V</strong> <code>double</code></summary>

The normalized position along the Y axis. 0 = min, 0.5 = center, 1 = max.

Default: `0`

📋 _Visible when V Input = Constant_

⚡ PCG Overridable

</details>

<details>

<summary><strong>W Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the W (Z-axis) value is a constant or read from an attribute.

Default: `Constant`

</details>

<details>

<summary><strong>W</strong> <code>double</code></summary>

The normalized position along the Z axis. 0 = min, 0.5 = center, 1 = max.

Default: `0`

📋 _Visible when W Input = Constant_

⚡ PCG Overridable

</details>

***

📦 **Module**: `PCGExCore` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Math/PCGExUVW.h)
