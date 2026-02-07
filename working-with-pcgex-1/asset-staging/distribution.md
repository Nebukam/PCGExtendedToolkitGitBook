---
icon: dice
---

# Distribution

**Distribution is the selection strategy: how does a staging node decide which entry a point gets?** The system supports deterministic, random, and weighted selection — and categories let you partition the pool so different points draw from different buckets.

### Distribution Modes

#### Index Mode

Selects entries by position in the collection:

* **Ascending**: First entry (index 0), then second, etc.
* **Descending**: Last entry first, working backward
* **Weight Ascending/Descending**: Ordered by weight value

Index mode is deterministic: the same input produces the same output. Useful when point order or attributes should drive specific asset assignment.

#### Random Mode

Pure random selection using the seed system:

* All enabled entries have equal probability
* Entry weights are ignored
* Seed determines the random sequence

Use when you want variety without probability bias.

#### Weighted Random Mode

Random selection weighted by entry values:

* Higher weight = greater selection probability
* Weight 0 = disabled (never selected)
* Relative: weight 100 vs weight 50 = 2:1 ratio

Most common for natural-looking variety where some assets should appear more frequently.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Visual showing three entries with weights 50, 30, 20 as proportional pie chart</p></figcaption></figure>

### Seed System

Distribution uses PCG's seed system for reproducibility:

* Same seed + same inputs = same results
* Changing seed changes the distribution
* Each point gets a deterministic random value

This ensures consistent results across regeneration while allowing variation control.

### Categories

Categories partition collections into buckets. When using categories:

1. **Define categories** in collection entries (e.g., "tall", "short", "decoration")
2. **Enable category mode** in staging settings
3. **Specify category** as constant or from point attribute

Distribution then applies only within the matching category:

* Points requesting "tall" only see "tall"-category entries
* Weights are relative within each category
* Non-matching entries are invisible

#### Category Source

**Constant**: All points use the same category (staging node setting) **Attribute**: Each point's category comes from an attribute value

Attribute-based categories enable per-point control: points with `ZoneType = "residential"` get residential assets, points with `ZoneType = "commercial"` get commercial assets.

{% hint style="info" %}
Category matching is case-sensitive. "Tall" and "tall" are different categories.
{% endhint %}

#### Missing Categories

If a point requests a category that doesn't exist:

* No entry is selected
* Point may be skipped or receive default handling

Validate that categories exist in your collection before referencing them.

### Subcollection Distribution

When an entry points to a subcollection:

1. Parent collection selects the subcollection entry
2. Child collection distribution runs to select final asset
3. Each level uses its own weights and settings

This creates hierarchical probability:

```
Parent: Subcollection A (weight 70) → Child selects: Mesh1 (40), Mesh2 (60)
Parent: Subcollection B (weight 30) → Child selects: Mesh3 (100)

Overall probability:
- Mesh1: 70% × 40% = 28%
- Mesh2: 70% × 60% = 42%
- Mesh3: 30% × 100% = 30%
```

### Material Variant Distribution

Material overrides use a separate micro-cache system:

* Each material slot has weighted variants
* Selection is seeded per-point
* Independent of main entry distribution

If an entry has material variants, the same entry can produce different visual results based on which material variant is selected.

### Distribution Strategy Patterns

#### Even Mix

All weights equal (or use Random mode). Equal representation of all assets.

#### Dominant with Accent

One high-weight entry, others low. Mostly the dominant asset with occasional variation.

#### Graduated

Weights decrease progressively. Clear hierarchy of frequency.

#### Category Separation

Different assets per category. Spatial control through category attribute.

### Practical Considerations

#### Weight Tuning

Start with relative weights that express intent:

* 10:1 ratio = roughly 10x more common
* Fine-tune based on visual results
* Remember: weight 0 disables entry completely

#### Seed Sensitivity

Distribution is reproducible but sensitive:

* Small seed changes produce different distributions
* Same seed + same data = same results
* Use seed management for controlled variation

#### Performance

Distribution computation is fast:

* Weight calculations are precomputed in collection
* Runtime lookup is index-based
* Categories add minimal overhead

### Related

* Asset Staging Overview - Staging system introduction
* Collections - Collection structure and entries
* Fitting - Transform adjustment after distribution
