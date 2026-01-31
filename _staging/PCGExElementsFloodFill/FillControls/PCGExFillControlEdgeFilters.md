---
icon: puzzle-piece
description: 'Fill Control : Edge Filters - Restricts diffusion to edges passing filter conditions'
---

# Fill Control : Edge Filters

Filter edges along which the diffusion can occur.

## Overview

This fill control sub-node restricts which edges diffusion can traverse by applying point filter sub-nodes to edge data. Only edges that pass all connected filters allow diffusion to continue. This enables creating barriers or pathways based on edge attributes.

## How It Works

1. **Receive Filters**: Accepts point filter sub-nodes via the Filters input pin.
2. **Evaluate Edges**: For each candidate edge during diffusion, runs all filters against the edge data.
3. **Block or Allow**: If any filter fails, diffusion cannot traverse that edge.

#### Usage Notes

- **Edge Attributes**: Filters evaluate edge point data, so use edge attributes for conditions.
- **No Source Setting**: This control does not support the Source setting since it always evaluates edges.
- **Compound Filters**: Connect multiple filters to create complex edge conditions (all must pass).

## Behavior

```
Edge Filtering:

Cluster with edge attributes (passable = true/false):

    [A]───true───[B]───false───[C]───true───[D]
     │            │              │            │
   true        false          true         true
     │            │              │            │
    [E]───true───[F]───true────[G]───true───[H]

Diffusion from A with filter "passable == true":

    [A]───────→ [B]     ✗    [C]          [D]
     │           ✗            │            │
     ↓           │            │            │
    [E]───────→ [F]───────→  [G]───────→  [H]

Only edges where passable=true allow diffusion.
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filters** | Params | Point filter sub-nodes to evaluate against edges |

## Settings

This control has no node-specific settings beyond the base configuration.

### Inherited Settings

→ See [Fill Controls Base](../Core/PCGExFillControlsFactoryProvider.md) for: Steps

Note: The Source setting is not available for this control as it always evaluates edge data.

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlEdgeFilters.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (uses filter pin instead)
Inherited Properties: Referenced to FPCGExFillControlConfigBase (Steps only, Source disabled)
Inputs: Filters (point filter factories)
Outputs: Fill Controls
Nested Types: None
-->
