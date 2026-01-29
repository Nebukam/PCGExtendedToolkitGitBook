---
icon: wrench
---

# Common Path Operations

This page covers the most frequently used path operations and when to use them. Think of this as your path manipulation cookbook.

## Geometric Transformations

### Path Offset

**What it does:** Moves the entire path sideways (perpendicular to its direction)

[[image placeholder: Original path shown in blue, offset path shown in orange parallel to original, with arrows showing perpendicular offset direction]]

**When to use:**
- Creating parallel roads/sidewalks
- Generating borders around paths
- Creating "inner" and "outer" boundaries

**Key Settings:**
- **Offset Distance:** How far to move (positive = one direction, negative = opposite)
- **Adjustment:** How to handle tight corners (smooth, mitre, etc.)
- **Up Vector:** Defines which way is "perpendicular"

{% hint style="info" %}
**Use Case:** Road Generation\
Offset a center path twice (+width/2 and -width/2) to create road edges, then use for mesh placement.
{% endhint %}

---

### Path Resample

**What it does:** Changes point spacing to be uniform

[[image placeholder: Before - path with irregular spacing between points. After - same path with evenly spaced points]]

**When to use:**
- Ensuring consistent spacing for spawning objects
- Preparing paths for even mesh distribution
- Cleaning up noisy input data

**Key Modes:**
- **Sweep:** Keeps point count constant, redistributes
- **Redistribute:** Adds/removes points to achieve target spacing

{% hint style="success" %}
**Pro Tip**\
Resample before using paths with spline mesh components to avoid stretching artifacts.
{% endhint %}

---

### Subdivide

**What it does:** Adds points between existing points

[[image placeholder: Path with 4 points becoming path with 7 points, showing inserted points between originals]]

**When to use:**
- Adding detail to smooth curves
- Preparing for per-segment operations
- Increasing point density for attribute interpolation

**Methods:**
- **Count:** Add N points per segment
- **Distance:** Add points every X units
- **Manhattan Distance:** Use taxicab distance metric

---

### Smooth

**What it does:** Reduces sharp angles and noise in the path

[[image placeholder: Jagged zigzag path on left becoming smooth curved path on right]]

**When to use:**
- Cleaning up procedurally generated paths
- Making hard-edged paths more organic
- Reducing noise from sampling

**Algorithms:**
- **Moving Average:** Simple averaging of neighbors
- **Radius-Based:** Weight by distance
- **Custom:** Advanced control

{% hint style="warning" %}
**Smoothing Changes Length**\
Smoothing usually shortens paths by cutting corners. If exact length matters, resample after smoothing.
{% endhint %}

---

### Solidify

**What it does:** Creates oriented bounding boxes along the path for mesh generation

[[image placeholder: Path with boxes oriented along its direction, showing how each segment becomes a 3D frame]]

**When to use:**
- Preparing for Static Mesh spawning along paths
- Creating road/pipe geometry
- Any extrusion-like operation

---

## Point Manipulation

### Split

**What it does:** Breaks one path into multiple paths at specified points

[[image placeholder: Single path with marked split points becoming 3 separate paths]]

**When to use:**
- Dividing paths by filters (e.g., split at intersections)
- Creating branches
- Partitioning paths by attribute values

**Split Actions:**
- **Split:** Duplicate point at split location (both paths include it)
- **Remove:** Delete the split point entirely
- **Partition:** Separate into independent paths

---

### Shift

**What it does:** Rotates the point order around the path (like rotating a carousel)

[[image placeholder: Closed loop path showing point indices rotating - point 0 becomes point 3, etc.]]

**When to use:**
- Aligning closed loops to start at specific points
- Offsetting where attributes begin
- Randomizing start points for variation

**Modes:**
- **Discrete:** Shift by exact index count
- **Relative:** Shift by fraction of total points
- **Filter-based:** Shift to first point matching filter

{% hint style="info" %}
Only makes sense for closed loops. Open paths rarely need shifting.
{% endhint %}

---

### Reverse Point Order

**What it does:** Flips the path direction (point 0 becomes last, last becomes point 0)

[[image placeholder: Path with numbered points and arrows showing reversed direction]]

**When to use:**
- Fixing paths that go the wrong direction
- Matching direction with other paths for blending
- Reversing offset/blend operations

---

### Fuse Collinear

**What it does:** Removes points that lie on straight lines between neighbors

[[image placeholder: Path with 7 points where middle points on straight sections are removed, resulting in 4 points]]

**When to use:**
- Simplifying over-sampled paths
- Reducing point count for performance
- Cleaning up programmatically generated paths

---

## Path Blending & Interpolation

### Blend Path

**What it does:** Interpolates attribute values from start to end of path

[[image placeholder: Path with gradient color from blue (start) to red (end), showing smooth attribute transition]]

**When to use:**
- Creating gradients along paths
- Transitioning between attribute states
- Smoothly varying properties (scale, color, etc.)

---

### Stitch

**What it does:** Connects endpoints of multiple paths with transition segments

[[image placeholder: Three separate paths with gaps, becoming connected with interpolated transition segments]]

**When to use:**
- Combining path segments into continuous paths
- Creating smooth transitions between paths
- Joining procedurally generated segments

---

## Topology Operations

### Write Path Properties

**What it does:** Sets path metadata (IsClosed, IsHole)

**When to use:**
- After creating paths manually
- Converting open paths to closed loops
- Marking polygon holes

{% hint style="danger" %}
**Critical Node**\
Always use this after creating paths from non-PCGEx sources. Many operations depend on correct topology flags.
{% endhint %}

---

### Create Spline

**What it does:** Converts path points to Unreal Engine spline actors

[[image placeholder: PCG path points in editor becoming spline component with handles]]

**When to use:**
- Handing off to spline-based systems (Landscape Splines, Blueprint splines)
- Using PCG Grammar nodes
- Creating editable splines for artists

---

## Spatial Operations

### Path Crossings

**What it does:** Finds where paths intersect each other

[[image placeholder: Two crossing paths with intersection points marked with red dots]]

**When to use:**
- Building graph structures from path intersections
- Creating connection points
- Detecting overlaps for cleanup

---

### Bounds Path Intersection

**What it does:** Finds points near paths within a distance threshold

[[image placeholder: Path with scattered points nearby, with points within threshold highlighted]]

**When to use:**
- Snapping points to paths
- Finding objects near paths
- Spatial queries for path-based logic

---

## Attribute Operations

### Attribute Rolling

**What it does:** Shifts attribute values along the path like a circular buffer

[[image placeholder: Path with colored points showing attribute values rotating along the path direction]]

**When to use:**
- Animating attributes along paths
- Creating wave-like patterns
- Offsetting procedural values

---

### Write Tangents

**What it does:** Computes and writes tangent vectors to attributes

**When to use:**
- Orienting objects along paths
- Creating custom orientation logic
- Exporting tangent data for other systems

---

## Which Node Do I Need?

Quick reference table:

| I want to... | Use this node |
|--------------|---------------|
| Make path wider/narrower | Path Offset |
| Fix irregular spacing | Path Resample |
| Add more detail | Subdivide |
| Remove noise/sharp corners | Smooth |
| Create geometry boxes | Solidify |
| Break path into pieces | Split |
| Change path direction | Reverse Point Order |
| Remove extra points on straight lines | Fuse Collinear |
| Combine multiple paths | Stitch |
| Mark as closed loop | Write Path Properties |
| Find where paths cross | Path Crossings |
| Fade attributes along path | Blend Path |

---

## Combining Operations

Real-world workflows usually combine multiple operations:

### Example: Road Generation
1. **Input:** Rough centerline path
2. **Fuse Collinear:** Remove unnecessary points
3. **Smooth:** Round corners
4. **Resample:** Ensure even spacing
5. **Offset:** Create left and right edges
6. **Solidify:** Generate road mesh bounds

### Example: Organic Cables
1. **Input:** Straight connection path
2. **Subdivide:** Add detail points
3. **Add procedural noise** (via attributes)
4. **Smooth:** Soften the noise
5. **Create Spline:** Hand off to spline mesh

---

## Next: Avoiding Common Mistakes

{% content-ref url="common-pitfalls.md" %}
[common-pitfalls.md](common-pitfalls.md)
{% endcontent-ref %}
