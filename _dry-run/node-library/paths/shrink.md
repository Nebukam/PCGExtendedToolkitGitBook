---
icon: compress-alt
description: 'In editor :: PCGEx | Path : Shrink'
---

# Shrink

Trims a path from its beginning and/or end.

## Overview

Shrink removes points from the start and end of a path, effectively shortening it. Use it to create gaps, trim overhanging segments, or adjust path length after other operations.

## Settings

### Endpoint Selection

<details>
<summary><strong>Shrink Endpoint</strong> <code>Start and End | Start | End</code></summary>

Which endpoints to shrink.

Default: `Start and End`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Settings Mode</strong> <code>Shared | Separate</code></summary>

Whether both endpoints use the same settings or separate settings.

Default: `Shared`

⚡ PCG Overridable

</details>

### Shrink Mode

<details>
<summary><strong>Shrink Mode</strong> <code>Count | Distance</code></summary>

How to determine shrink amount:

| Option | Behavior |
|--------|----------|
| **Count** | Remove specific number of points |
| **Distance** | Trim by world units along the path |

Default: `Distance`

⚡ PCG Overridable

</details>

### Distance Settings (when Shrink Mode is Distance)

<details>
<summary><strong>Amount Input</strong> <code>Constant | Attribute</code></summary>

Whether the distance is a constant or read from an attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance</strong> <code>double</code></summary>

Distance to shrink the path endpoint by.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Cut Type</strong> <code>New Point | Previous (Ceil) | Next (Floor) | Closest (Round)</code></summary>

How to handle the cut point when shrinking by distance:

| Option | Behavior |
|--------|----------|
| **New Point** | Create a new interpolated point at exact cut position |
| **Previous (Ceil)** | Keep the previous point before the cut |
| **Next (Floor)** | Keep the next point after the cut |
| **Closest (Round)** | Keep whichever point is closest to the cut |

Default: `New Point`

⚡ PCG Overridable

</details>

### Count Settings (when Shrink Mode is Count)

<details>
<summary><strong>Value Source</strong> <code>Constant | Attribute</code></summary>

Whether the count is a constant or read from an attribute.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Count</strong> <code>int32</code></summary>

Number of points to remove from the path endpoint.

Default: `10`

⚡ PCG Overridable

</details>

### Additional Settings

<details>
<summary><strong>Endpoints Ignore Stop Conditions</strong> <code>bool</code></summary>

If enabled, endpoint points themselves won't trigger stop conditions.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve First Metadata</strong> <code>bool</code></summary>

The new start point inherits metadata from the original first point.

Default: Disabled

</details>

<details>
<summary><strong>Preserve Last Metadata</strong> <code>bool</code></summary>

The new end point inherits metadata from the original last point.

Default: Disabled

</details>

<details>
<summary><strong>Quiet Closed Loop Warning</strong> <code>bool</code></summary>

Suppress warning when attempting to shrink a closed loop path.

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to shrink |
| **Stop Conditions** | Filters | Optional filters that stop shrinking at matching points |

## Examples

**Trim 50 units from each end**:
- Shrink Mode: `Distance`
- Distance: `50`
- Shrink Endpoint: `Start and End`

**Remove first and last 3 points**:
- Shrink Mode: `Count`
- Count: `3`

**Only trim the start**:
- Shrink Endpoint: `Start`
- Distance: `100`

**Different amounts per endpoint**:
- Shrink Endpoint: `Start and End`
- Settings Mode: `Separate`
- Configure Primary and Secondary details separately

## Use Cases

- **Create gaps**: Trim ends where paths meet other geometry
- **Offset from landmarks**: Start/end path away from specific points
- **Remove artifacts**: Clean up unwanted points at path extremities
- **Adjust after generation**: Fine-tune path length post-creation

## Related

### Path Transformation
- [Split](./split.md) - Divide path at arbitrary points (not just ends)
- [Slide](./slide.md) - Move points along path without removing

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathShrink.cpp)
