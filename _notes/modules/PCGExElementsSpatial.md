# PCGExElementsSpatial Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExFoundations | Foundation utilities |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**15 Spatial Processing Nodes**:

#### Relaxation (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExLloydRelaxSettings` | "Lloyd Relax 3D" | 3D Lloyd relaxation |
| `UPCGExLloydRelax2DSettings` | "Lloyd Relax 2D" | 2D Lloyd relaxation |

#### Point Operations (4 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExFlatProjectionSettings` | "Flat Projection" | Project points to plane |
| `UPCGExFusePointsSettings` | "Fuse Points" | Fuse nearby points |
| `UPCGExCollocationCountSettings` | "Collocation Count" | Count collocated points |
| `UPCGExNormalizeSettings` | "Normalize" | Normalize point positions |

#### Bounds Operations (5 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPointsToBoundsSettings` | "Points to Bounds" | Convert points to bounds |
| `UPCGExBoundsAxisToPointsSettings` | "Bounds Axis to Points" | Extract axis as points |
| `UPCGExBoundsToPointsSettings` | "Bounds to Points" | Convert bounds to points |
| `UPCGExFindPointOnBoundsSettings` | "Find Point on Bounds" | Find closest on bounds |
| `UPCGExMovePivotSettings` | "Move Pivot" | Move point pivot |

#### Packing (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBinPackingSettings` | "Bin Packing" | Bin packing algorithm |
| `UPCGExBestFitPackingSettings` | "Best Fit Packing" | Best-fit packing |

#### Analysis (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBestMatchAxisSettings` | "Best Match Axis" | Find best matching axis |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- lloyd-relax.md [N]
- lloyd-relax-2d.md [N]
- flat-projection.md [N]
- fuse-points.md [N]
- collocation-count.md [N]
- normalize.md [N]
- points-to-bounds.md [N]
- bounds-axis-to-points.md [N]
- bounds-to-points.md [N]
- find-point-on-bounds.md [N]
- move-pivot.md [N]
- bin-packing.md [N]
- best-fit-packing.md [N]
- best-match-axis.md [N]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, spatial utilities

### Provides To
- Any workflow requiring spatial point manipulation

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 15 |
