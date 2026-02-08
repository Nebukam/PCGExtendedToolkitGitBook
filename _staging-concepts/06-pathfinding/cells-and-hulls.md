# Cells and Hulls

**Not all cluster traversal is about getting from A to B.** PCGEx can also extract structural features from cluster topology: the enclosed regions between edges (cells), the outlines of connected areas (contours), and the outer boundary of the whole cluster (hulls). These operations produce paths, so everything you know about path processing applies to the results.

## Cells

Cells are closed regions bounded by cluster edges. Think of them as the "polygons" formed by the cluster's edge network.

<!-- IMAGE: Cluster with individual cells highlighted in different colors -->

### What Cells Represent

In a cluster:
- Edges form boundaries
- Cells are the enclosed areas between edges
- Each cell is a closed loop of Vtx

### Finding Cells

**Find All Cells** extracts every cell from a cluster:
- Seeds determine starting points for cell discovery
- Cells are output as closed paths
- Each cell is an ordered sequence of Vtx forming its boundary

**Find All Cells (Bounded)** adds spatial constraints:
- Only find cells within specified bounds
- Useful for region-limited extraction

## Contours

Contours trace boundaries around cluster regions — drawing the outline of connected areas.

<!-- IMAGE: Cluster regions with contour lines traced around them -->

### What Contours Represent

A contour is the outer edge of a connected region:
- Follows the boundary where cluster meets empty space
- Can trace multiple disconnected regions
- Produces closed paths for each region

### Finding Contours

**Find Contours** traces region boundaries:
- Seeds identify regions to trace
- Each region produces a contour path
- Handles complex shapes with indentations

**Find Contours (Bounded)** adds spatial limits:
- Only trace contours within bounds
- Clips contours at boundary edges

## Hulls

Hulls extract the outer boundary of entire clusters: the outermost perimeter.

<!-- IMAGE: Cluster with hull path highlighted as outer boundary -->

### What Hulls Represent

The hull is the convex or cluster outer boundary:
- Wraps around the entire cluster
- Excludes internal structure
- Single path for the whole cluster

### Finding Hulls

**Find Cluster Hull** extracts the outer boundary:
- Walks the cluster perimeter
- Produces a closed path
- Can use convex hull or cluster boundary

## Comparison

| Extraction | Finds | Output |
|------------|-------|--------|
| Cells | Interior enclosed regions | Multiple closed paths |
| Contours | Region boundaries | Outline paths per region |
| Hull | Outer cluster boundary | Single outer path |

## Practical Uses

### Region Identification

Extract cells to identify distinct areas:
1. Generate cluster from points
2. Find all cells
3. Each cell represents a bounded region
4. Process regions independently

### Boundary Drawing

Extract contours or hulls for boundary visualization:
1. Generate cluster
2. Find contours/hull
3. Use paths for spawning boundaries, walls, borders

### Area Calculation

Cells provide polygon boundaries for measurement:
1. Extract cells as paths
2. Calculate polygon area from point positions
3. Use area values for filtering or weighting

### Mesh Generation

Cells map directly to polygon geometry:
1. Extract cells from cluster
2. Each cell becomes a polygon face
3. Suitable for mesh construction

## Relation to Pathfinding

These operations share infrastructure with pathfinding:
- Traverse cluster topology
- Produce ordered point sequences
- Use the same cluster data structures

But they don't require goals or heuristics. They're structural extraction, not route finding.

## Seeds and Starting Points

Cell and contour finding often use seeds:
- Seeds are points that identify regions of interest
- Operations find cells/contours containing or near seeds
- Without seeds, operations may find all possible cells

Seed placement determines which regions are extracted.

## Output as Paths

All these operations output paths:
- Closed paths (loops) for cells and contours
- Can be processed with path operations
- Suitable for further refinement (offset, subdivide, smooth)

## Related

- [Pathfinding Overview](README.md) - Pathfinding concepts
- [Paths](/concepts/02-paths/) - Path operations for extracted boundaries
- [Cluster Path Interop](/concepts/03-clusters/cluster-path-interop.md) - Converting between formats
