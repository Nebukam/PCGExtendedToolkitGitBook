---
icon: bullseye
description: 'Goal Picker :: Index Attribute'
---

# Index Attribute

Reads goal indices from seed point attributes.

## Overview

The Index Attribute goal picker reads goal indices directly from attributes on the seed points. This allows for complete control over which goals each seed targets, driven by attribute data. Can read from a single attribute or multiple attributes for multi-goal selection.

## Settings

<details>
<summary><strong>Goal Count</strong> <code>EPCGExGoalPickAttributeAmount</code></summary>

Whether to read from a single attribute or multiple attributes.

| Option | Behavior |
|--------|----------|
| **Single Attribute** | Read one goal index from one attribute |
| **Multiple Attributes** | Read multiple goal indices from multiple attributes |

Default: `Single Attribute`

</details>

<details>
<summary><strong>Single Selector</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute selector for the goal index when using Single Attribute mode. The attribute value is converted to int32.

📋 Visible when: `Goal Count == Single Attribute`

</details>

<details>
<summary><strong>Comma Separated Names</strong> <code>FString</code></summary>

A list of attribute names separated by commas for easy overrides. These are added to the array of attribute selectors.

Example: `GoalA,GoalB,GoalC`

⚡ PCG Overridable
📋 Visible when: `Goal Count == Multiple Attributes`

</details>

<details>
<summary><strong>Attribute Selectors</strong> <code>TArray&lt;FPCGAttributePropertyInputSelector&gt;</code></summary>

Array of attribute selectors for multiple goal indices. Each attribute provides one goal index (converted to int32).

📋 Visible when: `Goal Count == Multiple Attributes`

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle goal indices that are out of bounds.

| Option | Behavior |
|--------|----------|
| **Ignore** | Skip seeds with invalid goal indices |
| **Tile** | Wrap around using modulo |
| **Clamp** | Clamp to valid range |
| **Yoyo** | Mirror back and forth |

Default: `Tile`

</details>

## Behavior Examples

**Single Attribute Mode:**

| Seed | `TargetGoal` Attribute | Goal Selected |
|------|------------------------|---------------|
| 0 | 2 | Goal 2 |
| 1 | 0 | Goal 0 |
| 2 | 1 | Goal 1 |

**Multiple Attributes Mode (with `GoalA`, `GoalB` attributes):**

| Seed | `GoalA` | `GoalB` | Goals Selected |
|------|---------|---------|----------------|
| 0 | 2 | 4 | Goal 2, Goal 4 |
| 1 | 0 | 1 | Goal 0, Goal 1 |
| 2 | 3 | 3 | Goal 3 (deduplicated) |

## Use Cases

- Pre-computed pathfinding targets
- Data-driven path networks
- When goals are determined by upstream PCG logic
- Connecting specific points based on attribute relationships
- Building road/river networks with explicit connections

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/GoalPickers/PCGExGoalPickerAttribute.h)
