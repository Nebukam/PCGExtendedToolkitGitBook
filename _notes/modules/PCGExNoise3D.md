# PCGExNoise3D Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**16 Noise Providers**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExNoise3DPerlinProviderSettings` | "Noise : Perlin" | Classic Perlin gradient noise |
| `UPCGExNoise3DSimplexProviderSettings` | "Noise : Simplex" | Efficient gradient noise |
| `UPCGExNoise3DOpenSimplex2ProviderSettings` | "Noise : OpenSimplex2" | Patent-free, high quality |
| `UPCGExNoise3DValueProviderSettings` | "Noise : Value" | Fast interpolated random |
| `UPCGExNoise3DFBMProviderSettings` | "Noise : FBM" | Fractal Brownian Motion |
| `UPCGExNoise3DWhiteProviderSettings` | "Noise : White" | Pure random |
| `UPCGExNoise3DVoronoiProviderSettings` | "Noise : Voronoi" | Cell patterns |
| `UPCGExNoise3DWorleyProviderSettings` | "Noise : Worley" | Cellular noise |
| `UPCGExNoise3DCurlProviderSettings` | "Noise : Curl" | Divergence-free for fluids |
| `UPCGExNoise3DFlowProviderSettings` | "Noise : Flow" | Time-coherent animated |
| `UPCGExNoise3DTilingProviderSettings` | "Noise : Tiling" | Seamlessly tileable |
| `UPCGExNoise3DCausticProviderSettings` | "Noise : Caustic" | Water light patterns |
| `UPCGExNoise3DMarbleProviderSettings` | "Noise : Marble" | Veined patterns |
| `UPCGExNoise3DSwissProviderSettings` | "Noise : Swiss (Erosion)" | Terrain erosion |
| `UPCGExNoise3DGaborProviderSettings` | "Noise : Gabor" | Directional/anisotropic |
| `UPCGExNoise3DSpotsProviderSettings` | "Noise : Spots" | Circular spot patterns |

### Noise Categories

#### Gradient Noises (Smooth, Continuous)
- **Perlin** - Classic implementation
- **Simplex** - More efficient than Perlin
- **OpenSimplex2** - Patent-free alternative

#### Value Noise (Fast, Blocky)
- **Value** - Interpolated random values
- **White** - Pure random, no spatial correlation

#### Cellular/Worley Noises (Cell-Based)
- **Voronoi** - Distance-based cells (CellValue/Distance/EdgeDistance/Crackle)
- **Worley** - Cellular (F1/F2/F2-F1/F1+F2/F1*F2/CellValue)
- **Spots** - Shaped patterns (Circle/SoftCircle/Square/Diamond/Star)

#### Fractional/Composite
- **FBM** - 5 variants: Standard, Ridged, Billow, Hybrid, Warped
- **Swiss** - Derivative-based erosion
- **Tiling** - Seamlessly tileable with period controls

#### Specialized/Stylized
- **Curl** - Divergence-free vector field
- **Flow** - Time-coherent animated
- **Caustic** - Water light patterns
- **Marble** - Sine-based veins (X/Y/Z/Radial)
- **Gabor** - Anisotropic/directional

### Factories/Providers

One factory per noise type, all inherit from `UPCGExNoise3DFactoryData`.

### Noise Generator (Multi-Noise Combiner)

| Class | Purpose |
|-------|---------|
| `FNoiseGenerator` | Combines multiple noise operations with weighted blending |

**Features**:
- Per-operation weight factors
- Per-operation blend modes
- Parallel batch generation
- In-place modes (Composite/BlendResult/Additive/Multiplicative)

### Shared Structs/Details

#### Base Configuration
| Property | Type | Purpose |
|----------|------|---------|
| WeightFactor | double | Relative importance |
| BlendMode | EPCGExNoiseBlendMode | 10 blend modes |
| bInvert | bool | Flip final score |
| RemapCurve | FRuntimeFloatCurve | Non-linear remapping |
| Seed | int32 | Randomization seed |
| Transform | FTransform | Position transformation |
| Frequency | double | Noise scale |
| Contrast | double | Output contrast |

#### Type-Specific Configs
Each noise type has unique parameters (Octaves, Lacunarity, Persistence, etc.)

### Enumerations

| Enum | Values |
|------|--------|
| `EPCGExNoiseBlendMode` | Blend, Add, Multiply, Min, Max, Subtract, Screen, Overlay, SoftLight, First |
| `EPCGExNoiseInPlaceMode` | Composite, BlendResult, Additive, Multiplicative |
| `EPCGExContrastCurve` | Power, SCurve, Gain |
| `EPCGExVoronoiOutput` | CellValue, Distance, EdgeDistance, Crackle |
| `EPCGExWorleyDistanceFunc` | Euclidean, EuclideanSq, Manhattan, Chebyshev |
| `EPCGExWorleyReturnType` | F1, F2, F2-F1, F1+F2, F1*F2, CellValue |
| `EPCGExFBMVariant` | Standard, Ridged, Billow, Hybrid, Warped |
| `EPCGExMarbleDirection` | X, Y, Z, Radial |
| `EPCGExSpotsShape` | Circle, SoftCircle, Square, Diamond, Star |

### Output Types

| Fields | Type |
|--------|------|
| 1 | Double (scalar) |
| 2 | Vector2D |
| 3 | Vector |
| 4 | Vector4 |

---

## Node Classification

### Standalone Nodes
- noise-perlin.md [N]
- noise-simplex.md [N]
- noise-opensimplex2.md [N]
- noise-value.md [N]
- noise-fbm.md [N]
- noise-white.md [N]
- noise-voronoi.md [N]
- noise-worley.md [N]
- noise-curl.md [N]
- noise-flow.md [N]
- noise-tiling.md [N]
- noise-caustic.md [N]
- noise-marble.md [N]
- noise-swiss.md [N]
- noise-gabor.md [N]
- noise-spots.md [N]

### Nodes with Shared Factories
- (none - each noise is self-contained)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### noise-types/ [S]
- Used by: Nodes accepting noise inputs
- Operations: 16 noise types listed above

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, factory patterns

### Provides To
- PCGExElementsTensors: Noise-driven tensor fields
- Any node needing procedural noise

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Frequency and other parameters can be constant
- Blending: 10 blend modes for combining noises

### Tricky Areas
- **FBM variants**: 5 distinct fractal modes
- **Voronoi/Worley**: Multiple output modes
- **Curl noise**: Divergence-free for realistic fluid motion
- **Tiling**: Period controls for seamless repetition

### Mathematical Foundations (PCGExNoise3DMath.h)
- Permutation tables
- Gradient vectors
- Hashing functions
- Distance metrics
- Interpolation (Hermite5)

### Key Design Features
- Unified factory pattern
- Flexible configuration with remapping curves
- Multiple output formats (scalar to 4D)
- Parallel batch processing
- Thread-safe design

---

## Header File Structure

**Total Public Headers**: 22 files

| Directory | Content |
|-----------|---------|
| Core/ | Common types, factory provider, operation base |
| Helpers/ | Math utilities, noise generator |
| Noises/ | 16 noise implementations |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 16 |
| Providers [P] | 16 |
| Factories [F] | 16 |
| Shared Folders [S] | 1 (noise-types) |
| Data Assets [A] | 0 |
| Public Headers | 22 |
