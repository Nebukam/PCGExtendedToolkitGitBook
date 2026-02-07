# Debugging & Visualization

Valency provides rich editor visualization and debugging tools to help you understand your authoring, catch errors, and optimize performance.

### Valency Editor Mode

The **Valency Editor Mode** is your primary visualization tool. Activate it via the **toolbar button** (modes panel).

#### When Active

* **Cage orbitals** displayed as spheres + directional arrows
* **Connection lines** drawn between connected cages
* **Labels** show cage names and orbital names (configurable)
* **Ghost meshes** preview inherited assets from palettes/mirror sources
* **Orbital interaction** enabled (click-drag to create manual connections)
* **Auto-connection detection** triggers on cage movement
* **Reference tracking** propagates changes through dependency graph

#### Entering/Exiting Mode

**Enter**: Click Valency mode button in toolbar, or use shortcut (configurable).

**Exit**: Click button again, or switch to another mode.

**Note**: Auto-rebuild only works when mode is active (if enabled on Context Volume).

\[\[SCREENSHOT: Editor mode toolbar button and active visualization]]

### Visual Elements

#### Orbital Spheres & Arrows

Each orbital on a cage is visualized as:

**Sphere**:

* Located at cage position (all orbitals overlap at center)
* **Clickable** for manual connections
* Color indicates cage type (regular, pattern, null)

**Arrow**:

* **Thick directional arrow** indicating orbital direction
* Points from cage center outward
* Length and thickness configurable
* Color indicates connection state

**Arrow colors** (configurable in settings):

* **Bidirectional**: Both cages connect to each other on reciprocal orbitals
* **Unilateral**: Only one cage connects to other (one-way)
* **Boundary**: Connection to null cage (boundary mode)
* **Wildcard**: Connection to null cage (wildcard mode)
* **Any**: Connection to null cage (any mode)
* **No connection**: Dashed (orbital has no connection)

\[\[SCREENSHOT: Orbital visualization showing spheres and colored arrows]]

#### Connection Lines

**Between cages**, lines indicate connections:

**Solid thick arrow**:

* Manual connection (persistent)
* Color based on connection type (bidirectional, unilateral, boundary, wildcard, any)

**Thin line**:

* Auto-detected spatial connection (transient)
* Re-computed on each rebuild

**Dashed line**:

* Disconnected or placeholder
* Null cage connections often dashed (depending on mode)

**Mirror connections** (palette to cage):

* Special color (configurable, default: mirror color)
* Shows inheritance relationship

**Line settings**: Project Settings → Plugins → PCGEx | Valency

* `ConnectionLineThickness`
* `OrbitalArrowThickness`
* `ArrowheadThickness`
* `DashLength`, `DashGap`

\[\[SCREENSHOT: Different connection line types side by side]]

#### Labels

Labels display **cage names** and **orbital names** (if configured).

**Cage labels**:

* Positioned above cage (offset configurable)
* Show actor name
* Color indicates selection state (selected vs unselected)

**Orbital labels**:

* Positioned at arrow tips (radius percentage configurable)
* Show orbital name (from orbital set entry)
* Useful for debugging direction matching

**Settings**: Project Settings → Plugins → PCGEx | Valency

* `bShowCageLabels`: Toggle cage name labels
* `bShowOrbitalLabels`: Toggle orbital name labels
* `bOnlyShowSelectedLabels`: Only show labels for selected cages
* `SelectedLabelColor`, `UnselectedLabelColor`
* `CageLabelVerticalOffset`
* `OrbitalLabelRadiusPct`

\[\[SCREENSHOT: Labels enabled showing cage and orbital names]]

#### Ghost Meshes

**Ghost meshes** preview assets inherited from palettes or mirror sources.

**On cages** that mirror palettes:

* Semi-transparent meshes overlaid at cage location
* Shows what cage will actually spawn (cage assets + inherited assets)
* Recursively collects from MirrorSources

**On pattern cages**:

* Shows assets from proxied cages
* Traverses proxied cage mirror sources
* Helps visualize what pattern position can match

**Settings**: Project Settings → Plugins → PCGEx | Valency

* `bEnableGhostMeshes`: Toggle feature on/off
* `GhostMaterial`: Material used (translucent)
* `MaxCageGhostMeshes`: Limit per cage (-1 = all, for performance)
* `MaxPatternGhostMeshes`: Limit per pattern cage (-1 = all)

**Performance**: Large asset counts can be slow. Limit ghost meshes if editor lags.

\[\[SCREENSHOT: Ghost meshes on cage showing inherited palette assets]]

### Visualization Settings

All visualization settings located in:

**Project Settings → Plugins → PCGEx | Valency**

#### Colors | Connections

* `BidirectionalColor`: Both cages connect to each other
* `UnilateralColor`: One-way connection
* `BoundaryConnectionColor`: Connection to null cage (boundary mode)
* `WildcardConnectionColor`: Connection to null cage (wildcard mode)
* `AnyConnectionColor`: Connection to null cage (any mode)
* `NoConnectionColor`: Disconnected orbital
* `MirrorConnectionColor`: Palette mirror relationship

#### Colors | General

* `VolumeColor`: Context Volume bounds
* `WarningColor`: Error/warning indicators

#### Lines

* `ConnectionLineThickness`: Main connection line width
* `OrbitalArrowThickness`: Thick directional arrows
* `ArrowheadThickness`: Arrow tip width

#### Geometry

* `ArrowStartOffsetPct`: Where arrow starts from cage center (percentage)
* `ArrowMainLinePct`: Length of main arrow shaft (percentage)
* `ArrowheadSize`: Arrow tip size
* `ConnectedThinLinePct`: Length of thin connection lines

#### Dashed Lines

* `DashLength`: Length of dash segments
* `DashGap`: Space between dashes

#### Labels

* `bShowCageLabels`, `bShowOrbitalLabels`, `bOnlyShowSelectedLabels`
* `SelectedLabelColor`, `UnselectedLabelColor`
* `CageLabelVerticalOffset`
* `OrbitalLabelRadiusPct`

#### Mirror Ghost

* `bEnableGhostMeshes`, `GhostMaterial`
* `MaxCageGhostMeshes`, `MaxPatternGhostMeshes`

#### Behavior

* `bRebuildDuringInteractiveChanges`: Enable/disable rebuild during interactive transforms (performance vs responsiveness trade-off)

\[\[SCREENSHOT: Project settings page showing all Valency visualization options]]

### Debugging Workflows

#### Verifying Orbital Connections

**Problem**: Not sure if orbitals are connected correctly.

**Steps**:

1. Enter Valency editor mode
2. Enable `bShowOrbitalLabels`
3. Inspect connection lines:
   * Solid = manual connection (good)
   * Thin = auto-detected (temporary)
   * Dashed = no connection
4. Check arrow colors (bidirectional vs unilateral)
5. Manually connect if needed (click-drag)

\[\[SCREENSHOT: Debugging orbital connections with labels enabled]]

#### Checking Direction Matching

**Problem**: Edges not matching expected orbitals (written to attributes).

**Steps**:

1. Run Write Valency Orbitals node
2. Use PCG debugger to inspect edge attributes:
   * "PCGEx/V/Orbital/{LayerName}" (int64)
3. Unpack indices:
   * Byte 0: Source orbital index
   * Byte 1: Target orbital index
4. Compare to orbital set direction vectors
5. If mismatch:
   * Increase angle threshold (test)
   * Check `bTransformDirection` flag
   * Verify edge directions are correct

#### Debugging Unsolvable Nodes

**Problem**: Some nodes marked UNSOLVABLE after solving.

**Steps**:

1.  Enable solver logging:

    ```
    PCGEx.Valency.Log.SetVerbosity Solver Verbose
    ```
2. Run Valency Staging node
3. Check console logs:
   * "Node X: No valid modules"
   * Lists node's orbital mask, neighbor modules
4. Inspect node in PCG debugger:
   * Check orbital mask attribute
   * Check neighbor module assignments
5. Identify constraint violation:
   * Orbital mask mismatch? (module expects connections node lacks)
   * Boundary constraint? (module expects no neighbor, node has one)
   * Wildcard constraint? (module expects neighbor, node lacks)
   * Missing module variant? (no module fits this topology)
6. Fix:
   * Add module variant to bonding rules
   * Relax constraints (fewer boundary/wildcard requirements)
   * Check cage authoring (unintended disconnections)

\[\[SCREENSHOT: Console logs showing unsolvable node details]]

#### Verifying Pattern Topology

**Problem**: Pattern not matching expected configurations.

**Steps**:

1. Enter Valency editor mode
2. Select pattern cage network
3. Verify:
   * Exactly one root cage (bIsPatternRoot = true)
   * All cages connected (form network)
   * Proxied cages correct (which modules can match)
   * Active vs constraint-only settings
4. Check ghost meshes (pattern cages show proxied cage assets)
5. Rebuild bonding rules
6. Inspect compiled pattern in bonding rules asset:
   * Entry count
   * Adjacency (connections between entries)
   * Module indices (which modules can match each entry)
7. Run Pattern Replacement with Annotate strategy first:
   * See which nodes actually match
   * Verify expected vs actual
8.  Enable pattern matching logging:

    ```
    PCGEx.Valency.Log.SetVerbosity PatternMatching Verbose
    ```

\[\[SCREENSHOT: Pattern cage network with ghost meshes and logs]]

#### Checking Property Inheritance

**Problem**: Cage not inheriting expected properties from palette.

**Steps**:

1. Select cage
2. Check MirrorSources array (references palette?)
3. Check ghost meshes (visual confirmation of inheritance)
4. Rebuild bonding rules
5. Inspect bonding rules asset:
   * Module properties (should include inherited)
6. Check property names (case-sensitive match required for override)
7. Verify palette has properties (not just assets)

#### Performance Profiling

**Problem**: Valency graph running slow.

**Steps**:

1. Use PCG profiler (built-in UE PCG profiling)
2. Identify bottleneck node:
   * Write Valency Orbitals: Direction matching (usually fast)
   * Valency Staging: Solving (scales with cluster size, module count)
   * Pattern Replacement: Pattern matching (scales with pattern complexity)
3. If Staging is slow:
   * Check cluster size (1000+ nodes?)
   * Check module count (50+ modules?)
   * Check layer count (3+ layers?)
   * Consider spatial partitioning or simplified topology
4. If Pattern Replacement is slow:
   * Check pattern complexity (many entries, many patterns?)
   * Consider fewer patterns or simpler topologies

### Logging System

Valency has **granular logging** for different subsystems.

#### Console Commands

**Set verbosity per category**:

```
PCGEx.Valency.Log.SetVerbosity <Category> <Verbosity>
```

**Categories**:

* `Building`: Bonding rules compilation
* `Compilation`: Module/pattern compilation details
* `Solver`: WFC solving process
* `Staging`: Staging node execution
* `EditorMode`: Editor mode lifecycle and interactions
* `Cages`: Cage authoring and connections
* `All`: All categories

**Verbosity levels**:

* `Off`: No logging
* `Error`: Only errors
* `Warning`: Errors + warnings
* `Info`: Errors + warnings + info (default for important events)
* `Verbose`: All logs including debug details

**Bulk commands**:

```
PCGEx.Valency.Log.EnableAll    // Set all to Info
PCGEx.Valency.Log.DisableAll   // Set all to Off
PCGEx.Valency.Log.ShowVerbosity // Display current settings
```

#### Recommended Settings

**Development**:

```
PCGEx.Valency.Log.SetVerbosity Building Info
PCGEx.Valency.Log.SetVerbosity Solver Info
```

**Debugging specific issues**:

```
PCGEx.Valency.Log.SetVerbosity Solver Verbose        // Unsolvable nodes
PCGEx.Valency.Log.SetVerbosity Compilation Verbose   // Module/pattern issues
PCGEx.Valency.Log.SetVerbosity EditorMode Verbose    // Editor interaction bugs
```

**Production**:

```
PCGEx.Valency.Log.DisableAll
```

\[\[SCREENSHOT: Console command usage showing log output]]

### Common Debugging Scenarios

#### "My pattern isn't matching"

1. Check pattern cage network connectivity
2. Verify root designation (exactly one root)
3. Inspect proxied cages (correct modules?)
4. Check pattern compilation in bonding rules
5. Use Annotate strategy to see actual matches
6. Enable verbose logging

#### "Nodes are unsolvable"

1. Enable verbose solver logging
2. Identify which constraint failed (orbital, boundary, wildcard, neighbor)
3. Check if bonding rules have module for this topology
4. Add module variants or relax constraints

#### "Connections aren't working"

1. Enter editor mode
2. Visualize connections (solid vs thin vs dashed)
3. Check orbital enabled flags (disabled orbitals don't connect)
4. Convert auto to manual connections (persistent)
5. Rebuild bonding rules

#### "Properties not outputting"

1. Check `bEnabled` on property output config
2. Verify property name matches (case-sensitive)
3. Rebuild bonding rules (properties captured at build time)
4. Check property supports output (Asset Collection doesn't)

#### "Ghost meshes not showing"

1. Check `bEnableGhostMeshes` in project settings
2. Verify `GhostMaterial` exists and is valid
3. Check `MaxCageGhostMeshes` isn't 0
4. Ensure palette has assets

### Best Practices

#### Enable Logging During Development

Don't wait for bugs—preemptively enable Info-level logging to catch issues early.

#### Use Labels for Complex Setups

Large cage networks benefit from labels (easier to identify cages at a glance).

#### Limit Ghost Meshes for Performance

If editor lags with many cages, reduce `MaxCageGhostMeshes` (doesn't affect actual spawning).

#### Rebuild Frequently

After authoring changes, rebuild immediately (catch errors before accumulating changes).

#### Visualize Before Running PCG Graph

Enter editor mode, verify cage connections visually, THEN run PCG graph (avoids wasted solve time on broken setups).

#### Use PCG Debugger

UE's built-in PCG debugger is invaluable:

* Inspect point attributes
* Visualize cluster topology
* Check solver outputs

#### Profile Early

Don't wait for 5000-node cluster to discover performance issues. Test with 100 nodes, measure, then scale.

***

**Next:** Step-by-Step Setup — Complete walkthrough for your first Valency setup
