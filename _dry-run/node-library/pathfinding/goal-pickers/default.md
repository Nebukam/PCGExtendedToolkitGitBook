---
icon: bullseye
description: 'Goal Picker :: Default'
---

# Default

Uses the seed point's index to select the goal at the same index.

## Overview

The Default goal picker creates a 1:1 mapping between seeds and goals based on their indices. Seed 0 paths to Goal 0, Seed 1 paths to Goal 1, and so on. This is the simplest picker and works well when seeds and goals are pre-paired.

## Behavior

For each seed point at index `i`, this picker selects the goal at index `i`.

| Seed Index | Goal Selected |
|------------|---------------|
| 0 | Goal 0 |
| 1 | Goal 1 |
| 2 | Goal 2 |
| ... | ... |

When there are more seeds than goals, the Index Safety setting controls behavior.

## Settings

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle seed indices that exceed the number of available goals.

| Option | Behavior | Example (3 goals, 6 seeds) |
|--------|----------|----------------------------|
| **Ignore** | Skip seeds with invalid indices | Seeds 3,4,5 get no path |
| **Tile** | Wrap around using modulo | Seed 3→Goal 0, Seed 4→Goal 1, Seed 5→Goal 2 |
| **Clamp** | Clamp to last valid index | Seeds 3,4,5 all→Goal 2 |
| **Yoyo** | Mirror back and forth | Seed 3→Goal 1, Seed 4→Goal 0, Seed 5→Goal 1 |

Default: `Tile`

</details>

## Use Cases

- Pre-paired seed/goal data where indices already match
- Simple sequential pathfinding
- When combined with point sorting to control pairing

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/GoalPickers/PCGExGoalPicker.h)
