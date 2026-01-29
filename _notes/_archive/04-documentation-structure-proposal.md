# Documentation Structure Proposal

## Overview

Based on codebase discovery, this document proposes the documentation structure for PCGExtendedToolkit.

---

## Two Main Categories

### 1. Working with PCGEx (Conceptual/Tutorial)

**Tone**: Technical but approachable. Explains *why* and *how*, not just *what*. Progressive complexity. Use-case agnostic (no dungeons/forests/cities assumptions).

**Goal**: Onboard users to PCGEx paradigms, build mental models, ease into complexity.

### 2. Node Library (Reference)

**Tone**: Factual, precise. Documents what the implementation actually does. Order of operations matters.

**Goal**: Per-node/factory/settings reference with cross-links to shared concepts.

---

## Proposed Structure

```
working-with-pcgex/
├── README.md                          # Entry point, overview
│
├── fundamentals/
│   ├── README.md                      # What makes PCGEx different
│   ├── points-and-attributes.md       # PCG basics refresher
│   ├── collections-and-data-flow.md   # How data moves, multiple inputs
│   └── sub-nodes.md                   # The extensibility pattern (CRITICAL)
│
├── paths/                             # EXISTING - keep & enhance
│   ├── README.md                      # ✓ Good tone example
│   ├── paths-fundamentals.md
│   ├── common-operations.md
│   └── common-pitfalls.md
│
├── clusters/                          # EXISTING - keep & enhance
│   ├── README.md
│   ├── nodes-and-edges.md
│   ├── building-clusters.md
│   └── cluster-operations.md
│
├── filters/                           # NEW - central concept (references sub-nodes)
│   ├── README.md                      # The filter ecosystem
│   ├── point-filters.md               # Filtering individual points
│   ├── cluster-filters.md             # Node and edge filters
│   ├── collection-filters.md          # Data-level filtering
│   └── filter-groups.md               # AND/OR combinations
│
├── sampling/                          # NEW
│   ├── README.md
│   ├── point-sampling.md
│   ├── texture-sampling.md
│   └── surface-sampling.md
│
├── tensors/                           # EXISTING - enhance
│   └── README.md
│
├── asset-staging/                     # EXISTING - keep
│   └── ...
│
├── valency/                           # EXISTING - keep (complex topic)
│   └── ...
│
└── tips-and-tricks/                   # EXISTING - keep
    └── ...


node-library/
├── README.md                          # How to use this reference
│
├── shared-concepts/                   # NEW - document once, link everywhere
│   ├── README.md
│   ├── input-value-sources.md         # Constant vs Attribute pattern
│   ├── distance-and-proximity.md      # Distance modes & metrics
│   ├── comparison-operators.md        # Comparison enums
│   ├── attribute-mapping.md           # Source → Target pattern
│   ├── bitmask-operations.md          # Bitmask system
│   ├── measurement-units.md           # Relative vs Discrete
│   ├── fitting-and-justification.md   # Bounds fitting
│   └── filter-policies.md             # Fallback behaviors
│
├── data-operations/                   # Reorganized category
│   ├── README.md
│   ├── meta/                          # From PCGExElementsMeta
│   │   ├── attribute-remap.md
│   │   ├── partition.md
│   │   ├── hash-attributes.md
│   │   └── ...
│   └── actions/                       # From PCGExElementsActions
│       └── ...
│
├── filters/                           # From PCGExFilters
│   ├── README.md
│   ├── points/
│   │   ├── numeric-compare.md
│   │   ├── distance.md
│   │   ├── bounds.md
│   │   ├── bitmask.md
│   │   ├── random.md
│   │   └── ... (25 filters)
│   └── collections/
│       ├── attribute-check.md
│       ├── entry-count.md
│       └── ... (5 filters)
│
├── paths/                             # From PCGExElementsPaths
│   ├── README.md
│   ├── offset.md
│   ├── smooth/                        # Node with instanced sub-operations
│   │   ├── README.md                  # Main node documentation
│   │   ├── moving-average.md          # Smoothing method sub-page
│   │   └── radius.md                  # Smoothing method sub-page
│   ├── subdivide.md
│   ├── bevel.md
│   └── ... (26 nodes)
│
├── clusters/                          # From PCGExElementsClusters
│   ├── README.md
│   ├── build-delaunay.md
│   ├── build-voronoi.md
│   ├── find-clusters.md
│   └── ... (22 nodes)
│
├── sampling/                          # From PCGExElementsSampling
│   ├── README.md
│   ├── sample-nearest-point.md
│   ├── sample-texture.md
│   └── ... (13 nodes)
│
├── spatial/                           # From PCGExElementsSpatial
│   ├── README.md
│   ├── bounds.md
│   ├── layout.md
│   └── ... (8 nodes)
│
├── pathfinding/                       # From PCGExElementsPathfinding(Navmesh)
│   ├── README.md
│   ├── find-path.md
│   ├── goal-pickers/
│   │   └── ...
│   ├── heuristics/
│   │   └── ...
│   └── ... (10 nodes)
│
├── topology/                          # From PCGExElementsTopology
│   ├── README.md
│   └── ... (5 nodes)
│
├── generation/                        # Combined category
│   ├── README.md
│   ├── shapes/                        # From PCGExElementsShapes
│   │   └── ...
│   ├── tensors/                       # From PCGExElementsTensors
│   │   └── ...
│   └── clipper2/                      # From PCGExElementsClipper2
│       └── ...
│
├── specialized/                       # Advanced/niche
│   ├── README.md
│   ├── probing/                       # From PCGExElementsProbing
│   │   └── ...
│   ├── bridges/                       # From PCGExElementsBridges
│   │   └── ...
│   ├── flood-fill/                    # From PCGExElementsFloodFill
│   │   └── ...
│   └── valency/                       # From PCGExElementsValency
│       └── ...
│
└── collections/                       # From PCGExCollections
    ├── README.md
    ├── asset-collection.md            # The asset type
    ├── mesh-collection.md
    └── staging-nodes.md
```

---

## Shared Settings and Reusable Components

PCGEx has multiple levels of reusable components that need documentation strategy:

### 1. Base Settings (All Nodes)

**`UPCGExSettings`** provides settings inherited by ALL PCGEx nodes:
- Performance: BulkInitData, CacheData, ScopedAttributeGet, StealData, ExecutionPolicy
- Cleanup: FlattenOutput, CleanupConsumableAttributes, ProtectedAttributes
- Warnings: QuietInvalidInputWarning, QuietMissingInputError, QuietCancellationError

→ Document ONCE in `shared-concepts/common-node-settings.md` and reference from all categories.

### 2. Module-Specific Shared Settings

**`FPCGExGraphBuilderDetails`** (Clusters module) - Used by ~20+ cluster-building nodes:
- Edge position, solidification, cluster size filtering, caching, extra data

**`FPCGExDistanceDetails`**, **`FPCGExMatchingDetails`** (Matching module) - Used across sampling/matching operations

**`FPCGExBlendingDetails`** (Blending module) - Used wherever attribute blending occurs

→ Document in module `shared-settings/` subfolder: `clusters/shared-settings/graph-output.md`

### 3. Module-Specific Instanced Factories

Factories that are shared within a module but not across modules:

**Paths module**:
- **Tangent Methods**: Auto, CatmullRom, FromNeighbors, Zero, FromTransform
- **SubPoints Blending**: Interpolate, InheritStart, InheritEnd, None

**Pathfinding module**:
- **Search Algorithms**: Dijkstra, A*, Bellman-Ford, Bidirectional
- **Goal Pickers**: All, Random, Attribute

→ Document in module `shared-settings/` subfolder: `paths/shared-settings/tangent-methods.md`

### 4. Node-Specific Instanced Factories

Factories dedicated to a single node:
- **Smooth → Smoothing Methods**: Moving Average, Radius
- **Refine Edges → Refinement Operations**: MST, Gabriel, Trajan DFS, etc.
- **Orient → Orient Operations**: Weighted, LookAt, Average

→ Document as sub-pages under the parent node folder.

### Folder Structure for Node-Specific Factories

When a node has dedicated sub-operations:

```
node-name/
├── README.md              # Main node documentation (was node-name.md)
├── sub-operation-a.md     # Sub-operation page
└── sub-operation-b.md     # Sub-operation page
```

The README explains the node and lists available operations with links. Each sub-operation page documents its specific settings and behavior.

---

## Node Documentation Template

```markdown
---
icon: [appropriate-icon]
description: 'In editor :: PCGEx | Category : Node Name'
---

# Node Name

Brief description of what this node does (1-2 sentences).

## Overview

What problem does this solve? When would you use it? (2-3 sentences, use-case agnostic)

## How It Works

Step-by-step explanation of the node's logic:

1. **Step one**: What happens first
2. **Step two**: What happens next
3. **Step three**: Final processing

> This runs in parallel across points, processing each independently.

## Settings

### Main Settings

<details>
<summary><strong>Setting Name</strong> <code>Type</code></summary>

Description of what this setting controls.

**Options:**
- `Option1` - What it does
- `Option2` - What it does

See: [Shared Concept](../shared-concepts/relevant-page.md) for details.

</details>

### Filter Settings

This node accepts [Point Filters](../shared-concepts/filter-policies.md).

### Output

What this node outputs and any attributes it creates.

## Common Patterns

Brief examples of typical configurations (use-case agnostic).

## Related Nodes

- [Related Node 1](./related-node-1.md) - When to use instead
- [Related Node 2](./related-node-2.md) - Often used together

---

📦 **Module**: `PCGExModuleName` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExModuleName/Private/Category/PCGExNodeName.cpp)
```

---

## Shared Concept Page Template

```markdown
---
icon: book-open
---

# Concept Name

One sentence explaining what this concept is.

## When You'll See This

List of contexts where this appears:
- Filter nodes (Distance, Bounds, etc.)
- Sampling operations
- Spatial queries

## Options

| Value | Description |
|-------|-------------|
| `Option1` | What it means |
| `Option2` | What it means |

## How It Works

Brief explanation of the underlying logic (theory, not code).

## Common Configurations

Typical settings for common scenarios.

## Tips

{% hint style="info" %}
Helpful tip about using this concept effectively.
{% endhint %}
```

---

## Writing Guidelines

### Tone for "Working with PCGEx"

**DO**:
- "Paths are ordered sequences of points - the order defines connectivity"
- "When you need to measure proximity, you'll configure how distance is calculated"
- "Filters let you selectively process points based on conditions"
- Use analogies that illuminate concepts: "Think of sub-nodes as specialized helpers you plug into larger operations"
- Warmth through clarity and helpfulness, not forced enthusiasm

**DON'T**:
- "Imagine you're building a magical forest path..." (too whimsical)
- "This is super easy!" (condescending)
- "For dungeon generation, you'd typically..." (use-case specific)

**GOOD WARMTH** (like the paths README "journey" metaphor):
- "Points on a path form a journey from start to finish"
- "Collections are like containers that travel together through your graph"
- "Sub-nodes are the building blocks you combine to create complex behaviors"

**TOO MUCH WARMTH**:
- "Your little point friends are about to go on an adventure!"
- "Watch the magic unfold as your paths come alive!"

### Tone for "Node Library"

**DO**:
- "Iterates through each point, computing the distance to the nearest neighbor"
- "Points that fail the filter are excluded from output"
- Explain split actions with clear before/after examples

**DON'T**:
- "This awesome node does cool stuff with your points!"
- "Simply configure the settings and watch the magic happen"
- Speculation about what users might want to do

### Parallelism Note

Everything in PCGEx runs in parallel by default. **Don't mention this** unless something specifically does NOT run in parallel (rare exception worth noting).

### Implementation Details (Theory Level)

**DO**:
- "The filter evaluates once per point"
- "Results are written after all points are processed"
- "Uses spatial acceleration (octree) for efficient lookups"

**DON'T**:
- "Uses PCGEX_SCOPE_LOOP with 256-chunk parallel scopes"
- "Atomically increments a counter via InterlockedIncrement"
- "The TBuffer<double> caches values for O(1) access"

### Editor Presentation

- Use **display names** as they appear in the Unreal editor, not code identifiers
- "Sphere Bounds" not `SphereBounds` or `EPCGExDistance::SphereBounds`
- Bold for setting names: **Distance Type**, **Source**, **Target**
- Reference that some nodes have custom editor UI via -Editor modules

### Visual Diagrams

- **Simple ASCII diagrams**: Acceptable for linear flows (paths, before/after)
  ```
  Input:  A ─ B ─ [C] ─ D ─ E    (C matches filter)
  Output: A ─ B ─ C              (Path 1)
          C ─ D ─ E              (Path 2)
  ```
- **Complex spatial relationships**: Use HTML comment placeholder for screenshot
  ```html
  <!-- Screenshot: Voronoi diagram showing cell boundaries with highlighted edges -->
  ```

### Related Section (Feature Discovery)

Expand "Related" sections to help users discover synergies:

```markdown
## Related

### [Category] Operations
- [Node Name](./path.md) - Brief description of relationship

### Useful [Type] for [This Node]
- [Filter/Heuristic/etc](./path.md) - Why it's useful here

### Works Well With
- [Node Name](./path.md) - Common workflow combination

### See Also
- [Shared Concept](../shared-concepts/page.md) - For deeper understanding
```

### CRITICAL: Verify All Relationships

**"Works Well With" and "Useful X for Y" sections require verification.**

Before suggesting a relationship:
1. Confirm the node actually accepts the suggested input type (filters, heuristics, etc.)
2. Verify the workflow makes logical sense
3. If uncertain, omit the suggestion or move it to "See Also" (weaker relationship)

**Wrong suggestions are worse than no suggestions.** Users learning the plugin will internalize incorrect information. When in doubt, leave it out or verify against the actual node implementation first.

"Related" and "See Also" are safer - they imply conceptual similarity, not tested workflows.

---

## Migration Notes

### From Current Structure

| Current Location | New Location |
|------------------|--------------|
| `node-library/paths/offset.md` | `node-library/paths/offset.md` (keep) |
| `node-library/clusters/*` | `node-library/clusters/*` (keep) |
| `node-library/filters/*` | `node-library/filters/*` (reorganize) |
| `working-with-pcgex/paths/*` | Keep, enhance |
| `working-with-pcgex/clusters/*` | Keep, enhance |

### New Content Needed

1. **shared-concepts/** - All 8+ pages (highest priority)
2. **working-with-pcgex/filters/** - Filter ecosystem explanation
3. **working-with-pcgex/sub-nodes/** - Factory pattern for users
4. **Per-node rewrites** - Replace AI-generated content with accurate docs

---

## Execution Plan

### Phase 1: Foundation
1. Create `shared-concepts/` structure
2. Write the 5 core shared concept pages
3. Review with user for tone/accuracy

### Phase 2: Working with PCGEx
1. Enhance existing paths/clusters content
2. Add filters conceptual section
3. Add sub-nodes explanation

### Phase 3: Node Library
1. Rewrite highest-traffic nodes first (TBD which ones)
2. Apply template consistently
3. Cross-link to shared concepts

### Phase 4: Completeness
1. Fill in remaining nodes
2. Add missing specialized sections
3. Final review pass
