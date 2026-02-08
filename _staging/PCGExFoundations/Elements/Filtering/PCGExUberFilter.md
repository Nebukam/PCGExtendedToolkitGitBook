---
icon: filter
description: 'Uber Filter - Comprehensive point filtering with partitioning or result writing.'
---

# Uber Filter

Comprehensive point filtering with partitioning or result writing.

## Overview

This node applies filter conditions to points and either partitions them into separate datasets (inside/outside) or writes filter results as point attributes. It supports complex filter combinations through filter factories, optional result inversion, and automatic tagging based on filter outcomes. The node can write results in multiple formats including boolean flags, numeric increments, and bitmask operations.

## How It Works

1. **Filter Loading**: Loads filter factory configurations from the Filters input pin
2. **Filter Evaluation**: Tests each point against the combined filter conditions
3. **Mode Selection**: Determines whether to partition points or write results
4. **Result Processing**:
   - **Partition Mode**: Separates points into Inside/Outside datasets
   - **Write Mode**: Writes filter results as point attributes
5. **Tagging** (optional): Adds collection-level tags based on pass/fail counts
6. **Output Generation**: Produces filtered datasets or attributed points

## Behavior

#### Partition Mode (Separate Inside/Outside):
```
Input: 10 points
Filters: Density > 0.5

Points 0, 2, 5, 7 → Pass filter (Density > 0.5)
Points 1, 3, 4, 6, 8, 9 → Fail filter

Output (bSwap = false):
- Inside pin: Points 0, 2, 5, 7 (4 points)
- Outside pin: Points 1, 3, 4, 6, 8, 9 (6 points)

Output (bSwap = true):
- Inside pin: Points 1, 3, 4, 6, 8, 9 (6 points)
- Outside pin: Points 0, 2, 5, 7 (4 points)
```

#### Write Mode (Attribute Output):
```
Input: 10 points
Filters: Density > 0.5
ResultAttributeName: "FilterResult"

Points 0, 2, 5, 7 → Pass filter
Points 1, 3, 4, 6, 8, 9 → Fail filter

Output (single dataset with attribute):
Point 0: FilterResult = true
Point 1: FilterResult = false
Point 2: FilterResult = true
Point 3: FilterResult = false
...
```

#### Result Actions (Write Mode):
```
Action: Bool
  Pass: FilterResult = true
  Fail: FilterResult = false

Action: Increment
  PassIncrement = 10, FailIncrement = 0
  Pass: FilterResult += 10
  Fail: FilterResult += 0

Action: Decrement
  PassIncrement = 0, FailIncrement = -5
  Pass: FilterResult += 0
  Fail: FilterResult += -5

Action: Toggle
  Pass: FilterResult = !FilterResult
  Fail: No change
```

#### Bitmask Operations (Write Mode):
```
bDoBitmaskOpOnPass = true
PassBitmask: Operation = OR, Mask = 0001 (flag 0)

bDoBitmaskOpOnFail = true
FailBitmask: Operation = OR, Mask = 0010 (flag 1)

Point passes filter:
  Point.Flags |= 0001 (sets bit 0)

Point fails filter:
  Point.Flags |= 0010 (sets bit 1)
```

#### Tagging:
```
Input: 10 points total

Scenario A: 7 points pass
  bTagIfAnyPointPassed = true → Adds "SomePointsPassed" tag
  bTagIfAllPointsPassed = false → No "AllPointsPassed" tag

Scenario B: 10 points pass (all)
  bTagIfAnyPointPassed = true → Adds "SomePointsPassed" tag
  bTagIfAllPointsPassed = true → Adds "AllPointsPassed" tag

Scenario C: 0 points pass (none)
  bTagIfNoPointPassed = true → Adds "NoPointPassed" tag
```

#### Output Discarded Elements:
```
bOutputDiscardedElements = true:
  Both Inside and Outside pins produce data

bOutputDiscardedElements = false:
  Only Inside pin produces data (Outside omitted)
  Saves processing time when discards aren't needed
```

#### Unpicked Fallback:
```
No filters connected or points not evaluated:

UnpickedFallback = Pass:
  Unpicked points treated as passing

UnpickedFallback = Fail:
  Unpicked points treated as failing
```

Good for: point filtering, conditional processing, data partitioning, result flagging, multi-criteria selection

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExUberFilterMode</code></summary>

Determines whether to partition points or write filter results.

| Mode | Description |
|------|-------------|
| **Partition** (default) | Create inside/outside datasets from filter results |
| **Write** | Write filter result to point attributes without partitioning |

**Partition**: Separates points into two collections based on filter outcome
**Write**: Keeps all points in one collection, adds result attributes

Default: `Partition`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Result</strong> <code>FPCGExFilterResultDetails</code></summary>

Configuration for writing filter results as point attributes.

Defines the attribute name, write action, and bitmask operations for filter results.

📋 *Visible when Mode = Write*

⚡ PCG Overridable

</details>

### Result Details (FPCGExFilterResultDetails)

<details>
<summary><strong>Enabled</strong> <code>bool</code></summary>

Whether to write filter results to attributes.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Action</strong> <code>EPCGExResultWriteAction</code></summary>

How to write the filter result.

| Action | Description |
|--------|-------------|
| **Bool** (default) | Write as true/false |
| **Increment** | Add values on pass/fail |
| **Decrement** | Subtract values on pass/fail |
| **Toggle** | Flip boolean on pass |

⚡ PCG Overridable

</details>

<details>
<summary><strong>Result Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to write filter results to.

Default: `"Result"`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Pass Increment</strong> <code>double</code></summary>

Value to add/write when point passes filter.

Examples:
- Action = Bool: Not used (writes true)
- Action = Increment: Value to add
- Action = Decrement: Value to subtract

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fail Increment</strong> <code>double</code></summary>

Value to add/write when point fails filter.

Examples:
- Action = Bool: Not used (writes false)
- Action = Increment: Value to add
- Action = Decrement: Value to subtract

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Do Bitmask Op On Pass</strong> <code>bool</code></summary>

Apply bitmask operation when point passes filter.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Pass Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask configuration to apply on pass.

Defines the bitwise operation (AND, OR, XOR, etc.) and mask value.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Do Bitmask Op On Fail</strong> <code>bool</code></summary>

Apply bitmask operation when point fails filter.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fail Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Bitmask configuration to apply on fail.

Defines the bitwise operation and mask value for failed points.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Swap</strong> <code>bool</code></summary>

Invert the filter result.

- **false** (default): Pass = Inside, Fail = Outside
- **true**: Pass = Outside, Fail = Inside

When enabled in Write mode, flips the boolean/increment logic.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Discarded Elements</strong> <code>bool</code></summary>

Whether to output points that fail the filter.

- **true** (default): Output both Inside and Outside
- **false**: Only output Inside (omit Outside pin data)

Performance optimization when discarded points aren't needed.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tag If Any Point Passed</strong> <code>bool</code></summary>

Add a tag if at least one point passed the filter.

Default: `false`

</details>

<details>
<summary><strong>Has Any Point Passed Tag</strong> <code>FString</code></summary>

Tag to add when at least one point passes.

📋 *Visible when Tag If Any Point Passed = true*

Default: `"SomePointsPassed"`

</details>

<details>
<summary><strong>Tag If All Points Passed</strong> <code>bool</code></summary>

Add a tag if all points passed the filter.

Default: `false`

</details>

<details>
<summary><strong>All Points Passed Tag</strong> <code>FString</code></summary>

Tag to add when all points pass.

📋 *Visible when Tag If All Points Passed = true*

Default: `"AllPointsPassed"`

</details>

<details>
<summary><strong>Tag If No Point Passed</strong> <code>bool</code></summary>

Add a tag if no points passed the filter.

Default: `false`

</details>

<details>
<summary><strong>No Point Passed Tag</strong> <code>FString</code></summary>

Tag to add when no points pass.

📋 *Visible when Tag If No Point Passed = true*

Default: `"NoPointPassed"`

</details>

<details>
<summary><strong>Unpicked Fallback</strong> <code>EPCGExFilterFallback</code></summary>

How to treat points that aren't evaluated by filters.

| Option | Description |
|--------|-------------|
| **Pass** | Treat unpicked points as passing |
| **Fail** (default) | Treat unpicked points as failing |

Applies when no filters are connected or points don't meet filter criteria.

Default: `Fail`

</details>

## Filter Factories

The node accepts filter factory inputs that define the filtering logic:

**Available Filter Types:**
- **Attribute Filters**: Compare point attributes
- **Bounds Filters**: Test spatial bounds
- **Tag Filters**: Match tags
- **Custom Filters**: User-defined filter logic

Multiple filters can be connected and are combined based on their factory settings (AND, OR logic).

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Point Data | Point collections to filter |
| **Filters** | Filter Factories | Filter configurations to apply |

## Outputs

**Partition Mode:**

| Pin | Type | Description |
|-----|------|-------------|
| **Inside** | Point Data | Points passing the filter |
| **Outside** (optional) | Point Data | Points failing the filter (when Output Discarded Elements = true) |

**Write Mode:**

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Point Data | All points with filter result attributes |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExFoundations-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Filtering/PCGExUberFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Filtering/PCGExUberFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 11+ documented (Mode, ResultDetails with nested properties, bSwap, bOutputDiscardedElements, bTagIfAnyPointPassed, HasAnyPointPassedTag, bTagIfAllPointsPassed, AllPointsPassedTag, bTagIfNoPointPassed, NoPointPassedTag, UnpickedFallback)
Result Details Properties: 8 documented (bEnabled, Action, ResultAttributeName, PassIncrement, FailIncrement, bDoBitmaskOpOnPass, PassBitmask, bDoBitmaskOpOnFail, FailBitmask)
Modes: Partition (split datasets), Write (attribute output)
Result Actions: Bool, Increment, Decrement, Toggle
Inputs: Point data, filter factories
Outputs: Inside/Outside (partition) or Out (write)
Special Features: Swap logic, tagging, bitmask operations, discarded element control
Use Cases: Point filtering, conditional processing, result flagging, data partitioning
-->
