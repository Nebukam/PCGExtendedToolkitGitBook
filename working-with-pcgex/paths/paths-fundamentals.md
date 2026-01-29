---
icon: book-open
---

# Path Fundamentals

Now that you understand paths are "just ordered points," let's dig into the practical details of how they work in PCGEx.

## Anatomy of a Path

A path is represented internally by a simple structure:

```
Path = {
    Points: [P0, P1, P2, P3, P4]
    IsClosedLoop: true/false
}
```

That's it. **No special data types.** The "magic" is in how nodes interpret this data.

## Segments vs Points

This is a critical mental model: **Paths think in segments, not just points.**

[[image placeholder: Diagram showing 4 points (P0-P3) with 3 segments labeled S0, S1, S2. Each segment shows it "reads data from its start point"]]

When a path operation processes "segments":
- **Segment 0** uses data from **Point 0** (the start)
- **Segment 1** uses data from **Point 1**
- **Segment 2** uses data from **Point 2**

### Why Does This Matter?

Consider an "offset path" operation with per-point offset distances:
- Point 0 has offset = 10
- Point 1 has offset = 20
- Point 2 has offset = 5

The operation will offset:
- Segment 0 by 10 units (using Point 0's value)
- Segment 1 by 20 units (using Point 1's value)
- Segment 2 by 5 units (using Point 2's value)

Understanding this prevents confusion when attributes don't seem to apply "to the right place."

## Open vs Closed Topology

The `IsClosedLoop` flag fundamentally changes path behavior:

### Open Path (IsClosedLoop = false)

[[image placeholder: Linear path with 5 points, start labeled with green circle, end with red circle]]

- Has distinct start and end points
- Number of segments = Number of points - 1
- Last point doesn't connect back
- Common for: roads, rivers, cables

### Closed Loop (IsClosedLoop = true)

[[image placeholder: Circular path with 5 points, no distinct start/end, arrow showing loop direction]]

- No distinct start or end (wraps around)
- Number of segments = Number of points
- Last point connects to first
- Common for: rings, loops, closed shapes

{% hint style="info" %}
**Setting the Topology**\
Use the **Write Path Properties** node to mark paths as closed or open. Many path operations check this flag to adjust their behavior.
{% endhint %}

## Path Metadata

Paths store their topology information in standard PCG attributes:

| Attribute | Type | Purpose |
|-----------|------|---------|
| `PCGEx/IsClosed` | Bool | Marks path as closed loop |
| `PCGEx/IsHole` | Bool | Used in polygon contexts |

These are regular attributes you can read and write with standard PCG nodes, but **path nodes rely on these being set correctly.** If these attributes aren't set, they are read as if their value is `false`.

{% hint style="warning" %}
**Don't Skip This Step**\
If you create paths manually (not from PCGEx generators), make sure to set `PCGEx/IsClosed` using Add Attribute. Otherwise, nodes will default to open paths.
{% endhint %}

TBD : Spline Copy Attribute @Data.$IsClosed -> @Data.IsClosed

## Path Direction

Paths have an implicit direction based on point order:

[[image placeholder: Path with points numbered 0-4, arrows between points showing direction of travel]]

Direction matters for:
- **Tangent vectors** - point forward along the path
- **Normal vectors** - point perpendicular to the direction
- **Offset operations** - "left" vs "right" depends on direction
- **Blending operations** - attributes interpolate from start to end

### Reversing Direction

Use the **Reverse Point Order** node to flip the path direction without moving points:

[[image placeholder: Before/After comparison showing same geometric path but with reversed point numbering and arrow directions]]

## Tangents and Normals

Path operations often need to know:
- **Where the path is going** (tangent/forward vector)
- **Which way is "up"** (for computing perpendicular directions)

### Tangents (Forward Direction)

For each point, the tangent represents the path's direction at that location:
- **Start point:** Direction toward next point
- **Middle points:** Average of direction from previous and direction to next
- **End point:** Direction from previous point

[[image placeholder: Path showing tangent vectors as arrows at each point, with middle points showing averaged direction]]

### Normals (Perpendicular Direction)

Normals are perpendicular to the tangent. To compute them, PCGEx needs an "up" vector:

[[image placeholder: 3D path showing tangent (red), up vector (green), and computed normal (blue) at a point, forming a coordinate frame]]

Most path nodes have an **Up Vector** setting (defaults to Z-up) used for these calculations.

{% hint style="success" %}
**Pro Tip**\
When working with paths on slopes or walls, adjust the Up Vector to match your surface normal for better results.
{% endhint %}

## Edge Extras (Computed Data)

Some path operations compute and cache additional data per-segment:
- **Edge Length** - Distance between points
- **Cumulative Length** - Total distance from start
- **Half Angle** - Angle between incoming and outgoing directions
- **Custom Data** - Operation-specific values

You don't need to worry about these - they're computed automatically when needed. Just know that some operations are "smarter" because they pre-calculate this information.

## Path Collections

Just like regular PCG, you can have **multiple paths in one pin**:

[[image placeholder: PCG node with one output pin connecting to multiple path visualizations in the viewport]]

Each path is stored as a separate **PointIO collection**. This means:
- You can process many paths in parallel
- Each path maintains its own point order
- Operations can work per-path or across paths

## Working with Attributes

Remember: **Paths are just points.** All your standard PCG attributes work:
- Position, Rotation, Scale (stored in Transform)
- Color, Density, custom attributes
- You can use vanilla PCG nodes to modify attributes

The difference is path nodes will **read attributes in order** when processing segments.

### Example: Per-Point Offset

If you have an attribute `OffsetDistance` on each point:

[[image placeholder: Path with points colored by gradient (blue=small, red=large) showing varying offset distances creating a curved result]]

Path nodes will use each point's value when processing that segment, creating varying behavior along the path.

## Path Validation

PCGEx automatically validates paths:
- **Too few points?** Skipped or omitted (with warning)
- **Invalid topology?** Fixed or flagged
- **NaN/Inf values?** Caught and reported

Most of the time, you don't need to think about this. But if paths mysteriously disappear, check the log - PCGEx tells you why.

{% hint style="warning" %}
**Minimum Point Count**\
Always ensure paths have at least 2 points. Single-point "paths" are meaningless and will be filtered out.
{% endhint %}

## Next Steps

Now that you understand the fundamentals, explore what you can do with paths:

{% content-ref url="common-operations.md" %}
[common-operations.md](common-operations.md)
{% endcontent-ref %}
