---
icon: spray-can
---

# Asset Staging

**Every PCG project hits the same wall: you need varied assets, weighted selection, material swaps, and per-entry metadata — and vanilla PCG makes you build all of that from scratch every time.** Complex loop chains, multiple layers of match-and-set, everyone reinventing the same wheel. Asset staging handles this in one system.

Staging separates **selection** from **spawning**:

1. [collections](../../node-library/staging/collections/ "mention") define available assets with metadata (weights, categories, materials, sockets, properties)
2. [staging](../../node-library/staging/ "mention") nodes assign collection entries to points
3. **Handlers** spawn the result — different handlers for different asset types

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Flow diagram: Collection → Staging Node → Staged Points → Handler → Scene</p></figcaption></figure>

No assets are loaded during staging. The node reads pre-cached metadata and writes attributes. Staging is fast because it's just data, not asset loading.

### Collection Types

Collections aren't just about meshes. There are three types, and each serves a different purpose with a different downstream handler:

<table data-view="cards"><thead><tr><th>Collection Type</th><th>Contains</th><th>Spawner</th><th data-hidden data-card-cover data-type="image">Cover image</th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><a data-mention href="../../node-library/staging/collections/mesh-collection.md">mesh-collection.md</a></td><td>Static meshes</td><td>Vanilla Spawn Static Mesh + Mesh Selector Staged</td><td data-object-fit="contain"><a href="../../.gitbook/assets/PCGExMeshCollection.png">PCGExMeshCollection.png</a></td><td><a href="../../node-library/staging/collections/mesh-collection.md">mesh-collection.md</a></td></tr><tr><td><a data-mention href="../../node-library/staging/collections/actor-collection.md">actor-collection.md</a></td><td>Actor classes (blueprints)</td><td>Vanilla Spawn Actor</td><td data-object-fit="contain"><a href="../../.gitbook/assets/PCGExActorCollection.png">PCGExActorCollection.png</a></td><td><a href="../../node-library/staging/collections/actor-collection.md">actor-collection.md</a></td></tr><tr><td><a data-mention href="../../node-library/staging/collections/pcg-data-asset-collection.md">pcg-data-asset-collection.md</a></td><td>PCG Data Assets</td><td>PCGEx Load PCG Data Asset</td><td data-object-fit="contain"><a href="../../.gitbook/assets/PCGExPCGDataAssetCollection.png">PCGExPCGDataAssetCollection.png</a></td><td><a href="../../node-library/staging/collections/pcg-data-asset-collection.md">pcg-data-asset-collection.md</a></td></tr></tbody></table>

[pcg-data-asset-collection.md](../../node-library/staging/collections/pcg-data-asset-collection.md "mention") deserve special attention. PCG Data Assets are often created by converting a level or level section into a reusable data asset. Distributing these through collections gives you weighted, categorized placement of entire pre-authored level chunks.

[actor-collection.md](../../node-library/staging/collections/actor-collection.md "mention") handle anything that needs to be a full actor: blueprints with logic, interactive objects, complex hierarchies. The Spawn Actor node handles instantiation.

[mesh-collection.md](../../node-library/staging/collections/mesh-collection.md "mention") are the most common for static props and environmental pieces, with additional support for material overrides and ISM/SM descriptors.

{% hint style="success" %}
Entry types can be mixed on the same points. A single distribution pass can stage meshes, actors, and PCG Data Assets — then downstream handlers each pick up their respective types. Use the [staging-type-filter.md](../../node-library/staging/staging-type-filter.md "mention") or write the entry type to an attribute for routing when using mixed sources.
{% endhint %}

### Collections as Data Assets

Collections are created in the Content Browser as Data Assets. They're tracked by PCG — edit a collection and any freshly generated graph referencing it will auto-refresh. This makes iteration fast: tweak weights, swap assets, adjust properties, and see the result immediately.

Each entry carries:

* **Weight** (probability relative to other entries)
* **Category** (for filtered distribution)
* **Custom properties** (arbitrary key-value data per entry)
* **Variations** (transform randomization)
* **Tags**
* Type-specific metadata (descriptors, materials, sockets, grammar rules)

#### Subcollections

Entries can reference other collections instead of assets, creating hierarchy:

```
Main Collection
├─ Entry: Subcollection "Tall Objects" (weight: 30)
│   ├─ Entry: LampPost (weight: 50)
│   └─ Entry: Tree (weight: 50)
├─ Entry: Subcollection "Short Objects" (weight: 70)
│   ├─ Entry: Trash (weight: 40)
│   ├─ Entry: Crate (weight: 40)
│   └─ Entry: Barrel (weight: 20)
```

{% hint style="warning" %}
Avoid circular subcollection references. A collection cannot reference itself, directly or indirectly.
{% endhint %}

#### Custom Properties

The recent addition of **per-entry custom properties** covers the remaining edge cases. Define a property schema at the collection level, override values per entry, and load them onto points with **Staging : Load Properties**. This turns collections into rich data sources — not just asset pickers.

***

### The Staging Workflow

#### Distribute

**Staging : Distribute** assigns collection entries to points:

1. For each input point, select an entry using distribution settings
2. Write entry information to point attributes
3. Output staged points ready for handling

Two output modes:

* **Collection Map** (recommended): Stores references for use with PCGEx spawning. Supports chaining, merging, and deferred spawning.
* **Point Attributes**: Writes asset paths directly for use with vanilla PCG spawners.

#### Spawning by Type

After staging, each asset type uses the appropriate spawner. PCGEx is built to interface with vanilla PCG spawning nodes — it prepares the data, vanilla nodes do the spawning:

**Meshes** → Vanilla **Spawn Static Mesh** with the [staging-data-mesh-selector.md](../../node-library/staging/utilities/staging-data-mesh-selector.md "mention") (collection map) or Mesh Selector by Attribute (attribute mode) **Actors** → Vanilla **Spawn Actor** node **PCG Data Assets** → PCGEx's [staging-load-pcgdata.md](../../node-library/staging/staging-load-pcgdata.md "mention") node (_the one exception — no vanilla equivalent exists_)

Collection map mode preserves material variations, descriptors, and per-entry properties that attribute output loses.

{% hint style="info" %}
The collection system is extensible. Production teams can create custom collection types in C++ and build their own staging consumers. The existing staging nodes serve as good examples of how to read and process collection data.
{% endhint %}

### Distribution

Distribution controls how entries are selected:

* **Index Mode**: Deterministic, by position in collection
* **Random Mode**: Equal probability, ignores weights
* **Weighted Random Mode**: Probability proportional to weight

#### Categories

Entries can belong to categories. Points specify which category to draw from (constant or attribute-based), and distribution applies only within that category. Points with `Type = "decoration"` select only from decoration-category entries.

### Fitting

Staging can adjust point transforms to match asset bounds:

* [scale-to-fit-details.md](../../node-library/common-settings/transform-details/scale-to-fit-details.md "mention"): Scale points so spawned assets fit within specified bounds
* [justification-details.md](../../node-library/common-settings/transform-details/justification-details.md "mention"): Align the asset's pivot within bounds (center, bottom, corner, etc.)

Justification controls where the asset sits after scaling — it's the difference between an asset centered in its slot versus sitting on the ground plane. Less intuitive than scale-to-fit, but essential for correct placement.

[staging-fitting.md](../../node-library/staging/staging-fitting.md "mention") is a standalone node that applies fitting as a separate pass. It works with both collection map data and vanilla mesh path attributes, bringing scale-to-fit and justification to workflows that don't use the full staging pipeline.

### Material Variations

Mesh entries support material slot overrides with weighted variants. Each slot can have multiple materials with independent weights. Selection uses the same seed system as entry distribution — visual variety without duplicating mesh assets.

### Sockets

Entries can define **sockets**: named attachment points extracted from meshes or added manually. [staging-load-sockets.md](../../node-library/staging/staging-load-sockets.md "mention") creates points at socket positions from staged entries, enabling procedural modular construction.

> If you don't work with collections, [sample-sockets.md](../../node-library/staging/utilities/sample-sockets.md "mention") is still here for you

### Foundational Role

Asset staging underlies other PCGEx systems:

* [valency](../../node-library/valency/ "mention") uses collections for module assignment
* **Grammar** systems reference collection entries via [collection-to-module-infos.md](../../node-library/staging/utilities/collection-to-module-infos.md "mention")
* [staging-spline-mesh.md](../../node-library/paths/output/staging-spline-mesh.md "mention") uses mesh collections for spline components

Understanding staging is prerequisite for these advanced features.

### In This Section

* [collections.md](collections.md "mention") - Collection types and organization
* [distribution.md](distribution.md "mention") - Selection strategies and categories
* [fitting.md](fitting.md "mention") - Scale, justification, and transform adjustment

### Related

**Concepts:**

* [valency](../valency/ "mention") - Constraint solving using staged collections

**Node Library:**

* [staging](../../node-library/staging/ "mention") - Staging operation reference
* [collections](../../node-library/staging/collections/ "mention") - Collection data asset reference
