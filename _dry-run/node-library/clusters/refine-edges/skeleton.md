---
icon: diagram-project
description: 'Refine : β Skeleton'
---

# Refine : β Skeleton

Generalized empty region test using **configurable Beta parameter** to control the shape and size of the forbidden region.

## Overview

The β (Beta) Skeleton is a family of graphs parameterized by a value β. It generalizes the Gabriel graph (β=1) and Relative Neighborhood Graph by varying the shape and size of the empty region that must contain no vertices for an edge to be kept.

## Key Behavior

The shape of the forbidden region changes based on Beta:

```
β ≤ 1 (Lune-based):          β > 1 (Circle-based):

    ╭──────╮                      ╭─────╮
   ╱   ○    ╲                    ○       ○
  │    ↑     │                  ╱ ╲     ╱ ╲
A ●────┼─────● B             A ●───┼───● B
  │    ↓     │                  ╲ ╱     ╲ ╱
   ╲   ○    ╱                    ○       ○
    ╰──────╯                      ╰─────╯

Intersection of two              Two circles with
circles through A,B              centers offset by β
```

**Beta values**:
- **β = 1**: Equivalent to Gabriel graph
- **β < 1**: Smaller lune, denser graph (more edges kept)
- **β > 1**: Larger circles, sparser graph (more edges removed)

## How It Works

### For β ≤ 1 (Lune Test)
1. **Compute lune**: Intersection of two circles passing through edge endpoints
2. **Scale by β**: Lune size is scaled by 1/β
3. **Test**: Edge kept if lune contains no other vertices

### For β > 1 (Circle Test)
1. **Compute circles**: Two circles centered at distance β from edge midpoint (perpendicular to edge)
2. **Test**: Edge kept if both circles contain no other vertices

## Settings

<details>
<summary><strong>Beta</strong> <code>double</code></summary>

The Beta parameter controlling the empty region shape and size.

| Value | Behavior |
|-------|----------|
| **0 < β < 1** | Smaller lune, denser result |
| **β = 1** | Gabriel graph (diametral circle) |
| **β > 1** | Larger offset circles, sparser result |

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Dense neighborhood (β = 0.5)**:
- Smaller forbidden region
- More edges pass the test
- Result: Denser than Gabriel graph

**Sparse skeleton (β = 2)**:
- Larger forbidden regions
- Fewer edges pass the test
- Result: Very sparse graph

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineSkeleton.h)
