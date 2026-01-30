---
icon: diagram-project
description: 'Refine : Filter'
---

# Refine : Filter

Keep or remove edges based on **Edge Filter** results.

## Overview

Filter refinement uses the Edge Filters input on the parent Refine Edges node to evaluate each edge. Edges that pass the filter can be kept or removed, depending on the Invert setting.

## Key Behavior

```
Edge Filters evaluate each edge:

Before:                      After (Invert = false):
●───●───●───●               ●   ●───●   ●
    │   │                       │
    ●   ●                       ●   ●

═══ = passes filter          Edges that PASS are removed
─── = fails filter           Edges that FAIL are kept
```

The filter result determines edge fate: by default, edges passing the filter are **removed**.

## How It Works

1. **Load filters**: Use Edge Filters from parent node input
2. **Evaluate edges**: Test each edge against filter chain
3. **Apply result**: Remove or keep based on pass/fail and Invert setting
4. **Mark validity**: Update edge validity flags

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the filter logic.

| Invert | Filter passes | Filter fails |
|--------|---------------|--------------|
| `false` | Removed | Kept |
| `true` | Kept | Removed |

Default: `false`

⚡ PCG Overridable

</details>

## Edge Filters

This refinement operation requires **Edge Filters** connected to the parent Refine Edges node. Edge filters can test:

- Edge length
- Edge direction/angle
- Endpoint attributes
- Custom conditions

See [Edge Filters](../../filters/edge-filters.md) for available filter types.

## Use Cases

**Remove long edges**:
- Edge Filter: Length > threshold
- Invert: `false`
- Result: Only short edges remain

**Keep specific connections**:
- Edge Filter: Custom attribute condition
- Invert: `true`
- Result: Only matching edges remain

**Remove edges by angle**:
- Edge Filter: Angle to up vector > threshold
- Invert: `false`
- Result: Removes steep edges

## Examples

**Prune by attribute**:
- Edge Filter: `EdgeWeight < 0.5`
- **Invert**: `false`
- Result: Removes weak connections

**Keep tagged edges**:
- Edge Filter: `IsMainPath = true`
- **Invert**: `true`
- Result: Only main path edges remain

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineByFilter.h)
