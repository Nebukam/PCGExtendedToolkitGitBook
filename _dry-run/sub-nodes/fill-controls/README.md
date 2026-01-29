---
icon: droplet
description: Fill Control sub-nodes for flood fill diffusion
---

# Fill Controls

Fill Controls govern how flood fill diffusion propagates across cluster graphs. They can stop propagation, filter candidates, score paths, and track accumulated values. Multiple controls combine to create sophisticated fill behaviors.

## Available Fill Controls

### Basic Controls
| Control | Description |
|---------|-------------|
| [Count](./count.md) | Stop after capturing a maximum number of vertices |
| [Depth](./depth.md) | Stop at maximum graph traversal depth |
| [Length](./length.md) | Stop at maximum path or edge length |

### Attribute-Based Controls
| Control | Description |
|---------|-------------|
| [Attribute Threshold](./attribute-threshold.md) | Stop when attribute crosses a threshold |
| [Attribute Accumulation](./attribute-accumulation.md) | Track accumulated attribute values along paths |
| [Running Average](./running-average.md) | Filter candidates outside tolerance of running average |

### Filter Controls
| Control | Description |
|---------|-------------|
| [Vertex Filters](./vtx-filters.md) | Apply vertex filters to control propagation |
| [Edge Filters](./edge-filters.md) | Apply edge filters to control propagation |

### Heuristics Controls
| Control | Description |
|---------|-------------|
| [Heuristics Budget](./heuristics-budget.md) | Stop when accumulated heuristic cost exceeds budget |
| [Heuristics Scoring](./heuristics-scoring.md) | Compute heuristic scores for candidate prioritization |
| [Heuristics Threshold](./heuristics-threshold.md) | Stop when instantaneous heuristic crosses threshold |

### Directional Control
| Control | Description |
|---------|-------------|
| [Keep Direction](./keep-direction.md) | Maintain consistent traversal direction |

## How Fill Controls Work

Fill controls operate at three stages of the diffusion process:

### Diffusion Stages

| Stage | Description | Controls That Apply |
|-------|-------------|---------------------|
| **Capture** | When a vertex is claimed by the diffusion | Count, Depth, Length, Attribute Threshold |
| **Probing** | When exploring neighbors of captured vertices | Depth, Length, Attribute Threshold |
| **Candidate** | When evaluating potential vertices to capture | All controls |

### Control Flow

```
     Seed Point
         │
         ▼
┌─────────────────┐
│ Capture Check   │◄── Count, Depth, Length, Attribute Threshold
└────────┬────────┘
         │ (if valid)
         ▼
┌─────────────────┐
│ Probe Check     │◄── Depth, Length, Attribute Threshold
└────────┬────────┘
         │ (for each neighbor)
         ▼
┌─────────────────┐
│ Score Candidate │◄── Heuristics Scoring, Accumulation
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Validate        │◄── All controls
│ Candidate       │
└────────┬────────┘
         │ (if valid)
         ▼
    Add to Queue
```

## Shared Settings

All fill controls share these common configuration options:

### Source

<details>
<summary><strong>Source</strong> <code>EPCGExFloodFillSettingSource</code></summary>

Where to read attribute values from.

| Option | Behavior |
|--------|----------|
| **Seed** | Read from the seed point that started this diffusion |
| **Vtx** | Read from the current vertex being evaluated |

*Not supported by all controls*

Default: `Seed`

</details>

### Steps

<details>
<summary><strong>Steps</strong> <code>bitmask</code></summary>

At which diffusion stages this control is applied.

| Flag | Description |
|------|-------------|
| **Capture** | When a node is captured by the diffusion |
| **Probing** | When probing neighbors of a captured node |
| **Candidate** | When validating a candidate for capture |

*Not supported by all controls*

Default: `Candidate`

</details>

## Parent Node

Fill Controls are consumed by the [Cluster : Flood Fill](../../node-library/clusters/flood-fill.md) node.

---

📦 **Module**: `PCGExElementsFloodFill`
