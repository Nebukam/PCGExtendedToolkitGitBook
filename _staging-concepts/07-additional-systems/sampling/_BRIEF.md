# Section Brief: Sampling

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain sampling operations - querying and extracting data from spatial relationships. Users should understand:
- Sampling finds nearest elements and extracts data
- Multiple sampling targets (points, splines, paths, surfaces, textures)
- Neighbor sampling in clusters
- This is utility functionality used throughout PCGEx

---

## Key Messages

1. **Query and extract** - Find nearest things, get their data
2. **Multiple targets** - Points, bounds, splines, paths, surfaces, textures
3. **Cluster neighbors** - Special sampling within cluster topology
4. **Data transfer** - Bring attributes from sampled targets to source points

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What sampling is, overview of sampling types |

---

## Source Material

### For Accuracy
- `_notes/modules/PCGExElementsSampling.md` - Module architecture
- `_staging/PCGExElementsSampling/` - Generated sampling docs
- Source: `PCGExElementsSampling/Public/` - Sampling implementations

---

## What Belongs Here vs Elsewhere

### In This Section
- Sampling concept
- Types of sampling targets
- Neighbor sampling in clusters
- Apply sampling patterns

### NOT Here (belongs elsewhere)
- Specific sampling node settings → Node Library
- Cluster fundamentals → `03-clusters/`

---

## Terminology

- **Sampling** - Querying spatial data and extracting values
- **Target** - What is being sampled (points, spline, surface, etc.)
- **Source** - Points doing the sampling
- **Nearest** - Closest element by distance
- **Apply sampling** - How sampled data is written to source points

---

## Diagrams Needed

1. Point sampling nearest surface with data transfer
2. Cluster neighbor sampling pattern

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/` - Neighbor sampling relates to clusters

**Node Library:**
- `/node-library/sampling/`

---

## Quality Notes

- Keep BRIEF - utility functionality
- Single README.md may be sufficient
- Emphasize the "query and transfer" mental model
- Low priority section
