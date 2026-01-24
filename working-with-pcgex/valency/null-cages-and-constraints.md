# Null Cages & Constraints

Null cages are powerful constraint tools that explicitly define boundary conditions, required connections, or spatial placeholders without spawning assets.

### What Are Null Cages?

**APCGExValencyCageNull** is a specialized cage that:

* **Doesn't register assets** (nothing spawns)
* **Defines constraints** on connected orbitals
* **Has three modes**: Boundary, Wildcard, Any
* **Can participate in patterns** (optional)

Think of null cages as "constraint markers" in your authoring space.

### The Three Modes

#### Boundary Mode

**Constraint**: Connected orbital MUST have NO neighbor at runtime.

**Orbital mask effect**:

* Sets bit in `BoundaryOrbitalMask`
* Does NOT set bit in `OrbitalMask`

**Solver fitness check**:

```cpp
if ((NodeMask & ModuleBoundaryMask) != 0) reject()
// If node has connection where module expects boundary → reject
```

**Use cases**:

* **Edges**: Walls that cap rooms, pipe ends
* **Surface modules**: Tiles with one side facing air
* **Terminators**: Explicitly mark where chains end

**Visual**: Red sphere (configurable)

\[\[SCREENSHOT: Boundary null cage connected to wall cage, showing red visualization]]

#### Wildcard Mode

**Constraint**: Connected orbital MUST have ANY neighbor at runtime.

**Orbital mask effect**:

* Sets bit in `WildcardOrbitalMask`
* ALSO sets bit in `OrbitalMask` (wildcards are "in" the mask)

**Solver fitness check**:

```cpp
if ((NodeMask & ModuleWildcardMask) != ModuleWildcardMask) reject()
// If node lacks connection where module expects wildcard → reject
```

**Use cases**:

* **Interior pieces**: Modules that only work surrounded by neighbors
* **Hubs**: Central connectors that need full connectivity
* **Force connectivity**: Ensure module always has specific connections

**Visual**: Magenta sphere (configurable)

\[\[SCREENSHOT: Wildcard null cage connected to hub cage, showing magenta visualization]]

#### Any Mode

**Constraint**: Connected orbital has NO runtime constraint (spatial placeholder only).

**Orbital mask effect**:

* Does NOT set `BoundaryOrbitalMask` bit
* Does NOT set `WildcardOrbitalMask` bit
* Does NOT set `OrbitalMask` bit

**Solver fitness check**: No constraint applied for this orbital.

**Use cases**:

* **Spatial placeholders**: Mark position without constraining topology
* **Optional connections**: Module works with or without neighbor
* **Layout guides**: Visual aids during authoring (ignored at solve time)

**Visual**: Cyan sphere (configurable)

\[\[SCREENSHOT: Any mode null cage as spatial placeholder]]

### Mode Comparison Table

| Mode     | BoundaryMask | WildcardMask | OrbitalMask | Runtime Requirement    |
| -------- | ------------ | ------------ | ----------- | ---------------------- |
| Boundary | ✓            | ✗            | ✗           | MUST have NO neighbor  |
| Wildcard | ✗            | ✓            | ✓           | MUST have ANY neighbor |
| Any      | ✗            | ✗            | ✗           | No constraint          |

### Creating Null Cages

1. **Place in level**: Content Browser → PCGEx → Valency → Cage Null
2. **Name descriptively**: `Null_Boundary_Edge`, `Null_Wildcard_Center`
3. **Set mode**: `PlaceholderMode` property (Boundary/Wildcard/Any)
4. **Connect to cages**: Drag connections from regular/pattern cages to null cage

Null cages have orbitals (like all cages), but **you typically connect TO them**, not FROM them.

\[\[SCREENSHOT: Null cage placement and mode selection]]

### Participation in Patterns

Null cages can **participate in pattern networks** via `bParticipateInPatterns` flag.

#### Auto-Participation

By default, null cages **automatically detect** when they're near pattern cages:

* Editor scans for nearby pattern cages during connection refresh
* If found, enables `bParticipateInPatterns` automatically
* Allows null cage to connect to pattern cages

#### Manual Participation

You can **force participation** by setting `bParticipateInPatterns = true`:

* Null cage becomes eligible for pattern connections
* Useful for explicit control over pattern topology

**Use case**: Pattern with boundary constraints—pattern cages connect to null cages (boundary mode), ensuring pattern only matches at edges.

\[\[SCREENSHOT: Null cage participating in pattern network]]

### Missing Connection Behavior (Regular Cages)

Regular cages have `MissingConnectionBehavior` property for **orbitals without explicit connections**.

#### EPCGExMissingConnectionBehavior

Same three modes as null cages, but applied **per-cage default**:

**Unconstrained** (default):

* Orbitals without connections = no constraint
* Node can have neighbor or not, solver doesn't care

**Boundary**:

* Orbitals without connections = treat as boundary
* Node MUST have NO neighbor at those orbitals

**Wildcard**:

* Orbitals without connections = treat as wildcard
* Node MUST have ANY neighbor at those orbitals

#### When Applied

During compilation, for each orbital on cage:

```
If orbital has NO connection (manual or auto):
  Apply MissingConnectionBehavior:
    - Unconstrained: Do nothing
    - Boundary: Set BoundaryOrbitalMask bit
    - Wildcard: Set WildcardOrbitalMask bit
```

**Use cases**:

**Boundary default**:

* Wall cage with 2 connections (sides), missing connections (top/bottom) = boundary
* Result: Wall only fits on edges (top/bottom must be unconnected)

**Wildcard default**:

* Hub cage with all orbitals expected to connect
* Any missing connections still require neighbors
* Ensures hub is fully connected

**Unconstrained default** (common):

* Flexible modules that work in various contexts
* Most cages use this

\[\[SCREENSHOT: Missing connection behavior dropdown on regular cage]]

### Authoring Workflow: Boundary Edges

**Goal**: Wall modules that cap rooms (no neighbor on one side).

#### Option 1: Null Cage (Explicit)

1. Create wall cage with 4 orbitals (N/E/S/W)
2. Create null cage (Boundary mode)
3. Connect wall's North orbital to null cage
4. Result: Wall module requires NO connection on North (boundary)

#### Option 2: Missing Connection Behavior (Implicit)

1. Create wall cage with 4 orbitals
2. Connect East, South, West orbitals to neighbors
3. Leave North orbital disconnected
4. Set cage's `MissingConnectionBehavior = Boundary`
5. Result: Same as Option 1 (North = boundary)

**Choose Option 1 if**: You want explicit visual marker (null cage visible in editor).

**Choose Option 2 if**: You want cleaner scene (less clutter).

\[\[SCREENSHOT: Side-by-side comparison of explicit null cage vs missing connection behavior]]

### Authoring Workflow: Interior Pieces

**Goal**: Floor tile that only spawns when fully surrounded.

1. Create floor tile cage with 4 orbitals (N/E/S/W)
2. **Option A**: Connect all 4 orbitals to null cages (Wildcard mode)
3. **Option B**: Leave all 4 disconnected, set `MissingConnectionBehavior = Wildcard`
4. Result: Tile only fits nodes with all 4 connections present

This prevents edge artifacts—tile won't spawn on room boundaries.

### Constraint Checking (Technical)

During solving, the `DoesModuleFitNode()` function checks constraints:

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

**Invariants** (always true in compiled data):

```
Boundary & Wildcard == 0        (mutually exclusive)
Wildcard ⊆ OrbitalMask          (wildcards are IN OrbitalMask)
Boundary ∩ OrbitalMask == ∅     (boundaries NOT in OrbitalMask)
```

These invariants are enforced during compilation.

### Mask Visualization (Debugging)

Orbital masks are stored as 64-bit integers. To inspect:

**In Bonding Rules asset**:

* View `ModuleOrbitalMasks`, `ModuleBoundaryMasks`, `ModuleWildcardMasks`
* Displayed as hex (e.g., `0x000000000000000F`) or binary

**Example (4-orbital system)**:

```
OrbitalMask:    0b00001011 (orbitals 0, 1, 3 connected)
BoundaryMask:   0b00000100 (orbital 2 is boundary)
WildcardMask:   0b00000000 (no wildcards)

Interpretation:
- Orbital 0: Connected
- Orbital 1: Connected
- Orbital 2: Boundary (MUST have NO neighbor)
- Orbital 3: Connected
```

**Enable mask logging**:

```
PCGEx.Valency.Log.SetVerbosity Compilation Verbose
```

\[\[SCREENSHOT: Compiled bonding rules showing orbital masks in hex/binary]]

### Best Practices

#### Explicit vs Implicit Constraints

**Explicit (null cages)**:

* Pros: Visual, clear intent, reusable across cages
* Cons: Scene clutter, more actors to manage

**Implicit (missing connection behavior)**:

* Pros: Cleaner scene, less clutter
* Cons: Less discoverable, requires reading properties

**Recommendation**: Use null cages for **shared constraints** (e.g., one "Boundary" null cage connected to many wall cages). Use missing connection behavior for **cage-specific** constraints.

#### Name Null Cages Clearly

Include mode in name:

* `Null_Boundary_RoomEdge`
* `Null_Wildcard_HubCenter`
* `Null_Any_Placeholder`

#### Test Constraints Early

Create simple test cluster:

* One node with all connections (should match wildcard module)
* One node with no connections (should match boundary module)
* Verify expected modules selected

#### Wildcard for Hubs, Boundary for Caps

**Wildcard**: Central, interior, fully-connected modules **Boundary**: Edges, terminators, caps

#### Any Mode for Iteration

During authoring, use Any mode null cages as **layout guides**:

* Position cages spatially
* Don't affect solving (no constraints)
* Remove or change mode when finalizing

#### Consistent Behavior Across Similar Cages

If multiple wall cages, use same `MissingConnectionBehavior` on all:

* Easier to reason about
* Predictable results

### Common Issues

**"Module not fitting despite visual match"**

* Check boundary constraints: Node might have connection where module expects boundary
* Check wildcard constraints: Node might lack connection where module expects wildcard
* Enable verbose logging to see mask comparisons

**"Null cage not working"**

* Verify connection direction (should connect TO null cage, not FROM it)
* Check mode is correct (Boundary vs Wildcard vs Any)
* Rebuild bonding rules (null cage constraints applied at compile time)

**"Missing connection behavior not applying"**

* Ensure orbital truly has NO connections (neither manual nor auto)
* Auto connections might be silently present—check in editor mode visualization
* Rebuild to apply changes

**"Wildcard module spawning at edges"**

* Wildcard requires ALL wildcard orbitals connected
* If even one wildcard orbital lacks neighbor, module rejected
* Review wildcard mask vs node mask

**"Boundary module spawning in interior"**

* Boundary requires ALL boundary orbitals have NO neighbor
* If even one boundary orbital has neighbor, module rejected
* Review boundary mask vs node mask

**"Pattern not matching with null cage constraints"**

* Null cage must participate in patterns (`bParticipateInPatterns = true`)
* Pattern cage orbital must be enabled
* Check pattern compilation includes null cage in adjacency

***

**Next:** Properties & Tags — Attaching data to modules and outputting to attributes
