# PCGExFoundations Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [x] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades, data management |
| PCGExBlending | Blending utilities |
| PCGExFilters | Filter framework |
| PCGExPickers | Picker utilities |
| PCGExMatching | Matching framework |
| GeometryCore, GeometryFramework | Geometry utilities (private) |
| PropertyPath | Property reflection (private) |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

This module provides **24+ user-facing nodes**:

#### Filter/Selection Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExUberFilterSettings` | "Uber Filter" | Multi-rule point filtering |
| `UPCGExUberFilterCollectionsSettings` | "Uber Filter (Data)" | Collection-level filtering |
| `UPCGExDiscardByPointCountSettings` | "Discard By Point Count" | Filter by dataset size |
| `UPCGExDiscardSameSettings` | "Discard Same" | Filter duplicate datasets |
| `UPCGExCherryPickPointsSettings` | "Cherry Pick Points" | Index-based point selection |
| `UPCGExSpatialTriageSettings` | "Spatial Triage" | Spatial bounds testing |

#### Transform Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExTransformPointsSettings` | "Transform Points" | Position/Rotation/Scale with attribute overrides |
| `UPCGExCopyToPointsSettings` | "Copy to Points" | Copy with size-fitting/justification |

#### Merge Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExMergePointsSettings` | "Merge Points" | Merge point collections |
| `UPCGExMergePointsByTagSettings` | "Merge Points by Tag" | Tag-based merging |

#### Utility Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExWriteGUIDSettings` | "Write GUID" | Write GUID attribute |
| `UPCGExGetGUIDSettings` | "Get GUID" | Read GUID attribute |
| `UPCGExDestroyActorSettings` | "Destroy Actor" | Destroy spawned actors |
| `UPCGExIterationsSettings` | "Iterations" | Loop iteration generation |

#### Control Flow Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExUberBranchSettings` | "Uber Branch" | Multi-condition branching |
| `UPCGExBranchOnDataAttributeSettings` | "Branch on Data" | Branch on @Data attribute |
| `UPCGExRecursionTrackerSettings` | "Break" | Recursion tracking |

#### Bitmask Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBitmaskSettings` | "Bitmask" | Create bitmask attribute |
| `UPCGExBitmaskMergeSettings` | "Bitmask Merge" | Merge bitmask operations |
| `UPCGExBitwiseOperationSettings` | "Bitmask Operation" | Bitwise AND/OR/XOR |

#### Debug Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExDrawAttributesSettings` | "Draw Attributes" | Debug visualize attributes |
| `UPCGExFlushDebugSettings` | "Flush Debug" | Clear persistent debug lines |

#### Constant Nodes
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExConstantSettings` | "Constant" | Generate constant values |
| `UPCGExConstantEnumSettings` | "Enum Constant" | Break enum into constants |

### Factories/Providers

#### Tangent Factories [S]
- Used by: Path nodes for spline tangent calculations
- Operations:
  - `UPCGExAutoTangents` - Auto-calculated using apex geometry
  - `UPCGExCatmullRomTangents` - Catmull-Rom spline tangents
  - `UPCGExTangentsFromNeighbors` - Tangents from neighbor points
  - `UPCGExTangentsFromTransform` - Tangents from transform data
  - `UPCGExTangentsZero` - Zero tangents

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExSocket` | Socket definition (name, relative transform, tag) |
| `FPCGExInfluenceDetails` | Influence/weight configuration |
| `FPCGExCollisionDetails` | Physics collision query setup |
| `FPCGExRemapDetails` | Value remapping with curves |
| `FPCGExAxisDeformDetails` | Axis deformation (alpha-based ranges) |
| `FPCGExClampDetails` | Min/max value clamping |
| `FPCGExManhattanDetails` | Manhattan subdivision parameters |
| `FPCGExSubdivisionDetails` | Path subdivision (Distance/Count/Manhattan) |
| `FPCGExSplineMeshDetails` | Spline mesh descriptor |
| `FPCGExSocketFitDetails` | Socket fitting parameters |
| `FPCGExSocketOutputDetails` | Socket output configuration |

### Base Processor Classes

| Class | Purpose |
|-------|---------|
| `UPCGExPointsProcessorSettings` | Abstract base for point operations |
| `FPCGExPointsProcessorContext` | Base context with batch processing |
| `FPCGExTangentsOperation` | Base for tangent calculations |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- uber-filter.md [N] - `UPCGExUberFilterSettings`
- uber-filter-collections.md [N] - `UPCGExUberFilterCollectionsSettings`
- discard-by-point-count.md [N] - `UPCGExDiscardByPointCountSettings`
- discard-same.md [N] - `UPCGExDiscardSameSettings`
- cherry-pick-points.md [N] - `UPCGExCherryPickPointsSettings`
- spatial-triage.md [N] - `UPCGExSpatialTriageSettings`
- transform-points.md [N] - `UPCGExTransformPointsSettings`
- copy-to-points.md [N] - `UPCGExCopyToPointsSettings`
- merge-points.md [N] - `UPCGExMergePointsSettings`
- merge-points-by-tag.md [N] - `UPCGExMergePointsByTagSettings`
- write-guid.md [N] - `UPCGExWriteGUIDSettings`
- get-guid.md [N] - `UPCGExGetGUIDSettings`
- destroy-actor.md [N] - `UPCGExDestroyActorSettings`
- iterations.md [N] - `UPCGExIterationsSettings`
- uber-branch.md [N] - `UPCGExUberBranchSettings`
- branch-on-data.md [N] - `UPCGExBranchOnDataAttributeSettings`
- break.md [N] - `UPCGExRecursionTrackerSettings`
- bitmask.md [N] - `UPCGExBitmaskSettings`
- bitmask-merge.md [N] - `UPCGExBitmaskMergeSettings`
- bitmask-operation.md [N] - `UPCGExBitwiseOperationSettings`
- draw-attributes.md [N] - `UPCGExDrawAttributesSettings`
- flush-debug.md [N] - `UPCGExFlushDebugSettings`
- constant.md [N] - `UPCGExConstantSettings`
- enum-constant.md [N] - `UPCGExConstantEnumSettings`

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### tangents/ [S]
- Used by: Path nodes (Smooth, Subdivide, etc.)
- Operations:
  - tangent-auto.md [F] - Auto tangent using apex geometry
  - tangent-catmull-rom.md [F] - Catmull-Rom spline
  - tangent-from-neighbors.md [F] - From neighbor points
  - tangent-from-transform.md [F] - From transform data
  - tangent-zero.md [F] - Zero tangents

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, FPointIO, factory patterns
- PCGExFilters: Point filter framework
- PCGExPickers: Picker framework
- PCGExMatching: Matching framework
- PCGExBlending: Blending utilities

### Provides To
- PCGExElementsPaths: Tangent factories, subdivision details
- PCGExElementsClusters: Point processing base classes
- PCGExElementsSampling: Collision details
- Any module needing point transformation or filtering

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Transform nodes support attribute-driven overrides
- Bitmask Operations: Bitmask nodes use FPCGExBitmask
- Fitting & Justification: Copy to Points uses scale/justify details

### Tricky Areas
- **Tangent factories**: Multiple methods for calculating spline tangents
- **Subdivision modes**: Distance vs Count vs Manhattan (axis-aligned)
- **Collision details**: Multiple filter types (channel, object type, profile)
- **Transform overrides**: Position/Rotation/Scale all support attribute-driven values

### Key Utilities Provided
- **Value Processing**: Remapping, clamping, influence calculations
- **Spatial/Physics**: Collision detection, spatial triage
- **Socket System**: Named attachment points with transforms
- **Threading**: Base context with batch processing support

---

## Header File Structure

**Total Public Headers**: 49 files

| Directory | Content |
|-----------|---------|
| Core/ | Point processing base classes |
| Tangents/ | Spline tangent factories (6 implementations) |
| Details/ | Reusable configuration structs |
| Elements/ | PCG node implementations |
| Helpers/ | Utility functions |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 24+ |
| Providers [P] | 5 (tangent factories) |
| Factories [F] | 5 (tangent factories) |
| Shared Folders [S] | 1 (tangents) |
| Data Assets [A] | 0 |
| Public Headers | 49 |
