---
icon: eye
description: Orient operation that looks at a target
---

# Look At

Orients points to look at a specific target—next point, previous point, or custom direction/position from an attribute.

## How It Works

Depending on the mode:

**Next/Previous Point**:
```
Current ●────────→ Target
         Look direction
```

**Direction Attribute**:
Uses a vector attribute as the look direction directly.

**Position Attribute**:
Computes direction from current point to the world position in the attribute.

## Settings

<details>
<summary><strong>Look At</strong> <code>Next Point | Previous Point | Direction | Position</code></summary>

What to look at:

| Option | Behavior |
|--------|----------|
| **Next Point** | Look toward the next point in path |
| **Previous Point** | Look toward the previous point in path |
| **Direction** | Use vector attribute as direction |
| **Position** | Look at world position from attribute |

Default: `Next Point`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Look At Attribute</strong> <code>Attribute Selector</code></summary>

Vector attribute containing direction or position (when using Direction or Position mode).

⚡ PCG Overridable

</details>

## Use Cases

- **Simple forward facing**: Look At = Next Point
- **Backward facing**: Look At = Previous Point
- **Custom targets**: Direction or Position from attributes

## Related

- [Average](./average.md) - Blended direction
- [Weighted](./weighted.md) - Distance-weighted

---

📦 **Module**: `PCGExElementsPaths`
