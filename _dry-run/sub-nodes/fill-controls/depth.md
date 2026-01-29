---
icon: layer-group
description: 'In editor :: PCGEx | Fill Control : Depth'
---

# Depth

Controls flood fill based on graph traversal depth from the seed point.

## Overview

The Depth control limits how far the diffusion can travel from its seed in terms of graph hops. Depth 1 captures only immediate neighbors, depth 2 captures neighbors of neighbors, and so on. This creates concentric ring-like expansion patterns.

## How It Works

1. **Track Depth**: Each candidate tracks its hop count from the seed
2. **Threshold Check**: Validates that candidate depth doesn't exceed maximum
3. **Multi-Stage**: Can validate at capture, probe, and candidate stages

## Settings

<details>
<summary><strong>Max Depth Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the max depth comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Max Depth (Attr)</strong> <code>FName</code></summary>

Attribute name to read the max depth from.

*Visible when Max Depth Input = Attribute*

Default: `MaxDepth`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Depth</strong> <code>int32</code></summary>

Maximum number of graph hops from the seed point.

*Visible when Max Depth Input = Constant*

Default: `10`

⚡ PCG Overridable

</details>

## Applies At

- **Capture**: Yes
- **Probing**: Yes
- **Candidate**: Yes

## Examples

**Immediate neighbors only**:
- **Max Depth**: `1`

**Two-hop neighborhood**:
- **Max Depth**: `2`

**Variable depth per seed**:
- **Max Depth Input**: `Attribute`
- **Max Depth Attribute**: `Influence`

## Tips

{% hint style="info" %}
Depth is measured in graph edges, not spatial distance. A straight path and a winding path to the same depth will capture different amounts of space.
{% endhint %}

## Related

- [Count](./count.md) - Limit by vertex count instead
- [Length](./length.md) - Limit by spatial distance instead of hops

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlDepth.h)
