---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Line Trace'
---

# Sample : Line Trace

Perform **line traces** from points in a specified direction to find collision surfaces.

## Overview

This node casts rays from each source point in a configurable direction to detect surfaces. Unlike Sample Nearest Surface (which uses sphere overlap), this node uses directional line traces, making it ideal for projecting points onto surfaces, detecting walls, or sampling in specific directions.

## Key Behavior

```
    Origin ●────────────────────────────→ Direction
                          │
                          ↓ Hit Point
                    ┌─────────────┐
                    │   Surface   │
                    └─────────────┘

    Outputs:
    - Hit Location
    - Surface Normal
    - Distance to hit
    - UV Coordinates
    - Face Index
    - Actor/Material references
```

**Key differences from [Sample Nearest Surface](./sample-nearest-surface.md)**:
- Uses **line trace** instead of sphere overlap
- Samples in a **specific direction**
- Can output **UV coordinates** and **face index**
- Supports **vertex color** sampling

## Use Cases

- **Surface projection**: Project points onto surfaces below/above
- **Wall detection**: Find walls in a specific direction
- **Terrain snapping**: Drop points onto terrain
- **UV sampling**: Get UV coordinates at hit locations for texture sampling
- **Material detection**: Identify materials at ray hit points

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points to trace from |
| **Actor References** | Points | Conditional | Points with actor reference paths (when using Actor References mode) |
| **Point Filters** | Filters | No | Filter which source points get processed |
| **Tex Params** | Tex Params | No | Texture parameter factories for material sampling |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled surface data |

## Settings

### Sampling

<details>
<summary><strong>Surface Source</strong> <code>EPCGExSurfaceSource</code></summary>

Where to get surface collision data from.

| Option | Behavior |
|--------|----------|
| **Actor References** | Trace against actors specified via reference attribute |
| **World Collision** | Trace against world collision geometry |

Default: `Actor References`

</details>

<details>
<summary><strong>Actor Reference</strong> <code>FName</code></summary>

Name of the attribute containing actor reference paths.

Default: `ActorReference`

⚡ PCG Overridable
📋 Visible when: `Surface Source == Actor References`

</details>

<details>
<summary><strong>Origin</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The starting point for the trace (usually point position).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The direction to trace in (usually point forward/up/down).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Invert the trace direction.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance Input</strong> <code>EPCGExTraceSampleDistanceInput</code></summary>

How to determine trace distance.

| Option | Behavior |
|--------|----------|
| **Direction Length** | Use the length of the direction vector |
| **Constant** | Use a constant value |
| **Attribute** | Read from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum trace distance.

Default: `1000`

⚡ PCG Overridable
📋 Visible when: `Distance Input == Constant`

</details>

<details>
<summary><strong>Local Max Distance</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read max distance from.

⚡ PCG Overridable
📋 Visible when: `Distance Input == Attribute`

</details>

### Apply Sampling

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Optionally apply sampled transform data directly to output points.

</details>

### Rotation Construction

<details>
<summary><strong>Rotation Construction</strong> <code>EPCGExMakeRotAxis</code></summary>

How to construct hit transform rotation. First value is the impact normal.

Default: `Z`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Cross Axis</strong> <code>FPCGExInputShorthandSelectorDirection</code></summary>

Second value used for constructing rotation.

⚡ PCG Overridable

</details>

### Outputs

All output attributes are optional (toggle + attribute name). All output toggles and attribute names are ⚡ PCG Overridable except where noted:

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether trace hit a surface |
| **Location** | `FVector` | World position of the hit point |
| **LookAt** | `FVector` | Direction from origin to hit |
| **Normal** | `FVector` | Surface normal at hit point |
| **Distance** | `double` | Distance to hit |
| **IsInside** | `bool` | Whether point is inside a surface |
| **UV Coords** | `FVector2D` | UV coordinates at hit (requires complex trace) |
| **Face Index** | `int32` | Index of hit triangle (requires complex trace) |
| **Vertex Color** | `bool` | Write vertex color to point $Color |

**Distance output options** (all ⚡ PCG Overridable):
- **Normalized**: Output 0-1 range
- **OneMinus**: Invert normalized distance
- **Scale**: Multiply output by factor

**UV Coords options** (all ⚡ PCG Overridable):
- **UV Channel**: Which UV channel to sample

**UV Coords Note**: Requires `Project Settings->Physics->Support UV From Hit Results` to be enabled.

### Output (Actor Data)

All actor data outputs are ⚡ PCG Overridable:

| Output | Type | Description |
|--------|------|-------------|
| **Actor Reference** | `FSoftObjectPath` | Path to hit actor |
| **Hit Component** | `FSoftObjectPath` | Path to hit component |
| **PhysMat** | `FSoftObjectPath` | Physical material at hit |
| **RenderMat** | `FSoftObjectPath` | Render material at hit |

**RenderMat options** (all ⚡ PCG Overridable):
- **Material Index**: Which material slot to query
- **Extract Texture Parameters**: Sample texture data from material

### Collision Settings

<details>
<summary><strong>Collision Settings</strong> <code>FPCGExCollisionDetails</code></summary>

Configure collision query parameters.

⚡ PCG Overridable

</details>

### Tagging

- **Tag If Has Successes**: Add tag if at least one trace hit
- **Tag If Has No Successes**: Add tag if no traces hit

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

Mark filtered-out points as failed sampling.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that didn't hit any surface.

Default: `false`

</details>

<details>
<summary><strong>Quiet UV Settings Warning</strong> <code>bool</code></summary>

Suppress warnings about UV query settings.

Default: `false`

</details>

## Example: Drop Points to Terrain

**Goal**: Project scattered points downward onto terrain.

1. Generate scatter points above terrain
2. Use Sample Line Trace with:
   - Origin: `$Position`
   - Direction: `(0, 0, -1)` (down)
   - Max Distance: Height above terrain
   - Apply Sampling: Apply Position
3. Points move down to terrain surface

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleSurfaceGuided.h)
