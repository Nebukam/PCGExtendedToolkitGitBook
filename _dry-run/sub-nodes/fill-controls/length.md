---
icon: ruler
description: 'In editor :: PCGEx | Fill Control : Length'
---

# Length

Controls flood fill based on spatial distance traveled.

## Overview

The Length control limits diffusion based on actual spatial distance rather than graph hops. You can measure either the total path length from seed to candidate, or individual edge lengths. This creates fills that respect physical distances in the cluster.

## How It Works

1. **Distance Tracking**: Tracks cumulative or per-edge distance
2. **Mode Selection**: Chooses between path length or edge length measurement
3. **Threshold Check**: Validates that distance doesn't exceed maximum

## Settings

<details>
<summary><strong>Use Path Length</strong> <code>bool</code></summary>

When enabled, measures accumulated distance from seed to candidate. When disabled, measures only the current edge length.

- **Path Length**: Total distance traveled from seed
- **Edge Length**: Length of the current edge being traversed

Default: `true`

</details>

<details>
<summary><strong>Max Length Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the max length comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Max Length (Attr)</strong> <code>FName</code></summary>

Attribute name to read the max length from.

*Visible when Max Length Input = Attribute*

Default: `MaxLength`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Length</strong> <code>double</code></summary>

Maximum distance allowed.

*Visible when Max Length Input = Constant*

Default: `10`

⚡ PCG Overridable

</details>

## Applies At

- **Capture**: Yes
- **Probing**: Yes
- **Candidate**: Yes

## Examples

**Radial fill from seed**:
- **Use Path Length**: `true`
- **Max Length**: `500` (fills within 500 units of seed)

**Short edge filter**:
- **Use Path Length**: `false`
- **Max Length**: `50` (only traverse edges shorter than 50 units)

## Tips

{% hint style="info" %}
Path length is useful for creating circular-ish fill regions in world space, while edge length is useful for filtering out long connections.
{% endhint %}

## Related

- [Depth](./depth.md) - Limit by hop count instead of distance
- [Count](./count.md) - Limit by vertex count

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlLength.h)
