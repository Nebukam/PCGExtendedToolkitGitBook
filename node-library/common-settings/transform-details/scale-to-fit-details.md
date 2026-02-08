---
icon: sliders-simple
---

# Scale To Fit Details

Configures how objects are scaled to fit within target bounds or spaces.

### Overview

This settings block controls scaling behavior when fitting meshes or other objects into defined spaces. You can apply uniform scaling that preserves proportions, or individual per-axis scaling for precise control. Different fit modes determine whether the object fills the space completely, fits within it, or uses other sizing strategies.

### How It Works

1. **Choose Mode**: Select uniform scaling or per-axis control
2. **Set Fit Strategy**: Determine how the object relates to the target bounds
3. **Apply Scale**: Object is scaled according to the selected rules

### Behavior

```
Target Bounds: 100 x 50 x 200
Object Bounds: 50 x 50 x 50

Scale To Fit Options:
┌─────────────────────────────────────────────┐
│ Fill: Scales to completely fill bounds      │
│       (may exceed on some axes)             │
│                                             │
│ Min:  Scales to fit entirely within bounds  │
│       (uses smallest required scale)        │
│                                             │
│ Max:  Scales based on largest axis ratio    │
│       (may exceed bounds on smaller axes)   │
│                                             │
│ Avg:  Scales using average of axis ratios   │
└─────────────────────────────────────────────┘
```

### Settings

<details>

<summary><strong>Scale To Fit Mode</strong> <code>EPCGExFitMode</code></summary>

Determines whether scaling is applied uniformly or per-axis.

| Option         | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| **None**       | No automatic scaling applied                                  |
| **Uniform**    | Same scale factor applied to all axes, preserving proportions |
| **Individual** | Each axis can use a different scaling strategy                |

Default: `Uniform`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale To Fit</strong> <code>EPCGExScaleToFit</code></summary>

The scaling strategy when using Uniform mode.

| Option   | Description                                       |
| -------- | ------------------------------------------------- |
| **None** | No scaling                                        |
| **Fill** | Scale to completely fill the target bounds        |
| **Min**  | Scale to fit entirely within bounds (no overflow) |
| **Max**  | Scale based on the largest axis ratio             |
| **Avg**  | Scale using the average of all axis ratios        |

Default: `Min`

📋 _Visible when Scale To Fit Mode = Uniform_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale To Fit X</strong> <code>EPCGExScaleToFit</code></summary>

The scaling strategy for the X axis when using Individual mode.

Default: `None`

📋 _Visible when Scale To Fit Mode = Individual_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale To Fit Y</strong> <code>EPCGExScaleToFit</code></summary>

The scaling strategy for the Y axis when using Individual mode.

Default: `None`

📋 _Visible when Scale To Fit Mode = Individual_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale To Fit Z</strong> <code>EPCGExScaleToFit</code></summary>

The scaling strategy for the Z axis when using Individual mode.

Default: `None`

📋 _Visible when Scale To Fit Mode = Individual_

⚡ PCG Overridable

</details>

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Fitting/PCGExFitting.h)


