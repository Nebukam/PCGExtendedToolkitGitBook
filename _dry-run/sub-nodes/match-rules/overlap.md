---
description: 'In editor :: PCGEx | Match : Match : Overlap'
---

# Overlap

Matches collections whose **bounding boxes intersect**. Supports expansion tolerance and recursive/transitive matching.

```
┌─────────┐
│ Target  │
│    ┌────┼────┐
│    │OVER│    │
└────┼────┘    │
     │Candidate│
     └─────────┘

Bounds overlap → Match!
```

---

## Settings

<details>
<summary><strong>Expansion Mode</strong> <code>EPCGExMatchOverlapExpansionMode</code></summary>

How to adjust bounds before testing overlap.

| Value | Behavior |
|-------|----------|
| **None** | Use bounds as-is |
| **Add** | Add value to extents |
| **Scale** | Multiply bounds by scale factor |

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expansion</strong> <code>FVector</code></summary>

Expansion value per axis. Meaning depends on Expansion Mode:
- **Add**: Units added to each side
- **Scale**: Scale multiplier (1.0 = unchanged)

Can be constant or read from `@Data.Expansion` attribute.

Default: `(1, 1, 1)`

*Visible when Expansion Mode ≠ None*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Min Overlap Ratio</strong> <code>bool</code></summary>

Require a minimum overlap volume ratio for a match.

Default: `false`

</details>

<details>
<summary><strong>Min Overlap Ratio</strong> <code>double</code></summary>

Minimum overlap ratio required (0–1).

Ratio = Overlap Volume / Smallest Box Volume

- `0.0` = Any intersection matches
- `0.5` = At least 50% of smaller box must overlap
- `1.0` = One box must be fully inside the other

Default: `0.5`

*Visible when Use Min Overlap Ratio = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Recursive</strong> <code>bool</code></summary>

Enable transitive matching through overlap chains.

If A overlaps B and B overlaps C, then A, B, and C are all considered matching each other.

Default: `false`

</details>

<details>
<summary><strong>Max Recursion Depth</strong> <code>int32</code></summary>

Maximum number of hops for recursive matching.

- `-1` = Unlimited depth
- `1` = Only direct overlaps
- `2` = Direct + one hop

Default: `-1`

*Visible when Recursive = true*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Uses axis-aligned bounding boxes (AABB)
- Expansion is applied to the **source** bounds during preparation
- Overlap is checked against candidate bounds
- Only Overlap rule supports recursive matching
- Spatial octree is used for efficient overlap queries

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchOverlap.h)
