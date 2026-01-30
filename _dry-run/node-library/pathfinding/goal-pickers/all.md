---
icon: bullseye
description: 'Goal Picker :: All'
---

# All

Creates paths from each seed to every goal point.

## Overview

The All goal picker generates paths from each seed to all available goals. This creates a complete bipartite connection pattern - every seed is connected to every goal.

## Behavior

For a setup with S seeds and G goals, this picker generates S × G paths total.

| Seeds | Goals | Paths Generated |
|-------|-------|-----------------|
| 3 | 2 | 6 paths |
| 5 | 5 | 25 paths |
| 10 | 3 | 30 paths |

**Example with 2 seeds and 3 goals:**
- Seed 0 → Goal 0, Goal 1, Goal 2
- Seed 1 → Goal 0, Goal 1, Goal 2

## Settings

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-bounds indices. Since this picker uses all goals, this setting primarily affects edge cases.

| Option | Behavior |
|--------|----------|
| **Ignore** | Skip invalid indices |
| **Tile** | Wrap around using modulo |
| **Clamp** | Clamp to valid range |
| **Yoyo** | Mirror back and forth |

Default: `Tile`

</details>

## Use Cases

- Generating all possible routes through a network
- Finding shortest paths from multiple sources to multiple destinations
- Creating connection matrices or flow networks
- When you need complete coverage between point sets

## Performance Note

Path count grows multiplicatively with seeds and goals. For large point sets, consider using Random or Index Attribute pickers to limit the number of paths generated.

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/GoalPickers/PCGExGoalPickerAll.h)
