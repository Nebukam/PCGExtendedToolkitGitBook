---
icon: bullseye
description: 'Goal Picker :: Random'
---

# Random

Randomly selects one or more goals for each seed.

## Overview

The Random goal picker selects goals randomly for each seed. It can pick a single random goal, a fixed number of random goals, or a random number of random goals per seed.

## Settings

<details>
<summary><strong>Local Seed</strong> <code>int32</code></summary>

Random seed for reproducible results. Change this value to get different random selections while maintaining determinism.

Default: `0`

</details>

<details>
<summary><strong>Goal Count</strong> <code>EPCGExGoalPickRandomAmount</code></summary>

How many goals to randomly select per seed.

| Option | Behavior |
|--------|----------|
| **Single** | Pick one random goal per seed |
| **Multiple Fixed** | Pick a fixed number of random goals per seed |
| **Multiple Random** | Pick a random number of random goals per seed |

Default: `Single`

</details>

<details>
<summary><strong>Num Goals Type</strong> <code>EPCGExInputValueType</code></summary>

Source for the number of goals to pick (when Goal Count is not Single).

| Option | Behavior |
|--------|----------|
| **Constant** | Use constant value |
| **Attribute** | Read from seed point attribute |

Default: `Constant`

⚡ PCG Overridable
📋 Visible when: `Goal Count != Single`

</details>

<details>
<summary><strong>Num Goals (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the number of goals from.

📋 Visible when: `Goal Count != Single AND Num Goals Type != Constant`

</details>

<details>
<summary><strong>Num Goals</strong> <code>int32</code></summary>

Constant number of goals to pick per seed.

Default: `5`
Min: `1`

📋 Visible when: `Goal Count != Single AND Num Goals Type == Constant`

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-bounds indices.

| Option | Behavior |
|--------|----------|
| **Ignore** | Skip invalid indices |
| **Tile** | Wrap around using modulo |
| **Clamp** | Clamp to valid range |
| **Yoyo** | Mirror back and forth |

Default: `Tile`

</details>

## Behavior Examples

**Single Mode (3 seeds, 5 goals):**
- Seed 0 → Goal 2 (random)
- Seed 1 → Goal 4 (random)
- Seed 2 → Goal 1 (random)

**Multiple Fixed Mode (NumGoals=2):**
- Seed 0 → Goal 2, Goal 4
- Seed 1 → Goal 0, Goal 3
- Seed 2 → Goal 1, Goal 4

**Multiple Random Mode (NumGoals=3 as max):**
- Seed 0 → Goal 2 (picked 1)
- Seed 1 → Goal 0, Goal 3, Goal 4 (picked 3)
- Seed 2 → Goal 1, Goal 2 (picked 2)

## Use Cases

- Generating varied path networks
- Simulating random connections or routes
- Creating organic-looking path distributions
- When you need controlled randomness in pathfinding

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/GoalPickers/PCGExGoalPickerRandom.h)
