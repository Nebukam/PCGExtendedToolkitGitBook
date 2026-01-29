# PCGExElementsSampling Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExFilters | Filtering |
| PCGExMatching | Target matching |
| PCGExBlending | Attribute blending |
| PCGExFoundations | Foundation utilities |
| RenderCore, RHI | Texture sampling (private) |
| PhysicsCore | Surface collision (private) |
| GeometryCore, GeometryFramework, GeometryAlgorithms | Geometry (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**13 Sampling Nodes**:

#### Texture Sampling (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSampleTextureSettings` | "Sample : Texture" | Sample texture data using UV coordinates |
| `UPCGExGetTextureDataSettings` | "Get Texture Data" | Create texture data from paths |

#### Point Sampling (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSampleNearestPointSettings` | "Sample : Nearest Point" | Sample nearest target points |
| `UPCGExSampleNearestBoundsSettings` | "Sample : Nearest Bounds" | Sample nearest target bounds |

#### Path/Spline Sampling (3 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSampleNearestPathSettings` | "Sample : Nearest Path" | Sample nearest paths |
| `UPCGExSampleNearestSplineSettings` | "Sample : Nearest Spline" | Sample nearest polylines |
| `UPCGExSampleInsidePathSettings` | "Sample : Inside Path" | Sample points inside paths |

#### Surface Sampling (2 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSampleNearestSurfaceSettings` | "Sample : Nearest Surface" | Sample nearest collidable surface |
| `UPCGExSampleSurfaceGuidedSettings` | "Sample : Line Trace" | Directional line trace sampling |

#### Mesh Sampling (1 node)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExSampleSocketsSettings` | "Sample : Sockets" | Extract static mesh sockets |

#### Filtering/Utility (3 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExDiscardByOverlapSettings` | "Discard By Overlap" | Discard datasets by overlap |
| `UPCGExSampleOverlapStatsSettings` | "Sample : Overlap Stats" | Per-point overlap statistics |
| `UPCGExSelfPruningSettings` | "Self Pruning" | Precise self-pruning |

### Factories/Providers

#### Texture Parameter Factory [S]
- `UPCGExTexParamFactoryData` - Texture parameter factory
- `UPCGExTexParamProviderSettings` - Provider settings

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExTextureParamConfig` | Texture parameter configuration |
| `FPCGExOverlapScoresWeighting` | Overlap scoring weights |

### Output Attribute Macros

**Nearest Point** (8 fields): Success, Transform, LookAtTransform, Distance, Angle, NumSamples, SampledIndex

**Nearest Path** (14 fields): Success, Transform, LookAtTransform, Distance, Angle, Time, SegmentTime, NumInside, NumSamples, ClosedLoop

**Nearest Spline** (15 fields): Similar to path + tangent outputs

**Nearest Surface** (8 fields): Success, Location, LookAt, Normal, Distance, IsInside, ActorReference, PhysMat

**Line Trace** (10 fields): Above + UVCoord, FaceIndex

### Enumerations

| Enum | Values |
|------|--------|
| `EPCGExBoundsSampleMethod` | AllOverlapping, Closest, Farthest, Largest, Smallest, BestCandidate |
| `EPCGExOverlapTestMode` | Fast, Box, Sphere |
| `EPCGExOverlapPruningLogic` | LowToHigh, HighToLow |
| `EPCGExSelfPruningMode` | Prune, WriteResult |
| `EPCGExPathSamplingIncludeMode` | Closed, Open, Any |
| `EPCGExSplineDepthMode` | Min, Max, Average |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- sample-texture.md [N] - `UPCGExSampleTextureSettings`
- get-texture-data.md [N] - `UPCGExGetTextureDataSettings`
- sample-nearest-point.md [N] - `UPCGExSampleNearestPointSettings`
- sample-nearest-bounds.md [N] - `UPCGExSampleNearestBoundsSettings`
- sample-nearest-path.md [N] - `UPCGExSampleNearestPathSettings`
- sample-nearest-spline.md [N] - `UPCGExSampleNearestSplineSettings`
- sample-inside-path.md [N] - `UPCGExSampleInsidePathSettings`
- sample-nearest-surface.md [N] - `UPCGExSampleNearestSurfaceSettings`
- sample-line-trace.md [N] - `UPCGExSampleSurfaceGuidedSettings`
- sample-sockets.md [N] - `UPCGExSampleSocketsSettings`
- discard-by-overlap.md [N] - `UPCGExDiscardByOverlapSettings`
- sample-overlap-stats.md [N] - `UPCGExSampleOverlapStatsSettings`
- self-pruning.md [N] - `UPCGExSelfPruningSettings`

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### texture-params/ [S]
- texture-param.md [F] - `UPCGExTexParamProviderSettings`

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, octree utilities
- PCGExMatching: Target matching via FTargetsHandler
- PCGExBlending: Weighted blending
- PCGExFoundations: Collision details

### Provides To
- Any workflow requiring data sampling from various sources

---

## Documentation Notes

### Concepts to Cross-Reference
- Distance & Proximity: All sampling nodes use distance calculations
- Blending: Weighted blending from multiple targets

### Tricky Areas
- **Thread safety**: Scoped numeric values, RW locks for overlap
- **Octree optimization**: Spatial acceleration for overlap/proximity
- **Main thread execution**: Some nodes (texture, sockets) require main thread
- **2D projection**: Path sampling uses projection for inside detection

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 13 |
| Providers [P] | 1 (TexParam) |
| Factories [F] | 1 |
| Shared Folders [S] | 1 |
| Data Assets [A] | 0 |
| Public Headers | 15 |
