---
icon: bezier-curve
---

# Tangent Operations

Tangent operations compute arrive and leave tangent vectors for path points. These vectors describe the direction of travel as a path approaches and departs each point, and are essential for spline creation and smooth curve interpolation.

## Understanding Tangents

Each point on a path can have two tangent vectors:

- **Arrive Tangent**: The direction the path is traveling *when arriving* at the point
- **Leave Tangent**: The direction the path is traveling *when leaving* the point

```
                   ╭─→ Leave Tangent
                   │
       ●───────────●───────────●
       │           │
       Arrive ←────╯
       Tangent
```

For smooth curves, arrive and leave tangents are often similar (the path flows through the point). For sharp corners, they can differ significantly.

## Tangent Source Modes

Nodes that use tangents (like [Create Spline](../create-spline.md)) can get tangent data from two sources:

| Source | Description |
|--------|-------------|
| **Attribute** | Read pre-computed tangent vectors from point attributes |
| **In-Place** | Calculate tangents on-the-fly using a tangent operation |

When using **In-Place** mode, you select a tangent operation to compute the vectors.

## Available Operations

| Operation | Behavior |
|-----------|----------|
| [Auto](./auto.md) | Computes tangents from the apex angle between neighbors |
| [Catmull-Rom](./catmull-rom.md) | Classic smooth spline tangents |
| [From Neighbors](./neighbors.md) | Averages direction to adjacent points |
| [From Transform](./transform.md) | Uses point rotation to determine direction |
| [Zero](./zero.md) | Zero-length tangents (sharp corners) |

## Common Configuration

### Scaling

All tangent sources support scaling the output vectors:

<details>
<summary><strong>Arrive Scale</strong> <code>double</code></summary>

Multiplier for arrive tangent length. Can be constant or read from an attribute.

Larger values create wider curves when used with splines.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Scale</strong> <code>double</code></summary>

Multiplier for leave tangent length. Can be constant or read from an attribute.

Default: `1.0`

⚡ PCG Overridable

</details>

### Endpoint Overrides

When using In-Place tangent computation, you can optionally use different operations for the first and last points:

<details>
<summary><strong>Start Override</strong> <code>Tangent Operation (Optional)</code></summary>

Use a different tangent operation for the path's first point. Useful when you want different endpoint behavior (e.g., zero tangent for sharp start, auto for smooth interior).

</details>

<details>
<summary><strong>End Override</strong> <code>Tangent Operation (Optional)</code></summary>

Use a different tangent operation for the path's last point.

</details>

## Nodes That Use Tangents

- [Create Spline](../create-spline.md) - Converts path to spline using tangent data
- [Copy to Paths](../copy-to-paths.md) - Uses tangents for orientation
- [Spline Mesh](../spline-mesh-simple.md) - Tangents control mesh deformation

## Tangent Attributes

When reading tangents from attributes (Source = Attribute):

| Attribute | Type | Description |
|-----------|------|-------------|
| `ArriveTangent` | FVector | Incoming direction vector |
| `LeaveTangent` | FVector | Outgoing direction vector |

These can be written by [Write Tangents](../write-tangents.md) or any operation that computes path direction.

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/)
