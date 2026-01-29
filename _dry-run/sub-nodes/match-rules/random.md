---
description: 'In editor :: PCGEx | Match : Random'
---

# Random

**Randomly passes or fails match tests based on a threshold.**

This rule introduces controlled randomness into matching — useful for creating variation or probabilistic assignments.

---

## How It Works

```
For each (Target, Candidate) pair:

    Generate random value [0-1]
           │
           ▼
    ┌──────────────┐
    │ random < 0.5 │──► Pass (match succeeds)
    │ random ≥ 0.5 │──► Fail (match fails)
    └──────────────┘
```

The rule generates a deterministic random number for each target-candidate combination. If the random value is below the threshold, the match passes.

---

## Settings

<details>
<summary><strong>Random Seed</strong> <code>int32</code></summary>

Seed for random number generation.

Using the same seed produces identical results across runs.

Default: `42`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the pass threshold.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed threshold value |
| **Attribute** | Read threshold from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the threshold from.

{% hint style="info" %}
Value should be in the 0-1 range.
{% endhint %}

*Visible when Threshold Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

Probability threshold for passing the match.

- `0.0` = never pass
- `0.5` = 50% chance to pass
- `1.0` = always pass

Range: 0.0–1.0

*Visible when Threshold Input = Constant*

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Threshold</strong> <code>bool</code></summary>

Invert the comparison (pass becomes fail and vice versa).

When enabled:
- Values **above** threshold pass
- Values **below** threshold fail

Default: `false`

⚡ PCG Overridable

</details>

---

## Combining with Other Rules

Random matching is most useful when combined with other rules:

```
Rules: [Attributes, Random]
Match Mode: All

Result: Only matches that satisfy the attribute rule
        AND win the random roll will pass.
```

This creates subset selection from valid candidates.

---

## Example Use Cases

### Randomized Variation
Add random variety to otherwise deterministic matching:
- Attribute rule filters to "valid" candidates
- Random rule with 0.3 threshold keeps ~30% of matches
- Creates sparse, varied results

### Per-Point Probability
Use attribute-driven threshold for varying probability:
- Points have `SpawnChance` attribute (0.1 to 0.9)
- Random rule uses this attribute as threshold
- Each point has individual probability

### Biome Distribution
Control density of different biome elements:
- Forest points get 0.8 threshold (dense)
- Desert points get 0.2 threshold (sparse)
- Same candidates, different distribution

---

{% hint style="warning" %}
**Determinism**: Results are deterministic for the same seed. Change the seed to get different random patterns. The randomness is per target-candidate pair, so results are consistent for the same input data.
{% endhint %}

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchRandom.h)
