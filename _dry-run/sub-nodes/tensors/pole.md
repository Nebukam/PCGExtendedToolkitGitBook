---
description: 'In editor :: PCGEx | Tensor : Pole'
---

# Pole

**A tensor that pulls toward or pushes away from point positions.**

Each input point acts as a pole — an attractor or repulsor that influences nearby samples to move toward or away from it.

---

## How It Works

```
Attraction (positive potency)

         ↖   ↑   ↗
          ↖  ↑  ↗
       ←  ←  ●  →  →
          ↙  ↓  ↘
         ↙   ↓   ↘

All vectors point TOWARD the pole


Repulsion (negative potency)

         ↗   ↑   ↖
          ↗  ↑  ↖
       →  →  ●  ←  ←
          ↘  ↓  ↙
         ↘   ↓   ↙

All vectors point AWAY from the pole
```

---

## Settings

Pole uses the standard shared tensor settings:

<details>
<summary><strong>Potency</strong> <code>double</code></summary>

Strength and direction of the pole effect.

- **Positive** = attraction (pull toward)
- **Negative** = repulsion (push away)

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight</strong> <code>double</code></summary>

Per-effector weight for blending with other tensors.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Potency Falloff Curve</strong></summary>

How potency diminishes with distance from the pole.

</details>

<details>
<summary><strong>Weight Falloff Curve</strong></summary>

How weight diminishes with distance from the pole.

</details>

---

## Example Use Cases

### Obstacle Avoidance
Place poles with negative potency on obstacles:
- Paths are pushed away from obstacles
- Creates natural-looking avoidance

### Gravity Wells
Create attraction points:
- Positive potency poles
- Paths curve toward the wells

### Magnetic Fields
Combine attraction and repulsion:
- Positive poles attract
- Negative poles repel
- Creates complex field patterns

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorPole.h)
