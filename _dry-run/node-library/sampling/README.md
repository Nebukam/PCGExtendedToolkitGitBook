---
icon: crosshairs
description: Sample data from various sources
---

# Sampling

Sampling nodes query data from various sources - other points, paths, splines, surfaces, textures, and meshes - and write the results to point attributes.

## Node Categories

### Point-Based Sampling

| Node | Description |
|------|-------------|
| [Sample Nearest Point](./sample-nearest-point.md) | Sample nearby target points based on distance |
| [Sample Nearest Bounds](./sample-nearest-bounds.md) | Test if points are inside target bounding boxes |
| [Sample Overlap Stats](./sample-overlap-stats.md) | Calculate per-point overlap statistics between sets |

### Path & Spline Sampling

| Node | Description |
|------|-------------|
| [Sample Nearest Path](./sample-nearest-path.md) | Sample from point-based polylines with inside/outside testing |
| [Sample Nearest Spline](./sample-nearest-spline.md) | Sample from Unreal Spline components |
| [Sample Inside Path](./sample-inside-path.md) | Sample points that are inside path polygons |

### Surface Sampling

| Node | Description |
|------|-------------|
| [Sample Nearest Surface](./sample-nearest-surface.md) | Find closest point on collision surfaces (sphere overlap) |
| [Sample Line Trace](./sample-surface-guided.md) | Trace rays to find surfaces in a direction |

### Texture Sampling

Texture sampling uses a factory pattern with Tex Param sub-nodes. See the [Texture Sampling](./texture-sampling/README.md) section for details.

| Node | Description |
|------|-------------|
| [Tex Param](./texture-sampling/tex-param.md) | Sub-node configuring texture parameter extraction and sampling |
| [Get Texture Data](./texture-sampling/get-texture-data.md) | Extract texture paths from materials, build Texture Data objects |
| [Sample Texture](./texture-sampling/sample-texture.md) | Sample texture values at point UV coordinates |

### Mesh Sampling

| Node | Description |
|------|-------------|
| [Sample Sockets](./sample-sockets.md) | Extract socket positions from static meshes |

### Overlap & Pruning

| Node | Description |
|------|-------------|
| [Self Pruning](./self-pruning.md) | Remove overlapping points within the same set |
| [Discard By Overlap](./discard-by-overlap.md) | Discard entire data sets based on overlap |

## Common Concepts

### Sample Methods

Most sampling nodes offer these selection methods when multiple targets are valid:

| Method | Behavior |
|--------|----------|
| **All (Within range)** | Blend data from all valid targets (weighted) |
| **Closest Target** | Sample only the single closest target |
| **Farthest Target** | Sample only the single farthest target |
| **Best Candidate** | Use Sorting Rules to determine winner |

### Weight Curves

Many sampling nodes use weight curves to control how distance affects blending:
- **Full Range**: Curve input 0-1 maps to 0 to RangeMax
- **Effective Range**: Curve input 0-1 maps to actual sampled distance range

### Common Outputs

Most sampling nodes can write these attributes:

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether sampling succeeded |
| **Distance** | `double` | Distance to sampled target |
| **Transform** | `FTransform` | Weighted transform from targets |
| **Num Samples** | `int32` | Number of targets sampled |

### Tagging

All sampling nodes support conditional tagging:
- **Tag If Has Successes**: Add tag when at least one point sampled successfully
- **Tag If Has No Successes**: Add tag when no points sampled anything

## Choosing the Right Node

| If you need to... | Use |
|-------------------|-----|
| Find closest points | [Sample Nearest Point](./sample-nearest-point.md) |
| Test if inside a volume | [Sample Nearest Bounds](./sample-nearest-bounds.md) |
| Sample along a curve | [Sample Nearest Spline](./sample-nearest-spline.md) |
| Project onto surfaces | [Sample Nearest Surface](./sample-nearest-surface.md) or [Sample Line Trace](./sample-surface-guided.md) |
| Read texture values | [Texture Sampling](./texture-sampling/README.md) |
| Remove overlapping points | [Self Pruning](./self-pruning.md) |
| Analyze overlaps | [Sample Overlap Stats](./sample-overlap-stats.md) |

---

📦 **Module**: `PCGExElementsSampling`
