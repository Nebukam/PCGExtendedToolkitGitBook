---
description: Select points by index or range
icon: hand-pointer
---

# Pickers

Pickers define **which points to select** from a collection by index. They output index sets that consuming nodes use to cherry-pick specific points.

📌 **Sub-node** — Connects to **Pickers** pins.

```
Points:     ○───○───○───○───○───○───○───○───○───○
            0   1   2   3   4   5   6   7   8   9

Constant(3):                ●                       → {3}
Range(2,5):         ●───●───●───●                   → {2,3,4,5}
Negative(-2):                               ●       → {8}
```

---

## How It Works

Pickers compute a set of point indices from their configuration. Multiple pickers can connect to the same pin—their results are combined (union) into a single set.

**Index Modes:**
- **Discrete** — Direct integer indices (0, 1, 2, -1 for last, etc.)
- **Normalized** — Relative position (0.0 = first, 1.0 = last)

**Negative Indexing:** Use negative values to select from the end (Python-style). `-1` = last point, `-2` = second-to-last.

---

## Shared Settings

All pickers inherit these base settings:

<details>
<summary><strong>Treat as Normalized</strong> <code>bool</code></summary>

When enabled, values are interpreted as relative positions (0.0–1.0) instead of discrete indices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Truncate Mode</strong> <code>EPCGExTruncateMode</code></summary>

How to convert normalized values to discrete indices.

| Value | Behavior |
|-------|----------|
| **None** | No truncation (keep as float) |
| **Round** | Round to nearest integer |
| **Ceil** | Round up |
| **Floor** | Round down |

Default: `Round`

*Visible when Treat as Normalized = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-bounds indices.

| Value | Behavior | Example (10 points) |
|-------|----------|---------------------|
| **Ignore** | Skip invalid indices | `12` → skipped |
| **Tile** | Wrap around (modulo) | `12` → `2` |
| **Clamp** | Clamp to valid range | `12` → `9` |
| **Yoyo** | Mirror back and forth | `12` → `7` |

Default: `Ignore`

⚡ PCG Overridable

</details>

---

## Available Pickers

| Picker | Description |
|--------|-------------|
| [Constant](constant.md) | Select a single point by index |
| [Range](range.md) | Select a contiguous range of points |
| [Indices from Set](indices-from-set.md) | Read indices from point attributes |
| [Ranges from Set](ranges-from-set.md) | Read ranges from Vector2D attributes |

---

## Consuming Nodes

Pickers are used by nodes with **Pickers** input pins:

- **Cherry Pick Points** — Select specific points from collections
- **Filter : Picker** — Filter points by picker selection

---

📦 **Module**: `PCGExPickers` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExPickers)
