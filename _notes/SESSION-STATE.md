# Session State

> Quick restoration for session continuity. Machine-readable.

## Last Update
2026-01-29

## Active Task
DOCUMENTATION - Node Library modules (Clusters in progress)

## Completed Modules
- PATHFINDING: 8/8 nodes + README
- SAMPLING: 13/13 nodes + texture-sampling subfolder (3 nodes + tex-param sub-node) + README

## In Progress
- CLUSTERS: Reorganized into category folders
  - diagrams/ - 5 nodes documented (delaunay-3d, delaunay-2d, voronoi-3d, voronoi-2d, convex-hull-3d)
  - operations/ - 2 nodes documented (fuse-clusters, sanitize-clusters), 7 pending
  - refine-edges/ - 1 parent node + 10 sub-operation pages
  - relax-clusters/ - 1 parent node + 5 sub-operation pages
  - path-conversion/ - 2 nodes documented (break-to-paths, path-to-clusters), 1 pending
  - properties/ - 3 nodes pending (vtx-properties, edge-properties, sample-neighbors)
  - selection/ - 4 nodes pending
  - utility/ - 1 node documented (mesh-to-clusters), 4 pending
  - shared-settings/ - intersection-details.md documented

## Remaining Clusters Nodes (~18 nodes)
### Operations (7 pending)
- connect-clusters, merge-vertices, simplify-clusters, subdivide-edges
- make-unique, pack-clusters, unpack-clusters

### Properties (3 pending)
- vtx-properties, edge-properties, sample-neighbors

### Selection (4 pending)
- filter-vtx, pick-closest, find-clusters, find-on-bounds

### Utility (4 pending)
- build-custom-graph, copy-to-points, partition-vtx, centrality

### Path Conversion (1 pending)
- cut-clusters

## Pending Modules (Node Library)
- Clusters (18 remaining nodes)
- Meta (12 nodes)
- Spatial (8 nodes)
- Topology (5 nodes)
- Valency (4 nodes)
- Clipper2 (3 nodes)
- Actions (3 nodes)
- Tensors (2 nodes)
- PathfindingNavmesh (2 nodes)
- FloodFill (1 node)
- Bridges (1 node)
- Probing (1 node)
- Shapes (1 node)

## Documentation Conventions Established
1. Only mark ⚡ PCG Overridable (ignore PCG_NotOverridable)
2. Behavior-focused with ASCII diagrams
3. Read source code before documenting
4. Validate against UPROPERTY declarations
5. Sub-node factories get their own documentation (e.g., tex-param.md)
6. Complex shared structs get their own pages (e.g., intersection-details.md)
7. Sub-operations in parent nodes become subfolders with individual pages (e.g., refine-edges/, relax-clusters/)
8. Category folders get README.md files explaining the category
9. Misc/hard-to-categorize nodes stay in the root folder

## Paths
SRC=D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source
DOC=D:\GIT\PCGExtendedToolkitGitBook\_dry-run
REF=D:\GIT\PCGExtendedToolkitGitBook\_notes

## CRITICAL
WRONG_PATH=C:\Users\Admin\.claude-worktrees\... (DO NOT USE)
CORRECT_PATH=D:\GIT\PCGExtendedToolkitGitBook\_dry-run (USE THIS)

## Sampling Module Structure
```
sampling/
├── README.md
├── sample-nearest-point.md
├── sample-nearest-bounds.md
├── sample-nearest-path.md
├── sample-nearest-spline.md
├── sample-nearest-surface.md
├── sample-surface-guided.md (Sample Line Trace)
├── sample-inside-path.md
├── sample-overlap-stats.md
├── sample-sockets.md
├── self-pruning.md
├── discard-by-overlap.md
└── texture-sampling/
    ├── README.md
    ├── tex-param.md (sub-node factory)
    ├── sample-texture.md
    └── get-texture-data.md
```

## Clusters Module Structure (Reorganized)
```
clusters/
├── README.md (category overview with links to subfolders)
├── diagrams/
│   ├── README.md
│   ├── delaunay-3d.md
│   ├── delaunay-2d.md
│   ├── voronoi-3d.md
│   ├── voronoi-2d.md
│   └── convex-hull-3d.md
├── operations/
│   ├── README.md
│   ├── fuse-clusters.md
│   └── sanitize-clusters.md
├── refine-edges/
│   ├── README.md (parent Cluster : Refine node)
│   ├── mst-prim.md
│   ├── gabriel.md
│   ├── skeleton.md
│   ├── line-trace.md
│   ├── overlap.md
│   ├── edge-length.md
│   ├── edge-score.md
│   ├── remove-leaves.md
│   ├── dfs-tarjan.md
│   └── filter.md
├── relax-clusters/
│   ├── README.md (parent Cluster : Relax node)
│   ├── laplacian.md
│   ├── force-directed.md
│   ├── verlet.md
│   ├── box-fitting.md
│   └── radius-fitting.md
├── path-conversion/
│   ├── README.md
│   ├── path-to-clusters.md
│   └── break-to-paths.md
├── properties/
│   └── README.md (placeholder)
├── selection/
│   └── README.md (placeholder)
├── utility/
│   ├── README.md
│   └── mesh-to-clusters.md
└── shared-settings/
    ├── README.md
    └── intersection-details.md
```
