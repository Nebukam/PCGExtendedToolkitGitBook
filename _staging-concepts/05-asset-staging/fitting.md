# Fitting

**Assets come in all shapes and sizes. Fitting makes them play nicely together.** When you're placing assets from a collection, some are tall, some are wide, and their pivots are rarely where you want them. Fitting normalizes these variations so diverse assets work cohesively — and lets you prune unwanted assets before spawning any mesh, all from a single node.

<!-- IMAGE: Before/after showing various-sized assets fitted to uniform slots -->

## Scale to Fit

Scale adjustment makes assets fit within target bounds:

### Fit Modes

**Uniform**: Scale all axes equally to fit
- Preserves asset proportions
- Fits within bounds without distortion
- May leave empty space in some dimensions

**Non-Uniform**: Scale each axis independently
- Stretches to fill bounds exactly
- May distort asset proportions
- Fills all available space

**Axis-Specific**: Fit to specific axis (X, Y, or Z)
- Scales uniformly based on one axis
- Other axes scale proportionally
- Useful for height-based or width-based fitting

### Fit Reference

Which dimension of the target bounds to use:
- **Minimum**: Fit to smallest dimension
- **Maximum**: Fit to largest dimension
- **Average**: Fit to average of dimensions
- **X/Y/Z**: Fit to specific axis

## Justification

Justification is the part that trips people up. Scale-to-fit is intuitive — make it fit. Justification answers the follow-up question: *where* within the available space does the asset sit?

### Axis Alignment

For each axis (X, Y, Z):
- **Min**: Align to minimum edge (left/front/bottom)
- **Center**: Center within bounds
- **Max**: Align to maximum edge (right/back/top)
- **Pivot**: Use asset's existing pivot

### Common Patterns

**Bottom-center**: X=Center, Y=Center, Z=Min
- Asset sits on ground plane
- Centered horizontally

**Corner**: X=Min, Y=Min, Z=Min
- Asset aligned to corner
- Predictable placement origin

**Centered**: All axes = Center
- Asset floats in middle of bounds
- Good for suspended objects

<!-- IMAGE: Same asset shown with different justification settings -->

## Variations

Beyond fitting, staging supports transform variations:

### Position Offset
Random offset from base position:
- Per-axis min/max ranges
- Applied after fitting
- Adds organic variation

### Rotation Variation
Random rotation adjustments:
- Per-axis rotation ranges
- Common: random yaw for ground objects

### Scale Variation
Random scale multiplier:
- Uniform or per-axis
- Applied after fit scaling
- Adds size variety

Variations are optional per-entry. Not all entries need variation.

## Standalone Fitting

**Staging : Fitting** applies fitting as a separate pass, independent of the distribution step. This is useful in two scenarios:

**With collection map data**: Re-apply or adjust fitting after other processing. The node reads cached bounds from the collection map — no asset loading needed.

**With vanilla mesh path attributes**: Point your mesh paths at the node and it loads the mesh bounds to compute scale-to-fit and justification. This brings fitting to workflows that don't use the full staging pipeline — you get scale-to-fit and justification on vanilla spawner setups.

{% hint style="info" %}
Variations (random offset, rotation, scale) are only available in collection map mode, since per-entry variation limits are stored in collection entries.
{% endhint %}

## Fitting Across PCGEx

Fitting settings appear in other PCGEx operations beyond staging:
- **Spawn nodes** use fitting for placement
- **Path operations** may fit elements along paths
- **Grid operations** fit to cell bounds

The same `FPCGExScaleToFitDetails` and `FPCGExJustificationDetails` structs are reused, so fitting behavior is consistent across nodes.

## Practical Considerations

### Asset Bounds Accuracy

Fitting uses mesh bounding boxes:
- Bounds are automatically extracted from meshes
- Include all geometry (including handles, decorations)
- Consider trimming mesh if bounds are misleading

### Scale Preservation

If preserving original scale is important:
- Disable scale-to-fit
- Use only justification
- Apply variation carefully

### Combined Effects

Order of operations:
1. Base transform from point
2. Scale-to-fit applied
3. Justification offset applied
4. Variation offsets applied

Each step builds on the previous result.

## Fitting Settings Structure

Fitting uses two main configuration structs:

**Scale to Fit Details:**
- Enable/disable
- Fit mode (uniform, non-uniform, axis)
- Reference dimension

**Justification Details:**
- X/Y/Z alignment
- Custom offset values

These appear in node settings wherever fitting is supported.

## Related

- [Asset Staging Overview](README.md) - Staging system introduction
- [Collections](collections.md) - Collection structure
- [Distribution](distribution.md) - Entry selection
