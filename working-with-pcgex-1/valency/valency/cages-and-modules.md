# Cages & Modules

Cages are your authoring tool for defining modules. Each cage represents one or more possible modules in your Valency system.

### Cage Types

Valency provides four cage types, each suited for different authoring needs:

#### Regular Cage (`APCGExValencyCage`)

The **primary workhorse**. Supports:

* Asset registration (meshes, actors, blueprint classes)
* Manual and auto orbital connections
* Local transform variants
* Mirror sources (inherit from palettes)
* Cage properties
* Material variants
* Missing connection behavior configuration

**Use for**: Production-ready modules with specific assets and detailed configuration.

#### Simple Cage (`APCGExValencyCageSimple`)

Extends regular cage with **shape-based containment checks**:

* Box shape (OBB)
* Sphere shape
* Capsule shape

Useful for **quick prototyping**—visually see which modules fit in specific spaces without full asset setup.

**Use for**: Early blocking, spatial testing, prototype validation.

#### Pattern Cage (`APCGExValencyCagePattern`)

**Topology-only** cages for pattern matching (no assets spawned):

* Proxied cages (which modules can match this position)
* Wildcard mode (match ANY module)
* Active vs constraint-only positions
* Pattern root designation
* Pattern settings (weight, min/max matches, output strategy)

**Use for**: Defining patterns to detect and replace after solving.

See Patterns & Pattern Replacement for full details.

#### Null Cage (`APCGExValencyCageNull`)

**Constraint placeholder** representing boundary/wildcard/unconstrained connections:

* Three modes: Boundary, Wildcard, Any
* No assets (pure constraint)
* Can participate in pattern networks

**Use for**: Explicitly marking edges, required connections, or spatial placeholders.

See Null Cages & Constraints for full details.

### Creating a Regular Cage

1. **Place in level**: Content Browser → PCGEx → Valency → Cage (or drag from editor mode)
2. **Name meaningfully**: `Cage_Wall_Straight`, `Cage_Corner_Convex`
3. **Configure orbitals** (automatically created from orbital set)
4. **Register assets**
5. **Connect to neighbors**

\[\[SCREENSHOT: Cage placement and initial setup]]

### Orbital Configuration

Each cage has an **Orbitals array**, one entry per orbital in the orbital set. Each orbital entry contains:

* **OrbitalIndex**: Matches index in orbital set (read-only)
* **bEnabled**: Toggle this orbital on/off (disabled orbitals don't participate in connections)
* **ManualConnections**: Array of explicitly connected cages (survives rebuilds)
* **AutoConnectedCage**: Spatially detected connection (transient, cleared on rebuild)

#### Manual Connections

**Explicit, persistent** connections you define:

1. Select cage in editor
2. Enter Valency editor mode (toolbar button)
3. Click orbital connection point (sphere at cage location + orbital direction)
4. Drag to target cage's orbital
5. Connection line appears (color indicates connection type)

**Manual connections survive**:

* Cage movement (unless you break them)
* Bonding Rules rebuilds
* Level reloads

#### Auto Connections

**Spatial proximity detection** when cages are moved:

* Editor detects when cage orbitals align within threshold
* Creates transient AutoConnectedCage reference
* Displayed as thin connection line
* **Cleared on every rebuild** (re-detected fresh)

**Use auto connections for**: Rapid layout iteration, temporary testing.

**Use manual connections for**: Finalized relationships, explicit control.

#### Connection Visualization

Lines and arrows show connection state:

**Line types**:

* **Solid thick arrow**: Active manual connection (bidirectional or unilateral)
* **Thin line**: Auto-detected spatial connection
* **Dashed line**: Disconnected or null cage connection

**Colors** (configurable in Project Settings → Plugins → PCGEx | Valency):

* **Bidirectional**: Both cages connect to each other
* **Unilateral**: Only one cage connects to other
* **Boundary**: Connection to null cage (boundary mode)
* **Wildcard**: Connection to null cage (wildcard mode)
* **Any**: Connection to null cage (any mode)
* **Mirror**: Connection to palette
* **No connection**: Dashed

\[\[SCREENSHOT: Different connection types with color coding]]

### Asset Registration

Assets define what gets spawned when this module is selected by the solver.

#### Adding Assets

**On the cage actor**:

* **AssetEntries** array (expandable)
* Each entry specifies:
  * **Asset**: TSoftObjectPtr to StaticMesh, Actor class, or Blueprint
  * **AssetType**: StaticMesh, Actor, or Blueprint
  * **LocalTransform**: Optional transform variant (rotation, scale)
  * **MaterialVariant**: Optional material override identifier

**Multiple assets** on one cage = all assets share the same orbital mask but represent different visual variants or material options.

#### Material Variants

Material variants let you create modules that are **topologically identical** but visually distinct (e.g., wood/stone/metal).

**How it works**:

1. Add multiple assets to same cage with different `MaterialVariant` names
2. Compiler creates **separate modules** for each variant
3. Solver treats them as distinct options (different module indices)
4. Use solver weights or constraints to control variant distribution

**Example**:

```
Cage_Wall_Straight:
  Asset 1: Wall_Mesh, MaterialVariant: "Wood"
  Asset 2: Wall_Mesh, MaterialVariant: "Stone"
  Asset 3: Wall_Mesh, MaterialVariant: "Metal"
```

Result: 3 modules (same topology, different materials)

#### Local Transforms

**Transform variants** let one module spawn with multiple rotation/scale options.

**Enabling**:

* Set cage's `bPreserveLocalTransforms = true`
* Add assets with different `LocalTransform` values

**How it works**:

1. All transform variants **share the same module index** (unlike material variants)
2. Solver selects module based on topology (ignores transform)
3. At spawn time, randomly picks one transform variant based on point seed
4. Applies local transform: `FinalTransform = LocalTransform * PointTransform`

**Use cases**:

* Walls with slight rotation variance (organic feel)
* Decorations with random scale
* Asymmetric modules that can flip

**Important**: Local transform is **not part of module identity**. Transform variants of the same asset+orbital mask are the **same module** to the solver, unlike material variants which are separate modules.

\[\[SCREENSHOT: Multiple assets on one cage, showing material variants and local transforms]]

### Mirror Sources (Palette Inheritance)

Cages can **inherit assets and properties** from **Palettes** or other cages:

**MirrorSources array**:

* Add palette actors or other cage actors
* Cage inherits their:
  * Asset entries
  * Properties
  * Actor tags

**Inheritance is cumulative**:

* Multiple mirror sources = all their contents combined
* Cage's own assets/properties/tags are added on top
* Name collisions: Cage's values take precedence

**Use cases**:

* **Variant management**: Create "Wood Palette", "Stone Palette"—cages mirror appropriate variant
* **Shared details**: Common decorations or utility assets inherited by many cages
* **Modularity**: Change palette → all mirroring cages update on rebuild

See Palettes for full details.

### Missing Connection Behavior

For orbitals **without explicit connections**, how should the solver treat them?

**EPCGExMissingConnectionBehavior** (per cage):

#### Unconstrained (default)

No constraint—node can have neighbor or not, solver doesn't care.

**Use when**: Module is flexible, works with or without neighbor at that orbital.

#### Boundary

Treat as boundary constraint—node MUST have NO neighbor at that orbital.

**Use when**: Module represents an edge/cap/terminator that can't have connections on certain sides.

#### Wildcard

Treat as wildcard constraint—node MUST have ANY neighbor at that orbital.

**Use when**: Module requires connections on all orbitals (e.g., a center hub that needs full connectivity).

**Technical note**: This setting is applied during compilation to orbitals that don't have explicit connections (manual or auto). It sets bits in `BoundaryOrbitalMask` or `WildcardOrbitalMask` accordingly.

\[\[SCREENSHOT: Missing connection behavior dropdown with visual examples]]

### Module Definition & Identity

During compilation, cages are converted to **modules**. A module's identity is:

```
Module Identity = Hash(Asset, OrbitalMask, MaterialVariant)
```

**NOT included**: LocalTransform (variants share same module)

**Example**:

```
Cage A: Wall mesh, North+South connections, no variant = Module 0
Cage B: Wall mesh, North+South connections, no variant = Module 0 (same!)
Cage C: Wall mesh, East+West connections, no variant   = Module 1 (different mask)
Cage D: Wall mesh, North+South connections, "Stone"    = Module 2 (different variant)
```

Multiple cages can produce the **same module**—this is expected and efficient.

### Transform Flags (Advanced)

Cages support **local transform flags** for fine-grained control:

**EPCGExLocalTransformFlags** (bitfield):

* **PreserveRotation**: Include rotation in local transform
* **PreserveScale**: Include scale in local transform
* **PreserveLocation**: Include location offset in local transform (rare)

**Use cases**:

* Preserve rotation only: Modules with directional variance
* Preserve scale only: Size variations
* All flags: Full transform variants

Most users use the simple `bPreserveLocalTransforms` toggle, which enables rotation+scale.

### Cage Properties

Attach **arbitrary data** to cages via actor components:

**Available as components** (Add Component → PCGEx Valency):

* String, Name, Int32, Int64, Float, Double, Bool
* Vector, Vector2D, Vector4, Rotator, Quat, Transform, Color
* Soft Object Path, Soft Class Path
* Asset Collection (reference to PCGExAssetCollection)

**Each property component has**:

* **PropertyName**: Identifier (defaults to component name)
* **Value**: The data

**Properties flow through**:

* Cage → Module → Compiled Rules → Solver
* Accessible via property query API
* Can be output to point attributes

See Properties & Tags for full details.

### Editor Mode Integration

When **Valency editor mode** is active (toolbar button):

* Cages display orbitals as spheres + directional arrows
* Connection lines drawn between connected cages
* Labels show cage names and orbital names (if enabled in settings)
* Orbital spheres are clickable for manual connections
* Moving cages triggers auto-connection detection
* Ghost meshes show mirror source assets

**Visualization settings**: Project Settings → Plugins → PCGEx | Valency

* Line thickness, colors, dash patterns
* Label visibility, offset, colors
* Ghost mesh limits and materials
* Arrow geometry (start offset, headsize, etc.)

\[\[SCREENSHOT: Editor mode active showing orbitals, connections, labels]]

### Best Practices

#### Naming Convention

Use consistent prefixes:

* `Cage_Wall_Straight`, `Cage_Wall_Corner`, `Cage_Floor_Plain`
* Helps sorting, searching, understanding relationships

#### Start with One Asset Per Cage

Add multiple assets later when you understand variant workflows. Simplicity first.

#### Manual Connections for Production

Auto connections are great for iteration, but finalize with manual connections before shipping.

#### Use Mirror Sources

Don't duplicate asset lists across similar cages—use palettes and mirror sources.

#### Test Missing Connection Behavior

Explicitly set boundary/wildcard/unconstrained based on module purpose. Don't rely on default everywhere.

#### Property Naming

Use consistent property names across cages (e.g., "Weight", "Cost", "Tier"). Property query API relies on names.

#### Material Variants vs Local Transforms

* **Material variants** = Separate modules, solver chooses between them
* **Local transforms** = Same module, random selection at spawn

Choose based on whether solver should consider them topologically different (variants) or identical (transforms).

### Common Issues

**"My cage doesn't appear in compiled modules"**

* Check if orbital connections exist (disabled orbitals = no connections = no module)
* Verify cage is within Context Volume bounds
* Check builder logs for errors

**"Transform variants create separate modules"**

* Ensure `LocalTransform` is NOT part of module key (code bug if so)
* Check if you accidentally used MaterialVariant instead

**"Mirror source not working"**

* Verify target is a Palette or another Cage
* Rebuild bonding rules (mirror resolved at build time)
* Check ghost meshes (visual confirmation of inherited assets)

**"Connections don't survive rebuild"**

* Auto connections are transient—convert to manual
* Manual connections survive unless geometrically broken

***

**Next:** Palettes — Reusable asset and property containers
