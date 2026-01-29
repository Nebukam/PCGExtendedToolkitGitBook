---
icon: circle
description: 'Smoothing Method :: Radius'
---

# Radius

Spatial smoothing using distance-based neighbor search.

## Overview

Radius smoothing finds all points within a spatial radius and blends them toward the center point. Unlike Moving Average, this method is **spatially aware**—the smoothing strength is consistent in world units regardless of point density.

Points closer to the center contribute more (distance-weighted falloff), creating natural, density-independent smoothing.

## How It Works

For each point:

1. Search for all points within the smoothing radius (using octree)
2. Weight each neighbor by inverse distance (closer = higher weight)
3. Blend all neighbors toward center point

## Settings

This method has no additional settings beyond the parent node's Smoothing amount.

## Smoothing Amount Interpretation

The **Smoothing** value on the parent node represents the search radius in world units:

- `Smoothing = 50` → Find all points within 50 units
- `Smoothing = 200` → Find all points within 200 units

## When to Use

**Best for:**
- Paths with irregular point spacing
- Consistent smoothing regardless of density
- Spatial precision requirements

**Consider Moving Average instead when:**
- Points are uniformly spaced
- You want predictable neighbor counts
- Performance is critical (index lookups are faster than spatial queries)

## Performance Note

Radius smoothing uses octree spatial queries, which are efficient but slightly more expensive than index-based lookups. For very dense paths, Moving Average may be faster.

## Related

- [Moving Average](./moving-average.md) - Index-based alternative

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Public/Elements/Smoothing/PCGExRadiusSmoothing.h)
