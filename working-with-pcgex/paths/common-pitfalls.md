---
icon: triangle-exclamation
---

# Common Path Pitfalls

Learn from others' mistakes. This page covers the most common issues when working with paths and how to avoid them.

## Pitfall #1: Forgetting to Set IsClosed

**The Problem:**
You create a path manually (not from a PCGEx generator) and it's supposed to be a closed loop, but operations treat it as open.

[[image placeholder: Path that should be closed loop but shows gap between last and first point because IsClosed is false]]

**Why it happens:**
The `PCGEx/IsClosed` attribute isn't set automatically when you create points.

**The Fix:**
Always use **Write Path Properties** after creating paths manually:

[[image placeholder: Node graph showing Point creation → Write Path Properties → Path operations]]

{% hint style="danger" %}
**Critical**\
Missing this step causes operations like Offset and Smooth to skip the last segment, creating gaps in closed loops.
{% endhint %}

---

## Pitfall #2: Path Has Only 1 Point

**The Problem:**
After filtering or splitting, some paths end up with a single point, causing warnings and omitted outputs.

**Why it happens:**
- Aggressive filtering removes most points
- Split operations create degenerate paths
- Input data has isolated single points

**The Fix:**
- Use **Spatial Triage** before path operations to filter out single points
- Enable "Omit Invalid Paths" in path nodes to silently skip them
- Review your filter logic to ensure at least 2 points remain

{% hint style="info" %}
**Check the Log**\
PCGEx will warn you about invalid paths. Don't ignore these warnings - they tell you exactly what's wrong.
{% endhint %}

---

## Pitfall #3: Point Order is Scrambled

**The Problem:**
Path looks correct in the outliner (right point count) but visualizes as a crazy zigzag mess.

[[image placeholder: Intended smooth path vs actual zigzag chaos when points are out of order]]

**Why it happens:**
- Used vanilla PCG nodes that don't preserve order (some filters, unions)
- Manually shuffled points
- Merged paths incorrectly

**The Fix:**
- Be very careful with vanilla PCG operations on paths
- Use **Sort Points** if you need to reorder (but this creates a NEW path based on spatial order)
- When merging, use path-specific nodes like **Stitch** instead of vanilla Merge

{% hint style="warning" %}
**Order is Sacred**\
Once you scramble point order, the "path" is lost. You can't easily reconstruct it - you'd need to rebuild the path from scratch.
{% endhint %}

---

## Pitfall #4: Using Wrong "Up" Vector

**The Problem:**
Offset path goes in bizarre directions, or normals point the wrong way.

[[image placeholder: Path on sloped surface with offset going into the ground because Up Vector is Z instead of surface normal]]

**Why it happens:**
Most path nodes default to Z-up (0, 0, 1), which is wrong for non-horizontal surfaces.

**The Fix:**
Adjust the **Up Vector** setting to match your context:
- **Flat ground:** (0, 0, 1) ✓ Default works
- **Sloped terrain:** Use surface normal
- **Vertical walls:** (0, 1, 0) or (1, 0, 0)
- **Arbitrary surfaces:** Extract normal from collision/mesh

---

## Pitfall #5: Ignoring Segment vs Point Distinction

**The Problem:**
You set an attribute on the last point of an open path, expecting it to affect something, but it doesn't.

**Why it happens:**
Open paths have N-1 segments for N points. The last point's data isn't used because there's no segment starting from it.

[[image placeholder: Open path with 5 points showing only 4 segments using data, last point grayed out]]

**The Fix:**
Understand which operations read from points vs segments:
- **Segment operations** (Offset, Subdivide): Last point ignored on open paths
- **Point operations** (Write Properties, Filters): All points processed

If you need the last point's data used, either:
- Make it a closed loop (if appropriate)
- Extend the path by one point as a "dummy"

---

## Pitfall #6: Closed Loop Has Only 2 Points

**The Problem:**
Operations fail or produce NaN errors with cryptic warnings about "arithmetic anomalies."

**Why it happens:**
Some operations (like computing average normals) try to look at previous/next points. With only 2 points, this creates degenerate cases (all points are both previous and next).

**The Fix:**
Closed loops should have **at least 3 points**. If you have only 2, either:
- Add an intermediate point via Subdivide
- Make it an open path instead

{% hint style="warning" %}
**Mathematical Edge Case**\
While 2-point closed loops are technically valid, they're geometrically degenerate and cause issues in many algorithms.
{% endhint %}

---

## Pitfall #7: Offsetting Creates Self-Intersections

**The Problem:**
After offsetting, the path crosses itself in weird ways.

[[image placeholder: Path with tight corners where offset creates self-intersecting loops]]

**Why it happens:**
Tight corners naturally create overlap when offset. This is geometric reality, not a bug.

**The Fix:**
- Use PCGEx intersection cleanup nodes (separate module)
- Reduce offset distance
- Smooth the path before offsetting to reduce sharp corners
- Use different adjustment modes (Smooth vs Mitre)

---

## Pitfall #8: Assuming Paths Carry Geometry

**The Problem:**
You create a path and wonder why nothing renders.

**Why it happens:**
**Paths are not geometry.** They're just points with implied connections. They don't create meshes on their own.

**The Fix:**
Understand the generation pipeline:
1. **Paths** define the trajectory
2. **Solidify or Spline Mesh nodes** create geometry data
3. **Spawn nodes** actually place meshes

[[image placeholder: Pipeline diagram showing Path → Solidify → Mesh Spawn → Rendered Geometry]]

---

## Pitfall #9: Blending Changes Path Shape

**The Problem:**
Using Blend Path or Smooth changes point positions when you only wanted to blend attributes.

**Why it happens:**
Some blend operations affect both spatial data (position) and attributes.

**The Fix:**
- **Blend Path** blends attributes, not positions (safe)
- **Smooth** changes positions (destructive)
- **Resample** changes positions and point count (destructive)

Read node descriptions carefully to know what's affected.

---

## Pitfall #11: Mixing Path Collections Incorrectly

**The Problem:**
You have multiple paths in one input but operations treat them as one big path.

**Why it happens:**
If you merge paths using vanilla **Merge Points**, they become ONE path data collection with scrambled order.

**The Fix:**
Keep paths separate by maintaining distinct PointIO collections:
- Use path-specific merge/combine operations such as Stitch
- Don't flatten paths with vanilla nodes

[[image placeholder: Correct vs Incorrect merge showing separate path collections maintained vs flattened single collection]]

---

## Pitfall #12: Expecting Closed Loops to Have Direction

**The Problem:**
You offset a closed loop and one side is "inside" when you expected "outside."

**Why it happens:**
Closed loops don't have inherent "inside" or "outside" - it depends on the winding order (clockwise vs counterclockwise).

**The Fix:**
- Use **Reverse Point Order** to flip winding if needed
- Check the "winding" sorting mode if direction matters
- Some nodes have explicit "inside/outside" settings - read carefully

---

## Debugging Checklist

When paths misbehave:

- [ ] Check point count (at least 2?)
- [ ] Verify `PCGEx/IsClosed` is set correctly
- [ ] Visualize the path in editor (does order make sense?)
- [ ] Check for NaN/Inf values in Transform attributes
- [ ] Review the log for PCGEx warnings
- [ ] Verify Up Vector matches your context
- [ ] Confirm you didn't use vanilla nodes that scramble order
- [ ] Check if operation expects open vs closed paths

---

## When to Ask for Help

If you've checked all the above and paths still misbehave:
1. Simplify to minimal repro (single path, one operation)
2. Check if the issue happens with fresh test data
3. Review the node documentation for that specific operation
4. Ask in the community with screenshots of your graph + visualization

Most path issues come down to:
- Wrong topology flag (IsClosed)
- Scrambled point order
- Unrealistic expectations (2-point loops, etc.)

Fix these and 90% of problems disappear.
