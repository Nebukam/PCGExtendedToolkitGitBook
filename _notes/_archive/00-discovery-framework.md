# PCGEx Documentation Discovery Framework

## Project Overview

**Goal:** Create comprehensive documentation for PCGExtendedToolkit (130+ nodes, 26 runtime modules)

**Two Documentation Categories:**
1. **Working with PCGEx** - Conceptual, progressive complexity, technical but approachable
2. **Node Library** - Factual, per-node/factory/settings reference documentation

---

## Discovery Progress

### Completed
- [x] Initial codebase exploration
- [x] Module inventory (all 26 runtime modules catalogued)
- [x] Shared concepts identification (5 core domains + secondary)
- [x] Documentation structure proposal

### Notes Files Created
| File | Content |
|------|---------|
| `01-core-foundation-synthesis.md` | Architecture pillars from .claude/skills |
| `02-module-inventory.md` | Complete module taxonomy and node counts |
| `03-shared-concepts-inventory.md` | Reusable structs/enums across modules |
| `04-documentation-structure-proposal.md` | Proposed doc structure and templates |

### Next Steps
- [x] Dry run: Write one shared concept page + one node page for validation
- [x] User review of tone/accuracy ✓ APPROVED
- [x] Phase 1: Shared concepts foundation (5 core) ✓ COMPLETE
  - [x] Distance & Proximity
  - [x] Input Value Sources
  - [x] Comparison Operators
  - [x] Attribute Mapping
  - [x] Bitmask Operations
  - [x] README index
- [ ] Phase 1b: Secondary shared concepts (as needed)
- [ ] Phase 2: Working with PCGEx enhancements
- [~] Phase 3: Node library - IN PROGRESS
  - [x] Filters README (index of all 40+ filters)
  - [x] Distance filter
  - [x] Numeric Compare filter
  - [x] Bounds filter
  - [ ] Remaining filters (~37)
  - [ ] Path nodes
  - [ ] Cluster nodes
  - [ ] Other categories

### Dry Run Results (Validated)
Location: `_dry-run/`
- `shared-concepts/distance-and-proximity.md` ✓ Approved
- `filters/distance.md` ✓ Approved
- `paths/split-path.md` ✓ Approved - "EXACTLY what I'm after"

Key learnings applied:
- Don't mention parallel execution (everything is parallel by default)
- Use editor display names, not code identifiers
- Expand Related sections for feature discovery
- ASCII diagrams OK for simple flows; HTML comments for complex screenshots
- CRITICAL: Verify all "Works Well With" relationships against actual code
- Plugin source location: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit

---

## Tone Guidelines

### Working with PCGEx
- Technical but approachable - explain *why* not just *what*
- Light analogies where helpful, but not condescending
- Progressive complexity - build understanding layer by layer
- Implementation details framed as theory (order of operations, parallel behavior)
- **Use-case agnostic** - NO assumptions about dungeons/forests/cities/landscapes
- Examples should be abstract or clearly generic

### Node Library
- Factual and precise
- Document what the implementation actually does
- Order of operations matters
- Settings behavior documented accurately
- Cross-references to shared concepts

---

## Module Summary

### Core Infrastructure (Always Required)
| Module | Purpose | Status |
|--------|---------|--------|
| PCGExCore | Foundation (FFacade, FPointIO, FCluster, settings, elements) | Inventoried |
| PCGExBlending | Attribute interpolation | Inventoried |

### Support Systems
| Module | Purpose | Status |
|--------|---------|--------|
| PCGExFilters | Conditional logic (25 point + 5 collection filters) | Inventoried |
| PCGExFoundations | Geometry primitives (polylines, tangents) | Inventoried |
| PCGExGraphs | Graph/cluster structures | Inventoried |
| PCGExCollections | Asset management, weighted picking | Inventoried |
| PCGExProperties | Dynamic property system | Inventoried |
| PCGExMatching | Data correlation | Inventoried |
| PCGExHeuristics | Scoring/weighting | Inventoried |

### Element Modules (130+ nodes total)
| Module | Nodes | Status |
|--------|-------|--------|
| PCGExElementsPaths | 26 | Inventoried |
| PCGExElementsClusters | 22 | Inventoried |
| PCGExElementsSampling | 13 | Inventoried |
| PCGExElementsMeta | 12 | Inventoried |
| PCGExElementsPathfinding | 8 | Inventoried |
| PCGExElementsSpatial | 8 | Inventoried |
| PCGExElementsTopology | 5 | Inventoried |
| PCGExElementsValency | 4 | Inventoried |
| PCGExElementsClipper2 | 3 | Inventoried |
| PCGExElementsTensors | 2 | Inventoried |
| PCGExElementsPathfindingNavmesh | 2 | Inventoried |
| PCGExElementsFloodFill | 1 | Inventoried |
| PCGExElementsActions | 1 | Inventoried |
| PCGExElementsBridges | 1 | Inventoried |
| PCGExElementsProbing | 1 | Inventoried |
| PCGExElementsShapes | 1 | Inventoried |

---

## Shared Concepts Identified

### Core Domains (Document First)
1. **Input Value Sources** - Constant vs Attribute pattern (38+ struct variants)
2. **Distance & Proximity** - Distance modes and metrics
3. **Comparison Operators** - EPCGExComparison and related
4. **Bitmask Operations** - State tracking, orbital marking
5. **Attribute Mapping** - Source → Target pattern

### Secondary Concepts
- Measurement Units (Relative vs Discrete)
- Fitting & Justification
- Filter Fallback Policies

---

## Validation Checkpoints

After each phase:
1. Present sample content for review
2. Confirm accuracy with user
3. Note corrections/clarifications
4. Iterate before proceeding

---

## Questions Log

| Question | Context | Status | Answer |
|----------|---------|--------|--------|
| Tone calibration | Need to validate writing style | Pending | Dry run planned |
| Node priority | Which nodes are most-used? | Open | - |
| Error display | How do node errors surface to users? | Open | - |
