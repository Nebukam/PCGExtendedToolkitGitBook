# Palettes

Palettes are lightweight asset containers that act as "data prefabs" for cages. They're your tool for managing variants, shared assets, and reusable property sets.

### What Is a Palette?

**APCGExValencyAssetPalette** is a specialized actor that holds:

* **Asset entries** (meshes, actors, blueprint classes)
* **Properties** (just like cages)
* **Actor tags**

Palettes **do NOT have**:

* Orbitals (no connection points)
* Direct module creation (they're referenced by cages)

Think of palettes as **libraries** that cages check out from.

### Why Use Palettes?

#### Variant Management

**Problem**: You have 20 wall cages, each needs wood/stone/metal variants.

**Without palettes**:

* Add 3 assets to each cage manually
* Update material? Touch all 20 cages
* Add bronze variant? 20 more edits

**With palettes**:

* Create 3 palettes: `Palette_Wood`, `Palette_Stone`, `Palette_Metal`
* Each wall cage mirrors appropriate palette(s)
* Update palette → all cages update on rebuild

#### Shared Detail Assets

**Problem**: Many modules share decoration meshes (bolts, trim, lights).

**Without palettes**:

* Duplicate asset entries across cages
* Add new decoration? Update everywhere

**With palettes**:

* `Palette_SharedDetails` with common assets
* All cages mirror it
* Update once, propagate everywhere

#### Property Prefabs

**Problem**: Multiple cages need the same property values (cost, weight, gameplay tags).

**Without palettes**:

* Manually set properties on each cage
* Easy to miss updates or make mistakes

**With palettes**:

* Define properties on palette
* Cages inherit them automatically

### Creating a Palette

1. **Place in level**: Content Browser → PCGEx → Valency → Asset Palette
2. **Name descriptively**: `Palette_Wood_Variant`, `Palette_SharedProps`
3. **Add assets**:
   * **AssetEntries** array (same as cages)
   * Each entry: Asset, AssetType, LocalTransform, MaterialVariant
4. **Add properties** (optional):
   * Add property components (same as cages)
5. **Add actor tags** (optional):
   * Native Unreal Tags array on actor

\[\[SCREENSHOT: Palette actor with asset entries and properties]]

### Mirroring Palettes from Cages

On any cage actor:

**MirrorSources** array:

* Add references to palette actors (or other cages)
* Cage **inherits** their contents on build

#### Inheritance Rules

**Assets**:

* All mirror source assets are accumulated
* Cage's own assets are added on top
* Result: Union of all asset entries

**Properties**:

* Properties from mirror sources are collected
* **Name collision**: Cage's property value takes precedence
* Example: Palette has "Weight: 10", Cage has "Weight: 15" → Result is 15

**Actor Tags**:

* Tags from mirror sources are collected
* Merged with cage's own tags
* Result: Union of all tags

**Multiple mirror sources**:

* Processed in array order
* All contents accumulated
* Cage's values always override

#### Effective Getters

Cages have helper functions for resolved values:

* `GetEffectiveAssetEntries()`: Returns cage's assets + all mirror source assets
* `GetEffectiveProperties()`: Returns merged properties (cage values override)
* `GetEffectiveTags()`: Returns merged tags

These are **called during build**, so inheritance happens at compile time, not runtime.

\[\[SCREENSHOT: Cage with MirrorSources array pointing to palettes, showing inherited assets]]

### Lazy Initialization

Palettes use **lazy scanning** to avoid level load order issues.

**How it works**:

1. Palette deserialized → `bNeedsInitialScan = true` (transient flag)
2. First access to `GetAllAssetEntries()` → calls `EnsureInitialized()`
3. `EnsureInitialized()` scans asset entries, validates, clears flag

**Why this matters**: Context Volumes trigger palette scans during build. Lazy init ensures palettes are ready regardless of actor load order.

**You don't need to do anything**—it's automatic. Just be aware palettes aren't "ready" immediately on level load.

### Change Propagation & Ghost Meshes

Palettes integrate with **reference tracking** for cascade updates.

#### Ghost Mesh Preview

Cages that mirror palettes show **ghost meshes**:

* Semi-transparent preview of inherited assets
* Overlaid at cage location
* Uses configured ghost material (translucent)

**Purpose**: Visual confirmation of what cage will actually spawn (cage assets + palette assets).

**Ghost mesh settings**: Project Settings → Plugins → PCGEx | Valency

* `bEnableGhostMeshes`: Toggle on/off
* `GhostMaterial`: Material used for preview (defaults to translucent gray)
* `MaxCageGhostMeshes`: Limit per cage (-1 = all)

**Pattern cages** also show ghost meshes (traversing proxied cage mirror sources recursively).

#### Change Propagation

When a palette's contents change:

1. Reference tracker detects modification
2. Finds all cages with this palette in MirrorSources
3. Refreshes ghost meshes on those cages
4. Optionally triggers bonding rules rebuild

**How to trigger**:

* Change asset entries → calls `OnAssetRegistrationChanged()`
* Add/remove properties → automatic detection
* Manual: Select palette, rebuild Context Volume

**Cascade example**:

```
Palette_Wood → Cage_Wall_A → Pattern_Corner
                            → Cage_Wall_B

Update Palette_Wood:
  → Cage_Wall_A's ghosts refresh
  → Pattern_Corner's ghosts refresh (sees Cage_Wall_A's new assets)
  → Cage_Wall_B's ghosts refresh
```

Reference tracker uses **BFS with cycle detection** to propagate changes safely.

\[\[SCREENSHOT: Ghost meshes on cage showing inherited palette assets]]

### Workflow Examples

#### Example 1: Material Variants

**Goal**: All walls support wood/stone/metal materials.

**Setup**:

1. Create 3 palettes:
   * `Palette_Wood`: Wall\_Mesh with MaterialVariant "Wood"
   * `Palette_Stone`: Wall\_Mesh with MaterialVariant "Stone"
   * `Palette_Metal`: Wall\_Mesh with MaterialVariant "Metal"
2. On each wall cage:
   * Add all 3 palettes to MirrorSources
   * Result: Cage produces 3 modules (one per variant)

**Update**: Change `Palette_Wood` asset → all wood walls update on rebuild.

#### Example 2: Shared + Unique Assets

**Goal**: All modules have common bolts/trim, plus their unique main asset.

**Setup**:

1. Create `Palette_SharedDetails`:
   * Bolt\_Mesh
   * Trim\_Mesh
   * Light\_Mesh
2. On each cage:
   * Add `Palette_SharedDetails` to MirrorSources
   * Add cage-specific main asset (Wall, Floor, Corner, etc.)

**Result**: Every cage spawns its main asset + shared details.

#### Example 3: Property Inheritance

**Goal**: All "premium" modules have high cost, high quality properties.

**Setup**:

1. Create `Palette_Premium`:
   * Property: Cost (Int32) = 100
   * Property: Quality (Float) = 0.9
   * Actor tag: "Premium"
2. On premium cages:
   * Add `Palette_Premium` to MirrorSources
   * Override Cost if needed (cage value wins)

**Result**: All premium modules inherit properties, query them at spawn time.

### Best Practices

#### Organize by Purpose

**Material variants**:

* One palette per material (wood, stone, metal)
* Cages mirror all variants they support

**Shared assets**:

* Group logically (decorations, utilities, structural)
* One palette per group
* Many cages mirror each

**Property sets**:

* Themed palettes ("Premium", "Cheap", "Industrial")
* Cages mirror appropriate theme

#### Naming Convention

Use clear prefixes:

* `Palette_Material_Wood`
* `Palette_Shared_Decorations`
* `Palette_Props_Industrial`

#### Limit Ghost Meshes

Large asset counts = performance hit. Use `MaxCageGhostMeshes` to limit preview meshes (doesn't affect actual spawning).

#### Test Inheritance

After setting up mirror sources:

1. Select cage
2. Check ghost meshes (visual confirmation)
3. Rebuild bonding rules
4. Verify module count (should include inherited variants)

#### Don't Over-Mirror

Only mirror what's needed. Mirroring everything to everything = hard to debug, unclear relationships.

#### Update Palettes, Not Cages

When possible, change palette contents rather than touching individual cages. Leverage the prefab pattern.

### Common Issues

**"Ghost meshes not showing"**

* Check `bEnableGhostMeshes` in Project Settings
* Verify `GhostMaterial` exists and is valid
* Check `MaxCageGhostMeshes` isn't 0
* Ensure palette has assets

**"Inherited assets not appearing in build"**

* Rebuild bonding rules (inheritance happens at build time)
* Check cage's `GetEffectiveAssetEntries()` in debugger
* Verify MirrorSources array references valid actors

**"Property override not working"**

* Ensure cage's property component has **same PropertyName** as palette's
* Cage value only overrides matching names
* Check effective properties on compiled module

**"Circular mirror references"**

* Don't mirror palettes that mirror each other
* Reference tracker detects cycles, but it's inefficient
* Keep hierarchy directed (leaf palettes → mid palettes → cages)

**"Lazy init causing issues"**

* Rare, but if palette seems empty during build, manually call `EnsureInitialized()`
* Report if this happens consistently

***

**Next:** Bonding Rules & Context Volumes — Compilation and authoring organization
