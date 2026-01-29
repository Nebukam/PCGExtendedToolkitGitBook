---
icon: plus-circle
description: 'In editor :: PCGEx | Path : Insert'
---

# Insert

Adds external points into a path at their nearest positions.

## Overview

Insert takes points from a secondary input and integrates them into existing paths at their closest positions along the path. Use it to add waypoints, merge point sets, or insert landmarks into path sequences.

## How It Works

1. **For each insertion point**, find nearest position on path
2. **Determine insertion index** (between which existing points)
3. **Insert point** at calculated position
4. **Optionally snap** insertion point to path

## Settings

### Insertion

<details>
<summary><strong>Insertion Mode</strong> <code>Nearest | Range</code></summary>

How to match insertion points to paths:

| Option | Behavior |
|--------|----------|
| **Nearest** | Insert at single nearest position |
| **Range** | Insert at all positions within range |

Default: `Nearest`

</details>

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum distance for insertion. Points farther than this from any path are not inserted.

Default: `1000`

⚡ PCG Overridable

</details>

### Positioning

<details>
<summary><strong>Snap to Path</strong> <code>bool</code></summary>

Move insertion points to lie exactly on the path (at their nearest position) rather than keeping their original positions.

Default: Disabled

</details>

<details>
<summary><strong>Preserve Order</strong> <code>bool</code></summary>

Maintain the relative order of insertion points along the path. When multiple points insert into the same segment, they're ordered by their path position.

Default: Enabled

</details>

### Filtering

<details>
<summary><strong>Allow Duplicates</strong> <code>bool</code></summary>

Allow the same insertion point to be added to multiple paths (if within range of several).

Default: Disabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Existing paths to insert into |
| **Insert** | Points | Points to insert |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths with inserted points |

## Examples

**Add waypoints to path**:
- Insertion Mode: `Nearest`
- Snap to Path: Disabled
- Waypoints added at their natural positions

**Merge points onto path line**:
- Insertion Mode: `Nearest`
- Snap to Path: Enabled
- Points projected onto path

**Insert within range only**:
- Max Distance: `200`
- Only nearby points are inserted

## Use Cases

- **Waypoint addition**: Add predetermined stops to routes
- **Landmark integration**: Insert points of interest along paths
- **Data merging**: Combine separate point sets with paths
- **Path enrichment**: Add detail points from other sources

## Related

### Path Operations
- [Stitch](./stitch.md) - Connect paths at endpoints
- [Subdivide](./subdivide.md) - Add interpolated points

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExInsertPath.cpp)
