# PCGExElementsPaths Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExFilters | Point filtering |
| PCGExMatching | Matching utilities |
| PCGExBlending | Attribute blending |
| PCGExFoundations | Tangent factories, subdivision details |
| GeometryCore, GeometryFramework, GeometryAlgorithms | Geometry utilities (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**26 Path Processing Nodes**:

#### Standalone Path Operations (22 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAttributeRollingSettings` | "Attribute Rolling" | Rolling blend of attributes across path |
| `UPCGExBlendPathSettings` | "Blend Path" | Blend points between endpoints |
| `UPCGExBevelPathSettings` | "Bevel Path" | Bevel path points with multiple profiles |
| `UPCGExBoundsPathIntersectionSettings` | "Bounds Path Intersection" | Intersect paths with bounds |
| `UPCGExCopyToPathsSettings` | "Copy to Paths" | Deform points along paths |
| `UPCGExCreateSplineSettings` | "Create Spline" | Generate splines from points |
| `UPCGExFuseCollinearSettings` | "Fuse Collinear" | Merge collinear points |
| `UPCGExOffsetPathSettings` | "Offset Path" | Parallel offset of paths |
| `UPCGExPathCrossingsSettings` | "Path Crossings" | Find path-path crossing points |
| `UPCGExPathReduceSettings` | "Path Reduce" | Reduce points preserving tangents |
| `UPCGExPathResampleSettings` | "Path Resample" | Equal-spacing resampling |
| `UPCGExPathShiftSettings` | "Path Shift" | Shift point positions |
| `UPCGExPathShrinkSettings` | "Path Shrink" | Remove endpoints by distance/count |
| `UPCGExPathSlideSettings` | "Path Slide" | Slide points along path direction |
| `UPCGExPathSplineMeshSimpleSettings` | "Path Spline Mesh" | Create spline mesh components |
| `UPCGExPathStitchSettings` | "Path Stitch" | Join paths at endpoints |
| `UPCGExReversePointOrderSettings` | "Reverse Point Order" | Reverse winding/order |
| `UPCGExSplineToPathSettings` | "Spline to Path" | Extract paths from splines |
| `UPCGExSplitPathSettings` | "Split Path" | Divide single path into multiple |
| `UPCGExSubdivideSettings` | "Subdivide" | Insert intermediate points |
| `UPCGExWriteTangentsSettings` | "Write Tangents" | Compute and write tangent vectors |
| `UPCGExWritePathPropertiesSettings` | "Write Path Properties" | Multi-property computation (20+ outputs) |

#### Nodes with Instanced Sub-Operations (4 nodes)
| Class | Display Name | Factory | Purpose |
|-------|--------------|---------|---------|
| `UPCGExSmoothSettings` | "Smooth" | `UPCGExSmoothingInstancedFactory` | Path smoothing (2 methods) |
| `UPCGExOrientSettings` | "Orient" | `UPCGExOrientInstancedFactory` | Path orientation (3 methods) |

### Factories/Providers

#### Smoothing Methods [S]
- Used by: Smooth node
- Base: `UPCGExSmoothingInstancedFactory` → `FPCGExSmoothingOperation`
- Operations:
  - moving-average.md [F] - `UPCGExMovingAverageSmoothing` - Window-based averaging
  - radius.md [F] - `UPCGExRadiusSmoothing` - Spatial radius-based blending

#### Orient Methods [S]
- Used by: Orient node
- Base: `UPCGExOrientInstancedFactory` → `FPCGExOrientOperation`
- Operations:
  - average.md [F] - `UPCGExOrientAverage` - Average of neighbor orientations
  - weighted.md [F] - `UPCGExOrientWeighted` - Weighted orientation blending
  - look-at.md [F] - `UPCGExOrientLookAt` - Look-at target orientation

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExPathSolidificationAxisDetails` | Per-axis solidification config |
| `FPCGExPathSolidificationRadiusDetails` | Radius with flip/scale options |
| `FPCGExShrinkPathEndpointDistanceDetails` | Distance-based shrinking |
| `FPCGExShrinkPathEndpointCountDetails` | Count-based shrinking |
| `FPCGExBoxIntersectionDetails` | Box intersection configuration |

### Path Attribute Macros

**Path-level attributes**: PathLength, PathDirection, PathCentroid, IsClockwise, Area, Perimeter, Compactness, BoundingBox*, InclusionDepth, NumInside

**Point-level attributes**: Dot, Angle, Distance*, PointTime, Normal, Binormal, Direction*

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- attribute-rolling.md [N]
- blend-path.md [N]
- bevel-path.md [N]
- bounds-path-intersection.md [N]
- copy-to-paths.md [N]
- create-spline.md [N]
- fuse-collinear.md [N]
- offset-path.md [N]
- path-crossings.md [N]
- path-reduce.md [N]
- path-resample.md [N]
- path-shift.md [N]
- path-shrink.md [N]
- path-slide.md [N]
- path-spline-mesh.md [N]
- path-stitch.md [N]
- reverse-point-order.md [N]
- spline-to-path.md [N]
- split-path.md [N]
- subdivide.md [N]
- write-tangents.md [N]
- write-path-properties.md [N]

### Nodes with Dedicated Sub-operations

#### 📁 smooth/ [N+F]
- README.md - `UPCGExSmoothSettings`
- moving-average.md [F] - `UPCGExMovingAverageSmoothing`
- radius.md [F] - `UPCGExRadiusSmoothing`

#### 📁 orient/ [N+F]
- README.md - `UPCGExOrientSettings`
- average.md [F] - `UPCGExOrientAverage`
- weighted.md [F] - `UPCGExOrientWeighted`
- look-at.md [F] - `UPCGExOrientLookAt`

---

## Cross-Module Relationships

### Consumes From
- PCGExFoundations: Tangent factories, subdivision details
- PCGExFilters: Point filters for conditional operations
- PCGExBlending: Attribute blending for smoothing
- PCGExMatching: Intersection detection

### Provides To
- Used by any workflow requiring path manipulation

---

## Documentation Notes

### Concepts to Cross-Reference
- Tangent Calculation: Uses tangent factories from PCGExFoundations
- Blending: Smooth node uses PCGExBlending
- Input Value Sources: Many settings support constant vs attribute

### Tricky Areas
- **Bevel profiles**: Multiple profile types with different scaling modes
- **Write Path Properties**: Macro-generated 20+ optional attributes
- **Smoothing + Blending**: Integration between smoothing methods and attribute blending

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 26 |
| Providers [P] | 2 (Smooth, Orient) |
| Factories [F] | 5 (2 smoothing + 3 orient) |
| Shared Folders [S] | 2 |
| Data Assets [A] | 0 |
| Public Headers | 36 |
