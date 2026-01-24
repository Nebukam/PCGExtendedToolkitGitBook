# The Solving Process

Valency uses a **Wave Function Collapse (WFC)** inspired solver to assign modules to cluster nodes. Understanding the solving process helps you design better constraints and debug issues.

### Wave Function Collapse Overview

WFC is a constraint propagation algorithm that:

1. Starts with all nodes having all possible modules (superposition)
2. **Collapses** nodes one at a time (selects specific module)
3. **Propagates** constraints to neighbors (removes incompatible modules from their possibilities)
4. Repeats until all nodes resolved or contradiction detected

**Valency's approach**: Entropy-based WFC with orbital constraint checking and optional fixed picks.

### The Solver Pipeline

```
┌─────────────────────────────────────────────────────────┐
│ BOOT PHASE (Game Thread)                                │
├─────────────────────────────────────────────────────────┤
│ • Load bonding rules                                    │
│ • Create orbital cache (node-orbital-neighbor lookup)   │
│ • Initialize solver allocations                         │
│ • Create output buffers (module data, properties, etc.) │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ SOLVE PHASE (Off-Thread)                                │
├─────────────────────────────────────────────────────────┤
│ • Initialize ValencyState[] (one per node)              │
│ • Apply fixed picks (optional)                          │
│ • While unresolved nodes exist:                         │
│   - Select node with lowest entropy                     │
│   - Filter compatible modules (fitness checks)          │
│   - Weighted random selection                           │
│   - Collapse node (assign module)                       │
│   - Propagate constraints                               │
│ • Mark unsolvable nodes if contradictions occur         │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│ WRITE PHASE (Processing Thread)                         │
├─────────────────────────────────────────────────────────┤
│ • Write module data (packed int64 with flags)           │
│ • Write module names                                    │
│ • Write properties (if enabled)                         │
│ • Apply local transforms (if enabled)                   │
└─────────────────────────────────────────────────────────┘
```

### Valency State

Each node has a **FValencyState** during solving:

```cpp
struct FValencyState
{
    int32 NodeIndex;        // Cluster node position
    int32 ResolvedModule;   // Output: Module index or SlotState constant
    // ...constraint tracking fields
}
```

**ResolvedModule values**:

* `>= 0`: Module index (solved)
* `-1`: UNSET (not yet solved)
* `-2`: NULL\_SLOT (boundary, no orbitals)
* `-3`: UNSOLVABLE (contradiction detected)

### Orbital Cache

**FOrbitalCache** provides O(1) lookups for neighbor relationships:

```cpp
// Flat array indexed by: [NodeIndex * MaxOrbitals + OrbitalIndex]
TArray<int32> FlatOrbitalToNeighbor;  // → neighbor NodeIndex or -1

// Also stores per-node orbital masks
TArray<int64> NodeOrbitalMasks;
```

**Built from**:

* Cluster edge topology (connections between nodes)
* Edge orbital attributes (written by Write Valency Orbitals node)

**Why fast**: Single array lookup, no hash maps, cache-friendly for tight loops.

\[\[SCREENSHOT: Orbital cache visualization showing node-orbital-neighbor mapping]]

### Module Fitness Checking

Before a module can be assigned to a node, it must pass **fitness checks**:

#### DoesModuleFitNode()

```cpp
bool DoesModuleFitNode(ModuleIndex, NodeIndex)
{
    NodeMask = OrbitalCache->GetOrbitalMask(NodeIndex)

    For each layer:
        ModuleMask = GetModuleOrbitalMask(ModuleIndex, LayerIndex)
        BoundaryMask = GetModuleBoundaryMask(ModuleIndex, LayerIndex)
        WildcardMask = GetModuleWildcardMask(ModuleIndex, LayerIndex)

        // Module's orbitals must be subset of node's connections
        if ((ModuleMask & NodeMask) != ModuleMask) return false

        // Boundary orbitals must NOT have connections
        if ((BoundaryMask & NodeMask) != 0) return false

        // Wildcard orbitals MUST have connections
        if ((WildcardMask & NodeMask) != WildcardMask) return false

    return true
}
```

**What this means**:

1. **Orbital subset check**: If module expects connections on orbitals 0, 1, 3, node must have edges on orbitals 0, 1, 3 (or more).
2. **Boundary constraint**: If module marks orbital 2 as boundary, node must NOT have edge on orbital 2.
3. **Wildcard constraint**: If module marks orbital 3 as wildcard, node MUST have edge on orbital 3.

#### Neighbor Compatibility

Even if a module fits a node, it must be **compatible with already-solved neighbors**:

```cpp
For each neighbor of node:
    If neighbor is resolved:
        NeighborModule = neighbor.ResolvedModule
        OrbitalFromNode = GetOrbitalToNeighbor(node, neighbor)
        OrbitalFromNeighbor = GetOrbitalToNode(neighbor, node)

        // Check if module's orbital neighbor list includes neighbor's module
        if (!ModuleHasNeighbor(Module, OrbitalFromNode, NeighborModule)):
            return false  // Incompatible
```

This ensures **reciprocal compatibility**: Not only must Module A fit Node X, but it must also be compatible with Module B already assigned to neighboring Node Y.

### Entropy Calculation

**Entropy** = measure of uncertainty (how many valid modules remain for a node).

The solver collapses **lowest entropy node first**:

* Node with 1 valid module → collapse immediately (forced)
* Node with 2 valid modules → high priority (prevents contradictions)
* Node with 50 valid modules → low priority (lots of choices)

**Algorithm**:

```
For each unresolved node:
    ValidModules = Filter(AllModules, DoesModuleFitNode + NeighborCompatibility)
    Entropy = ValidModules.Count

    If Entropy == 0:
        Mark node as UNSOLVABLE
        Continue

    If Entropy < LowestEntropy:
        LowestEntropy = Entropy
        NextNode = node
```

**Tie-breaking**: If multiple nodes have same entropy, pick randomly (or by node index, depending on solver).

\[\[SCREENSHOT: Entropy visualization showing color-coded nodes by valid module count]]

### Weighted Selection

Once a node is selected for collapse, choose module from valid candidates using **weighted random selection**:

```cpp
// Build weighted list
TArray<float> Weights;
TArray<int32> Candidates;

For each valid module:
    Weight = Module.Settings.Weight * CustomWeights(module)
    Weights.Add(Weight)
    Candidates.Add(ModuleIndex)

// Weighted random pick
SelectedIndex = WeightedRandom(Weights, Seed)
Module = Candidates[SelectedIndex]
```

**Weights come from**:

* **Module.Settings.Weight**: Configured on cage during authoring
* **Custom solver logic**: Priority solver uses attribute-based weights
* **Random seed**: Deterministic results for same seed

**Higher weight = higher selection probability**.

### Constraint Propagation

After collapsing a node, **update neighbors**:

```cpp
For each neighbor of collapsed node:
    If neighbor is unresolved:
        // Neighbor's valid modules might now be restricted
        // Next entropy calculation will reflect this
```

Valency uses **lazy propagation**—doesn't precompute, just filters during next node's fitness check. This is simpler than eager propagation and works well for moderate-sized clusters.

### Fixed Picks (Optional)

**Fixed picks** let you pre-assign specific modules to specific nodes, bypassing the solver:

#### Enabling Fixed Picks

On Valency Staging node:

* `bEnableFixedPicks = true`
* `FixedPickAttributeName`: Attribute name containing module name (FName)
* `FixedPickSelectionMode`: How to choose if multiple modules match name
* `FixedPickIncompatibleBehavior`: What to do if fixed pick doesn't fit

#### Selection Modes

**WeightedRandom**:

* If multiple modules have same name, pick weighted-randomly

**FirstMatch**:

* Pick first module with matching name (module index order)

**BestFit**:

* Pick module with best orbital match (most orbitals in common with node)

#### Incompatible Behavior

**Skip** (default):

* If fixed pick doesn't fit node (fails fitness check), let solver decide normally

**Force**:

* Assign fixed pick even if it fails orbital fitness check
* Ignores orbital compatibility
* Use with caution—can create contradictions

#### Workflow

1. In upstream PCG node, add attribute to points:
   * Attribute: "FixedModulePick" (FName)
   * Value: Module name (from cage's ModuleName property)
2. On Valency Staging:
   * `bEnableFixedPicks = true`
   * `FixedPickAttributeName = "FixedModulePick"`
3. Solver applies fixed picks **before** WFC collapse:
   * Nodes with attribute set → pre-resolved
   * Other nodes → solved normally

**Use cases**:

* Enforce start/end points (bridge entrance/exit)
* Manually place hero modules (centerpiece, keystone)
* Seed structures with fixed elements

\[\[SCREENSHOT: Fixed picks setup on Valency Staging node]]

### Unsolvable Nodes

If a node has **zero valid modules** (contradiction), it's marked **UNSOLVABLE**:

```
ResolvedModule = -3 (UNSOLVABLE)
```

**Common causes**:

1. **Over-constrained**: Too many boundary/wildcard requirements, no module satisfies all
2. **Neighbor contradiction**: Neighbors already solved, no module compatible with all
3. **Missing modules**: Bonding rules don't include module for this topology
4. **Layer mismatch**: Multi-layer system, no module satisfies ALL layers

**What happens**:

* Node left unsolvable (not assigned module)
* Solver continues with remaining nodes
* Logs warning (if verbosity enabled)

**Output**:

* Module data attribute = -3
* Downstream spawning skips these nodes
* Or handle explicitly (spawn error marker, log, etc.)

#### Debugging Unsolvable Nodes

**Enable verbose logging**:

```
PCGEx.Valency.Log.SetVerbosity Solver Verbose
```

**Check logs**:

* "Node X: No valid modules"
* Lists node's orbital mask, neighbor modules
* Helps identify which constraint failed

**Inspect visually**:

* Use PCG debugger to inspect node transforms
* Check orbital attributes on edges
* Verify bonding rules include expected modules

**Common fixes**:

* Add more module variants (cover missing topologies)
* Relax constraints (fewer boundary/wildcard requirements)
* Check for authoring errors (disconnected cages, wrong orbital set)

\[\[SCREENSHOT: Unsolvable node in PCG debugger with logs showing constraints]]

### Solver Variants

Valency supports **pluggable solvers**. The default is **Entropy Solver**, but you can create custom solvers.

#### UPCGExValencyEntropySolver (Default)

Standard WFC with entropy-based node selection:

* Collapse lowest-entropy node first
* Weighted random module selection
* Lazy constraint propagation

#### Custom Solvers

Derive from `UPCGExValencySolverOperation`:

```cpp
class FMyCustomSolver : public FPCGExValencySolverOperation
{
    virtual void Solve(TArray<FValencyState>& States, FPCGExValencySolverAllocations* Allocations) override
    {
        // Custom solving logic
        // Iterate States, set ResolvedModule for each
    }
}
```

**Extensibility points**:

* Node selection order (e.g., priority-based, spatial, custom heuristic)
* Module weighting (attribute-based, distance-based, etc.)
* Constraint handling (eager vs lazy propagation)
* Backtracking (try multiple solutions, pick best)

### Performance Considerations

#### Cluster Size

**Small clusters** (< 100 nodes):

* Solver extremely fast (< 1ms)
* Constraint propagation negligible

**Medium clusters** (100-1000 nodes):

* Solve time \~1-10ms
* Bottleneck: Fitness checks (bitmask comparisons)

**Large clusters** (1000+ nodes):

* Solve time \~10-100ms
* Consider spatial partitioning (solve sub-clusters separately)

#### Module Count

**Few modules** (< 10):

* Fast fitness checks (iterate small set)

**Many modules** (50+):

* Fitness checks slower (iterate large set each node)
* Consider grouping modules by topology (prefilter by orbital mask)

#### Multi-Layer

Each additional layer **multiplies fitness check cost**:

* 1 layer: Fast
* 2 layers: \~2x slower
* 3+ layers: Consider if all are necessary

**Optimization**: Only use multiple layers if genuinely needed (different connection topologies).

### Thread Safety

**Critical**: Solving runs **off game thread**. The solver must:

* **Never create UObjects** (allocate during Boot phase)
* **Never call LoadSynchronous** (use `PCGExHelpers::LoadBlocking_AnyThread()`)
* **Only modify ValencyState array** (no engine API calls)

All module data, orbital cache, neighbor lookups are **read-only** during solving—safe for off-thread access.

### Determinism & Seeding

Valency solving is **deterministic** given same:

* Cluster topology
* Bonding rules
* Seed value

**Seed sources**:

* PCG component seed (inherited)
* Node-specific settings overrides
* Point attribute (if reading seed per-point)

Same seed → same solve result (useful for reproducible generation).

Different seed → different module distribution (same constraints satisfied, different random choices).

### Best Practices

#### Design for Solvability

**Ensure every topology has valid module**:

* If cluster can have 3-connection nodes, bonding rules must include modules with 3 connections
* Missing topology = unsolvable nodes

**Avoid over-constraining**:

* Too many boundary/wildcard requirements = fewer valid modules = higher chance of contradiction

#### Test with Small Clusters

Before running on 5000-node cluster:

* Test on 10-node cluster
* Verify all nodes solve
* Check entropy distribution (nodes with entropy 1 = forced, good!)

#### Use Fixed Picks Sparingly

Fixed picks bypass solver intelligence:

* Great for hero elements
* Bad if overused (reduces emergent variety)

#### Monitor Unsolvable Rate

If > 5% of nodes unsolvable:

* Authoring issue (missing modules, over-constrained)
* Not solver issue (solver is correct, constraints impossible)

#### Enable Logging During Development

```
PCGEx.Valency.Log.SetVerbosity Solver Info
```

See solve progress, unsolvable warnings, performance metrics.

#### Disable Logging for Production

Verbose logging has overhead—disable for shipped builds.

### Common Issues

**"All nodes unsolvable"**

* Bonding rules empty (no modules)
* Wrong bonding rules asset referenced
* Orbital set mismatch (cluster uses different orbital set than bonding rules)
* Rebuild bonding rules

**"Some nodes unsolvable randomly"**

* Under-constrained authoring (missing module variants for some topologies)
* Add more module variants to cover all connection patterns

**"Fixed picks not working"**

* Check `bEnableFixedPicks = true`
* Verify attribute name matches (case-sensitive)
* Check attribute type is FName
* Module name must match exactly (from cage's ModuleName property)

**"Same seed, different results"** (non-deterministic)

* Bug! Report this—solver should be deterministic
* Check for uninitialized variables, system time usage, etc.

**"Solving very slow"**

* Large cluster + many modules + multi-layer = expected
* Profile: Is it solver or other parts of pipeline?
* Consider spatial partitioning or simpler topology

**"Neighbor compatibility failing"**

* Cages connected in editor but bonding rules missing neighbor relationships
* Check builder logs (neighbor relationships built?)
* Verify cages' orbital connections actually exist (enabled orbitals)

***

**Next:** PCG Node Reference — Complete reference for all Valency PCG nodes
