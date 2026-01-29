---
icon: shuffle
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
---

# Random Ratio

Randomly selects a specified ratio or count of points.

## How It Works

1. Calculate target count based on ratio and total points
2. Randomly select exactly that many points using the seed
3. Return result: pass for selected points, fail for others

## Settings

### Random Settings

<details>
<summary><strong>Base Seed</strong> <code>FPCGExInputShorthandSelectorInteger32</code></summary>

Random seed for reproducible results. Can come from attribute (e.g., `@Data.Seed`) or constant.

Default: Uses `@Data.Seed` attribute or `42`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Units</strong> <code>EPCGExMeanMeasure</code></summary>

How the amount is interpreted.

| Option | Description |
|--------|-------------|
| Relative | 0-1 percentage of items |
| Discrete | Fixed count of items |

Default: `Relative`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount (Relative)</strong> <code>FPCGExInputShorthandSelectorDouble01</code></summary>

Percentage of items to pick (0 = none, 1 = all).

Default: Uses `@Data.Amount` attribute or `0.5`

*Visible when Units = Relative*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount (Fixed)</strong> <code>FPCGExInputShorthandSelectorInteger32Abs</code></summary>

Exact number of items to pick.

Default: Uses `@Data.Amount` attribute or `42`

*Visible when Units = Discrete*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Clamp Min</strong> <code>int32</code></summary>

Minimum number of items to pick regardless of relative amount.

Default: `1` (when enabled)

*Enabled via toggle*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Clamp Max</strong> <code>int32</code></summary>

Maximum number of items to pick regardless of relative amount.

Default: `500` (when enabled)

*Enabled via toggle*

⚡ PCG Overridable

</details>

### Behavior

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Flip the selection—selected points fail, unselected points pass.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Select 25% of points**:
- Units: `Relative`
- Amount (Relative): `0.25`

**Select exactly 100 points**:
- Units: `Discrete`
- Amount (Fixed): `100`

**Keep 80% of points** (remove 20%):
- Units: `Relative`
- Amount (Relative): `0.2`
- Invert Result: Enabled

**Reproducible random selection**:
- Base Seed: Set specific constant value
- Same seed + same data = same selection

## Related

- [Random](./random.md) - Per-point probability (may not hit exact ratio)
- [Picker](./picker.md) - Index-based selection

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExRandomRatioFilter.cpp)
