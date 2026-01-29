---
icon: scale-balanced
description: Orient operation weighted by segment lengths
---

# Weighted

Orients points by blending between previous and next directions, weighted by the relative lengths of adjacent segments.

## How It Works

```
Previous ●──── AB ────● Current ──────── BC ────────● Next
         ← short →                ← longer →

Weight biases toward shorter segment
```

The weight is computed as:
```
Weight = (AB + BC) / Min(AB, BC)
Direction = Lerp(DirToPrev, DirToNext, Weight)
```

Shorter segments have more influence on the final direction. This produces sharper orientation changes at tight corners.

## Settings

<details>
<summary><strong>Inverse Weight</strong> <code>bool</code></summary>

Invert the weight calculation so longer segments have more influence instead of shorter ones.

Default: Disabled

⚡ PCG Overridable

</details>

## Related

- [Average](./average.md) - Equal 50/50 blend
- [Look At](./look-at.md) - Direct look at target

---

📦 **Module**: `PCGExElementsPaths`
