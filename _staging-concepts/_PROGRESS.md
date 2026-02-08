# Documentation Progress

> Track what's done, in progress, and next.
> Update this file when completing work.

---

## Architecture Note

Concept content has been promoted from `_staging-concepts/` subdirectories to `working-with-pcgex/` (the live location). The `_staging-concepts/` directory now contains only meta files (this file, style guide, plans, decisions, etc.). Section `_BRIEF.md` files were removed along with the numbered subdirectories.

---

## Current Focus

**Phase**: Content complete for core sections. Pathfinding section reviewed and corrected against source code. Doc queue (105 items) fully processed.
**Active Work**: Remaining landing pages, node-library reorganization

---

## Section Status

### Conceptual Documentation (live in `working-with-pcgex/`)

| Section | Status | Notes |
|---------|--------|-------|
| Getting started | **Landing Page** | README placeholder |
| Architecture | **Complete** | README, provider-consumer |
| Paths | **Complete** | README, segments-vs-points, common-operations |
| Clusters | **Complete** | README, dual-dataset, building, refining, interop |
| Filters | **Complete** | README, composition, reusability |
| Asset staging | **Complete** | README, collections, distribution, fitting |
| Pathfinding | **Complete** | README, algorithms, heuristics, cells-and-hulls. Reviewed against source — algorithms rewritten, cells-and-hulls corrected (removed fabricated "Contours" section) |
| Additional systems | **Landing Pages** | README + subsection READMEs |
| Valency | **Landing Page** | README with WIP flag, deferred |
| Tips and tricks | **Landing Page** | README placeholder |

### Per-Node Documentation

| Item | Status | Notes |
|------|--------|-------|
| Doc queue | **Complete** | 105 items processed, queue empty |
| `_staging/` docs | Complete | 1:1 codebase mirror, organized by module |
| `node-library/` | Partially reorganized | User-facing structure with different folders/filenames |

### Infrastructure (meta files in `_staging-concepts/`)

| Item | Status | Notes |
|------|--------|-------|
| `_PLAN.md` | Updated | Structure and rationale — reflects new architecture |
| `_DECISIONS.md` | Updated | Decision tracking |
| `_CONTENT-MAP.md` | Outdated | Migration mapping — references old `_staging-concepts/` paths |
| `_STYLE-GUIDE.md` | Complete | Writing guidelines — still current |
| `_SESSION-CONTEXT.md` | Updated | Session orientation — reflects new architecture |
| `_PROGRESS.md` | Updated | This file |
| `_BRIEF-TEMPLATE.md` | Complete | Template (no longer used — section briefs removed) |

### Node Library Reorganization

| Item | Status | Notes |
|------|--------|-------|
| Structure finalized | Complete | In _PLAN.md |
| Homepage content | Not Started | |
| File reorganization | Not Started | Will copy from _staging with renames |
| Cross-linking | Not Started | After content exists |

---

## Priority Queue

### Immediate Next
1. ~~Create section folder structure with README placeholders~~ ✓
2. ~~Create `_BRIEF.md` for each section~~ ✓
3. ~~Begin `04-filters/` content~~ ✓ Complete (README, composition, reusability)
4. ~~Begin `01-architecture/` content~~ ✓ Complete (README, provider-consumer)

### Short Term
5. ~~Complete `02-paths/` and `03-clusters/`~~ ✓ (core concepts)
6. ~~Complete `05-asset-staging/`~~ ✓ (required for later sections)

### Medium Term
7. ~~Complete `06-pathfinding/`~~ ✓
8. Complete `07-additional-systems/`
9. Complete `08-valency/`

### Later
10. `00-getting-started/` (polish after core exists)
11. `09-tips-and-tricks/` (collect throughout process)
12. Node library reorganization
13. Cross-linking pass

---

## Completed Work Log

| Date | Work Done |
|------|-----------|
| 2026-02-01 | Initial planning session, created infrastructure files |
| 2026-02-01 | Created all section _BRIEF.md files (12 total) |
| 2026-02-01 | Reviewed all 14 briefs with user, refinements made: |
| | - 00-getting-started: Added example-project.md, first-graph is cluster→draw→pathfind |
| | - 01-architecture: Fold working-with-vanilla into README |
| | - 02-paths: Fold points-are-paths into README |
| | - 03-clusters: Removed NodeIndex/PointIndex (C++ only), shared Vtx in dual-dataset |
| | - 04-filters: Frame as "layers" not "types", Uber Filter is example consumer |
| | - 05-asset-staging: Marked source as DEPRECATED, noted material variations |
| | - 06-pathfinding: De-emphasized goal pickers, added flood fill, emphasized cells/hulls |
| | - 07-additional-systems: Added resolvers/ folder (matching + pickers) |
| | - 07-additional-systems/shapes: Emphasized parametric/per-seed values |
| | - 08-valency: DEFERRED - use existing docs with WIP flag |
| | - 09-tips-and-tricks: Hybrid approach - category tips in sections, cross-cutting here |
| 2026-02-01 | Completed 04-filters/ section: README.md, composition.md, reusability.md |
| 2026-02-01 | Completed 01-architecture/ section: README.md, provider-consumer.md |
| 2026-02-01 | Completed 02-paths/ section: README.md, segments-vs-points.md, common-operations.md |
| 2026-02-01 | Completed 03-clusters/ section: README.md, the-dual-dataset.md, building-clusters.md, refining-clusters.md, cluster-path-interop.md |
| 2026-02-01 | Completed 05-asset-staging/ section: README.md, collections.md, distribution.md, fitting.md |
| 2026-02-01 | Completed 06-pathfinding/ section: README.md, algorithms.md, heuristics.md, cells-and-hulls.md |
| 2026-02-01 | Created landing pages: 00-getting-started, 07-additional-systems (+ 5 subsections), 08-valency (WIP), 09-tips-and-tricks |
| 2026-02-01 | Revised 04-filters/: Added pre-computed filter notes, gather+redirectors pattern, exposed conditions subgraph pattern, Mode as graph param |

---

## Known Issues / Gaps

- Image placeholders need manual creation (separate track)
- Some module docs in `_notes/modules/` may be incomplete
- Valency: DEFERRED - nodes may change, use existing docs with WIP flag for now
- Asset staging source material is DEPRECATED - needs Q&A and major rework

---

## Session Notes

_Space for notes during active sessions. Clear after incorporating into docs._

```
(empty)
```
