---
icon: hand-pointer
description: 'In editor :: PCGEx | Filter : Picker'
---

# Picker

Uses index picker factories to select specific points by index.

## How It Works

1. Gather all **picker factories** connected to the filter
2. Aggregate **selected indices** from all pickers
3. For each point: pass if index is in the selection set

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Pickers** | Picker Factories | Index selection definitions |

## Settings

<details>
<summary><strong>Force Per Point Evaluation</strong> <code>bool</code></summary>

Force evaluation for each point individually, even when operating on collections.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result—pass for non-selected indices, fail for selected.

Default: `false`

⚡ PCG Overridable

</details>

## Picker Types

Connect picker factory nodes to define the selection. Multiple pickers are combined (union of their selections):

- **First N** - Select first N points
- **Last N** - Select last N points
- **Range** - Select indices within a range
- **Step** - Select every Nth point
- **Random** - Randomly select points
- **Explicit** - Select specific listed indices

## Examples

**Select first 10 points**:
- Connect "First N" picker with Count: `10`

**Select last 5 points**:
- Connect "Last N" picker with Count: `5`

**Select first and last points**:
- Connect "First N" picker with Count: `1`
- Connect "Last N" picker with Count: `1`

**Select every 4th point starting from index 2**:
- Connect "Step" picker with Step: `4`, Offset: `2`

**Exclude specific indices**:
- Connect picker(s) for indices to exclude
- Invert: Enabled

## Picker Composition

Multiple pickers combine their selections:
- First N (5) + Last N (5) = First 5 AND last 5 points selected
- Range (0-10) + Range (90-100) = Points 0-10 AND 90-100 selected

The final selection is the **union** of all picker selections.

## Related

- [Random Ratio](./random-ratio.md) - Random percentage selection
- [Modulo Compare](./modulo-compare.md) - Pattern-based selection using modulo

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExPickerFilter.cpp)
