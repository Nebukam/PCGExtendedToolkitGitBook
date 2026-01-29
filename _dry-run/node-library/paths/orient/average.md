---
icon: arrows-to-line
description: Orient operation that averages direction to neighbors
---

# Average

Orients points by averaging the direction to previous and next points.

## How It Works

```
Previous ●────────● Current ────────● Next
          ←─ A ─→   ←───── B ─────→

Direction = Lerp(A, B, 0.5).Normalize()
```

The orientation is computed by:
1. Get direction to next point (A)
2. Get inverted direction from previous point (B)
3. Blend the two directions at 50%
4. Normalize the result

This produces smooth orientation that represents the overall travel direction at each point.

## Settings

This operation uses only the shared axis settings from the parent Orient node.

## Use Cases

- **Smooth path following**: General-purpose orientation for most cases
- **Even transitions**: Consistent blending regardless of segment length

## Related

- [Look At](./look-at.md) - Direct look at next/previous point
- [Weighted](./weighted.md) - Distance-weighted blending

---

📦 **Module**: `PCGExElementsPaths`
