---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Nearest Surface'
---

# Sample : Nearest Surface

Find the **closest point on collidable surfaces** (meshes, collision primitives) for each source point.

## Overview

This node performs collision queries to find the nearest surface point for each source point. It uses Unreal's collision system to detect nearby geometry, making it ideal for terrain snapping, surface projection, and mesh-aware placement.

## Key Behavior

```
                    Mesh Surface
    ╱╲              ___________
   ╱  ╲            ╱           ╲
  ╱    ╲__________╱             ╲
 ╱                               ╲

  ● P1            ● P2             ● P3
    │               │ (out of range)
    │               │
    ↓ closest       sampling FAILS
  [HitPoint]
  + Normal
  + Distance
```

**How it works**:
1. Creates a sphere overlap query at each point's location
2. Finds all colliding primitives within `MaxDistance`
3. For each hit, finds the closest point on the collision surface
4. Returns the nearest surface point with normal, distance, and actor data

## Use Cases

- **Terrain snapping**: Project points onto landscape or mesh surfaces
- **Surface placement**: Place objects on walls, floors, or ceilings
- **Distance to mesh**: Calculate how far points are from geometry
- **Inside/outside detection**: Determine if points are inside closed meshes
- **Physical material sampling**: Get physics material at hit location

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points to sample from |
| **Actor References** | Points | Conditional | Points with actor reference paths (when using Actor References mode) |
| **Point Filters** | Filters | No | Filter which source points get processed |

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
| **Actor References** | Sample from actors specified via reference attribute (requires Actor References input) |
| **World Collision** | Sample from world collision geometry using collision settings |

Default: `Actor References`

</details>

<details>
<summary><strong>Actor Reference</strong> <code>FName</code></summary>

Name of the attribute containing actor reference paths. Usually populated from a GetActorData node in point mode.

Default: `ActorReference`

⚡ PCG Overridable
📋 Visible when: `Surface Source == Actor References`

</details>

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum search distance for surface sampling. Points farther than this from any surface will fail sampling.

Default: `1000`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Local Max Distance</strong> <code>bool</code></summary>

Enable per-point maximum distance from an attribute.

Default: `false`

</details>

<details>
<summary><strong>Local Max Distance</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute or property to read the per-point max distance from.

⚡ PCG Overridable
📋 Visible when: `Use Local Max Distance == true`

</details>

### Apply Sampling

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Optionally apply sampled transform data directly to output points. The transform will position the point at the hit location with rotation facing the surface normal.

</details>

### Outputs

All output attributes are optional (toggle + attribute name):

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether a surface was hit |
| **Location** | `FVector` | World position of the closest surface point |
| **LookAt** | `FVector` | Direction from source point to hit point |
| **Normal** | `FVector` | Surface normal at hit point |
| **Distance** | `double` | Distance to the surface |
| **IsInside** | `bool` | Whether the point is inside a closed surface |

**Distance output options**:
- **Normalized**: Output 0-1 range based on max sampled distance
- **OneMinus**: Invert normalized distance
- **Scale**: Multiply output by factor

### Output (Actor Data)

<details>
<summary><strong>Actor Reference</strong></summary>

Write the path to the actor that was hit.

Default Attribute: `ActorReference`

⚡ PCG Overridable

</details>

<details>
<summary><strong>PhysMat</strong></summary>

Write the path to the physical material at the hit location.

Default Attribute: `PhysMat`

⚡ PCG Overridable

</details>

### Collision Settings

<details>
<summary><strong>Collision Settings</strong> <code>FPCGExCollisionDetails</code></summary>

Configure collision query parameters.

| Setting | Description |
|---------|-------------|
| **Collision Type** | Channel, Object Type, or Profile |
| **Collision Channel** | Which trace channel to use |
| **Collision Object Type** | Which object types to collide with |
| **Collision Profile Name** | Named collision profile |
| **Trace Complex** | Use complex (per-poly) collision for more precise normals |

⚡ PCG Overridable

</details>

### Tagging & Forwarding

<details>
<summary><strong>Attributes Forwarding</strong> <code>FPCGExForwardDetails</code></summary>

Forward attributes from actor reference points to output points when using Actor References mode.

📋 Visible when: `Surface Source == Actor References`

</details>

### Tagging

- **Tag If Has Successes**: Add tag if at least one point hit a surface
- **Tag If Has No Successes**: Add tag if no points hit any surfaces

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

Mark filtered-out points as failed sampling.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that failed to hit any surface.

Default: `false`

</details>

<details>
<summary><strong>Process Inside As Failed Samples</strong> <code>bool</code></summary>

Treat points that are inside surfaces as failed samples.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Process Outside As Failed Samples</strong> <code>bool</code></summary>

Treat points that are outside surfaces as failed samples.

Default: `false`

⚡ PCG Overridable

</details>

## Example: Terrain Projection

**Goal**: Project scattered points onto a landscape mesh.

1. Generate scatter points above the terrain
2. Use Sample Nearest Surface with:
   - Surface Source: `World Collision`
   - Collision Channel: `Visibility` or custom terrain channel
   - Max Distance: Height of scatter above terrain
   - Write Location: enabled
   - Apply Sampling: Apply Position
3. Points move down to the terrain surface with correct orientation

## Comparison with Related Nodes

| Node | Input Type | Key Feature |
|------|------------|-------------|
| **Sample Nearest Surface** | Collision geometry | Physics-based surface detection |
| **Sample Surface Guided** | Meshes + Splines | Spline-guided surface projection |
| **Sample Nearest Point** | Points | Point-to-point proximity |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestSurface.h)
