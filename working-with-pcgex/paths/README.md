---
icon: draw-polygon
---

# Paths

**Paths are just ordered points.** No special data types, no hidden magic. When a PCGEx node says it works with "paths," it means: _"I'll assume these points are connected in the order you gave them."_

Your spline sampler output? Already a valid path. A line of points from a grid? Valid path. Sorted points from a spatial query? Also a valid path.

### Everything Is Points

A path is represented as:

```actionscript-3
Path = {
    Points: [P0, P1, P2, P3, P4]
    IsClosedLoop: true/false
}
```

The points are regular PCG points with positions, attributes, and transforms. What makes them a "path" is that operations interpret them in sequence: P0 connects to P1, P1 to P2, and so on.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Points numbered 0-4 connected by lines showing their order</p></figcaption></figure>

Since paths are just points, vanilla PCG nodes work on path data, path operations work on any ordered point collection, and no special handling is needed to pass paths between nodes.

{% hint style="info" %}
When you see a "Paths" input pin, it expects ordered points. The label is semantic: the pin accepts point data and interprets it as paths.
{% endhint %}

### Open vs Closed Topology

Paths have two topology modes controlled by the `@Data.IsClosed` attribute:

#### Open Paths

* Distinct start point (P0) and end point (last)
* Number of segments = number of points - 1
* Last point doesn't connect back

#### Closed Paths (Loops)

* No distinct start or end (wraps around)
* Number of segments = number of points
* Last point connects back to first

This flag affects how operations behave. An offset operation on an open path handles endpoints differently than on a closed path. A subdivision operation adds different point counts.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Side-by-side showing open path (line with endpoints) vs closed path (complete loop)</p></figcaption></figure>

### Path Direction

Point order implies direction: P0 → P1 → P2 → P3.

Direction affects:

* **Tangent vectors**: Point forward along the path
* **Normal vectors**: Point perpendicular to the path
* **Offset operations**: "Left" vs "right" depends on direction
* **Blending**: Attributes interpolate from start to end

To reverse direction without moving points, use **Reverse Point Order**.

### Tangents and Normals

Path operations often compute tangent and normal vectors:

**Tangent** (forward direction):

* Start point: Direction toward next point
* Middle points: Averaged direction between neighbors
* End point: Direction from previous point

**Normal** (perpendicular):

* Computed from tangent and an "up" vector
* Most path nodes default to Z-up
* Adjust up vector when working with non-horizontal paths

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Path showing tangent arrows and normal arrows at each point</p></figcaption></figure>

### Path Metadata

Topology information is stored in attributes:

| Attribute        | Type | Purpose                   |
| ---------------- | ---- | ------------------------- |
| `@Data.IsClosed` | Bool | Marks path as closed loop |
| `@Data.IsHole`   | Bool | Used in polygon contexts  |

These are regular attributes readable and writable by standard PCG nodes. If unset, operations default to treating paths as open.

{% hint style="warning" %}
When creating paths from non-PCGEx sources, set `@Data.IsClosed` explicitly for closed loops. Operations depend on correct topology flags. No attribute is treated as open (`IsClosed = false`).
{% endhint %}

### Path Collections

A single output pin can carry multiple paths. Each path is a separate point collection maintaining its own order. Operations process paths in parallel while preserving their independence.

### In This Section

* Segments vs Points - The segment mental model for understanding path operations
* Common Operations - Categories of path manipulation

### Related

**Concepts:**

* Clusters - The other core data structure
* Cluster-Path Interop - Converting between paths and clusters

**Node Library:**

* Path Nodes - Complete path operation reference
