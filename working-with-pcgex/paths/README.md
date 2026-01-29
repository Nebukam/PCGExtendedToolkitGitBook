---
icon: ellipsis
---

# Paths

**The simplest concept in PCGEx: Paths are just regular points with assumptions about their order.**

That's it. No special data types, no hidden magic. When a PCGEx node says it works with "paths," it's simply saying: _"I'm going to assume these points are connected in the order you gave them to me."_

## What Makes a Path?

A path is a collection of points where:
1. **Order matters** - Point 0 connects to Point 1, Point 1 to Point 2, and so on
2. **Points can be open or closed** - Like a line (open) or a circle (closed loop)
3. **Each point represents a segment** - The segment's data comes from its starting point

[[image placeholder: Simple diagram showing 5 numbered points connected by lines, with labels "Open Path" on left and "Closed Loop" on right showing last point connecting back to first]]

That's literally all there is to it. **Your spline sampler output? Already a valid path.** A line of points from a grid? Valid path. Random points you've sorted by distance? Also a valid path.

## Why "Paths" Instead of "Points"?

When you think of standard PCG points, you think about their position, rotation, scale, and attributes. Each point exists independently in space.

When you think of paths, you're adding one more layer: **"These points form a journey."** This mental shift unlocks operations like:
- "Smooth this journey" (smooth the line)
- "Offset this journey to the side" (create parallel paths)
- "How long is this journey?" (compute cumulative distance)
- "Make this journey's spacing uniform" (resample)

[[image placeholder: Side-by-side comparison. Left: scattered points labeled "Just Points - No Relationship". Right: same points numbered and connected with arrows labeled "Path - Connected Journey"]]

All of these operations would be meaningless on random unordered points, but make perfect sense when you think of points as a path.

## The Path Mental Model

Think of a path like **reading a book**:
- Each point is a word
- The order of words matters (you read left to right, top to bottom)
- Changing the order changes the meaning
- You can read it once (open path) or loop back to the beginning (closed path)

## Key Rules to Remember

{% hint style="success" %}
**Rule #1: A path needs at least 2 points**\
A single point can't form a journey. Most path nodes will skip or omit single-point paths.
{% endhint %}

{% hint style="info" %}
**Rule #2: Point order is sacred**\
Shuffling points breaks the path. If you need to reorder, use path-specific operations like Shift or Reverse.
{% endhint %}

{% hint style="info" %}
**Rule #3: Closed loops have one more segment**\
An open path with 5 points has 4 segments (0→1, 1→2, 2→3, 3→4)\
A closed path with 5 points has 5 segments (includes 4→0)
{% endhint %}

{% hint style="warning" %}
**Edge Case: 2-point closed loops**\
Closed paths with only 2 points can create mathematical anomalies in some operations (like calculating average normals). Keep at least 3 points in closed loops.
{% endhint %}

## What Can You Do With Paths?

Paths enable a whole category of operations:

**Geometric Operations:**
- Offset paths sideways (create parallel lines)
- Subdivide segments (add detail)
- Smooth the path (reduce noise)
- Resample for uniform spacing

**Data Operations:**
- Blend attributes from start to end
- Compute tangents and normals
- Calculate cumulative distances
- Roll attributes along the path

**Topology Operations:**
- Split paths at specific points
- Stitch multiple paths together
- Reverse direction
- Create closed loops from open paths

**Generation:**
- Convert paths to splines
- Generate geometry along paths
- Create clusters from path networks

## From Paths to Everything Else

Paths are often the **bridge** between different PCGEx systems:
- **Paths → Clusters:** Connect path endpoints to form networks
- **Clusters → Paths:** Extract paths from graph structures via pathfinding
- **Paths → Splines:** Convert for use with spline-based systems
- **Paths → Geometry:** Extrude, sweep, or trace geometry

## Dive Deeper

Ready to learn more? Check out these pages:

{% content-ref url="paths-fundamentals.md" %}
[paths-fundamentals.md](paths-fundamentals.md)
{% endcontent-ref %}

{% content-ref url="common-operations.md" %}
[common-operations.md](common-operations.md)
{% endcontent-ref %}

{% content-ref url="common-pitfalls.md" %}
[common-pitfalls.md](common-pitfalls.md)
{% endcontent-ref %}

## Visual Debugging

PCGEx includes utilities to visualize paths in the editor, which is incredibly helpful when building complex path networks.

[[image placeholder: Editor viewport showing path visualization with numbered points and connecting lines, with arrows indicating direction]]

{% hint style="success" %}
**Pro Tip:** Always visualize your paths when debugging. What looks correct in the outliner might reveal issues when you see the actual connections in 3D space.
{% endhint %}
