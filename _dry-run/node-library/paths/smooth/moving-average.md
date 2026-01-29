---
icon: chart-bar
description: 'Smoothing Method :: Moving Average'
---

# Moving Average

Index-based smoothing using a fixed window of neighboring points.

## Overview

Moving Average smooths by averaging each point with a fixed number of neighbors on each side. The window size (smoothing amount) determines how many points before and after contribute to the blend.

This method is **order-based**—it considers point indices rather than spatial distance. Points 5 indices away contribute equally regardless of how far apart they are in world space.

## How It Works

For each point at index `i`:

1. Define window from `i - smoothing` to `i + smoothing`
2. Weight each neighbor by distance from center (closer = higher weight)
3. Blend all neighbors toward center point

## Settings

<details>
<summary><strong>Index Safety</strong> <code>Clamp | Wrap | Ignore</code></summary>

How to handle points near path endpoints:

| Option | Behavior |
|--------|----------|
| **Clamp** | Clamp indices to valid range (smaller window at ends) |
| **Wrap** | Wrap around for closed loops |
| **Ignore** | Skip invalid indices (smaller window at ends) |

Default: `Ignore`

⚡ PCG Overridable

</details>

## Smoothing Amount Interpretation

The **Smoothing** value on the parent node represents the window half-size:

- `Smoothing = 1` → 3 points total (1 before, current, 1 after)
- `Smoothing = 3` → 7 points total (3 before, current, 3 after)
- `Smoothing = 5` → 11 points total

## When to Use

**Best for:**
- Uniformly-spaced paths
- Quick smoothing without spatial awareness
- Closed loops (with Wrap index safety)

**Consider Radius instead when:**
- Points have irregular spacing
- You need consistent smoothing in world units
- Path density varies significantly

## Related

- [Radius](./radius.md) - Distance-based alternative

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/Smoothing/PCGExMovingAverageSmoothing.h)
