---
icon: arrows-up-down
description: 'In editor :: PCGEx | Path : Slide'
---

# Slide

Slides points along the path toward the next or previous point.

## Overview

Slide moves individual points along the path direction without changing the overall path structure. Unlike **Shift** (which rotates point order), Slide physically repositions points. The original positions can optionally be stored and later restored.

## Before / After

```
Before:  ●────●────●────●────●
         A    B    C    D    E

After (Slide Next 50%):
         ●──●──●──●──●──●
         A  AB BC CD DE  E
            ↑  Points moved toward next
```

## How It Works

For each point on the path:

1. Get the **direction** to the next or previous point
2. Move the point by **slide amount** along that direction
3. Optionally **store** the original position for later restoration

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to slide |
| **Filters** | Filters | Optional filters to control which points are processed |

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExSlideMode</code></summary>

Whether to slide points or restore from a previous slide.

| Option | Description |
|--------|-------------|
| Slide | Move points and optionally store original position |
| Restore | Restore points from stored position and delete the attribute |

Default: `Slide`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>EPCGExSlideDirection</code></summary>

Which way to slide along the path.

| Option | Description |
|--------|-------------|
| Next | Slide toward the next point |
| Previous | Slide toward the previous point |

Default: `Next`

*Visible when Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount Measure</strong> <code>EPCGExMeanMeasure</code></summary>

How to interpret the slide amount.

| Option | Description |
|--------|-------------|
| Discrete | Actual distance in world units |
| Relative | Percentage of segment length (0-1) |

Default: `Relative`

*Visible when Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Slide Amount Input</strong> <code>Constant | Attribute</code></summary>

Whether the slide amount is a constant or per-point attribute.

Default: `Constant`

*Visible when Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Slide Amount (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read slide amount from.

*Visible when Slide Amount Input = Attribute and Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Slide Amount</strong> <code>double</code></summary>

The slide amount (distance or ratio based on measure).

Default: `0.5`

*Visible when Slide Amount Input = Constant and Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Old Position</strong> <code>bool</code></summary>

Store the original position before sliding to an attribute.

Default: `true`

*Visible when Mode = Slide*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Restore Position Attribute Name</strong> <code>FName</code></summary>

Name of the attribute storing/restoring the original position.

Default: `PreSlidePosition`

*Visible when Write Old Position = true or Mode = Restore*

⚡ PCG Overridable

</details>

## Examples

**Slide all points 50% toward next point**:
- Mode: `Slide`
- Direction: `Next`
- Amount Measure: `Relative`
- Slide Amount: `0.5`

**Slide filtered points 10 units backward**:
- Connect filter to select points
- Mode: `Slide`
- Direction: `Previous`
- Amount Measure: `Discrete`
- Slide Amount: `10`

**Restore previously slid points**:
- Mode: `Restore`
- Restore Position Attribute Name: `PreSlidePosition`

## Related

### Point Movement
- [Shift](./shift.md) - Rotate the entire path order (reindex, not reposition)

### Path Shaping
- [Subdivide](./subdivide.md) - Add intermediate points
- [Resample](./resample.md) - Redistribute points evenly

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathSlide.cpp)
