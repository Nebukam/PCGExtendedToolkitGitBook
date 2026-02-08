# PCGEx Documentation Overhaul - Working Plan

> This document captures the planning session for restructuring PCGEx documentation.
> Last updated: 2026-02-01

---

## Overview

**Goal**: Create clear separation between conceptual/guide documentation and per-node reference documentation.

**Approach**:
- Fresh start in `_staging-concepts/` for conceptual docs
- Cherry-pick useful content from existing `working-with-pcgex/`
- Reorganize node library for better discovery
- Keep per-node docs as reference (complete via automation)

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

```
_staging-concepts/
├── 00-getting-started/
│   ├── README.md              # What is PCGEx, who is it for
│   ├── installation.md        # Setup
│   └── first-graph.md         # Minimal "hello world" (abstract)
│
├── 01-architecture/
│   ├── README.md              # The PCGEx mental model overview
│   ├── provider-consumer.md   # Sub-nodes, factories, composition
│   └── working-with-vanilla.md # PCGEx + vanilla PCG interop
│
├── 02-paths/
│   ├── README.md              # What paths are (ordered points)
│   ├── points-are-paths.md    # "Everything is points" for paths
│   ├── segments-vs-points.md  # The segment mental model
│   └── common-operations.md   # Transform, resample, etc. (conceptual)
│
├── 03-clusters/
│   ├── README.md              # What clusters are (Vtx + Edges)
│   ├── points-are-clusters.md # "Everything is points" for clusters
│   ├── the-dual-dataset.md    # Working with Vtx AND Edges
│   ├── building-clusters.md   # Diagrams, Connect Points, from paths
│   ├── refining-clusters.md   # Filters, refinement operations
│   └── cluster-path-interop.md # Converting between paths and clusters
│
├── 04-filters/
│   ├── README.md              # The filter ecosystem
│   ├── filter-types.md        # Point, Edge, Vtx, Collection filters
│   ├── composition.md         # AND/OR groups, stacking, nesting
│   └── reusability.md         # Subgraph patterns, prefab filters
│
├── 05-asset-staging/
│   ├── README.md              # What staging solves, the workflow
│   ├── collections.md         # Mesh/Actor collections
│   ├── distribution.md        # How assets are picked and placed
│   ├── fitting.md             # Scale, justify, variations
│   └── socket-staging.md      # Socket-based assembly
│
├── 06-pathfinding/
│   ├── README.md              # Pathfinding on clusters
│   ├── algorithms.md          # A*, Dijkstra, when to use which
│   ├── heuristics.md          # What heuristics are, composition
│   ├── goal-pickers.md        # How destinations are selected
│   └── cells-and-hulls.md     # Contour finding, bounded regions
│
├── 07-additional-systems/
│   ├── tensors/
│   │   ├── README.md          # Directional fields
│   │   ├── effectors.md       # What creates tensor fields
│   │   └── sampling.md        # How tensors influence operations
│   ├── topology/
│   │   └── README.md          # Mesh generation from paths/clusters
│   ├── sampling/
│   │   └── README.md          # Nearest queries, data extraction
│   └── shapes/
│       └── README.md          # Programmatic geometry generation
│
├── 08-valency/                # Last due to complexity, self-contained
│   ├── README.md              # WFC-style constraint solving
│   ├── orbitals-and-cages.md  # Core concepts
│   ├── bonding-rules.md       # How constraints work
│   ├── solving-process.md     # The solve workflow
│   └── patterns.md            # Pattern matching and replacement
│
└── 09-tips-and-tricks/
    ├── README.md
    ├── subgraph-patterns.md   # Reusable subgraph techniques
    ├── performance.md         # Optimization strategies
    └── common-pitfalls.md     # Collected gotchas
```

### Principles for Conceptual Docs
1. **Use-case agnostic** - Describe capabilities, not applications
2. **Build on prior concepts** - Each section references earlier ones
3. **Link to node library** - "For specific nodes, see [Node Library > X]"
4. **Cherry-pick from existing** - working-with-pcgex has good material

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
