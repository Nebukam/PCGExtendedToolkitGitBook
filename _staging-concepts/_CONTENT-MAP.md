# Content Migration Map

> Maps existing content to new structure locations.

---

## Existing → New Conceptual Docs

| Existing File | Quality | New Location | Notes |
|---------------|---------|--------------|-------|
| `working-with-pcgex/filter-ecosystem.md` | Excellent | `04-filters/README.md` | Adapt as template |
| `working-with-pcgex/clusters/clusters-fundamentals.md` | Good | `03-clusters/README.md` | Cherry-pick concepts |
| `working-with-pcgex/clusters/vtx-+-edges.md` | Good | `03-clusters/the-dual-dataset.md` | Merge content |
| `working-with-pcgex/clusters/working-with-vtx-and-edges.md` | Good | `03-clusters/` | Cherry-pick |
| `working-with-pcgex/clusters/common-pitfalls.md` | Good | `09-tips-and-tricks/common-pitfalls.md` | Merge with other pitfalls |
| `working-with-pcgex/clusters/hello-cluster/` | Mixed | Consider for examples | Use-case specific, may not fit |
| `working-with-pcgex/paths/paths-fundamentals.md` | Good | `02-paths/README.md` | Cherry-pick concepts |
| `working-with-pcgex/paths/common-operations.md` | Good | `02-paths/common-operations.md` | Adapt |
| `working-with-pcgex/paths/common-pitfalls.md` | Good | `09-tips-and-tricks/common-pitfalls.md` | Merge |
| `working-with-pcgex/valency/` | Comprehensive | `08-valency/` | Light editing, mostly reuse |
| `working-with-pcgex/asset-staging/` | Partial | `05-asset-staging/` | Expand and restructure |
| `working-with-pcgex/tensors/` | Sparse | `07-additional-systems/tensors/` | Needs expansion |
| `working-with-pcgex/tips-and-tricks-1/` | Good | `09-tips-and-tricks/` | Consolidate |
| `general/pcgex-101/` | Brief | Various | Distribute to appropriate sections |
| `general/quickstart/` | Good | `00-getting-started/` | Adapt |

---

## New Conceptual Docs Needing Fresh Content

| New Location | Priority | Source Material |
|--------------|----------|-----------------|
| `01-architecture/README.md` | High | New - mental model overview |
| `01-architecture/provider-consumer.md` | High | New - sub-node pattern |
| `01-architecture/working-with-vanilla.md` | Medium | New - interop guide |
| `02-paths/points-are-paths.md` | High | New - "everything is points" for paths |
| `03-clusters/points-are-clusters.md` | High | New - "everything is points" for clusters |
| `03-clusters/building-clusters.md` | Medium | Partially from existing |
| `06-pathfinding/` | Medium | New - concepts currently missing |
| `07-additional-systems/sampling/` | Low | New |
| `07-additional-systems/topology/` | Low | New |
| `07-additional-systems/shapes/` | Low | New |

---

## Node Library Migration

### Current → Proposed Mapping

| Current Location | Proposed Location |
|------------------|-------------------|
| `node-library/filters/` | `node-library/filters/` (keep, restructure internals) |
| `node-library/clusters/` | `node-library/clusters/` (add generate/refine/transform/analyze) |
| `node-library/clusters/diagrams/` | `node-library/clusters/generate/diagrams/` |
| `node-library/clusters/connect-points/` | `node-library/clusters/generate/connect-points/` |
| `node-library/clusters/refine-cluster/` | `node-library/clusters/refine/` |
| `node-library/clusters/relax-cluster/` | `node-library/clusters/transform/relax/` |
| `node-library/pathfinding/` | `node-library/pathfinding/` (mostly keep) |
| `node-library/paths/` | `node-library/paths/` (add sub-grouping) |
| `node-library/tensors/` | `node-library/tensors/` (keep) |
| `node-library/metadata/` | `node-library/metadata/` (keep) |
| `node-library/sampling/` | `node-library/sampling/` (keep) |
| `node-library/misc/` | `node-library/utilities/` (rename) |
| `node-library/misc/shapes/` | `node-library/shapes/` (elevate) |
| `node-library/misc/noises/` | `node-library/utilities/noise/` |
| `node-library/quality-of-life/` | `node-library/utilities/` (merge) |
| `node-library/topology/` | `node-library/topology/` (keep) |
| `node-library/transform/` | `node-library/transform/` (keep) |
| `node-library/assets-management/` | `node-library/staging/` (rename) |

### _staging Per-Node Docs

Current organization: By module (matches codebase)
```
_staging/
├── PCGExElementsClusters/
├── PCGExElementsPaths/
├── PCGExElementsPathfinding/
└── ...
```

Target organization: By feature (matches node library)
- Need script/process to reorganize
- Or: Generate directly into new structure

---

## Priority Order for Migration

### Phase 1: Foundation
1. Create conceptual structure skeleton (empty READMEs)
2. Migrate `01-architecture/` content (new)
3. Migrate `04-filters/` (excellent existing content)

### Phase 2: Core Concepts
4. Migrate `02-paths/`
5. Migrate `03-clusters/`
6. Migrate `05-asset-staging/`

### Phase 3: Advanced Systems
7. Migrate `06-pathfinding/`
8. Migrate `07-additional-systems/`
9. Migrate `08-valency/`

### Phase 4: Polish
10. Migrate `00-getting-started/`
11. Migrate `09-tips-and-tricks/`
12. Create node library homepage
13. Reorganize node library structure
