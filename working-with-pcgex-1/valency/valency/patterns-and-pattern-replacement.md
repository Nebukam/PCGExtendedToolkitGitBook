# Patterns & Pattern Replacement

Pattern matching is Valency's killer feature: detect specific module arrangements in solved clusters and apply transformations. Replace complex configurations with optimized assets, remove unwanted sections, or annotate for downstream processing.

### What Are Patterns?

A **pattern** is a specific topology of modules you want to detect. Think of it as a multi-node subgraph you've defined:

* **Pattern cages** define positions (nodes) in the pattern
* **Connections** between pattern cages define edges
* **Proxied cages** specify which modules can match each position
* **Pattern settings** control matching behavior and output strategy

**Example patterns**:

* T-junction: 3 pipes meeting (detect, replace with single high-detail connector)
* Dead end: 1 connection only (detect, mark for removal or cap placement)
* Room corner: 4 walls forming corner (detect, replace with specialized corner asset)
* Bridge support: Specific pillar + beam + beam configuration (detect, annotate for structural analysis)

### Pattern Cages

#### APCGExValencyCagePattern

Pattern cages are **topology-only** actors—they don't register assets for spawning. Instead, they:

* Define **positions** in pattern topology
* Specify which **modules** can match each position (via proxied cages)
* Connect to other pattern cages (define adjacency)
* Optionally connect to null cages (boundary/wildcard constraints)

**Key properties**:

* **ProxiedCages**: Array of regular cages—any module from these cages can match this position
* **bIsWildcard**: If true, matches ANY module (ignores ProxiedCages)
* **bIsActiveInPattern**: If true, matched nodes are consumed; if false, constraint-only
* **bIsPatternRoot**: Exactly one per pattern network—holds pattern settings

#### Creating Pattern Cages

1. **Place in level**: Content Browser → PCGEx → Valency → Cage Pattern
2. **Name descriptively**: `Pattern_TJunction_Center`, `Pattern_TJunction_Branch`
3. **Configure proxied cages**: Add references to regular cages whose modules can match
4. **Connect to other pattern cages**: Form the topology
5. **Designate root**: Set `bIsPatternRoot = true` on exactly one cage

\[\[SCREENSHOT: Pattern cage network forming T-junction pattern]]

#### Proxied Cages vs Wildcards

**Proxied cages** (specific matching):

* Pattern position matches modules from specified cages only
* Example: "Center" position proxies `Cage_Pipe_Cross` → only cross modules match

**Wildcard** (`bIsWildcard = true`):

* Pattern position matches ANY module
* Use for: Flexible patterns where one position can be anything

**Empty ProxiedCages** (no wildcard flag):

* Also matches ANY module (treated as wildcard)
* Prefer explicit `bIsWildcard` flag for clarity

#### Active vs Constraint-Only

**Active positions** (`bIsActiveInPattern = true`):

* Matched nodes are **consumed** by pattern
* Removed from output (if strategy is Remove)
* Collapsed into single node (if strategy is Collapse)
* Count toward pattern size

**Constraint-only positions** (`bIsActiveInPattern = false`):

* Must match for pattern to succeed, but not consumed
* Stay in output unchanged
* Don't count toward pattern size
* Use for: Context constraints (e.g., "T-junction, but only if fourth connection exists")

**Example**:

```
T-junction pattern:
  - Center (active): Gets collapsed
  - Branch 1 (active): Gets collapsed
  - Branch 2 (active): Gets collapsed
  - Optional neighbor (constraint-only): Must exist for match, but stays in output
```

#### Pattern Root

**Exactly one** pattern cage per connected network must have `bIsPatternRoot = true`.

The root cage:

* **Holds pattern settings** (weight, min/max matches, output strategy, etc.)
* Is **always entry index 0** in compiled pattern
* Serves as anchor for pattern matching

**Color coding** (in editor):

* **Green**: Pattern root
* **Blue**: Active pattern position
* **Yellow**: Wildcard
* **Gray**: Constraint-only

\[\[SCREENSHOT: Pattern cages with color coding showing root, active, and constraint positions]]

### Pattern Settings

Configured on the **root pattern cage** (`PatternSettings` property).

#### FPCGExValencyPatternSettings

**PatternName** (FName):

* Identifier for this pattern
* Written to `PatternName` attribute on matched points
* Used for filtering in Pattern Replacement node

**Weight** (float, default: 1.0):

* Relative weight when multiple patterns compete for same nodes
* Higher weight = higher priority
* Used with `OverlapResolution = WeightBased`

**MinMatches / MaxMatches** (int32):

* **MinMatches**: Minimum required occurrences (0 = no minimum)
* **MaxMatches**: Maximum allowed occurrences (-1 = unlimited)
* Pattern matching fails if constraints violated

**bExclusive** (bool):

* **True**: Pattern claims matched nodes exclusively (prevents other patterns from overlapping)
* **False**: Pattern is additive (other patterns can match same nodes)

**OutputStrategy** (EPCGExPatternOutputStrategy):

* **Remove**: Matched nodes removed from main output
* **Collapse**: N matched nodes merged into 1 replacement point
* **Swap**: Matched nodes' module indices changed to SwapTargetModuleIndex
* **Annotate**: Matched nodes tagged with pattern info only (stay in output)
* **Fork**: Matched nodes separated to parallel collection (similar to Remove)

**TransformMode** (EPCGExPatternTransformMode, Collapse only):

* **Centroid**: Replacement point at average position of all active nodes
* **PatternRoot**: Replacement point at root entry's position
* **FirstMatch**: Replacement point at first active entry's position

**ReplacementAsset** (TSoftObjectPtr, Collapse only):

* Asset to spawn at replacement point
* Currently stored but not yet used to swap module (see Known Issues)

**SwapToModuleName** (FName, Swap only):

* Target module name for Swap strategy
* Matched nodes' module indices changed to this module

\[\[SCREENSHOT: Pattern settings on root cage with annotations]]

### Pattern Compilation

During bonding rules build, the Builder:

#### 1. Detects Pattern Networks

* Finds all pattern cages
* Traverses connections to build networks
* Each network = one pattern (must have exactly one root)

#### 2. Compiles Topology

For each pattern network:

**Entry Resolution**:

* Root cage = entry 0
* Traverse network, assign entry index to each cage
* `EntryToNode[]` mapping created at match time

**Module Resolution**:

* For each proxied cage on pattern position
* Find all modules from that cage (asset + orbital mask + variant)
* Store module indices in pattern entry
* Empty array = wildcard

**Adjacency Computation**:

* For each connection between pattern cages
* Compute source orbital (direction from A to B)
* Compute target orbital (direction from B to A, reciprocal)
* Store as `FIntVector(TargetEntryIdx, SourceOrbital, TargetOrbital)`

**Constraint Masks**:

* Connections to null cages → boundary or wildcard masks
* Applied to pattern entries like regular modules

#### 3. Sorts Patterns

**ExclusivePatternIndices**:

* Patterns with `bExclusive = true`
* Processed first, claim nodes

**AdditivePatternIndices**:

* Patterns with `bExclusive = false`
* Processed after, can overlap claimed nodes

\[\[SCREENSHOT: Compiled pattern in bonding rules asset showing entries and adjacency]]

### Pattern Matching Algorithm

The **default matcher** implements **full subgraph isomorphism** via **DFS with backtracking**.

#### High-Level Flow

```
1. PROCESS EXCLUSIVE PATTERNS
   For each exclusive pattern:
     FindMatchesForPattern()
     Claim matched nodes

2. PROCESS ADDITIVE PATTERNS
   For each additive pattern:
     FindMatchesForPattern()
     (Does NOT claim nodes)

3. RESOLVE OVERLAPS
   Sort matches by OverlapResolution strategy:
     - WeightBased: Higher weight first
     - LargestFirst: More entries first
     - SmallestFirst: Fewer entries first
     - FirstDefined: Pattern definition order

4. CLAIM EXCLUSIVE MATCHES
   Add active nodes to ClaimedNodes set

5. VALIDATE MinMatches
   Check each pattern met MinMatches constraint
```

#### FindMatchesForPattern()

```
For each node in cluster:
  Skip if:
    - Node is claimed (exclusive patterns only)
    - Node module doesn't match root entry
    - Boundary constraint violated
    - Wildcard constraint violated

  If passes: TryMatchPatternFromNode()

  Stop if MaxMatches reached
```

#### TryMatchPatternFromNode() - DFS Core

```
Initialize EntryToNode[] = -1 (unassigned)
Set EntryToNode[0] = StartNode (root)

UsedNodes = {StartNode}

If MatchEntryRecursive(Pattern, 0, EntryToNode, UsedNodes):
  Match found! Create FPCGExValencyPatternMatch
```

#### MatchEntryRecursive() - Detailed

```cpp
bool MatchEntryRecursive(Pattern, EntryIndex, EntryToNode, UsedNodes)
{
    CurrentNode = EntryToNode[EntryIndex]

    For each Adjacency in Entry:
        TargetEntryIdx = Adjacency.X
        SourceOrbital = Adjacency.Y
        TargetOrbital = Adjacency.Z

        // Get neighbor at source orbital
        NeighborNode = OrbitalCache[CurrentNode * MaxOrbitals + SourceOrbital]
        if (NeighborNode == -1) return false  // No connection

        // Check if target entry already mapped
        if (EntryToNode[TargetEntryIdx] != -1):
            // Verify consistency
            if (EntryToNode[TargetEntryIdx] != NeighborNode) return false
            continue

        // Validate neighbor
        if (UsedNodes.Contains(NeighborNode)) return false  // Cycle

        NeighborModule = GetModule(NeighborNode)
        if (!TargetEntry.MatchesModule(NeighborModule)) return false

        // Check boundary/wildcard constraints on neighbor
        NeighborMask = GetOrbitalMask(NeighborNode)
        if ((NeighborMask & TargetEntry.BoundaryMask) != 0) return false
        if ((NeighborMask & TargetEntry.WildcardMask) != WildcardMask) return false

        // Verify BIDIRECTIONAL connection
        if (OrbitalCache[NeighborNode * MaxOrbitals + TargetOrbital] != CurrentNode)
            return false

        // Assign and recurse
        EntryToNode[TargetEntryIdx] = NeighborNode
        UsedNodes.Add(NeighborNode)

        if (!MatchEntryRecursive(Pattern, TargetEntryIdx, EntryToNode, UsedNodes)):
            // BACKTRACK
            EntryToNode[TargetEntryIdx] = -1
            UsedNodes.Remove(NeighborNode)
            return false

    return true  // All adjacencies satisfied
}
```

**Key aspects**:

* **DFS with backtracking**: Tries all possible assignments
* **Bidirectional verification**: Both directions of edges must match
* **Cycle prevention**: UsedNodes tracks visited nodes
* **Consistency check**: If target already mapped, verify it's the same node

\[\[SCREENSHOT: Pattern matching visualization showing DFS traversal]]

### Output Strategies

#### Remove

**Behavior**:

* Active nodes marked for removal
* Removed from main output
* Sent to "Matched" secondary output pin (if wired)

**Use cases**:

* Extract problematic configurations for separate handling
* Clean up unwanted patterns
* Separate geometry for different processing

**Example**: Detect all dead-end pipes, remove them, process as separate collection.

#### Collapse

**Behavior**:

* N active nodes merged into 1 replacement point
* Replacement point position determined by TransformMode:
  * **Centroid**: Average of all active nodes
  * **PatternRoot**: Root entry's position
  * **FirstMatch**: First active entry's position
* Replacement point inherits attributes from first active node
* Other active nodes removed

**Use cases**:

* Replace complex multi-module arrangements with single optimized asset
* Simplify geometry (e.g., 5 low-poly modules → 1 high-poly module)
* Reduce draw calls

**Example**: Detect T-junction (3 pipes), collapse to 1 point, spawn single detailed connector mesh.

**Replacement transform** computed and stored in match, applied during write phase.

\[\[SCREENSHOT: Collapse strategy showing before/after (multi-module → single point)]]

#### Swap

**Behavior**:

* Active nodes' module indices changed to `SwapToModuleName`
* Nodes stay in place, just re-tagged

**Use cases**:

* Switch to specialized variants (e.g., corner → reinforced corner)
* Material swaps based on pattern context
* Gameplay tagging (e.g., weak points, cover spots)

**Example**: Detect 4-way intersection, swap center module to "Intersection\_Reinforced".

#### Annotate

**Behavior**:

* Active nodes unchanged in output
* Pattern info written to attributes:
  * `PatternName` (FName)
  * `PatternMatchIndex` (Int32, which match this node belongs to)

**Use cases**:

* Tag for downstream Blueprint logic
* Mark for post-processing
* Feed into gameplay systems

**Example**: Detect choke points, annotate, use in AI navigation or lighting placement.

#### Fork

**Behavior**:

* Similar to Remove (active nodes separated)
* Intended for separate output collections
* **Currently**: Same as Remove (secondary output not yet wired, see Known Issues)

**Future use**: Multiple parallel output pins per pattern.

### Pattern Replacement Node

**PCG node**: Valency Pattern Replacement (`UPCGExValencyPatternReplacementSettings`)

#### Configuration

**Matcher** (UPCGExPatternMatcherFactory):

* Pluggable matcher operation
* Defaults to built-in subgraph matcher if null
* Custom matchers can override matching logic

**Overlap Resolution** (EPCGExPatternOverlapResolution):

* **WeightBased**: Higher pattern weight wins
* **LargestFirst**: Patterns with more entries win
* **SmallestFirst**: Patterns with fewer entries win
* **FirstDefined**: Pattern definition order in bonding rules

**Output Options**:

* `bOutputMatchedPoints`: Enable secondary output pin for matched points
* `PatternNameAttributeName`: Attribute name for pattern identifier (default: "PatternName")
* `PatternMatchIndexAttributeName`: Attribute name for match index (default: "PatternMatchIndex")

**Quiet Modes**:

* `bQuietNoPatterns`: Suppress warning if no patterns in bonding rules
* `bQuietNoMatcher`: Suppress warning if matcher is null

\[\[SCREENSHOT: Pattern Replacement node in PCG graph with settings]]

#### Node Flow

```
1. Validate inputs (cluster, bonding rules with patterns)
2. Build orbital cache (inherited from processor base)
3. Create matcher (from factory or default)
4. Initialize matcher with cluster data
5. Run matching (MatcherOperation->Match())
6. Annotate matched points (write attributes)
7. Apply transformations (Remove/Collapse/Swap)
8. Write outputs (modified points + matched points)
```

#### Module Data Flags

After pattern replacement, module data (packed int64) includes flags:

**EPCGExModuleDataFlags** (bits 32-47):

* **Annotated**: Node matched by a pattern
* **Consumed**: Node removed (Remove/Fork/Collapse)
* **Collapsed**: Node is result of collapse (the kept one)
* **Swapped**: Module index changed (Swap strategy)

These flags are queryable in downstream nodes or Blueprint logic.

### Authoring Workflow

#### Step-by-Step: T-Junction Pattern

**Goal**: Detect 3-pipe T-junctions, replace with single optimized connector.

1. **Create pattern cages**:
   * `Pattern_TJunction_Center` (root)
   * `Pattern_TJunction_BranchA`
   * `Pattern_TJunction_BranchB`
2. **Configure Center (root)**:
   * `bIsPatternRoot = true`
   * `ProxiedCages = [Cage_Pipe_Straight]`
   * `bIsActiveInPattern = true`
3. **Configure Branches**:
   * `ProxiedCages = [Cage_Pipe_Straight]`
   * `bIsActiveInPattern = true`
4. **Connect pattern cages**:
   * Center → BranchA (one orbital)
   * Center → BranchB (opposite orbital)
   * Third orbital on Center = disconnected (boundary condition)
5. **Set pattern settings (on Center)**:
   * `PatternName = "TJunction"`
   * `bExclusive = true`
   * `OutputStrategy = Collapse`
   * `TransformMode = PatternRoot`
   * `ReplacementAsset = Connector_TJunction_HighDetail`
6. **Build bonding rules**: Context Volume → Build Rules
7. **Use in PCG graph**:
   * Valency Staging → solve
   * Pattern Replacement → detect T-junctions, collapse to single points
   * Spawn → use ReplacementAsset at collapsed points

\[\[SCREENSHOT: Step-by-step pattern authoring with each stage shown]]

### Advanced Techniques

#### Null Cage Constraints in Patterns

Pattern cages can connect to null cages for boundary/wildcard constraints:

**Example**: "Corner, but only if two adjacent orbitals are boundaries"

* Pattern cage with 2 connected orbitals (to other pattern cages)
* Other orbitals connect to null cages (boundary mode)
* Match succeeds only if runtime topology has no neighbors at those orbitals

#### Nested Patterns

Patterns can **overlap** if non-exclusive:

* First exclusive patterns claim nodes
* Additive patterns annotate without claiming
* Use for: Multi-scale analysis (detect rooms, then detect furniture within rooms)

#### Pattern Chains

Match pattern A, transform, then match pattern B on result:

* Run Pattern Replacement twice
* First pass: Coarse detection
* Second pass: Fine-grained detection on transformed result

#### Weighted Pattern Selection

Multiple patterns compete for same nodes:

* Use `Weight` property to prioritize
* Higher weight = matched first (if OverlapResolution = WeightBased)

### Best Practices

#### Start Simple

Begin with 2-3 node patterns before attempting complex topologies. Prove matching works, then expand.

#### Name Pattern Positions

Use clear cage names: `Pattern_X_Center`, `Pattern_X_BranchA`, not `Pattern1`, `Pattern2`.

#### Test with Small Clusters

Don't test patterns on 1000-node cluster first. Use small test cases (10-20 nodes) to debug matching.

#### Visualize Matches

Use Annotate strategy first to see what's matched, then switch to Collapse/Swap/Remove once confident.

#### One Root Per Network

Exactly one root. Multiple roots = multiple patterns (disconnected networks).

#### Constraint-Only for Context

Use constraint-only positions for "must exist but don't consume" scenarios.

#### Exclusive for Transformations

If pattern changes topology (Remove/Collapse), use `bExclusive = true` to prevent overlaps.

### Common Issues

**"Pattern not matching expected nodes"**

* Check pattern cage connections (adjacency must be correct)
* Verify proxied cages produce expected modules
* Test with smaller cluster
* Enable debug logging: `PCGEx.Valency.Log.SetVerbosity PatternMatching Verbose`

**"Pattern matches too many nodes"**

* Set `MaxMatches` constraint
* Make pattern more specific (add constraint-only positions)
* Check proxied cages aren't too broad

**"No matches found"**

* Verify pattern exists in cluster (solve first, then replace)
* Check `MinMatches` isn't too high
* Increase angle threshold if direction matching is issue

**"Collapsed points in wrong location"**

* Check `TransformMode` setting (Centroid vs PatternRoot vs FirstMatch)
* Verify first active node is expected position

**"Swap not changing modules"**

* Verify `SwapToModuleName` matches existing module name
* Check bonding rules contains that module

**"Matched output pin empty"** (Known Issue)

* Currently stubbed—matched points not yet output to secondary pin
* Use Annotate strategy + filter by attribute as workaround

### Known Limitations (Jan 2026)

See architecture docs for full audit. Key items:

**Not Yet Implemented**:

* Matched points output pin (defined but not wired)
* Point filtering for Remove strategy (nodes marked but not actually removed)
* ReplacementAsset usage (stored but not applied)
* Pattern tags for filtering

**Workarounds**:

* Use Annotate + downstream filtering instead of Remove
* Manually swap modules in spawn logic instead of ReplacementAsset

***

**Next:** Null Cages & Constraints — Boundary, wildcard, and unconstrained connections
