---
icon: hashtag
description: 'In editor :: PCGEx | Fill Control : Count'
---

# Count

Stops flood fill diffusion after capturing a maximum number of vertices.

## Overview

The Count control limits how many vertices a single diffusion can capture. Once the captured count reaches the maximum, the diffusion stops growing. This provides a simple way to limit fill region size regardless of graph structure.

## How It Works

1. **Track Captures**: Counts each vertex captured by the diffusion
2. **Threshold Check**: Before each capture, checks if count would exceed maximum
3. **Stop Propagation**: Rejects further captures once limit is reached

## Settings

<details>
<summary><strong>Max Count Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the max count comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Max Count (Attr)</strong> <code>FName</code></summary>

Attribute name to read the max count from.

*Visible when Max Count Input = Attribute*

Default: `MaxCount`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Count</strong> <code>int32</code></summary>

Maximum number of vertices that can be captured by a single diffusion.

*Visible when Max Count Input = Constant*

Default: `10`

⚡ PCG Overridable

</details>

## Applies At

- **Capture**: Yes - Validates before each capture
- **Probing**: No
- **Candidate**: No

## Examples

**Small localized fills**:
- **Max Count**: `5`

**Large region fills**:
- **Max Count**: `100`

**Per-seed variable size** (using attribute):
- **Max Count Input**: `Attribute`
- **Max Count Attribute**: `FillSize`

## Related

- [Depth](./depth.md) - Limit by traversal depth instead of count
- [Length](./length.md) - Limit by spatial distance

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlCount.h)
