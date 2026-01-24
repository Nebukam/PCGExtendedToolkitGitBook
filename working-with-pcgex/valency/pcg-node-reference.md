# PCG Node Reference

Complete reference for all Valency PCG nodes, their pins, parameters, and usage.

### Write Valency Orbitals

**Node**: `UPCGExWriteValencyOrbitalsSettings`

**Purpose**: Analyzes cluster topology, matches edge directions to orbitals, writes orbital masks and indices to point/edge attributes.

This is the **first Valency node** in your graph—it prepares data for the solver.

#### Input Pins

| Pin            | Type       | Required | Description                                              |
| -------------- | ---------- | -------- | -------------------------------------------------------- |
| Edges          | Edges      | Yes      | PCGEx edges (cluster topology)                           |
| Orbital Set(s) | Param Data | Yes      | Orbital set data asset(s) defining connection directions |

#### Output Pins

| Pin   | Type  | Description                                        |
| ----- | ----- | -------------------------------------------------- |
| Edges | Edges | Pass-through edges with orbital attributes written |

#### Parameters

**OrbitalSet / OrbitalSets**:

* **Single-layer**: `OrbitalSet` (TSoftObjectPtr to orbital set data asset)
* **Multi-layer**: `OrbitalSets` (array of orbital sets, one per layer)
* Defines direction-to-orbital matching

**Angle Threshold**:

* Override orbital set's threshold (optional)
* In degrees
* Leave default to use orbital set's value

**bTransformDirection**:

* Override orbital set's `bTransformDirection` flag (optional)
* If true, apply node transform to edge directions before matching

**Attribute Names** (output):

* `OrbitalMaskAttributeName`: Vertex attribute for orbital masks (default: "PCGEx/V/Mask/{LayerName}")
* `OrbitalIndicesAttributeName`: Edge attribute for packed orbital indices (default: "PCGEx/V/Orbital/{LayerName}")

#### What It Does

1. For each edge in cluster:
   * Compute direction from start to end node
   * Match direction to orbital (dot product vs orbital directions)
   * If match found (above threshold), store orbital index
   * Write packed indices to edge attribute (source orbital + target orbital)
2. For each node:
   * Accumulate orbital mask (which orbitals have connections)
   * Write int64 mask to vertex attribute
3. Output edges with attributes ready for solver.

#### Usage Notes

* **Always first Valency node** (before Staging or Pattern Replacement)
* Can be reused for multiple layers (run once per layer, or use multi-layer mode)
* Output edges are **same as input edges** (pass-through with added attributes)

\[\[SCREENSHOT: Write Valency Orbitals node in graph with pins]]

***

### Valency Staging

**Node**: `UPCGExValencyStagingSettings`

**Purpose**: Runs Wave Function Collapse solver to assign modules to cluster nodes. Writes module data, names, properties, and applies local transforms.

This is the **core solving node**.

#### Input Pins

| Pin   | Type   | Required | Description                                                         |
| ----- | ------ | -------- | ------------------------------------------------------------------- |
| Vtx   | Points | Yes      | Cluster vertices (nodes) to assign modules to                       |
| Edges | Edges  | Yes      | Cluster edges with orbital attributes (from Write Valency Orbitals) |

#### Output Pins

| Pin | Type   | Description                                     |
| --- | ------ | ----------------------------------------------- |
| Vtx | Points | Vertices with module assignments and properties |

#### Parameters

**Bonding Rules**:

* `BondingRules`: TSoftObjectPtr to compiled bonding rules data asset
* **Required**: Contains all module definitions, neighbor rules, etc.

**Solver**:

* `Solver`: UPCGExValencySolverOperation (defaults to Entropy Solver if null)
* Pluggable solver for custom solving logic

**Module Output**:

* `ModuleNameAttributeName`: Attribute name for module name (FName, default: "ModuleName")
* Module index attribute is always written (name based on orbital set)

**Local Transforms**:

* `bApplyLocalTransforms`: Enable local transform application
* If true, modules with local transform variants randomly select one and apply to point transform

**Property Output**:

* `PropertyOutput`: Embedded `FPCGExValencyPropertyOutputSettings`
* Configure which properties to write as attributes
* Auto-populate from bonding rules or manually add configs
* `bOutputModuleTags`: Enable module tags output
* `ModuleTagsAttributeName`: Attribute name for tags (default: "ModuleTags")

**Fixed Picks**:

* `bEnableFixedPicks`: Enable pre-assigned module selection
* `FixedPickAttributeName`: Attribute name containing module name (FName)
* `FixedPickSelectionMode`: WeightedRandom | FirstMatch | BestFit
* `FixedPickIncompatibleBehavior`: Skip | Force

**Debugging**:

* Various logging and quiet mode flags

#### What It Does

1. **Boot**:
   * Load bonding rules
   * Build orbital cache (node-orbital-neighbor lookup)
   * Initialize solver allocations
   * Create output buffers (module data, names, properties)
2. **Solve** (off-thread):
   * Initialize ValencyState per node
   * Apply fixed picks (if enabled)
   * Run solver (WFC collapse)
   * Resolve modules for all nodes
3. **Write** (processing thread):
   * Write module data (packed int64 with module index + flags)
   * Write module names
   * Write properties (if configured)
   * Apply local transforms (if enabled)
4. **Output**:
   * Points with all module data ready for spawning

#### Usage Notes

* **Requires** Write Valency Orbitals run first (edges must have orbital attributes)
* **Requires** valid bonding rules asset
* Run **once per cluster** (don't run twice on same cluster, results undefined)
* Output points can go to Pattern Replacement (optional) or directly to spawning

\[\[SCREENSHOT: Valency Staging node with all parameters expanded]]

***

### Valency Pattern Replacement

**Node**: `UPCGExValencyPatternReplacementSettings`

**Purpose**: Detects multi-module patterns in solved clusters and applies transformations (Remove, Collapse, Swap, Annotate, Fork).

**Optional node**—only use if you have patterns in your bonding rules.

#### Input Pins

| Pin   | Type   | Required | Description                                  |
| ----- | ------ | -------- | -------------------------------------------- |
| Vtx   | Points | Yes      | Cluster vertices (already solved by Staging) |
| Edges | Edges  | Yes      | Cluster edges with orbital attributes        |

#### Output Pins

| Pin     | Type   | Description                                                                         |
| ------- | ------ | ----------------------------------------------------------------------------------- |
| Vtx     | Points | Vertices after pattern transformations                                              |
| Matched | Points | Points matched by patterns (if `bOutputMatchedPoints = true`) (STUB: not yet wired) |

#### Parameters

**Matcher**:

* `Matcher`: UPCGExPatternMatcherFactory (defaults to subgraph matcher if null)
* Pluggable pattern matching logic

**Overlap Resolution**:

* `OverlapResolution`: EPCGExPatternOverlapResolution
  * **WeightBased**: Higher pattern weight wins
  * **LargestFirst**: More entries wins
  * **SmallestFirst**: Fewer entries wins
  * **FirstDefined**: Pattern definition order

**Output**:

* `bOutputMatchedPoints`: Enable secondary output pin for matched points
* `PatternNameAttributeName`: Attribute name for pattern identifier (FName, default: "PatternName")
* `PatternMatchIndexAttributeName`: Attribute name for match index (Int32, default: "PatternMatchIndex")

**Quiet Modes**:

* `bQuietNoPatterns`: Suppress warning if no patterns in bonding rules
* `bQuietNoMatcher`: Suppress warning if matcher is null

#### What It Does

1. **Initialize**:
   * Load bonding rules patterns
   * Build orbital cache (same as Staging)
   * Create matcher operation
2. **Match**:
   * Run pattern matching algorithm (DFS subgraph isomorphism by default)
   * Generate `FPCGExValencyPatternMatch` array
3. **Annotate**:
   * Write `PatternName` and `PatternMatchIndex` attributes to matched points
4. **Transform**:
   * **Remove**: Mark matched nodes for removal
   * **Collapse**: Merge N nodes into 1, compute replacement transform
   * **Swap**: Change module index to target module
   * **Annotate**: Already done, no further action
   * **Fork**: Same as Remove (intended for separate outputs)
5. **Write**:
   * Update module data flags (Annotated, Consumed, Collapsed, Swapped)
   * Apply collapse transforms
   * Update module indices for swapped nodes
6. **Output**:
   * Modified points with pattern transformations applied

#### Usage Notes

* **Requires** bonding rules with compiled patterns
* **Requires** points already solved (module data must exist)
* Run **after Staging**, before spawning
* Can run multiple times with different pattern filters (cascade transformations)

**Known limitations**:

* Matched output pin defined but not wired (points not actually output)
* Point filtering for Remove strategy stubbed (points marked but not removed)

Use Annotate strategy + downstream filtering as workaround for now.

\[\[SCREENSHOT: Pattern Replacement node in graph after Staging]]

***

### Node Workflow Summary

Typical Valency graph structure:

```
1. Generate/Load Cluster
   ↓
2. Write Valency Orbitals (prepare data)
   ↓
3. Valency Staging (solve)
   ↓
4. [Optional] Valency Pattern Replacement (transform)
   ↓
5. Your Spawning Logic (read module data, spawn assets)
```

#### Example Graph

```
[Get PCG Component] → [Find/Create Cluster]
                                ↓
                      [Write Valency Orbitals]
                                ↓
                        [Valency Staging]
                                ↓
                   [Valency Pattern Replacement] (optional)
                                ↓
                      [Spawn Meshes/Actors]
```

***

### Common Node Combinations

#### Basic Solving

```
Write Valency Orbitals → Valency Staging → Spawn
```

**Use for**: Straightforward module placement without patterns.

#### With Pattern Replacement

```
Write Valency Orbitals → Valency Staging → Pattern Replacement → Spawn
```

**Use for**: Detecting and transforming specific configurations after solving.

#### Multi-Layer

```
Write Valency Orbitals (Layer 0: Structural)
Write Valency Orbitals (Layer 1: Detail) → Valency Staging (references both layers) → Spawn
```

**Use for**: Independent connection systems solved together.

#### Fixed Picks + Solving

```
[Upstream: Add FixedModulePick attribute]
           ↓
Write Valency Orbitals → Valency Staging (bEnableFixedPicks=true) → Spawn
```

**Use for**: Pre-assigning specific modules while solving the rest.

#### Pattern Chains

```
Valency Staging → Pattern Replacement (Pass 1: Coarse) → Pattern Replacement (Pass 2: Fine) → Spawn
```

**Use for**: Multi-scale pattern detection and replacement.

***

### Parameter Quick Reference

#### Write Valency Orbitals

| Parameter           | Type           | Default      | Purpose                               |
| ------------------- | -------------- | ------------ | ------------------------------------- |
| OrbitalSet          | TSoftObjectPtr | None         | Single-layer orbital set              |
| OrbitalSets         | Array          | Empty        | Multi-layer orbital sets              |
| AngleThreshold      | Float          | -1 (use set) | Override direction matching threshold |
| bTransformDirection | Bool           | -1 (use set) | Override transform direction flag     |

#### Valency Staging

| Parameter              | Type           | Default        | Purpose                        |
| ---------------------- | -------------- | -------------- | ------------------------------ |
| BondingRules           | TSoftObjectPtr | None           | Compiled rules asset           |
| Solver                 | UObject        | Null (default) | Custom solver operation        |
| bApplyLocalTransforms  | Bool           | False          | Enable transform variants      |
| bEnableFixedPicks      | Bool           | False          | Enable pre-assigned modules    |
| PropertyOutput.Configs | Array          | Empty          | Property-to-attribute mappings |

#### Valency Pattern Replacement

| Parameter            | Type    | Default        | Purpose                             |
| -------------------- | ------- | -------------- | ----------------------------------- |
| Matcher              | UObject | Null (default) | Custom matcher operation            |
| OverlapResolution    | Enum    | WeightBased    | How to resolve competing patterns   |
| bOutputMatchedPoints | Bool    | True           | Enable Matched output pin (stubbed) |

***

### Debugging Nodes

#### Inspecting Orbital Attributes

After Write Valency Orbitals:

* Use PCG debugger to inspect points/edges
* Check attributes:
  * "PCGEx/V/Mask/{LayerName}" (vertex, int64): Orbital mask
  * "PCGEx/V/Orbital/{LayerName}" (edge, int64): Packed orbital indices

#### Inspecting Module Assignments

After Valency Staging:

* Check attributes:
  * "PCGEx/V/Module/{LayerName}" (vertex, int64): Packed module data
  * "ModuleName" (vertex, FName): Module name
  * Property attributes (if configured)

#### Inspecting Pattern Matches

After Pattern Replacement:

* Check attributes:
  * "PatternName" (vertex, FName): Matched pattern identifier
  * "PatternMatchIndex" (vertex, Int32): Which match this node belongs to
  * Module data flags (bits 32-47 in packed int64)

***

**Next:** Debugging & Visualization — Editor mode, visual indicators, and troubleshooting
