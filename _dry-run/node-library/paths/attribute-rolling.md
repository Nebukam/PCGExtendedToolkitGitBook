---
icon: forward
description: 'In editor :: PCGEx | Path : Attribute Rolling'
---

# Attribute Rolling

Performs rolling blending of attributes along a path based on range control.

## Overview

Attribute Rolling propagates or accumulates attribute values along a path within defined ranges. Ranges are determined by filter conditions (start/stop or toggle), and values can be sourced from pinned points, previous points, or range starts.

## Concept

```
Path:    ●────●────●────●────●────●────●────●
Range:        [START]───────────[STOP]
              ▼                       ▼
Values:  A    B────B────B────B────B   C    D
              └── Value rolled through range ──┘
```

## How It Works

1. Identify **range boundaries** using filters (start/stop or toggle)
2. For points inside ranges, **roll** attribute values from reference points
3. Apply **blend operations** to accumulate or propagate values
4. Optionally output **range metadata**

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to process |
| **Start Conditions** | Filters | Filters to identify range start (when Range Control = Start/Stop) |
| **Stop Conditions** | Filters | Filters to identify range stop (when Range Control = Start/Stop) |
| **Toggle Conditions** | Filters | Filters to toggle rolling on/off (when Range Control = Toggle) |
| **Pin Conditions** | Filters | Filters to identify reference points (when Value Control = Pin) |
| **Blending** | Blend Op Factories | Blend operations to apply |

## Settings

### Range Control

<details>
<summary><strong>Range Control</strong> <code>EPCGExRollingRangeControl</code></summary>

How rolling ranges are determined.

| Option | Description |
|--------|-------------|
| Start/Stop | Use separate start and stop filters |
| Toggle | Single filter toggles rolling on/off |

Default: `Toggle`

</details>

<details>
<summary><strong>Value Control</strong> <code>EPCGExRollingValueControl</code></summary>

Where to get the reference value for rolling.

| Option | Description |
|--------|-------------|
| Pin | Use points passing the pin filter |
| Previous | Use the previous point's value |
| Range Start | Use the first point of each range |

Default: `Previous`

</details>

<details>
<summary><strong>Initial Value Mode</strong> <code>EPCGExRollingToggleInitialValue</code></summary>

How to determine the initial rolling state.

| Option | Description |
|--------|-------------|
| Constant | Use constant initial value |
| Constant (Preserve) | Constant, but don't switch if first point matches |
| From Point | Use first point's value |

Default: `Constant`

</details>

<details>
<summary><strong>Initial Value</strong> <code>bool</code></summary>

Starting toggle value.

Default: `true`

*Visible when Initial Value Mode != From Point*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Reverse Rolling</strong> <code>bool</code></summary>

Roll in reverse order along the path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Outside Range</strong> <code>bool</code></summary>

Apply blend operations to points outside rolling ranges.

Default: `false`

</details>

<details>
<summary><strong>Blend Stop Element</strong> <code>bool</code></summary>

Include the stop point in blending.

Default: `false`

*Visible when Blend Outside Range = false*

</details>

### Output

<details>
<summary><strong>Write Range Start</strong> <code>bool</code></summary>

Write boolean marking range start points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Range Stop</strong> <code>bool</code></summary>

Write boolean marking range stop points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Range Pole</strong> <code>bool</code></summary>

Write boolean marking range poles (start or stop).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Range Index</strong> <code>bool</code></summary>

Write int32 index of which range a point belongs to.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Index Offset</strong> <code>int32</code></summary>

Offset to add to range index values.

Default: `0`

*Visible when Write Range Index = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Is Inside Range</strong> <code>bool</code></summary>

Write boolean for whether point is inside a range.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Index Inside Range</strong> <code>bool</code></summary>

Write int32 index of point within its range.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Propagate color within tagged regions**:
- Range Control: `Start/Stop`
- Value Control: `Range Start`
- Connect filters for region boundaries
- Add blend op for color attribute

**Accumulate distance from previous point**:
- Range Control: `Toggle` (always on)
- Value Control: `Previous`
- Add accumulator blend op

## Related

### Path Processing
- [Subdivide](./subdivide.md) - Add intermediate points
- [Resample](./resample.md) - Redistribute points evenly

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExAttributeRolling.cpp)
