# Content Map

> Maps documentation structure and locations.
>
> **Architecture note**: Concept content lives directly in `working-with-pcgex/` (not in `_staging-concepts/`). Content was written/rewritten in-place. The `_staging-concepts/` directory now holds only meta files.

---

## Conceptual Docs — Live in `working-with-pcgex/`

Content has been rewritten with the warm-to-technical gradient tone. The following sections are complete or have landing pages:

| Section | Location | Status |
|---------|----------|--------|
| Architecture | `working-with-pcgex/architecture/` or similar | Complete |
| Paths | `working-with-pcgex/paths/` | Complete |
| Clusters | `working-with-pcgex/clusters/` | Complete |
| Filters | `working-with-pcgex/filter-ecosystem/` or similar | Complete |
| Asset staging | `working-with-pcgex/asset-staging/` | Complete |
| Pathfinding | `working-with-pcgex/pathfinding/` | Complete (reviewed against source) |
| Valency | `working-with-pcgex/valency/` | Landing page (deferred) |
| Additional systems | Various subsections | Landing pages |

---

## Remaining Content Gaps

| Area | Priority | Notes |
|------|----------|-------|
| Additional systems (tensors, topology, sampling, shapes) | Medium | Landing pages exist, full content needed |
| Valency concepts | Low | Deferred — existing docs used with WIP flag |
| Getting started / first graph | Medium | Landing page exists |
| Tips and tricks | Low | Collect throughout process |

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

### Per-Node Docs Pipeline

**`_staging/`** — 1:1 codebase mirror, organized by module:
```
_staging/
├── PCGExElementsClusters/
├── PCGExElementsPaths/
├── PCGExElementsPathfinding/
├── PCGExElementsValency/
└── ...
```

**`node-library/`** — User-facing reorganization with different folder structure and filenames. Copied from `_staging/` with renames and light editing.

---

## Remaining Work

### Content
1. Complete remaining concept landing pages (getting started, additional systems, tips)
2. Valency concept content (deferred — existing docs used with WIP flag)

### Node Library
3. Node library homepage content
4. Complete file reorganization from `_staging/` to `node-library/`
5. Cross-linking pass (concepts ↔ node library)
