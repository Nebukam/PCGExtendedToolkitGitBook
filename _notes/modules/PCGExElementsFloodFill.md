# PCGExElementsFloodFill Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExGraphs | Cluster structures |
| PCGExHeuristics | Scoring for fill controls |
| PCGExFilters | Filter-based controls |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**14 Flood Fill Nodes**:

#### Main Node
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExClusterFloodFillSettings` | "Cluster Flood Fill" | Diffuse attributes across clusters |

#### Fill Control Factories (13 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAbstractFillControlsSettings` | "Fill Controls Abstract" | Abstract base |
| `UPCGExFillControlsAttributeThresholdSettings` | "Fill : Attribute Threshold" | Attribute-based threshold |
| `UPCGExFillControlsAttributeAccumulationSettings` | "Fill : Attribute Accumulation" | Accumulating threshold |
| `UPCGExFillControlsEdgeFiltersSettings` | "Fill : Edge Filters" | Edge filter controls |
| `UPCGExFillControlsDepthSettings` | "Fill : Depth" | Depth-limited fill |
| `UPCGExFillControlsCountSettings` | "Fill : Count" | Count-limited fill |
| `UPCGExFillControlsHeuristicsBudgetSettings` | "Fill : Heuristics Budget" | Budget-based fill |
| `UPCGExFillControlsHeuristicsScoringSettings` | "Fill : Heuristics Scoring" | Score-based fill |
| `UPCGExFillControlsHeuristicsThresholdSettings` | "Fill : Heuristics Threshold" | Threshold-based fill |
| `UPCGExFillControlsKeepDirectionSettings` | "Fill : Keep Direction" | Direction-constrained fill |
| `UPCGExFillControlsLengthSettings` | "Fill : Length" | Length-limited fill |
| `UPCGExFillControlsVtxFiltersSettings` | "Fill : Vtx Filters" | Vertex filter controls |
| `UPCGExFillControlsRunningAverageSettings` | "Fill : Running Average" | Running average controls |

### Key Features

- Graph diffusion algorithm
- Multiple control strategies (depth, count, heuristics, filters)
- Attribute propagation across connected networks

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- cluster-flood-fill.md [N]

### Nodes with Dedicated Sub-operations

#### 📁 fill-controls/ [S]
All 13 fill control factories

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Cluster structures
- PCGExHeuristics: Scoring for fill controls
- PCGExFilters: Filter-based controls

### Provides To
- Attribute diffusion workflows

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 main + 13 control factories = 14 |
| Factories [F] | 13 |
