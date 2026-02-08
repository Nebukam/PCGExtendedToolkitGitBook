# PCGExMatching Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades, octree |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**7 Matching Rule Providers**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExCreateMatchAttrToAttrSettings` | "Match : Attr to Attr" | Compare attributes between sources |
| `UPCGExCreateMatchTagToAttrSettings` | "Match : Tag to Attr" | Match tags against attributes |
| `UPCGExCreateMatchSharedTagSettings` | "Match : Shared Tag" | Match by shared tags |
| `UPCGExCreateMatchOverlapSettings` | "Match : Overlap" | Spatial overlap detection |
| `UPCGExCreateMatchByIndexSettings` | "Match : By Index" | Match by point index |
| `UPCGExCreateMatchRandomSettings` | "Match : Random" | Random match with threshold |
| `UPCGExCreateMatchCopyTagsSettings` | "Match : Copy Tags" | Copy tags from matched targets |

### Factories/Providers

**Factory Pattern**:
| Factory Class | Operation Class | Purpose |
|---------------|-----------------|---------|
| `UPCGExMatchAttrToAttrFactory` | `FPCGExMatchAttrToAttr` | Attribute comparison |
| `UPCGExMatchTagToAttrFactory` | `FPCGExMatchTagToAttr` | Tag-to-attribute matching |
| `UPCGExMatchSharedTagFactory` | `FPCGExMatchSharedTag` | Shared tag matching |
| `UPCGExMatchOverlapFactory` | `FPCGExMatchOverlap` | Spatial overlap |
| `UPCGExMatchByIndexFactory` | `FPCGExMatchByIndex` | Index matching |
| `UPCGExMatchRandomFactory` | `FPCGExMatchRandom` | Random matching |
| `UPCGExMatchCopyTagsFactory` | `FPCGExMatchCopyTags` | Tag copying |

### Core Infrastructure Classes

| Class | Purpose |
|-------|---------|
| `FPCGExMatchRuleOperation` | Base operation class |
| `FDataMatcher` | Main matching engine (multi-rule orchestration) |
| `FScope` | Matching scope/context with atomic counter |
| `FTargetsHandler` | Target management with spatial queries |

### Shared Structs/Details

#### Rule Configurations
| Struct | Purpose |
|--------|---------|
| `FPCGExMatchRuleConfigBase` | Base: Strictness, bInvert |
| `FPCGExMatchAttrToAttrConfig` | Numeric/String comparison, tolerance |
| `FPCGExMatchTagToAttrConfig` | Tag name input, value matching |
| `FPCGExMatchSharedTagConfig` | Specific/Any/All modes |
| `FPCGExMatchOverlapConfig` | Expansion, min ratio, recursion |
| `FPCGExMatchByIndexConfig` | Source selector, index safety |
| `FPCGExMatchRandomConfig` | Seed, threshold |
| `FPCGExMatchCopyTagsConfig` | (inherits base only) |

#### Matching Details
| Struct | Purpose |
|--------|---------|
| `FPCGExMatchingDetails` | Mode, usage, limits, unmatched handling |

### Enumerations

| Enum | Values |
|------|--------|
| `EPCGExMapMatchMode` | Disabled, All, Any |
| `EPCGExMatchStrictness` | Required, Any (Optional) |
| `EPCGExClusterComponentTagMatchMode` | Vtx, Edges, Any, Both, Separated |
| `EPCGExMatchingDetailsUsage` | Default, Cluster, Sampling |
| `EPCGExTagMatchMode` | Specific, AnyShared, AllShared |
| `EPCGExMatchOverlapExpansionMode` | None, Add, Scale |
| `EPCGExMatchByIndexSource` | Target, Candidate |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- match-attr-to-attr.md [N] - `UPCGExCreateMatchAttrToAttrSettings`
- match-tag-to-attr.md [N] - `UPCGExCreateMatchTagToAttrSettings`
- match-shared-tag.md [N] - `UPCGExCreateMatchSharedTagSettings`
- match-overlap.md [N] - `UPCGExCreateMatchOverlapSettings`
- match-by-index.md [N] - `UPCGExCreateMatchByIndexSettings`
- match-random.md [N] - `UPCGExCreateMatchRandomSettings`
- match-copy-tags.md [N] - `UPCGExCreateMatchCopyTagsSettings`

### Nodes with Shared Factories
- (none - each rule is self-contained)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### matching-rules/ [S]
- Used by: Nodes that accept match rule inputs
- Operations:
  - rule-attr-to-attr.md [F]
  - rule-tag-to-attr.md [F]
  - rule-shared-tag.md [F]
  - rule-overlap.md [F]
  - rule-by-index.md [F]
  - rule-random.md [F]
  - rule-copy-tags.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, octree, factory patterns

### Provides To
- PCGExFilters: Distance filter uses FTargetsHandler
- PCGExElementsSampling: Target matching for sampling
- PCGExElementsClusters: Cluster component matching
- Any node needing data correlation

---

## Documentation Notes

### Concepts to Cross-Reference
- Comparison Operators: EPCGExComparison used by attr comparisons
- Distance & Proximity: FTargetsHandler uses spatial queries

### Tricky Areas
- **Multi-rule aggregation**: All required must pass + at least one optional
- **Recursion support**: Only Overlap supports transitive matching
- **FTargetsHandler**: Complex octree-based spatial queries
- **Atomic operations**: Thread-safe match counting via FPlatformAtomics

### Key Design Features
- Factory-based architecture for extensibility
- Pre-computed source data for performance
- AND/OR logic with strictness levels
- Deep integration with PCGEx tag system

---

## Header File Structure

**Total Public Headers**: 14 files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types |
| Core/ | Factory provider base |
| Details/ | Matching configuration |
| Helpers/ | DataMatcher, TargetsHandler, utilities |
| Matching/ | 7 matching rule implementations |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 7 |
| Providers [P] | 7 |
| Factories [F] | 7 |
| Shared Folders [S] | 1 (matching-rules) |
| Data Assets [A] | 0 |
| Public Headers | 14 |
