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
- CLUSTERS: 14/22 nodes + README + intersection-details + refine-edges subfolder + relax-clusters subfolder
  - README.md (category overview)
  - Shared: intersection-details.md (Point/Point, Point/Edge, Edge/Edge intersection structs)
  - Diagrams: delaunay-3d, delaunay-2d, voronoi-3d, voronoi-2d, convex-hull-3d (5 nodes)
  - Operations: fuse-clusters, sanitize-clusters (2 nodes)
  - Path Conversion: break-to-paths, path-to-clusters (2 nodes)
  - Utility: mesh-to-clusters (1 node)
  - Refine Edges subfolder (1 parent node + 10 sub-operation pages):
    - README.md (parent Cluster : Refine node)
    - mst-prim.md, gabriel.md, skeleton.md (spatial tests)
    - line-trace.md, overlap.md (collision-based)
    - edge-length.md (4 length operations combined)
    - edge-score.md (4 score operations combined)
    - remove-leaves.md (2 leaf removal operations combined)
    - dfs-tarjan.md (bridge edge detection)
    - filter.md (edge filter-based)
  - Relax Clusters subfolder (1 parent node + 5 sub-operation pages):
    - README.md (parent Cluster : Relax node)
    - laplacian.md (Laplacian/Poisson smoothing)
    - force-directed.md (spring-charge system)
    - verlet.md (physics with gravity/friction)
    - box-fitting.md (Box Fitting v1 and v2)
    - radius-fitting.md (spherical collision)

## Remaining Clusters Nodes (8 nodes)
- connect-clusters, merge-vertices, simplify-clusters, subdivide-edges
- make-unique, pack-clusters, unpack-clusters
- sample-neighbors

## Pending Modules (Node Library)
- Clusters (8 remaining nodes)
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

## Clusters Module Structure (In Progress)
```
clusters/
├── README.md
├── intersection-details.md (shared structs for fusion nodes)
├── delaunay-3d.md
├── delaunay-2d.md
├── voronoi-3d.md
├── voronoi-2d.md
├── convex-hull-3d.md
├── fuse-clusters.md
├── sanitize-clusters.md
├── break-to-paths.md
├── path-to-clusters.md
├── mesh-to-clusters.md
├── refine-edges/
│   ├── README.md (parent Cluster : Refine node)
│   ├── mst-prim.md
│   ├── gabriel.md
│   ├── skeleton.md
│   ├── line-trace.md
│   ├── overlap.md
│   ├── edge-length.md (Keep/Remove Shortest/Longest)
│   ├── edge-score.md (Keep/Remove Highest/Lowest Score)
│   ├── remove-leaves.md (Remove Leaves + Recursive)
│   ├── dfs-tarjan.md
│   └── filter.md
└── relax-clusters/
    ├── README.md (parent Cluster : Relax node)
    ├── laplacian.md
    ├── force-directed.md
    ├── verlet.md
    ├── box-fitting.md (v1 and v2)
    └── radius-fitting.md
```
