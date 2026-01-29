# PCGEx Documentation Inventory

## Notation Glossary

| Symbol | Meaning |
|--------|---------|
| `[N]` | **Node** - A PCGEx node (UPCGEx*Settings class) |
| `[F]` | **Factory** - Instanced factory that creates operations |
| `[S]` | **Shared** - Factory/settings used by multiple nodes (gets its own folder) |
| `[P]` | **Provider** - Filter/heuristic provider node that creates factories |
| `[D]` | **Details** - Shared settings struct (FPCGEx*Details) embedded in multiple nodes |
| `[A]` | **Asset** - Data asset type (UDataAsset subclass) created in Content Browser |
| `📁` | Folder structure (node has sub-operations) |
| `→` | References shared folder |
| `✅` | Documented and verified against source |
| `⚠️` | Exists but needs verification |
| `❌` | Not yet documented |

---

## Data Assets (Content Browser Types)

These are UDataAsset subclasses that users create in the Content Browser, not PCG nodes.

### PCGExCore - Bitmask Collection
```
data-assets/
└── bitmask-collection.md [A]            ❌ - UPCGExBitmaskCollection
    Named bitmask definitions for use across PCGEx nodes
```

### PCGExCollections - Asset Collections
```
data-assets/
├── asset-collection.md [A]              ❌ - UPCGExAssetCollection (base class)
│   Base collection type for weighted asset staging
│
├── mesh-collection.md [A]               ❌ - UPCGExMeshCollection
│   Collection of static meshes with per-entry settings
│
├── actor-collection.md [A]              ❌ - UPCGExActorCollection
│   Collection of actor classes with per-entry settings
│
└── pcg-data-asset-collection.md [A]     ❌ - UPCGExPCGDataAssetCollection
    Collection of PCG data assets
```

### PCGExElementsValency - Valency Data Assets
```
data-assets/
├── orbital-set.md [A]                   ❌ - UPCGExValencyOrbitalSet
│   Defines orbital configurations for valency solving
│
├── socket-rules.md [A]                  ❌ - UPCGExValencySocketRules
│   Rules defining socket compatibility between modules
│
└── bonding-rules.md [A]                 ❌ - UPCGExValencyBondingRules
    Rules defining how orbitals can bond together
```

**Data Assets Total: 7 asset types**

---

## Shared Infrastructure (Cross-Module)

These are documented ONCE and referenced from node docs.

### PCGExFoundations - Shared Factories

```
node-library/
└── shared/
    ├── tangents/ [S]                    ❌
    │   ├── README.md
    │   ├── auto.md [F]
    │   ├── catmull-rom.md [F]
    │   ├── from-neighbors.md [F]
    │   ├── from-transform.md [F]
    │   └── zero.md [F]
    │
    └── (other cross-module shared concepts)
```

### PCGExBlending - Shared Factories

```
node-library/
└── shared/
    ├── sub-point-blending/ [S]          ⚠️ (exists in paths/)
    │   ├── README.md
    │   ├── interpolate.md [F]
    │   ├── inherit-first.md [F]
    │   ├── inherit-last.md [F]
    │   └── none.md [F]
    │
    └── blending-details/ [D]            ❌
        └── README.md
```

### PCGExFilters - Point Filters

```
node-library/
└── filters/
    ├── README.md                        ⚠️ (exists)
    │
    ├── points/                          ⚠️ (exists - 27 filters documented)
    │   ├── angle.md [P]
    │   ├── bitmask.md [P]
    │   ├── boolean-compare.md [P]
    │   ├── bounds.md [P]
    │   ├── constant.md [P]
    │   ├── distance.md [P]
    │   ├── dot.md [P]
    │   ├── gameplay-tags.md [P]
    │   ├── inclusion.md [P]
    │   ├── mean.md [P]
    │   ├── modulo-compare.md [P]
    │   ├── noise.md [P]
    │   ├── numeric-compare.md [P]
    │   ├── numeric-compare-nearest.md [P]
    │   ├── numeric-self-compare.md [P]
    │   ├── picker.md [P]
    │   ├── random.md [P]
    │   ├── random-ratio.md [P]
    │   ├── segment-cross.md [P]
    │   ├── segment-length.md [P]
    │   ├── string-compare.md [P]
    │   ├── string-self-compare.md [P]
    │   ├── tensor-dot.md [P]
    │   ├── time.md [P]
    │   ├── value-hash.md [P]
    │   └── within-range.md [P]
    │
    ├── collections/                     ⚠️ (exists - 5 filters documented)
    │   ├── README.md
    │   ├── attribute-check.md [P]
    │   ├── data-bounds.md [P]
    │   ├── entry-count.md [P]
    │   ├── tag-check.md [P]
    │   └── tag-value.md [P]
    │
    └── clusters/                        ⚠️ (exists - 10 filters documented)
        ├── README.md
        ├── node-adjacency.md [P]
        ├── node-edge-angle.md [P]
        ├── node-edge-direction.md [P]
        ├── node-neighbors-count.md [P]
        ├── edge-direction.md [P]
        ├── edge-endpoints-check.md [P]
        ├── edge-endpoints-compare-numeric.md [P]
        ├── edge-endpoints-compare-string.md [P]
        ├── edge-length.md [P]
        └── edge-neighbors-count.md [P]
```

### PCGExPickers - Index/Value Pickers

```
node-library/
└── pickers/
    ├── README.md                        ❌
    ├── constant.md [P]                  ❌ - UPCGExPickerConstantProviderSettings
    ├── range.md [P]                     ❌ - UPCGExPickerConstantRangeProviderSettings
    ├── indices-from-set.md [P]          ❌ - UPCGExPickerAttributeSetProviderSettings
    └── ranges-from-set.md [P]           ❌ - UPCGExPickerAttributeSetRangesProviderSettings
```

### PCGExHeuristics - Pathfinding Heuristics

```
node-library/
└── heuristics/
    ├── README.md                        ❌
    ├── shortest-distance.md [P]         ❌ - UPCGExHeuristicsShortestDistanceProviderSettings
    ├── azimuth.md [P]                   ❌ - UPCGExHeuristicsAzimuthProviderSettings
    ├── attribute.md [P]                 ❌ - UPCGExCreateHeuristicAttributeSettings
    ├── feedback.md [P]                  ❌ - UPCGExHeuristicFeedbackProviderSettings
    ├── gradient.md [P]                  ❌ - UPCGExHeuristicsGradientProviderSettings
    ├── inertia.md [P]                   ❌ - UPCGExHeuristicsInertiaProviderSettings
    ├── least-nodes.md [P]               ❌ - UPCGExHeuristicsLeastNodesProviderSettings
    ├── steepness.md [P]                 ❌ - UPCGExHeuristicsSteepnessProviderSettings
    └── turn-penalty.md [P]              ❌ - UPCGExHeuristicsTurnPenaltyProviderSettings
```

### PCGExNoise3D - 3D Noise Providers

```
node-library/
└── noise3d/
    ├── README.md                        ❌
    ├── caustic.md [P]                   ❌ - UPCGExNoise3DCausticProviderSettings
    ├── curl.md [P]                      ❌ - UPCGExNoise3DCurlProviderSettings
    ├── fbm.md [P]                       ❌ - UPCGExNoise3DFBMProviderSettings
    ├── flow.md [P]                      ❌ - UPCGExNoise3DFlowProviderSettings
    ├── gabor.md [P]                     ❌ - UPCGExNoise3DGaborProviderSettings
    ├── marble.md [P]                    ❌ - UPCGExNoise3DMarbleProviderSettings
    ├── open-simplex-2.md [P]            ❌ - UPCGExNoise3DOpenSimplex2ProviderSettings
    ├── perlin.md [P]                    ❌ - UPCGExNoise3DPerlinProviderSettings
    ├── simplex.md [P]                   ❌ - UPCGExNoise3DSimplexProviderSettings
    ├── spots.md [P]                     ❌ - UPCGExNoise3DSpotsProviderSettings
    ├── swiss.md [P]                     ❌ - UPCGExNoise3DSwissProviderSettings
    ├── tiling.md [P]                    ❌ - UPCGExNoise3DTilingProviderSettings
    ├── value.md [P]                     ❌ - UPCGExNoise3DValueProviderSettings
    ├── voronoi.md [P]                   ❌ - UPCGExNoise3DVoronoiProviderSettings
    ├── white.md [P]                     ❌ - UPCGExNoise3DWhiteProviderSettings
    └── worley.md [P]                    ❌ - UPCGExNoise3DWorleyProviderSettings
```

### PCGExProperties - Property Nodes

```
node-library/
└── properties/
    ├── README.md                        ❌
    └── tuple.md [N]                     ❌ - UPCGExTupleSettings
```

---

## node-library/paths/ (PCGExElementsPaths)

### Module-Shared Factories
```
paths/
├── tangents/ [S] → shared/tangents/     ⚠️ (exists, verify)
│   ├── README.md
│   ├── auto.md [F]
│   ├── catmull-rom.md [F]
│   ├── neighbors.md [F]
│   ├── transform.md [F]
│   └── zero.md [F]
│
└── sub-point-blending/ [S]              ⚠️ (exists, verify)
    ├── README.md
    ├── interpolate.md [F]
    ├── inherit-first.md [F]
    ├── inherit-last.md [F]
    └── none.md [F]
```

### Nodes with Node-Specific Factories (folders)
```
paths/
├── 📁 orient/ [N+F]                     ⚠️ (exists, verify)
│   ├── README.md - UPCGExOrientSettings
│   ├── average.md [F] - UPCGExOrientAverage
│   ├── look-at.md [F] - UPCGExOrientLookAt
│   └── weighted.md [F] - UPCGExOrientWeighted
│
└── 📁 smooth/ [N+F]                     ⚠️ (exists, verify)
    ├── README.md - UPCGExSmoothSettings
    ├── moving-average.md [F] - UPCGExSmoothingMovingAverage
    └── radius.md [F] - UPCGExSmoothingRadius
```

### Standard Nodes (single files)
```
paths/
├── README.md                            ⚠️
├── attribute-rolling.md [N]             ⚠️ - UPCGExAttributeRollingSettings
├── bevel.md [N]                         ⚠️ - UPCGExBevelPathSettings
├── blend-path.md [N] → sub-point-blending/  ⚠️ - UPCGExBlendPathSettings
├── copy-to-path.md [N]                  ⚠️ - UPCGExCopyToPathsSettings
├── create-spline.md [N] → tangents/     ⚠️ - UPCGExCreateSplineSettings
├── fuse-collinear.md [N]                ⚠️ - UPCGExFuseCollinearSettings
├── insert.md [N]                        ⚠️ - UPCGExPathInsertSettings
├── offset.md [N]                        ⚠️ - UPCGExOffsetPathSettings
├── path-bounds-intersection.md [N]      ⚠️ - UPCGExBoundsPathIntersectionSettings
├── path-crossings.md [N]                ⚠️ - UPCGExPathCrossingsSettings
├── properties.md [N]                    ⚠️ - UPCGExWritePathPropertiesSettings
├── reduce.md [N]                        ⚠️ - UPCGExPathReduceSettings
├── resample.md [N] → sub-point-blending/ ⚠️ - UPCGExResamplePathSettings
├── reverse-order.md [N]                 ⚠️ - UPCGExReversePointOrderSettings
├── shift.md [N]                         ⚠️ - UPCGExShiftPathSettings
├── shrink.md [N]                        ⚠️ - UPCGExShrinkPathSettings
├── slide.md [N]                         ⚠️ - UPCGExPathSlideSettings
├── solidify.md [N]                      ⚠️ - UPCGExPathSolidifySettings
├── spline-mesh-simple.md [N]            ⚠️ - UPCGExPathSplineMeshSimpleSettings
├── spline-to-path.md [N]                ⚠️ - UPCGExSplineToPathSettings
├── split.md [N]                         ⚠️ - UPCGExSplitPathSettings
├── stitch.md [N]                        ⚠️ - UPCGExPathStitchSettings
├── subdivide.md [N] → sub-point-blending/ ⚠️ - UPCGExSubdivideSettings
└── write-tangents.md [N] → tangents/    ⚠️ - UPCGExWriteTangentsSettings
```

**Paths Total: 26 nodes, 2 shared factory folders, 2 node-specific factory folders**

---

## node-library/clusters/ (PCGExElementsClusters)

### Module-Shared Factories
```
clusters/
├── 📁 searches/ [S]                     ❌
│   ├── README.md
│   ├── dijkstra.md [F]
│   ├── a-star.md [F]
│   └── ... (search algorithms)
│
├── 📁 edge-refinements/ [S]             ❌
│   ├── README.md
│   ├── mst.md [F]
│   ├── gabriel.md [F]
│   └── ... (refinement operations)
│
└── (Note: vtx-properties are node-specific to write-vtx-properties, not shared)
```

Note: Cluster filters (node/edge) are documented in `filters/clusters/` - see Filters section above.

### Build Nodes
```
clusters/
├── build-cell-diagram.md [N]            ❌ - UPCGExBuildCellDiagramSettings
├── build-convex-hull.md [N]             ❌ - UPCGExBuildConvexHullSettings
├── build-convex-hull-2d.md [N]          ❌ - UPCGExBuildConvexHull2DSettings
├── build-custom-graph.md [N]            ❌ - UPCGExBuildCustomGraphSettings
├── build-delaunay.md [N]                ❌ - UPCGExBuildDelaunayGraphSettings
├── build-delaunay-2d.md [N]             ❌ - UPCGExBuildDelaunayGraph2DSettings
├── build-dual-graph.md [N]              ❌ - UPCGExBuildDualGraphSettings
├── build-voronoi.md [N]                 ❌ - UPCGExBuildVoronoiGraphSettings
└── build-voronoi-2d.md [N]              ❌ - UPCGExBuildVoronoiGraph2DSettings
```

### Cluster Operations
```
clusters/
├── centrality.md [N]                    ❌ - UPCGExClusterCentralitySettings
├── decomposition.md [N]                 ❌ - UPCGExClusterDecompositionSettings
├── connect-clusters.md [N]              ❌ - UPCGExConnectClustersSettings
├── copy-to-points.md [N]                ❌ - UPCGExCopyClustersToPointsSettings
├── edge-order.md [N]                    ❌ - UPCGExEdgeOrderSettings
├── filter-vtx.md [N]                    ❌ - UPCGExFilterVtxSettings
├── find-clusters-data.md [N]            ❌ - UPCGExFindClustersDataSettings
├── find-point-on-bounds.md [N]          ❌ - UPCGExFindPointOnBoundsClustersSettings
├── flag-nodes.md [N]                    ❌ - UPCGExFlagNodesSettings
├── fuse-clusters.md [N]                 ❌ - UPCGExFuseClustersSettings
├── make-unique.md [N]                   ❌ - UPCGExMakeClustersUniqueSettings
├── merge-vertices.md [N]                ❌ - UPCGExMergeVerticesSettings
├── mesh-to-clusters.md [N]              ❌ - UPCGExMeshToClustersSettings
├── pack-clusters.md [N]                 ❌ - UPCGExPackClustersSettings
├── partition-vertices.md [N]            ❌ - UPCGExPartitionVerticesSettings
├── pick-closest.md [N]                  ❌ - UPCGExPickClosestClustersSettings
├── refine-edges.md [N] → edge-refinements/ ❌ - UPCGExRefineEdgesSettings
├── relax-clusters.md [N]                ❌ - UPCGExRelaxClustersSettings
├── sanitize.md [N]                      ❌ - UPCGExSanitizeClustersSettings
├── simplify.md [N]                      ❌ - UPCGExSimplifyClustersSettings
├── subdivide-edges.md [N]               ❌ - UPCGExSubdivideEdgesSettings
└── unpack-clusters.md [N]               ❌ - UPCGExUnpackClustersSettings
```

### Neighbor Sampling (Node + Subnodes)
```
clusters/
└── 📁 sample-neighbors/ [N+P]           ❌
    ├── README.md [N]                    - UPCGExSampleNeighborsSettings
    ├── attribute.md [P]                 - UPCGExNeighborSampleAttributeSettings
    ├── blend.md [P]                     - UPCGExNeighborSampleBlendSettings
    ├── filters.md [P]                   - UPCGExNeighborSampleFiltersSettings
    └── properties.md [P]                - UPCGExNeighborSamplePropertiesSettings
```

### Properties (Nodes + Subnodes)
```
clusters/
├── write-edge-properties.md [N]         ❌ - UPCGExWriteEdgePropertiesSettings
└── 📁 write-vtx-properties/ [N+P]       ❌
    ├── README.md [N]                    - UPCGExWriteVtxPropertiesSettings
    ├── amplitude.md [P]                 - UPCGExVtxPropertyAmplitudeSettings
    ├── edge-match.md [P]                - UPCGExVtxPropertyEdgeMatchSettings
    ├── special-edges.md [P]             - UPCGExVtxPropertySpecialEdgesSettings
    └── special-neighbors.md [P]         - UPCGExVtxPropertySpecialNeighborsSettings
```

### Path Conversion
```
clusters/
├── break-to-paths.md [N]                ❌ - UPCGExBreakClustersToPathsSettings
├── cut-edges.md [N]                     ❌ - UPCGExCutEdgesSettings
└── path-to-clusters.md [N]              ❌ - UPCGExPathToClustersSettings
```

**Clusters Total: ~45 nodes, 4 shared factory folders, 2 filter subfolders**

---

## node-library/sampling/ (PCGExElementsSampling)

```
sampling/
├── README.md                            ❌
├── discard-by-overlap.md [N]            ❌ - UPCGExDiscardByOverlapSettings
├── get-texture-data.md [N]              ❌ - UPCGExGetTextureDataSettings
├── sample-inside-path.md [N]            ❌ - UPCGExSampleInsidePathSettings
├── sample-nearest-bounds.md [N]         ❌ - UPCGExSampleNearestBoundsSettings
├── sample-nearest-path.md [N]           ❌ - UPCGExSampleNearestPathSettings
├── sample-nearest-point.md [N]          ❌ - UPCGExSampleNearestPointSettings
├── sample-nearest-spline.md [N]         ❌ - UPCGExSampleNearestSplineSettings
├── sample-nearest-surface.md [N]        ❌ - UPCGExSampleNearestSurfaceSettings
├── sample-overlap-stats.md [N]          ❌ - UPCGExSampleOverlapStatsSettings
├── sample-sockets.md [N]                ❌ - UPCGExSampleSocketsSettings
├── sample-surface-guided.md [N]         ❌ - UPCGExSampleSurfaceGuidedSettings
├── sample-texture.md [N]                ❌ - UPCGExSampleTextureSettings
└── self-pruning.md [N]                  ❌ - UPCGExSelfPruningSettings
```

### Shared Subnodes
```
sampling/
└── 📁 tex-params/ [S]                   ❌
    └── tex-param.md [P]                 - UPCGExTexParamProviderSettings (shared subnode)
```

**Sampling Total: 13 nodes, 1 shared provider**

---

## node-library/spatial/ (PCGExElementsSpatial)

```
spatial/
├── README.md                            ❌
├── best-fit-packing.md [N]              ❌ - UPCGExBestFitPackingSettings
├── best-match-axis.md [N]               ❌ - UPCGExBestMatchAxisSettings
├── bin-packing.md [N]                   ❌ - UPCGExBinPackingSettings
├── bounds-axis-to-points.md [N]         ❌ - UPCGExBoundsAxisToPointsSettings
├── bounds-to-points.md [N]              ❌ - UPCGExBoundsToPointsSettings
├── collocation-count.md [N]             ❌ - UPCGExCollocationCountSettings
├── find-point-on-bounds.md [N]          ❌ - UPCGExFindPointOnBoundsSettings
├── flat-projection.md [N]               ❌ - UPCGExFlatProjectionSettings
├── fuse-points.md [N]                   ❌ - UPCGExFusePointsSettings
├── lloyd-relax.md [N]                   ❌ - UPCGExLloydRelaxSettings
├── lloyd-relax-2d.md [N]                ❌ - UPCGExLloydRelax2DSettings
├── move-pivot.md [N]                    ❌ - UPCGExMovePivotSettings
├── normalize.md [N]                     ❌ - UPCGExNormalizeSettings
└── points-to-bounds.md [N]              ❌ - UPCGExPointsToBoundsSettings
```

**Spatial Total: 14 nodes**

---

## node-library/meta/ (PCGExElementsMeta)

```
meta/
├── README.md                            ❌
├── attribute-hash.md [N]                ❌ - UPCGExAttributeHashSettings
├── attribute-remap.md [N]               ❌ - UPCGExAttributeRemapSettings
├── attribute-stats.md [N]               ❌ - UPCGExAttributeStatsSettings
├── attributes-to-tags.md [N]            ❌ - UPCGExAttributesToTagsSettings
├── blend-attributes.md [N]              ❌ - UPCGExBlendAttributesSettings
├── meta-cleanup.md [N]                  ❌ - UPCGExMetaCleanupSettings
├── modular-partition.md [N]             ❌ - UPCGExModularPartitionByValuesSettings
├── modular-sort-points.md [N]           ❌ - UPCGExModularSortPointsSettings
├── pack-actor-data.md [N]               ❌ - UPCGExPackActorDataSettings
├── partition-by-values.md [N]           ❌ - UPCGExPartitionByValuesSettings
├── reduce-data-attribute.md [N]         ❌ - UPCGExReduceDataAttributeSettings
├── refresh-seed.md [N]                  ❌ - UPCGExRefreshSeedSettings
├── sort-collections.md [N]              ❌ - UPCGExSortCollectionsSettings
├── sort-points.md [N]                   ❌ - UPCGExSortPointsSettings
├── uber-noise.md [N]                    ❌ - UPCGExUberNoiseSettings
├── write-index.md [N]                   ❌ - UPCGExWriteIndexSettings
└── write-states.md [N]                  ❌ - UPCGExWriteStatesSettings
```

**Meta Total: 17 nodes**

---

## node-library/actions/ (PCGExElementsActions)

```
actions/
├── README.md                            ❌
├── batch-actions.md [N]                 ❌ - UPCGExBatchActionsSettings
└── 📁 action-providers/                 ❌
    └── write-values.md [P]              ❌ - UPCGExActionWriteValuesProviderSettings
```

**Actions Total: 2 nodes**

---

## node-library/topology/ (PCGExElementsTopology)

```
topology/
├── README.md                            ❌
├── clipper2-triangulate.md [N]          ❌ - UPCGExClipper2TriangulateSettings
├── spawn-dynamic-mesh.md [N]            ❌ - UPCGExSpawnDynamicMeshSettings
├── cluster-surface.md [N]               ❌ - UPCGExTopologyClusterSurfaceSettings
└── point-surface.md [N]                 ❌ - UPCGExTopologyPointSurfaceSettings
```

**Topology Total: 4 nodes**

---

## node-library/shapes/ (PCGExElementsShapes)

```
shapes/
├── README.md                            ❌
├── create-shapes.md [N]                 ❌ - UPCGExCreateShapesSettings
└── 📁 shape-types/ [S]                  ❌
    ├── README.md
    ├── circle.md [F]                    - UPCGExShapeCircleFactory
    ├── fiblat.md [F]                    - UPCGExShapeFiblatFactory
    ├── grid.md [F]                      - UPCGExShapeGridFactory
    └── polygon.md [F]                   - UPCGExShapePolygonFactory
```

**Shapes Total: 1 node, 4 shape factories**

---

## node-library/tensors/ (PCGExElementsTensors)

```
tensors/
├── README.md                            ❌
├── extrude-tensors.md [N]               ❌ - UPCGExExtrudeTensorsSettings
├── tensors-transform.md [N]             ❌ - UPCGExTensorsTransformSettings
│
└── 📁 tensor-types/ [S]                 ❌
    ├── README.md
    ├── constant.md [F]                  - UPCGExTensorConstantFactory
    ├── flow.md [F]                      - UPCGExTensorFlowFactory
    ├── inertia.md [F]                   - UPCGExTensorInertiaFactory
    ├── inertia-constant.md [F]          - UPCGExTensorInertiaConstantFactory
    ├── noise.md [F]                     - UPCGExTensorNoiseFactory
    ├── noise-bounded.md [F]             - UPCGExTensorNoiseBoundedFactory
    ├── null.md [F]                      - UPCGExTensorNullFactory
    ├── path-flow.md [F]                 - UPCGExTensorPathFlowFactory
    ├── path-pole.md [F]                 - UPCGExTensorPathPoleFactory
    ├── pole.md [F]                      - UPCGExTensorPoleFactory
    ├── spin.md [F]                      - UPCGExTensorSpinFactory
    ├── spline-flow.md [F]               - UPCGExTensorSplineFlowFactory
    ├── spline-pole.md [F]               - UPCGExTensorSplinePoleFactory
    └── surface.md [F]                   - UPCGExTensorSurfaceFactory
```

**Tensors Total: 2 nodes, 14 tensor factories**

---

## node-library/clipper2/ (PCGExElementsClipper2)

```
clipper2/
├── README.md                            ❌
├── boolean.md [N]                       ❌ - UPCGExClipper2BooleanSettings
├── offset.md [N]                        ❌ - UPCGExClipper2OffsetSettings
└── rect-clip.md [N]                     ❌ - UPCGExClipper2RectClipSettings
```

**Clipper2 Total: 3 nodes**

---

## node-library/probing/ (PCGExElementsProbing)

```
probing/
├── README.md                            ❌
├── connect-points.md [N]                ❌ - UPCGExConnectPointsSettings
│
└── 📁 probe-types/ [S]                  ❌
    ├── README.md
    ├── anisotropic.md [P]               - UPCGExProbeAnisotropicProviderSettings
    ├── global-anisotropic.md [P]        - UPCGExProbeGlobalAnisotropicProviderSettings
    ├── bitmasks.md [P]                  - UPCGExProbeBitmasksProviderSettings
    ├── chain.md [P]                     - UPCGExProbeChainProviderSettings
    ├── closest.md [P]                   - UPCGExProbeClosestProviderSettings
    ├── dbscan.md [P]                    - UPCGExProbeDBSCANProviderSettings
    ├── direction.md [P]                 - UPCGExProbeDirectionProviderSettings
    ├── gradient-flow.md [P]             - UPCGExProbeGradientFlowProviderSettings
    ├── hub-spoke.md [P]                 - UPCGExProbeHubSpokeProviderSettings
    ├── index.md [P]                     - UPCGExProbeIndexProviderSettings
    ├── knn.md [P]                       - UPCGExProbeKNNProviderSettings
    ├── level-set.md [P]                 - UPCGExProbeLevelSetProviderSettings
    ├── numeric-compare.md [P]           - UPCGExProbeNumericCompareProviderSettings
    ├── spanner.md [P]                   - UPCGExProbeSpannerProviderSettings
    └── theta.md [P]                     - UPCGExProbeThetaProviderSettings
```

**Probing Total: 1 node, 15 probe providers**

---

## node-library/flood-fill/ (PCGExElementsFloodFill)

```
flood-fill/
├── README.md                            ❌
├── cluster-diffusion.md [N]             ❌ - UPCGExClusterDiffusionSettings
│
└── 📁 fill-controls/ [S]                ❌
    ├── README.md
    ├── attribute-accumulation.md [P]    - UPCGExFillControlsAttributeAccumulationProviderSettings
    ├── attribute-threshold.md [P]       - UPCGExFillControlsAttributeThresholdProviderSettings
    ├── count.md [P]                     - UPCGExFillControlsCountProviderSettings
    ├── depth.md [P]                     - UPCGExFillControlsDepthProviderSettings
    ├── edge-filters.md [P]              - UPCGExFillControlsEdgeFiltersProviderSettings
    ├── heuristics-budget.md [P]         - UPCGExFillControlsHeuristicsBudgetProviderSettings
    ├── heuristics-scoring.md [P]        - UPCGExFillControlsHeuristicsScoringProviderSettings
    ├── heuristics-threshold.md [P]      - UPCGExFillControlsHeuristicsThresholdProviderSettings
    ├── keep-direction.md [P]            - UPCGExFillControlsKeepDirectionProviderSettings
    ├── length.md [P]                    - UPCGExFillControlsLengthProviderSettings
    ├── running-average.md [P]           - UPCGExFillControlsRunningAverageProviderSettings
    └── vtx-filters.md [P]               - UPCGExFillControlsVtxFiltersProviderSettings
```

**Flood Fill Total: 1 node, 12 fill control providers**

---

## node-library/pathfinding/ (PCGExElementsPathfinding + Navmesh)

```
pathfinding/
├── README.md                            ❌
├── pathfinding-edges.md [N]             ❌ - UPCGExPathfindingEdgesSettings
├── find-contours.md [N]                 ❌ - UPCGExFindContoursSettings
├── find-contours-bounded.md [N]         ❌ - UPCGExFindContoursBoundedSettings
├── find-all-cells.md [N]                ❌ - UPCGExFindAllCellsSettings
├── find-all-cells-bounded.md [N]        ❌ - UPCGExFindAllCellsBoundedSettings
├── find-cluster-hull.md [N]             ❌ - UPCGExFindClusterHullSettings
├── grow-paths.md [N]                    ❌ - UPCGExPathfindingGrowPathsSettings
├── plot-edges.md [N]                    ❌ - UPCGExPathfindingPlotEdgesSettings
├── navmesh.md [N]                       ❌ - UPCGExPathfindingNavmeshSettings
├── plot-navmesh.md [N]                  ❌ - UPCGExPathfindingPlotNavmeshSettings
│
├── 📁 searches/ [S]                     ❌
│   ├── README.md
│   └── (search algorithm factories)
│
└── 📁 heuristics/ [S]                   ❌
    ├── README.md
    └── tensor.md [P]                    - UPCGExHeuristicsTensorProviderSettings
```

**Pathfinding Total: 10 nodes, search/heuristic factories**

---

## node-library/valency/ (PCGExElementsValency)

```
valency/
├── README.md                            ❌
├── write-orbitals.md [N]                ❌ - UPCGExWriteValencyOrbitalsSettings
├── write-module-sockets.md [N]          ❌ - UPCGExWriteModuleSocketsSettings
├── staging.md [N]                       ❌ - UPCGExValencyStagingSettings
├── patterns.md [N]                      ❌ - UPCGExValencyPatternReplacementSettings
├── probe-valency.md [P]                 ❌ - UPCGExProbeValencyProviderSettings
│
└── 📁 solvers/ [S]                      ❌
    ├── README.md
    ├── entropy.md [F]                   - UPCGExValencyEntropySolver
    ├── priority.md [F]                  - UPCGExValencyPrioritySolver
    └── constraint.md [F]                - UPCGExValencyConstraintSolver
```

**Valency Total: 4 nodes, 1 provider, 3 solver factories**

---

## node-library/bridges/ (PCGExElementsBridges)

```
bridges/
├── README.md                            ❌
└── wait-for-pcg-data.md [N]             ❌ - UPCGExWaitForPCGDataSettings
```

**Bridges Total: 1 node**

---

## node-library/collections/ (PCGExCollections)

```
collections/
├── README.md                            ❌
├── asset-collection-to-set.md [N]       ❌ - UPCGExAssetCollectionToSetSettings
├── asset-staging.md [N]                 ❌ - UPCGExAssetStagingSettings
├── collection-to-module-infos.md [N]    ❌ - UPCGExCollectionToModuleInfosSettings
├── pcg-data-asset-loader.md [N]         ❌ - UPCGExPCGDataAssetLoaderSettings
├── path-spline-mesh.md [N]              ❌ - UPCGExPathSplineMeshSettings
├── socket-staging.md [N]                ❌ - UPCGExSocketStagingSettings
├── staged-type-filter.md [N]            ❌ - UPCGExStagedTypeFilterSettings
└── staging-load-properties.md [N]       ❌ - UPCGExStagingLoadPropertiesSettings
```

**Collections Total: 8 nodes**

---

## node-library/matching/ (PCGExMatching)

```
matching/
├── README.md                            ❌
└── 📁 match-types/ [S]                  ❌
    ├── README.md
    ├── attr-to-attr.md [F]              - UPCGExMatchAttrToAttrFactory
    ├── by-index.md [F]                  - UPCGExMatchByIndexFactory
    ├── copy-tags.md [F]                 - UPCGExMatchCopyTagsFactory
    ├── overlap.md [F]                   - UPCGExMatchOverlapFactory
    ├── random.md [F]                    - UPCGExMatchRandomFactory
    ├── shared-tag.md [F]                - UPCGExMatchSharedTagFactory
    └── tag-to-attr.md [F]               - UPCGExMatchTagToAttrFactory
```

**Matching Total: 7 match factories**

---

## node-library/foundations/ (PCGExFoundations)

### Utility Nodes
```
foundations/
├── README.md                            ❌
│
├── bitmask/                             ❌
│   ├── bitmask.md [N]                   - UPCGExBitmaskSettings
│   ├── bitmask-merge.md [N]             - UPCGExBitmaskMergeSettings
│   └── bitwise-operation.md [N]         - UPCGExBitwiseOperationSettings
│
├── constants/                           ❌
│   ├── constants.md [N]                 - UPCGExConstantsSettings
│   └── constant-enum.md [N]             - UPCGExConstantEnumSettings
│
├── control-flow/                        ❌
│   ├── branch-on-data-attribute.md [N]  - UPCGExBranchOnDataAttributeSettings
│   ├── recursion-tracker.md [N]         - UPCGExRecursionTrackerSettings
│   └── uber-branch.md [N]               - UPCGExUberBranchSettings
│
├── filtering/                           ❌
│   ├── cherry-pick-points.md [N]        - UPCGExCherryPickPointsSettings
│   ├── discard-by-point-count.md [N]    - UPCGExDiscardByPointCountSettings
│   ├── discard-same.md [N]              - UPCGExDiscardSameSettings
│   ├── spatial-triage.md [N]            - UPCGExSpatialTriageSettings
│   ├── uber-filter.md [N]               - UPCGExUberFilterSettings
│   └── uber-filter-collections.md [N]   - UPCGExUberFilterCollectionsSettings
│
├── debug/                               ❌
│   ├── debug.md [N]                     - UPCGExDebugSettings
│   └── draw-attributes.md [N]           - UPCGExDrawAttributesSettings
│
└── utilities/                           ❌
    ├── copy-to-points.md [N]            - UPCGExCopyToPointsSettings
    ├── destroy-actor.md [N]             - UPCGExDestroyActorSettings
    ├── get-guid.md [N]                  - UPCGExGetGUIDSettings
    ├── iterations.md [N]                - UPCGExIterationsSettings
    ├── merge-points.md [N]              - UPCGExMergePointsSettings
    ├── merge-points-by-tag.md [N]       - UPCGExMergePointsByTagSettings
    ├── transform-points.md [N]          - UPCGExTransformPointsSettings
    └── write-guid.md [N]                - UPCGExWriteGUIDSettings
```

**Foundations Total: ~25 nodes**

---

## Summary

| Category | Nodes | Shared Factories | Node-Specific (📁) | Status |
|----------|-------|------------------|-------------------|--------|
| paths | 26 | 2 (tangents, sub-point) | 2 (orient, smooth) | ⚠️ partial |
| clusters | ~40 | 2 (searches, edge-refine) | 2 (sample-neighbors, write-vtx-props) | ❌ |
| sampling | 13 | 1 (tex-params) | - | ❌ |
| spatial | 14 | - | - | ❌ |
| meta | 17 | - | - | ❌ |
| actions | 2 | - | 1 (action-providers) | ❌ |
| topology | 4 | - | - | ❌ |
| shapes | 1 | 1 (shape-types) | - | ❌ |
| tensors | 2 | 1 (tensor-types) | - | ❌ |
| clipper2 | 3 | - | - | ❌ |
| probing | 1 | 1 (probe-types) | - | ❌ |
| flood-fill | 1 | 1 (fill-controls) | - | ❌ |
| pathfinding | 10 | 2 (searches, heuristics) | - | ❌ |
| valency | 4 | 1 (solvers) | - | ❌ |
| bridges | 1 | - | - | ❌ |
| collections | 8 | - | - | ❌ |
| matching | - | 1 (match-types) | - | ❌ |
| foundations | ~25 | - | - | ❌ |
| **filters** | - | - | - | **⚠️ exists** |
| **pickers** | - | - | 4 providers | ❌ |
| **heuristics** | - | - | 9 providers | ❌ |
| **noise3d** | - | - | 16 providers | ❌ |
| **properties** | 1 | - | - | ❌ |

**GRAND TOTAL: ~171 nodes, ~13 shared factory folders, 5 node-specific factory folders, 7 data asset types, 33 provider subnodes (4 pickers + 9 heuristics + 16 noise3d + 4 tex-params)**

### Data Assets Summary
| Module | Asset Types |
|--------|-------------|
| PCGExCore | 1 (BitmaskCollection) |
| PCGExCollections | 4 (AssetCollection, MeshCollection, ActorCollection, PCGDataAssetCollection) |
| PCGExElementsValency | 3 (OrbitalSet, SocketRules, BondingRules) |

### Already Documented (needs verification)
- `filters/` - 42 filter providers documented (points: 27, collections: 5, clusters: 10)
- `paths/` - partial, many files exist but need source verification
