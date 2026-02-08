# The Cluster-Path Workflow Cycle

> **Source**: Extracted from Path to Clusters and Fuse Clusters documentation for use in "Working with PCGEx" section.

## The Core Concept

Pathfinding operations output **paths** (ordered sequences of points), but many PCGEx operations require **clusters** (vertices + edges). The **Path to Clusters** node bridges that gap, enabling recursive refinement workflows.

## The Refinement Cycle

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE REFINEMENT CYCLE                         │
└─────────────────────────────────────────────────────────────────┘

     ┌──────────────┐
     │   Cluster    │ ◄─────────────────────────────────┐
     │  (Vtx+Edges) │                                   │
     └──────┬───────┘                                   │
            │                                           │
            ▼                                           │
     ┌──────────────┐                                   │
     │ Pathfinding  │  Find shortest paths, cells,      │
     │  Operations  │  hulls, grow paths, etc.          │
     └──────┬───────┘                                   │
            │                                           │
            ▼                                           │
     ┌──────────────┐                                   │
     │    Paths     │  Ordered point sequences          │
     │   (Points)   │                                   │
     └──────┬───────┘                                   │
            │                                           │
            ▼                                           │
    ╔═══════════════╗                                   │
    ║    Path To    ║                                   │
    ║   Clusters    ║                                   │
    ╚═══════╤═══════╝                                   │
            │                                           │
            ▼                                           │
     ┌──────────────┐                                   │
     │   Cluster    │───────────────────────────────────┘
     │  (Vtx+Edges) │   Ready for more operations!
     └──────────────┘
```

## Combining Multiple Data Sources

```
┌─────────────────────────────────────────────────────────────────┐
│              COMBINING MULTIPLE DATA SOURCES                    │
└─────────────────────────────────────────────────────────────────┘

     ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
     │  Cluster A   │      │  Cluster B   │      │    Paths     │
     │   (roads)    │      │  (railways)  │      │ (from pathf) │
     └──────┬───────┘      └──────┬───────┘      └──────┬───────┘
            │                     │                     │
            │                     │            ┌────────┴────────┐
            │                     │            │ Path to Clusters │
            │                     │            └────────┬────────┘
            │                     │                     │
            └─────────────────────┼─────────────────────┘
                                  │
                                  ▼
                         ╔═══════════════╗
                         ║ Fuse Clusters ║  ◄── Merge everything
                         ╚═══════╤═══════╝
                                 │
                                 ▼
                          ┌──────────────┐
                          │   Unified    │
                          │   Network    │
                          └──────────────┘
```

## Practical Applications

### Targeted Network Refinement
```
1. Start with a complex road network cluster
2. Run pathfinding to find shortest routes between key locations
3. Convert those routes back to clusters via Path to Clusters
4. Fuse with a simplified base network
5. Result: A network that prioritizes important routes
```

### Hierarchical Path Networks
```
1. Extract major highways via pathfinding (long-distance paths)
2. Convert to cluster with Path to Clusters
3. Extract local roads via different pathfinding criteria
4. Convert to cluster and fuse together
5. Result: Multi-level navigation network
```

### Iterative Graph Pruning
```
1. Find all cells/regions in a cluster via pathfinding
2. Convert cell boundaries to clusters
3. Use as input for further pathfinding
4. Progressively refine to target specific regions
```

### Modular Level Design
```
1. Design road segments as separate clusters
2. Place instances throughout the level
3. Fuse all clusters together
4. Result: A connected road network with proper intersections
```

### Pathfinding Result Integration
```
1. Run pathfinding on a cluster to find optimal routes
2. Convert paths to clusters (Path to Clusters)
3. Fuse with the original or a simplified base cluster
4. Result: A graph that emphasizes important routes
```

### Multi-Layer Networks
```
1. Ground-level paths as Cluster A
2. Elevated walkways as Cluster B
3. Connection points marked with attributes
4. Fuse with point-edge detection
5. Result: 3D navigation network with proper connections
```

### Procedural City Streets
```
1. Generate main roads as one cluster
2. Generate side streets as another
3. Fuse with edge-edge intersection detection
4. Result: Proper crossroads and T-junctions everywhere paths meet
```

## Key Nodes

- **Path to Clusters**: Converts paths back to cluster format
- **Fuse Clusters**: Merges multiple clusters with intersection handling
- **Pathfinding nodes**: Extract paths from clusters (Pathfinding Edges, Find Cells, Grow Paths, etc.)

## Why Intersection Handling Matters

When working with multiple clusters, simply concatenating vertices and edges doesn't create proper connections — you need intersection detection and resolution:

- **Overlapping vertices** need to become shared junctions
- **Points lying on edges** need to split those edges and connect properly
- **Crossing edges** need intersection vertices for navigation

Both Path to Clusters (with fusing) and Fuse Clusters handle this automatically.
