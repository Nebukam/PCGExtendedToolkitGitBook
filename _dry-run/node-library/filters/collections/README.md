---
icon: layer-group
---

# Collection Filters

Collection filters evaluate entire data collections rather than individual points. They're used to include or exclude whole datasets based on collection-level properties.

## When to Use Collection Filters

Use collection filters when you need to:
- Filter based on point count
- Test collection bounds (size, volume, aspect ratio)
- Check for specific tags or attributes on the data
- Pre-filter data before expensive per-point operations

## Available Collection Filters

| Filter | Purpose |
|--------|---------|
| [Entry Count](./entry-count.md) | Compare number of points in collection |
| [Data Bounds](./data-bounds.md) | Test collection bounds properties |
| [Tag Check](./tag-check.md) | Check if collection has a specific tag |
| [Tag Value](./tag-value.md) | Compare tag values (numeric or string) |
| [Attribute Check](./attribute-check.md) | Check if attribute exists |

## Collection vs Point Filters

| Aspect | Collection Filters | Point Filters |
|--------|-------------------|---------------|
| Evaluates | Entire dataset | Individual points |
| Result | Include/exclude whole collection | Include/exclude individual points |
| Performance | Very fast (one check per collection) | Scales with point count |
| Use case | Pre-filtering, validation | Detailed selection |
