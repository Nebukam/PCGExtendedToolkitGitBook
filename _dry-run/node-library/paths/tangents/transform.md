---
icon: bezier-curve
---

# From Transform

Uses the point's rotation to determine tangent direction.

## Overview

From Transform extracts the tangent direction from each point's transform rotation, using a specified axis. This ignores the path geometry entirely—tangents are based solely on how points are oriented. Useful when points have been pre-oriented (e.g., by the Orient node) and you want tangents to match that orientation.

## How It Works

For each point:

1. **Get the point's rotation** from its transform
2. **Extract the specified axis** direction from that rotation
3. **Invert the direction** (tangents point along the path, not away)
4. **Apply scaling** for arrive and leave

Both arrive and leave tangents use the same direction (from the point's orientation).

## Settings

<details>
<summary><strong>Axis</strong> <code>Forward | Right | Up | Backward | Left | Down</code></summary>

Which axis of the point's rotation to use as the tangent direction.

| Axis | Direction |
|------|-----------|
| **Forward** | Point's local X+ axis |
| **Right** | Point's local Y+ axis |
| **Up** | Point's local Z+ axis |
| **Backward** | Point's local X- axis |
| **Left** | Point's local Y- axis |
| **Down** | Point's local Z- axis |

Default: `Forward`

</details>

## Use Cases

- **Pre-oriented points**: When points already have meaningful rotations
- **After Orient node**: Use the computed orientation as tangent direction
- **Custom orientation data**: Rotation set by external process or imported data

## Compared To

- **Auto/Catmull-Rom/Neighbors**: These compute tangents from point positions; From Transform uses point rotations
- Use geometry-based tangents when path shape matters; use transform-based when orientation matters

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Tangents/PCGExTangentsFromTransform.h)
