---
icon: chart-area
description: 'In editor :: PCGEx | Path : Attribute Rolling'
---

# Attribute Rolling

Propagates attribute values along path ranges defined by start/stop conditions.

## Overview

Attribute Rolling divides a path into ranges using filter conditions, then "rolls" (propagates) attribute values from reference points to subsequent points within each range. Think of it like a paint roller - you pick up a value at one point and roll it forward onto the following points until you hit a stop condition.

This is useful for propagating tags, IDs, or any attribute along segments of a path.

## Understanding Rolling

```
Path:     ●───●───●───●───●───●───●───●───●───●
          A   B   C   D   E   F   G   H   I   J

Filters:  S       S           S               S
          (S = Start filter matches)

Ranges:   |←─ Range 0 ─→|←─ Range 1 ─→|←─ Range 2 ─→|

Result:   ●───●───●───●───●───●───●───●───●───●
          A   A   C   C   C   F   F   F   F   F
```

With **Toggle** mode (single filter that switches on/off):

```
Path:     ●───●───●───●───●───●───●───●───●───●
          A   B   C   D   E   F   G   H   I   J

Toggle:       T           T       T
              (T = Toggle filter matches)

State:    OFF |←── ON ──→| OFF |← ON →| OFF...

Result:   Points C,D,E blended (inside range)
          Points G,H blended (inside range)
          Points A,B,F,I,J unchanged (outside range)
```

## Settings

### Range Control

<details>
<summary><strong>Range Control</strong> <code>Start/Stop | Toggle</code></summary>

How ranges are defined:

| Option | Behavior |
|--------|----------|
| **Start/Stop** | Two separate filter pins - one starts rolling, one stops it |
| **Toggle** | Single filter that switches rolling on/off each time it matches |

Default: `Toggle`

</details>

### Value Control

<details>
<summary><strong>Value Control</strong> <code>Pin | Previous | Range Start</code></summary>

Which point provides the reference value to roll:

| Option | Behavior |
|--------|----------|
| **Pin** | Use filter to mark specific points as value sources |
| **Previous** | Each point inherits from the previous point |
| **Range Start** | All points in range inherit from the range's first point |

Default: `Previous`

</details>

### Initial Value

<details>
<summary><strong>Initial Value Mode</strong> <code>Constant | Constant (Preserve) | From Point</code></summary>

How the initial rolling state is determined:

| Option | Behavior |
|--------|----------|
| **Constant** | Start with a fixed on/off state |
| **Constant (Preserve)** | Start with fixed state, but don't switch if first point already matches |
| **From Point** | Use the first point's value to determine initial state |

Default: `Constant`

</details>

<details>
<summary><strong>Initial Value</strong> <code>bool</code></summary>

Starting toggle value when using Constant mode.

- `true` = Start inside a range (rolling active)
- `false` = Start outside a range (rolling inactive)

Default: `true`

</details>

### Direction

<details>
<summary><strong>Reverse Rolling</strong> <code>bool</code></summary>

Process path in reverse order (end to start instead of start to end).

Default: Disabled

</details>

### Blend Behavior

<details>
<summary><strong>Blend Outside Range</strong> <code>bool</code></summary>

Enable blend operations to be processed on points outside the rolling range.

Default: Disabled

</details>

<details>
<summary><strong>Blend Stop Element</strong> <code>bool</code></summary>

Include the stop element in blending (the point that ends the range).

Default: Disabled

</details>

### Output Attributes

<details>
<summary><strong>Write Range Start</strong> <code>bool</code></summary>

Write boolean marking points that start a range.

Attribute: `RangeStart`

</details>

<details>
<summary><strong>Write Range Stop</strong> <code>bool</code></summary>

Write boolean marking points that end a range.

Attribute: `RangeStop`

</details>

<details>
<summary><strong>Write Range Pole</strong> <code>bool</code></summary>

Write boolean marking points that are either start or stop (poles of a range).

Attribute: `RangePole`

</details>

<details>
<summary><strong>Write Range Index</strong> <code>bool</code></summary>

Write the index of which range each point belongs to (0, 1, 2...).

Attribute: `RangeIndex`

</details>

<details>
<summary><strong>Write Is Inside Range</strong> <code>bool</code></summary>

Write whether each point is inside an active range.

Attribute: `IsInsideRange`

</details>

<details>
<summary><strong>Write Index Inside Range</strong> <code>bool</code></summary>

Write the point's index within its range (0 = first point in range, 1 = second, etc.).

Attribute: `IndexInsideRange`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to process |
| **Start Filters** | Filters | Conditions that start a rolling range (Start/Stop mode) |
| **Stop Filters** | Filters | Conditions that stop a rolling range (Start/Stop mode) |
| **Toggle Filters** | Filters | Conditions that toggle rolling on/off (Toggle mode) |
| **Pin Filters** | Filters | Mark value source points (when Value Control is Pin) |
| **Blending** | Blend Ops | Attribute blending operations to apply |

## Examples

**Propagate zone ID along path segments**:
```
Path with zones:  [Zone A]────[Zone B]────[Zone A]────

Use Start/Stop filters matching zone boundaries.
Roll ZoneID attribute - each segment gets its zone's ID.
```

**Alternate coloring**:
```
Toggle at every 5th point → alternating ranges
Roll different colors to odd vs even ranges
```

**Inherit from landmarks**:
```
Value Control: Pin
Pin filter matches "landmark" points
All points between landmarks inherit the previous landmark's attributes
```

## Use Cases

- **Zone propagation**: Spread zone/region IDs to all points within boundaries
- **Segment tagging**: Mark path segments with consistent identifiers
- **Alternating patterns**: Create on/off patterns along paths
- **Landmark inheritance**: Points inherit attributes from key reference points

## Related

### Path Blending
- [Blend Path](./blend-path.md) - Interpolate between start and end points

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExAttributeRolling.cpp)
