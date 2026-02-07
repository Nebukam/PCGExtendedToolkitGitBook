---
icon: shelves
---

# Collections

**Collections are the data assets at the heart of staging.** They organize your assets with metadata — weights, categories, material overrides, descriptors — so that staging nodes have everything they need to make intelligent selections.

### Collection Structure

A collection contains:

* **Entries**: Individual items (assets or subcollections)
* **Collection settings**: Defaults applied to entries
* **Cached data**: Precomputed staging information

### Collection Types

#### Mesh Collection

Contains static mesh references. Each entry includes:

* Static mesh asset
* Weight
* Category
* ISM/SM descriptors
* Material overrides
* Staging data (bounds, sockets)

#### Actor Collection

Contains actor class references. Each entry includes:

* Actor class
* Weight
* Category
* Spawn transform settings
* Tags

#### PCG Data Asset Collection

Contains PCG Data Asset references. Each entry includes:

* PCG Data Asset
* Weight
* Category
* Execution settings

### Entry Properties

#### Weight

Relative probability when using weighted distribution. Higher weight = more likely to be selected.

* Weight 100 vs Weight 50 = 2:1 probability ratio
* Weight 0 = disabled (never selected)
* All entries weight 100 = equal probability

#### Category

Optional grouping for filtered distribution. When staging uses categories:

* Only entries with matching category are considered
* Category is string-based (case-sensitive)
* Uncategorized entries: Category = `None`

#### Descriptors

Per-entry settings for spawned components:

* **ISM Descriptor**: Instanced static mesh settings (culling, LOD, etc.)
* **SM Descriptor**: Static mesh settings (collision, shadow, etc.)

Descriptors set at entry level override collection defaults.

### Subcollections

An entry can reference another collection instead of an asset:

```
Collection A
├─ Entry 1: Mesh (weight: 50)
├─ Entry 2: Subcollection B (weight: 50)

Collection B
├─ Entry 1: Mesh (weight: 30)
├─ Entry 2: Mesh (weight: 70)
```

When Entry 2 is selected, the system picks from Collection B using its internal weights.

#### Inheritance

Subcollection entries can inherit or override:

* Properties flow down the hierarchy
* Child entries override parent defaults
*   Weight is relative within each collection level

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p><strong>Avoid Circular References</strong><br>Collection A referencing Collection B which references Collection A creates infinite recursion.</p></div>

    \## Material Overrides

Entries support material slot overrides:

```
Entry: MyMesh
├─ Material Slot 0
│   ├─ Material A (weight: 60)
│   ├─ Material B (weight: 30)
│   └─ Material C (weight: 10)
└─ Material Slot 1
    ├─ Material D (weight: 50)
    └─ Material E (weight: 50)
```

Each slot has weighted variants. Selection uses the staging seed for consistency.

### Sockets

Mesh entries include socket data:

* Extracted from mesh sockets automatically
* Custom sockets can be added manually
* Include: name, transform, custom properties

Used by socket staging for modular assembly.

### Collection Workflow

#### Creating Collections

**From scratch:**

1. Content Browser → Create Data Asset
2. Select collection type (Mesh, Actor, PCG Data Asset)
3. Add entries manually

**From selection:**

1. Select assets in Content Browser
2. Right-click → Asset Action → Create Asset Collection
3. Collection created with one entry per selected asset

#### Editing Collections

**Assets tab:** Entry list with individual settings **Collection Settings tab:** Defaults and global configuration

{% hint style="info" %}
**Rebuild After Editing**\
After modifying entries or settings, click "Rebuild Staging" and save. This updates precomputed cache data.
{% endhint %}

#### Organizing Large Collections

For many assets:

* Use categories to partition logically
* Use subcollections to create hierarchy
* Consistent naming helps maintenance

### Collection vs Attribute-Based Selection

Collections centralize asset configuration:

* Single source of truth for weights, materials, descriptors
* Changes propagate to all graphs using the collection
* Runtime-efficient lookup

Attribute-based selection is simpler but less capable:

* Works directly on point attributes
* No support for material variants, subcollections
* Good for quick setups

Use collections when you need: weighted distribution, material variations, modular organization, or reuse across multiple graphs.

### Related

* Asset Staging Overview - Staging system introduction
* Distribution - How entries are selected
* Fitting - Transform adjustment
