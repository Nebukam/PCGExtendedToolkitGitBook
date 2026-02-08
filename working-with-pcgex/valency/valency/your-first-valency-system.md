# Your First Valency System

This guide walks you through creating a simple modular wall system from scratch. By the end, you'll have a working Valency setup that intelligently places wall modules with corners and caps.

### What We'll Build

A basic room generation system:

* **Straight walls** (2 connections: left + right)
* **Corner walls** (2 connections: perpendicular)
* **Cap walls** (1 connection: room edges)

Using **Cardinal4 orbital set** (North, East, South, West).

***

### Prerequisites

* Unreal Engine 5.7 with PCGEx plugin installed
* Basic PCG knowledge (points, graphs, nodes)
* 3 static meshes for walls (or use placeholder cubes)

***

### Phase 1: Create Orbital Set

#### Step 1: Create the Asset

1. **Content Browser**: Right-click → PCGEx → Valency → Orbital Set
2. **Name**: `OS_Cardinal4`
3. **Open** the asset

\[\[SCREENSHOT: Creating orbital set in content browser]] _Caption: Right-click menu showing PCGEx → Valency → Orbital Set option_

#### Step 2: Define Orbitals

Add 4 orbital entries:

| Index | Direction  | Orbital Name | Notes   |
| ----- | ---------- | ------------ | ------- |
| 0     | (0, 1, 0)  | North        | +Y axis |
| 1     | (1, 0, 0)  | East         | +X axis |
| 2     | (0, -1, 0) | South        | -Y axis |
| 3     | (-1, 0, 0) | West         | -X axis |

**Settings**:

* **Angle Threshold**: 45 degrees (strict matching)
* **bTransformDirection**: False (world-space directions)

\[\[SCREENSHOT: Orbital set with 4 entries configured]] _Caption: OS\_Cardinal4 with North/East/South/West orbitals defined_

***

### Phase 2: Create Cages

#### Step 3: Create Straight Wall Cage

1. **Place in level**: Modes panel → PCGEx → Valency → Cage
2. **Name**: `Cage_Wall_Straight`
3. **Position**: Somewhere in level (we'll organize later)

\[\[SCREENSHOT: Placing cage in level]] _Caption: Drag Valency Cage from modes panel into level_

4. **Select cage**, check Details panel
5. **Orbitals array**: Should auto-populate with 4 entries (from OS\_Cardinal4)
6. **Register asset**:
   * Expand `AssetEntries` array
   * Add element
   * Set `Asset`: Your straight wall mesh
   * Set `AssetType`: StaticMesh

\[\[SCREENSHOT: Cage details showing asset registration]] _Caption: Cage\_Wall\_Straight with mesh assigned in AssetEntries_

#### Step 4: Create Corner Wall Cage

1. Duplicate `Cage_Wall_Straight` (Ctrl+D)
2. **Name**: `Cage_Wall_Corner`
3. **Replace asset**: Use corner wall mesh

#### Step 5: Create Cap Wall Cage

1. Duplicate `Cage_Wall_Straight`
2. **Name**: `Cage_Wall_Cap`
3. **Replace asset**: Use cap wall mesh

\[\[SCREENSHOT: Three cages in level (Straight, Corner, Cap)]] _Caption: All three cage actors placed in level, ready for connections_

***

### Phase 3: Enter Valency Editor Mode

#### Step 6: Activate Editor Mode

1. **Toolbar**: Click Valency mode button (modes panel)
2. **Observe**: Cages now show orbital spheres and arrows

\[\[SCREENSHOT: Editor mode active, cages showing orbitals]] _Caption: Valency editor mode active—orbitals visible as spheres with directional arrows. Color shows each orbital pointing in its defined direction (North=green, East=red, etc.)_

***

### Phase 4: Connect Cages

#### Step 7: Straight Wall Connections

Straight walls connect to other straight walls on East/West, and to corners on East/West.

1. **Select** `Cage_Wall_Straight`
2. **Click** East orbital sphere (red arrow)
3. **Drag** to `Cage_Wall_Straight`'s West orbital
   * Creates bidirectional connection (straight-to-straight)
4. **Repeat**: East to `Cage_Wall_Corner`'s South (perpendicular)

\[\[SCREENSHOT: Straight wall connected to straight wall and corner]] _Caption: Connection lines showing straight-to-straight (bidirectional) and straight-to-corner relationships. Note the thick colored arrows indicating manual connections._

#### Step 8: Corner Wall Connections

Corners connect perpendicular sides.

1. **Select** `Cage_Wall_Corner`
2. **Connect**: South to `Cage_Wall_Straight`'s East (already done in Step 7)
3. **Connect**: West to `Cage_Wall_Corner`'s North (corner-to-corner)

\[\[SCREENSHOT: Corner wall connections (perpendicular orbitals)]] _Caption: Corner cage with connections on South and West orbitals, forming 90-degree angle_

#### Step 9: Cap Wall Connections

Caps have **one connection** (boundary on others).

1. **Select** `Cage_Wall_Cap`
2. **Connect**: South orbital to `Cage_Wall_Straight`'s North
3. **Configure missing connections**:
   * With `Cage_Wall_Cap` selected
   * Set `MissingConnectionBehavior = Boundary`
   * This makes North, East, West orbitals = boundary (must have NO neighbor)

\[\[SCREENSHOT: Cap wall with one connection and MissingConnectionBehavior set]] _Caption: Cap cage connected on South orbital only. MissingConnectionBehavior=Boundary ensures other orbitals must have no neighbors (edge placement)._

**Alternative**: Create Null Cage (Boundary mode), connect North/East/West to it (explicit approach).

***

### Phase 5: Create Context Volume & Bonding Rules

#### Step 10: Create Bonding Rules Asset

1. **Content Browser**: Right-click → PCGEx → Valency → Bonding Rules
2. **Name**: `BR_WallSystem`
3. **Save** (don't open, it's auto-populated)

\[\[SCREENSHOT: Creating bonding rules asset in content browser]] _Caption: Right-click menu showing PCGEx → Valency → Bonding Rules option_

#### Step 11: Create Context Volume

1. **Modes panel**: Volumes → Valency Context Volume
2. **Place in level**: Encompass all 3 cages
3. **Select volume**, check Details panel
4. **Set**:
   * `BondingRules`: Reference `BR_WallSystem`
   * `bAutoRebuild`: True (auto-rebuild on changes)

\[\[SCREENSHOT: Context Volume encompassing all cages]] _Caption: Valency Context Volume (box) surrounding all three cage actors. Details panel shows BondingRules reference and bAutoRebuild enabled._

***

### Phase 6: Build Bonding Rules

#### Step 12: Compile

1. **Select** Context Volume
2. **Details panel**: Click **"Build Rules from Cages"** button
3.  **Check console logs**:

    ```
    Building bonding rules...
    Found 3 cages (3 regular, 0 pattern, 0 null)
    Created 3 modules (1 per cage)
    Built 1 layer (Cardinal4)
    Build complete in 15ms
    ```

\[\[SCREENSHOT: Build button in context volume details, console showing success]] _Caption: "Build Rules from Cages" button location and successful build log output_

4. **Inspect** `BR_WallSystem` asset:
   * Modules tab: Should show 3 modules (Straight, Corner, Cap)
   * Each with orbital masks, asset references

\[\[SCREENSHOT: Bonding rules asset showing 3 compiled modules]] _Caption: BR\_WallSystem asset opened, showing Modules array with 3 entries. Each module shows Asset reference, OrbitalMask, and other compiled data._

***

### Phase 7: Create PCG Graph

#### Step 13: Create Graph Asset

1. **Content Browser**: Right-click → PCG → PCG Graph
2. **Name**: `PCG_WallSystem`
3. **Open** graph editor

#### Step 14: Build Graph Structure

Create the following node chain:

```
[Static Grid Source] → [Points to Paths] → [Paths to Edges]
                                               ↓
                                    [Write Valency Orbitals]
                                               ↓
                                       [Valency Staging]
                                               ↓
                                    [Spawn Static Meshes]
```

**Node configurations**:

**Static Grid Source**:

* Grid size: 10x10
* Cell size: 400x400 (adjust to your wall mesh width)

**Points to Paths**:

* Creates path network from grid

**Paths to Edges**:

* Converts paths to PCGEx edges (cluster)

**Write Valency Orbitals**:

* `OrbitalSet`: Reference `OS_Cardinal4`

**Valency Staging**:

* `BondingRules`: Reference `BR_WallSystem`

**Spawn Static Meshes**:

* Use module data attribute to spawn appropriate meshes
* (Implementation varies—read module index, spawn corresponding asset)

\[\[SCREENSHOT: Complete PCG graph with all nodes connected]] _Caption: Full PCG graph showing data flow from grid generation through Valency solving to spawning. Each node labeled with key parameters._

#### Step 15: Execute Graph

1. **Place PCG Component** in level
2. **Reference** `PCG_WallSystem` graph
3. **Generate**
4. **Observe**: Walls placed at grid points, respecting neighbor rules

\[\[SCREENSHOT: PCG component in level with graph reference]] _Caption: PCG Component actor in level, with Graph property set to PCG\_WallSystem_

\[\[SCREENSHOT: Generated output showing walls forming room]] _Caption: Final result—walls spawned at grid points. Straight walls along edges, corners at 90-degree turns, caps at endpoints. All connections respect bonding rules._

***

### Phase 8: Test & Iterate

#### Step 16: Verify Behavior

**Expected results**:

* Straight walls along continuous edges
* Corner walls at 90-degree turns
* Cap walls at endpoints (boundaries)

**If not working**:

* Check console logs (errors during solve?)
* Use PCG debugger to inspect:
  * Point attributes (module data assigned?)
  * Orbital masks (connections detected?)
*   Enable solver logging:

    ```
    PCGEx.Valency.Log.SetVerbosity Solver Info
    ```

#### Step 17: Add Variants

**Material variants**:

1. Duplicate each cage 3x (wood, stone, metal)
2. Set `MaterialVariant` on asset entries
3. Or: Create Palettes for each material, use MirrorSources

**Transform variants**:

1. On each cage, set `bPreserveLocalTransforms = true`
2. Add multiple asset entries with different `LocalTransform.Rotation` values
3. Solver picks one module, spawner randomly selects transform variant

\[\[SCREENSHOT: Material variants setup on cage]] _Caption: Cage with multiple asset entries, each with different MaterialVariant name (Wood, Stone, Metal). Compiler creates 3 modules from this one cage._

***

### Troubleshooting

#### "No modules created"

* **Check**: Cages have orbital connections (at least one per cage)
* **Check**: Cages within Context Volume bounds
* **Fix**: Enable orbitals, connect cages, rebuild

#### "All nodes unsolvable"

* **Check**: Bonding rules asset referenced correctly in Valency Staging node
* **Check**: Orbital set matches (Cardinal4 everywhere)
* **Check**: Cluster has edges (Paths to Edges produced output)
* **Fix**: Verify asset references, rebuild bonding rules

#### "Walls spawning randomly"

* **Check**: Module data attribute being read correctly in spawn logic
* **Check**: Asset mapping (module index → correct mesh)
* **Fix**: Inspect module data attribute values, match to bonding rules module indices

#### "Corners not spawning"

* **Check**: Corner cage connected perpendicular orbitals (not parallel)
* **Check**: Grid actually has corners (90-degree turns)
* **Fix**: Review cage connections, test with known-corner cluster

#### "Caps everywhere"

* **Check**: MissingConnectionBehavior on Cap cage is Boundary
* **Check**: Cap cage only connected on one orbital
* **Fix**: Disconnect extra orbitals, set behavior, rebuild

***

### Next Steps

Now that you have a working Valency system:

1. **Add more complexity**:
   * T-junctions (3 connections)
   * 4-way intersections
   * Different wall heights
2. **Use patterns**:
   * Create pattern cages for T-junctions
   * Replace with specialized high-detail connector meshes
3. **Add properties**:
   * Spawn weights (prefer certain modules)
   * Material parameters (tint colors, roughness)
   * Gameplay tags (cover, destructible)
4. **Multi-layer**:
   * Layer 0: Structural walls
   * Layer 1: Trim/decoration alignment
5. **Scale up**:
   * Larger grids
   * Organic layouts (non-grid clusters)
   * Procedural graphs instead of static grids

***

### Summary

You've learned:

* ✓ Create orbital sets (connection topology)
* ✓ Author cages (module definitions)
* ✓ Connect cages (neighbor rules)
* ✓ Use Context Volumes (compilation)
* ✓ Build bonding rules (data asset)
* ✓ Create PCG graph (solving pipeline)
* ✓ Debug issues (editor mode, logging)

**Core workflow**:

```
Author (cages + connections) → Compile (bonding rules) → Solve (PCG graph) → Spawn
```

***

**Next:** PCG & Cluster Quick Reference — Refresher on PCG and cluster fundamentals
