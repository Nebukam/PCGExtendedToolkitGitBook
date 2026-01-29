# PCGExBlending Analysis

## Module Type
- [x] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades, data management |
| Core, CoreUObject, Engine | Unreal Engine foundations |
| PCG | Procedural Content Generation framework |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExBlendOpFactoryProviderSettings` | "BlendOp" | Creates blend operation factories for the Attribute Blender |

### Factories/Providers

| Factory Class | Type | Purpose |
|---------------|------|---------|
| `UPCGExBlendOpFactory` | `FPCGExDataTypeInfoBlendOp` | Creates `FPCGExBlendOperation` instances for attribute blending |
| `UPCGExSubPointsBlendInstancedFactory` | Instanced | Abstract factory for sub-point blending operations |

### Blend Operations

**EPCGExBlendingType** (18 modes - multi-source, distance/index-based):
- `None`, `Average`, `Weight`, `Min`, `Max`, `Copy` (Target/Source)
- `Sum`, `WeightedSum`, `Lerp`, `Subtract`
- `UnsignedMin`, `UnsignedMax`, `AbsoluteMin`, `AbsoluteMax`
- `WeightedSubtract`
- `Hash`, `UnsignedHash` (order-dependent vs. sorted)
- `WeightNormalize`

**EPCGExABBlendingType** (27 modes - two-operand A/B blending):
All above PLUS:
- `Multiply`, `Divide`
- `WeightedAdd`
- `Mod`, `ModCW` (component-wise modulo)

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExAttributeBlendWeight` | Weight configuration (constant, attribute, or curve-based) |
| `FPCGExAttributeBlendConfig` | Single attribute blend configuration |
| `FPCGExBlendingDetails` | Comprehensive multi-attribute blending settings |
| `FPCGExPropertiesBlendingDetails` | Point property-specific blending |
| `FPCGExPointPropertyBlendingOverrides` | Override booleans for each property |
| `FPCGExFuseDetailsBase` | Point fusion/tolerance settings |
| `FPCGExAttributeBlendToTargetDetails` | Source-to-target blending configuration |

### Core Managers & Blenders

| Class | Purpose |
|-------|---------|
| `FBlendOpsManager` | Orchestrates multiple `FPCGExBlendOperation` instances |
| `FMetadataBlender` | Single/dual-source metadata blending with per-attribute proxies |
| `FUnionBlender` | Multi-source (N>2) union-based blending |
| `FPropertiesBlender` | Named struct for point property blending |

### SubPoints Blending Variants

| Class | Purpose |
|-------|---------|
| `PCGExSubPointsBlendNone` | No blending (copy from start/end) |
| `PCGExSubPointsBlendInterpolate` | Linear interpolation blending |
| `PCGExSubPointsBlendInheritStart` | Inherit start point properties |
| `PCGExSubPointsBlendInheritEnd` | Inherit end point properties |

### Sampling Subsystem

**Enums**:
- `EPCGExRangeType`: FullRange vs. EffectiveRange normalization
- `EPCGExSurfaceSource`: All surfaces vs. Actor references
- `EPCGExSampleMethod`: WithinRange, ClosestTarget, FarthestTarget, BestCandidate
- `EPCGExSampleSource`: Source, Target, Constant
- `EPCGExAngleRange`: 10 angle normalization modes
- `EPCGExSampleWeightMode`: Distance, Attribute, or Att×Distance

### Data Assets (if any)

None directly defined in this module.

---

## Node Classification

### Standalone Nodes
- BlendOp.md [N] - `UPCGExBlendOpFactoryProviderSettings`

### Nodes with Shared Factories
- (none - this module provides factories consumed by other nodes)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### blend-operations/ [S]
- Used by: Attribute Blender nodes in other modules, Union processors
- Operations:
  - 27+ blend modes (Average, Lerp, Min, Max, Multiply, etc.)

### subpoints-blending/ [S]
- Used by: Path subdivision, edge interpolation nodes
- Operations:
  - blend-none.md [F]
  - blend-interpolate.md [F]
  - blend-inherit-start.md [F]
  - blend-inherit-end.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, FPointIO, factory patterns, buffer system

### Provides To
- PCGExGraphs: Union blending for multi-source graph merging
- PCGExElementsPaths: SubPoints blending for path interpolation
- PCGExElementsSampling: Sampling weight modes and blending
- PCGExElementsClusters: Edge/vertex attribute blending
- Any module needing attribute interpolation or blending

---

## Documentation Notes

### Concepts to Cross-Reference
- Attribute Mapping: Source-to-target blending patterns
- Distance & Proximity: Weight calculation from distance
- Input Value Sources: Blend weight can be constant or attribute

### Tricky Areas
- Two blend mode enums: `EPCGExBlendingType` (multi-source) vs `EPCGExABBlendingType` (two-operand)
- `EPCGExOperandAuthority` controls type resolution in A/B blending
- `EPCGExBlendOpOutputMode` determines where results are written
- Type-erased blend operations use function pointers for performance

### Architecture Pattern
**Factory → Operation → Manager** pipeline with type-erased polymorphism through function pointers and template instantiation caching (14 types × N blend modes = only 14 template instantiations).

---

## Header File Structure

**Total Public Headers**: 30 files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types, union common |
| Core/ | Blend operations, factory, manager, proxy blending (7 files) |
| Blenders/ | Metadata, union, union ops manager (3 files) |
| Details/ | Blending, fuse, intersection details (3 files) |
| Sampling/ | Sampling modes, helpers, apply details (4 files) |
| SubPoints/ | SubPoints factory and 4 blend variants (6 files) |
| Helpers/ | Blending helpers |
| Utils/ | Point IO merger |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 (BlendOp provider) |
| Providers [P] | 1 |
| Factories [F] | 2 (BlendOpFactory, SubPointsBlendFactory) |
| Shared Folders [S] | 2 (blend-operations, subpoints-blending) |
| Data Assets [A] | 0 |
| Public Headers | 30 |
