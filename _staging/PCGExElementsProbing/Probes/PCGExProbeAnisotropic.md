---
icon: puzzle-piece
description: 'Probe : Anisotropic - Probe in 16 directions over the X/Y axis'
---

# Probe : Anisotropic

Probe in 16 directions over the X/Y axis.

## Overview

This per-point probe searches for neighbors in 16 fixed directions around each point, spaced 22.5° apart on the horizontal plane. For each direction, it finds the nearest neighbor within the specified angle tolerance. This creates grid-like or compass-rose connectivity patterns, ideal for structured layouts where connections should follow cardinal and ordinal directions.

## How It Works

1. **Direction Setup**: Uses 16 predefined directions at 22.5° intervals (N, NNE, NE, ENE, E, etc.)
2. **Transform Application**: Optionally rotates directions by the point's transform
3. **Candidate Search**: For each direction, finds candidates within the search radius
4. **Angle Filtering**: Selects the nearest candidate within MaxAngle of the target direction
5. **Edge Creation**: Creates edges to the best match in each direction (up to 16 per point)

#### Usage Notes

- **2D Projection Recommended**: This probe works best with internal 2D projection enabled on Connect Points, ensuring consistent horizontal direction matching
- **Grid Patterns**: Ideal for creating grid-like connectivity on terrain or surfaces where you want structured directional connections
- **Transform Direction**: When enabled, the 16 directions rotate with each point's orientation, useful for aligned patterns on rotated objects

## Behavior

```
16 Direction Probing:

         NNW    N    NNE
           ╲    │    ╱
       NW   ╲   │   ╱   NE
         ╲   ╲  │  ╱   ╱
    WNW ───╲──╲─●─╱──╱─── ENE
             ╲ │ ╱
    W ─────────●───────── E
             ╱ │ ╲
    WSW ───╱──╱─●─╲──╲─── ESE
         ╱   ╱  │  ╲   ╲
       SW   ╱   │   ╲   SE
           ╱    │    ╲
         SSW    S    SSE


    MaxAngle cone per direction:

              │╲    ╱│
              │ ╲  ╱ │   MaxAngle = 5°
              │  ╲╱  │   Searches within ±5° of
              │  ●   │   the target direction
              │  target
```

## Settings

### Directional Configuration

<details>
<summary><strong>Max Angle</strong> <code>double</code></summary>

The maximum angular deviation from each of the 16 target directions to accept a connection. Smaller values create stricter directional alignment; larger values allow more tolerance.

Default: `5`

Range: `0` - `11.25`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

When enabled, rotates the 16 probe directions according to each point's transform. This allows the directional pattern to follow the point's orientation rather than world axes.

Default: `true`

⚡ PCG Overridable

</details>

### Search Radius (Inherited)

<details>
<summary><strong>Search Radius Input</strong> <code>EPCGExInputValueType</code></summary>

Determines whether the search radius is a constant value or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant value specified below |
| **Attribute** | Read the radius from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Search Radius</strong> <code>double</code></summary>

The maximum distance to search for neighbors in each direction.

Default: `100`

📋 *Visible when Search Radius Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Offset</strong> <code>double</code></summary>

Additional offset added to the search radius value.

Default: `0`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Probe** | PCGEx \| Probe | The probe factory to connect to Connect Points |

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsProbing/Public/Probes/PCGExProbeAnisotropic.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (MaxAngle, bTransformDirection)
Inherited Properties: FPCGExProbeConfigBase (SearchRadiusInput, SearchRadius, Offset)
Inputs: None
Outputs: Probe (PCGEx | Probe)
Nested Types: FPCGExProbeConfigAnisotropic
-->
