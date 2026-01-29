---
icon: filter
description: 'In editor :: PCGEx | Fill Control : Vtx Filters'
---

# Vertex Filters

Applies vertex (node) filters to control flood fill propagation.

## Overview

The Vertex Filters control uses the standard PCGEx filter system to evaluate vertices during diffusion. Only vertices that pass the filters can be captured or probed. This provides full flexibility in defining which vertices are valid for the fill.

## How It Works

1. **Accept Filters**: Receives filter factories through input pin
2. **Evaluate Vertices**: Tests each candidate vertex against filters
3. **Control Flow**: Vertices passing filters can continue; failing vertices block propagation

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filters** | Filter Factories | Vertex/point filters to apply |

## Settings

This control inherits shared settings (Source, Steps) but typically uses all stages.

## Applies At

- **Capture**: Yes
- **Probing**: Yes
- **Candidate**: Yes

## Examples

**Fill only tagged vertices**:
Connect a filter checking for a specific tag or attribute value.

**Avoid certain regions**:
Connect a bounds filter to exclude vertices in specific areas.

**Height-limited fill**:
Connect a numeric compare filter checking `$Position.Z`.

## Tips

{% hint style="info" %}
Any vertex filter can be used. Combine multiple filters with AND/OR logic using filter groups.
{% endhint %}

## Related

- [Edge Filters](./edge-filters.md) - Filter by edge properties
- [Attribute Threshold](./attribute-threshold.md) - Simpler single-attribute filtering
- [Filters](../../../filters/README.md) - Available filter types

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlVtxFilters.h)
