# PCGEx Documentation Overhaul - Working Plan

> This document captures the planning session for restructuring PCGEx documentation.
> Last updated: 2026-02-01

---

## Overview

**Goal**: Create clear separation between conceptual/guide documentation and per-node reference documentation.

**Approach**:
- Conceptual docs live in `working-with-pcgex/` (promoted from `_staging-concepts/`)
- `_staging-concepts/` retains only meta files (style guide, plans, progress, decisions)
- `_staging/` holds 1:1 codebase node docs (auto-generated, organized by module)
- `node-library/` is the user-facing reorganization of `_staging/` with different structure and filenames
- Per-node docs completed via automation pipeline

---

## Key Insights from Discovery

### Audience
- Technical artists and engineer-minded folks
- May be starting with PCG but know Unreal well
- Familiar with tools like Houdini
- PCGEx introduces novel concepts that don't exist in vanilla PCG

### The Core Mental Shift
1. **"Everything is Points"** (for Paths/Clusters specifically)
   - PCGEx doesn't introduce concrete data types
   - Paths = ordered points. Vtx = points. Edges = points.
   - Labels convey semantics/assumptions, not enforce types
   - Vanilla PCG works with PCGEx data

2. **Provider/Consumer Architecture**
   - Sub-nodes (filters, probes, heuristics) are "rule factories"
   - They don't know their consumption context
   - Configured once, used by many nodes
   - Same filter connects to dozens of operations

3. **Composability is the Superpower**
   - Sub-nodes combine regardless of type
   - Uber Filter takes N filters at once (not one at a time)
   - "Path-advertised" features work on any ordered points
   - Users often miss this - they use features in isolation

### Common User Confusion
- Expecting concrete types like vanilla PCG
- Not understanding sub-node composition
- Missing that labels are assumptions, not requirements
- Using `{filter A + uber} {filter B + uber}` instead of `{A, B, C + uber}`

### Feature Hierarchy
- **Clusters** are prominent but not everything (~40% of plugin)
- **Filters** are the hidden superpower - transverse to all systems
- **Paths** don't require cluster understanding but have synergies
- **Asset Staging** is foundational (Valency requires it)
- **Valency** is complex and self-contained (last in docs)
- **Tensors** are "eye-candy" - nice but optional
- **Topology** is a helper for base geometry creation

### Sub-Node Systems
| System | Scope | Notes |
|--------|-------|-------|
| Filters | Transverse | Used everywhere, universal condition system |
| Probes | Narrow | Only used by Connect Points node |
| Heuristics | Narrow | Primarily pathfinding-focused |
| Fill Controls | Narrow | Only used by Flood Fill |
| Samplers | Medium | Used by sampling nodes |

All follow the same provider/factory pattern under the hood.

---

## Conceptual Documentation Structure

Content lives in `working-with-pcgex/`. The structure below reflects the target layout:

```
working-with-pcgex/
├── getting-started/           # What is PCGEx, setup, first graph
├── architecture/              # Mental model, provider/consumer, vanilla interop
├── paths/                     # Paths as ordered points, segments, common ops
├── clusters/                  # Vtx + Edges, dual dataset, building, refining
├── filter-ecosystem/          # Filter types, composition, reusability
├── asset-staging/             # Collections, distribution, fitting
├── pathfinding/               # Algorithms, heuristics, cells & hulls
├── tensors/                   # Directional fields, effectors, sampling
├── topology/                  # Mesh generation from paths/clusters
├── sampling/                  # Nearest queries, data extraction
├── valency/                   # WFC-style constraint solving (complex, self-contained)
└── tips-and-tricks/           # Subgraph patterns, performance, pitfalls
```

> **Note**: Folder names in `working-with-pcgex/` may differ from the original numbered `_staging-concepts/` plan. The content is the same; only the location and naming changed.

### Principles for Conceptual Docs
1. **Use-case agnostic** - Describe capabilities, not applications
2. **Build on prior concepts** - Each section references earlier ones
3. **Link to node library** - "For specific nodes, see [Node Library > X]"
4. **Verify against source** - Always check actual codebase behavior, not assumptions

---

## Node Library Reorganization

### Guiding Principles
1. **Discovery-first** - Find nodes by "what do I want to do"
2. **Filters unified** - All filters in one place
3. **Feature ecosystems stay together** - Cluster ops, Path ops
4. **Operation types as second level** - Generate, Transform, Refine, Analyze
5. **Homepage explains structure** - Help users understand how to discover

### Proposed Structure

```
node-library/
├── README.md                  # IMPORTANT: Explains structure, discovery guide
│
├── common-settings/           # Shared across many nodes
│   ├── performance.md
│   ├── cleanup.md
│   ├── blending.md
│   └── ...
│
├── filters/                   # ALL filters, unified
│   ├── README.md
│   ├── point-filters/
│   │   ├── spatial/
│   │   ├── attribute/
│   │   ├── math/
│   │   └── ...
│   ├── edge-filters/
│   ├── vtx-filters/
│   ├── collection-filters/
│   └── filter-groups.md
│
├── clusters/
│   ├── README.md
│   ├── generate/              # Diagrams, Connect Points, from mesh
│   │   ├── diagrams/
│   │   ├── connect-points/
│   │   │   └── probes/        # All probes together
│   │   └── ...
│   ├── refine/                # Edge removal, simplification
│   ├── transform/             # Relax, centrality
│   ├── analyze/               # Properties, metadata
│   ├── pack-unpack/
│   └── interop/               # To/from paths
│
├── paths/
│   ├── README.md
│   ├── generate/
│   ├── transform/
│   ├── modify/
│   └── output/
│
├── pathfinding/
│   ├── README.md
│   ├── algorithms/
│   ├── heuristics/            # All heuristic sub-nodes
│   ├── goal-pickers/
│   ├── cells/
│   └── navmesh/
│
├── staging/                   # Asset staging
│   ├── README.md
│   ├── collections/
│   ├── distribute/
│   └── sockets/
│
├── sampling/
│   ├── README.md
│   ├── nearest/
│   ├── textures/
│   └── neighbors/
│
├── shapes/                    # Own root folder (equally useful as tensors)
│   └── ...
│
├── tensors/
│   ├── README.md
│   ├── effectors/
│   └── samplers/
│
├── topology/
│   └── ...
│
├── metadata/                  # Attribute manipulation
│   ├── bitmasks/
│   ├── attributes/
│   └── ...
│
├── transform/                 # Generic point transforms
│   └── ...
│
├── utilities/                 # Was "misc" - better name TBD
│   ├── noise/                 # 3D noise functions
│   ├── sorting/
│   ├── partitioning/
│   ├── data-matching/
│   └── ...                    # QoL nodes merged here
│
└── valency/                   # Last - complex, self-contained
    └── ...
```

### Key Changes from Current
1. **Filters unified** - All in one place regardless of source module
2. **Probes stay with Connect Points** - Only used there
3. **Heuristics stay with Pathfinding** - Primarily pathfinding-focused
4. **Operation types as sub-grouping** - generate/refine/transform/analyze
5. **Shapes elevated** - Own root folder
6. **Valency last** - Most complex, self-contained
7. **"Misc" renamed** - Need better name (utilities? toolkit? extras?)
8. **Node library homepage** - Explains structure for discovery

### Naming Alternatives for "Misc"
- `utilities/` - Clear but generic
- `toolkit/` - Suggests helper tools
- `extras/` - Implies non-essential
- `foundation/` - If these are foundational utilities
- `operations/` - Generic ops

---

## Open Questions / TODOs

- [ ] Finalize "misc" folder name
- [ ] Identify which existing content to cherry-pick
- [ ] Create node library homepage content
- [ ] Map current _staging per-node docs to new structure
- [ ] Decide on cross-linking strategy (concepts ↔ node library)

---

## Source Material

### Existing Content Worth Adapting
- `working-with-pcgex/filter-ecosystem.md` - Excellent, use as template
- `working-with-pcgex/clusters/clusters-fundamentals.md` - Good concepts
- `working-with-pcgex/paths/paths-fundamentals.md` - Good concepts
- `working-with-pcgex/valency/` - Comprehensive, needs light editing

### Module Notes (Reference)
- `_notes/modules/` - Technical architecture docs for each module

### Automation
- `_automation/scripts/pcgex-doc.js` - Handles per-node doc generation queue
- `_staging/` - Auto-generated per-node docs (organized by module currently)
