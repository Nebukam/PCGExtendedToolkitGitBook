---
icon: scissors
description: 'In editor :: PCGEx | Path : Split Path'
---

# Split Path

Splits paths into multiple segments based on filter conditions.

## Overview

Split Path breaks input paths into smaller paths wherever points match a filter condition. The way splits occur—and what happens to the splitting points—depends on the selected action mode.

This node accepts point filters to determine where splits should happen.

## How It Works

1. **Evaluate each point** against the connected filters
2. **At each matching point**, perform the selected split action
3. **Output multiple paths** from each input path (or a single path if no splits occurred)

The node processes each input path independently and handles both open paths and closed loops.

## Split Actions

The `SplitAction` setting determines what happens at each split point:

### Split (Default)

**Duplicates** the split point—it becomes both the end of the previous segment and the start of the next.

```
Input:  A ─ B ─ [C] ─ D ─ E    (C matches filter)
Output: A ─ B ─ C              (Path 1)
        C ─ D ─ E              (Path 2)
```

Use when: You want split points to belong to both resulting paths.

### Remove

**Removes** the split point entirely—adjacent paths have a gap.

```
Input:  A ─ B ─ [C] ─ D ─ E    (C matches filter)
Output: A ─ B                  (Path 1)
        D ─ E                  (Path 2)
```

Use when: You want to excise specific points from the path.

### Disconnect

**Removes** the split point from the next segment—it ends the current path but doesn't start the next.

```
Input:  A ─ B ─ [C] ─ D ─ E    (C matches filter)
Output: A ─ B ─ C              (Path 1)
        D ─ E                  (Path 2)
```

Use when: You want the split point to cap the previous segment only.

### Partition

Splits only when the filter result **changes** from the previous point. Creates alternating groups of passing/failing points.

```
Input:  A ─ B ─ [C] ─ [D] ─ E    (C,D match filter)
Output: A ─ B                    (Path 1: non-matching)
        C ─ D                    (Path 2: matching)
        E                        (Path 3: non-matching, may be omitted)
```

Use when: You want to separate runs of matching points from runs of non-matching points.

### Switch

Uses the filter as a **toggle**. Each matching point flips between "keep" and "prune" states.

```
Input:  A ─ B ─ [C] ─ D ─ E ─ [F] ─ G    (C,F match filter)
Initial state: keep
Output: A ─ B ─ C                        (kept until C toggles to prune)
        F ─ G                            (F toggles back to keep)
```

Use when: You want matching points to act as on/off switches.

## Settings

### Core Settings

<details>
<summary><strong>SplitAction</strong> <code>EPCGExPathSplitAction</code></summary>

How to handle split points.

- `Split` - Duplicate point to both paths (default)
- `Remove` - Delete point entirely
- `Disconnect` - End current path at point, start next path after
- `Partition` - Split on filter state changes
- `Switch` - Toggle keep/prune on each match

</details>

<details>
<summary><strong>bInclusive</strong> <code>bool</code></summary>

For `Partition` and `Switch` modes: whether the triggering point belongs to the segment before or after the behavior change.

Default: `false`

⚡ PCG Overridable

</details>

### Initial State (Partition/Switch only)

<details>
<summary><strong>InitialBehavior</strong> <code>EPCGExPathSplitInitialValue</code></summary>

How to determine the starting state for Partition and Switch modes.

- `Constant` - Use `bInitialValue` directly
- `ConstantPreserve` - Use `bInitialValue`, but if first point matches it, don't trigger immediately
- `FromPoint` - Read initial state from first point's filter result
- `FromPointPreserve` - Read from first point, inverted (so first point triggers if it matches)

Default: `Constant`

</details>

<details>
<summary><strong>bInitialValue</strong> <code>bool</code></summary>

Starting state when `InitialBehavior` is `Constant` or `ConstantPreserve`.

Default: `false`

⚡ PCG Overridable

</details>

### Output Control

<details>
<summary><strong>bOmitSinglePointOutputs</strong> <code>bool</code></summary>

Skip output paths that contain only a single point.

Default: `true`

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>bTagIfEvenSplit</strong> <code>bool</code></summary>

Add a tag to even-indexed output paths (0, 2, 4, ...).

Default: `true`

</details>

<details>
<summary><strong>IsEvenTag</strong> <code>FString</code></summary>

Tag to apply to even-indexed paths.

Default: `"EvenSplit"`

</details>

<details>
<summary><strong>bTagIfOddSplit</strong> <code>bool</code></summary>

Add a tag to odd-indexed output paths (1, 3, 5, ...).

Default: `false`

</details>

<details>
<summary><strong>IsOddTag</strong> <code>FString</code></summary>

Tag to apply to odd-indexed paths.

Default: `"OddSplit"`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Input paths to split |
| **Filters** | Filters | Point filters determining split locations |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Split path segments |

## Closed Loop Handling

When splitting a closed loop:

1. **Detection**: The node checks if input paths are marked as closed loops
2. **Wrapping**: If the last segment extends past the original end, it wraps around to include points from the beginning

{% hint style="warning" %}
Closed loops that split may produce paths that wrap around the original start point. The node handles this automatically, but be aware that output point indices may not match input indices directly.
{% endhint %}

## Common Patterns

**Split at sharp corners** (using an Angle filter):
- Connect an Angle filter checking for angles > 45°
- SplitAction: `Split`
- Result: Path segments separated at sharp turns

**Remove specific points** (using an attribute filter):
- Connect a filter checking `$ShouldRemove == true`
- SplitAction: `Remove`
- Result: Filtered points excised, adjacent segments separated

**Alternate sections** (using Partition):
- Connect any classification filter
- SplitAction: `Partition`
- Result: Separate paths for matching vs non-matching runs
- Use even/odd tags to distinguish the two groups

## Related

### Path Operations
- [Fuse Collinear](./fuse-collinear.md) - Merge collinear points
- [Subdivide](./subdivide.md) - Add points along path segments
- [Reduce](./reduce.md) - Remove points while preserving shape

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSplitPath.cpp)
