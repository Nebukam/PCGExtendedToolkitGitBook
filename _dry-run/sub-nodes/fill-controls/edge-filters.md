---
icon: filter
description: 'In editor :: PCGEx | Fill Control : Edge Filters'
---

# Edge Filters

Applies edge filters to control which connections the flood fill can traverse.

## Overview

The Edge Filters control uses the PCGEx filter system to evaluate edges during diffusion. Only edges that pass the filters can be traversed. This controls the connectivity of the fill, allowing you to block certain paths without modifying the underlying cluster.

## How It Works

1. **Accept Filters**: Receives edge filter factories through input pin
2. **Evaluate Edges**: Tests each edge before traversal
3. **Control Flow**: Passing edges allow propagation; failing edges block that path

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filters** | Filter Factories | Edge filters to apply |

## Settings

This control uses shared settings but does not support Source configuration (edges don't have a seed/vtx source distinction).

## Applies At

- **Capture**: Yes
- **Probing**: Yes
- **Candidate**: Yes

## Examples

**Avoid long edges**:
Connect an edge length filter with maximum threshold.

**Filter by edge attribute**:
Connect a numeric compare filter checking an edge attribute like `Cost` or `Weight`.

**Directional edges only**:
Connect an edge direction filter to enforce traversal direction.

## Tips

{% hint style="info" %}
Use cluster edge filters specifically. Point filters won't work correctly on edge data.
{% endhint %}

## Related

- [Vertex Filters](./vtx-filters.md) - Filter by vertex properties
- [Length](./length.md) - Simpler edge length limiting
- [Cluster Filters](../../node-library/filters/clusters/README.md) - Available edge filter types

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlEdgeFilters.h)
